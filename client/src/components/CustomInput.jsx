import React from 'react'

export default function CustomInput({type,setState,isrequired,placeholder}) {
  return (
    <div className="relative mt-1">
    <input
      type={type}
      className="w-full p-4 md:py-6 placeholder:md:text-xl rounded-lg bg-white bg-opacity-40 placeholder:text-white"
      placeholder={placeholder}
      required={isrequired}
      onChange={(e) => {
        setState(e.target.value);
      }}
    />
  </div>
  )
}
