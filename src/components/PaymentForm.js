import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({checkoutToken, nextStep, backStep, shippingData, onCaptureCheckout}) => {

    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault();
    
        if (!stripe || !elements) return;
    
        const cardElement = elements.getElement(CardElement);
    
        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });
    
        if (error) {
          console.log('[error]', error);
        } else {
          const orderData = {
            line_items: checkoutToken.live.line_items,
            customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
            shipping: { name: 'International', street: shippingData.address1, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
            fulfillment: { shipping_method: shippingData.shippingOption },
            payment: {
              gateway: 'stripe',
              stripe: {
                payment_method_id: paymentMethod.id,
              },
            },
          };
    
          onCaptureCheckout(checkoutToken.id, orderData);
    
          nextStep();
        }
      };

    return (
        <div className="flex flex-col items-center">
            <div className="container my-10 w-full lg:w-1/2">
                {checkoutToken.live.line_items.map(pr => (
                    <h1 key={pr.id}>{pr.quantity} x {pr.name} - {pr.line_total.formatted_with_symbol}</h1>
                ))}
                <div className="my-4">
                    <h1>Total: {checkoutToken.live.subtotal.formatted_with_symbol}</h1>
                </div>
            </div>
            <hr/>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({elements, stripe}) => (
                        <form onSubmit={e => handleSubmit(e, elements, stripe)} className="w-full lg:w-1/2">
                            <CardElement className="font-code"/>
                            <br/><br/>
                            <div className="flex flex-col items-center">
                            <button className="bg-green-600 my-4 text-white font-code text-xl rounded-full py-3 px-10  w-full mt-6 transition-colors hover:bg-opacity-80" type="submit" disabled={!stripe}>PAY {checkoutToken.live.subtotal.formatted_with_symbol}</button>
                            <button className="bg-black my-4 text-white font-code text-xl rounded-full py-3 px-10 w-full mt-6 transition-colors hover:bg-opacity-80" onClick={() => {backStep(); window.scrollTo({top: 0, behavior: 'smooth'})}}>← PREVIOUS STEP</button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </div>
    )
}

export default PaymentForm
