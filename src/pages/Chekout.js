import {useState, useEffect} from 'react'
import {AddressForm, PaymentForm, Confirmation} from '../components'
import commerce from '../lib/commerce'
import {useHistory} from 'react-router-dom'

const steps = ['Shipping Address', 'Payment Details', 'Confirm Purchase']

const Chekout = ({ cart, onCaptureCheckout, order, error }) => {
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [activeStep, setActiveStep] = useState(0)
    const [shippingData, setShippingData] = useState({})
    const history = useHistory();

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const step1 = (data) =>{
        setShippingData(data)

        nextStep()
    }

    useEffect(() => {
        if (cart.id) {
          const generateToken = async () => {
            try {
              const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
    
              setCheckoutToken(token);
            } catch {
              if (activeStep !== steps.length) history.push('/');
            }
          };
    
          generateToken();
        }
      }, [cart]);

    return (
        <div className="flex flex-col w-screen">
            <div className="mt-28 lg:mt-40 z-10">
                <h1 className="font-code text-gray-800 select-none text-3xl text-center mt-10 lg:mt-20 lg:text-5xl">Checkout</h1>
                <div className="w-full flex justify-center items-center my-10">
                    <div className="flex flex-col container items-center ">
                        <div className="flex justify-around w-full px-8">
                            {steps.map(step => (
                                <div className={"flex items-center " + (steps.indexOf(step) === 1 ? "justify-center flex-grow" : (steps.indexOf(step) === 0 ? "justify-start" : "justify-end"))}>
                                    {
                                        steps.indexOf(step) === 1 ? (<hr className={"border-2 w-full transition duration-500 " + (activeStep >= 1 ? "border-black" : "border-white")} />) : ''
                                    }
                                    <div className={"p-4 px-6 text-center rounded-full transition duration-500 " + (activeStep >= steps.indexOf(step) ? "bg-black text-white" : "bg-white border border-black")}>
                                        <h1>
                                            {steps.indexOf(step) + 1}
                                        </h1>    
                                    </div>
                                    {
                                        steps.indexOf(step) === 1 ? (<hr className={"border-2 w-full transition duration-500 " + (activeStep >= 2 ? "border-black" : "border-white")} />) : ''
                                    }
                                </div>
                            ))}
                        </div>
                        <div className="w-full my-10 flex justify-center px-8">
                            <div className="container">
                                <h1 className="font-code text-2xl">{steps[activeStep]}</h1>
                                {activeStep === 0? <AddressForm step1={step1}/> : (activeStep + 1 === steps.length ? <Confirmation order={order} error={error}/> : <PaymentForm checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chekout
