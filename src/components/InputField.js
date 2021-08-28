import {useFormContext} from 'react-hook-form'

const InputField = ({name, required, label, type}) => {
    const methods = useFormContext()

    return (
        <div className="lg:col-span-1 col-span-2">
            <label htmlFor={name} className="text-xl font-code my-4">{label}</label>
            <input type={type}
                className="w-full p-4 font-body text-md border border-black lg:span-2"
                name={name}
                required={required}
                {...methods.register(name)}
            />
        </div>
    )
}

export default InputField
