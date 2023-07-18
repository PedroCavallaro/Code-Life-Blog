import { InputHTMLAttributes, forwardRef } from "react"


type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(({name="", type="text", ...props}, ref)=>{
    return(
        <>
            <input 
            type={type} 
            ref={ref}
            className="w-32 bg-purple-100 outline-none lg:w-[632px] lg:h-[36px]"
            {...props}
            />
        </>
    )
})