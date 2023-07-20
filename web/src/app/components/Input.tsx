import { InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
type InputProps = InputHTMLAttributes<HTMLInputElement>;

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ name = "", type = "text", className = "", ...props }, ref) => {
        return (
            <>
                <input
                    type={type}
                    ref={ref}
                    className={twMerge(
                        `w-32 bg-purple-100 outline-none lg:w-[632px] lg:h-[36px] ${className}`
                    )}
                    name={name}
                    {...props}
                />
            </>
        );
    }
);
