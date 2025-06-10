import clsx from "clsx"
import type { ButtonHTMLAttributes } from "react";
import "./Button.scss"

type ButtonVariants = "add" | "remove" | "submit";

type ButtonProbs = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
};

export const Button = ({variant, ...props}:ButtonProbs) => {
  return (
    <button
    {...props}
    className={clsx(
      "btn",
      {
        "add_btn": variant === "add",
        "remove_btn": variant === "remove",
        "submit_btn": variant === "submit"
      },
    )}
  >
  </button>
  )
}
