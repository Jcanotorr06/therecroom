import {useForm, FormProvider} from 'react-hook-form'
import InputField from './InputField'

const AddressForm = ({step1}) => {
    const methods = useForm()

    return (
        <div>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(data => step1(data))} className="my-10 text-center"> 
                    <div className="flex grid container gap-3 grid-cols-2 text-left">
                        <InputField label="First Name" required name="First Name" type="text"/>
                        <InputField label="Last Name" required name="Last Name" type="text"/>
                        <InputField label="Address 1" required name="Address 1" type="text"/>
                        <InputField label="Email" required name="Email" type="email"/>
                        <InputField label="City" required name="City" type="text"/>
                        <InputField label="Zip Code" required name="Zip Code" type="text"/>
                    </div>
                    <input type="submit" value="Next Step →" className="bg-black text-center text-white font-code text-xl hover:cursor-pointer rounded-full py-3 px-10 w-3/4 xl:w-1/4 mt-6 transition-colors hover:bg-opacity-80"/>
                </form>
            </FormProvider>
        </div>
    )
}

export default AddressForm
