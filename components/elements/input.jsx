import React from 'react'

export default function Input({
    type = "text",
    name = "",
    placeholder = "",
    onChange,
    leftIcon = "",
    rightIcon = "",
    inputClass = "",
    containerClass = "",
    ...otherProps
}) {
    return (
        <article className={`relative bg-white rounded-md px-2.5 py-2 flex items-center ${containerClass}`}>
            {
                leftIcon &&
                <div className='w-4 h-4'>{leftIcon}</div>
            }
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={`w-full text-base bg-transparent focus-within:outline-none mx-auto ${inputClass}`}
                onChange={onChange}
                {...otherProps}
            />
            {
                rightIcon &&
                <div>{rightIcon}</div>
            }
        </article>
    )
}
