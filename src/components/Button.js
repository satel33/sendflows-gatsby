import React from "react"

export const Button = ({
  type = "primary",
  text = "",
  clsName = "",
  children,
  ...props
}) => {
  return (
    <button
      className={`font-heading font-medium text-base leading-[22px] border-[1px] border-white px-6 py-[13px] sm:text-[18px] sm:leading-6 sm:px-8 sm:py-4 ${
        type === "primary"
          ? "bg-white text-black hover:shadow-button hover:text-blue-gray"
          : "bg-transparent text-white hover:drop-shadow-button"
      } ${clsName}`}
      {...props}
    >
      {children}
    </button>
  )
}
