import { forwardRef, Ref } from "react";
import { InputProps } from "./types";

const Input = forwardRef(({ label, ...rest }: InputProps, ref:Ref<HTMLInputElement>) => {
    return (
      <fieldset>
        <legend>{label}</legend>
  
        <input ref={ref} {...rest} className="input" type={rest?.type ?? "text"} />
      </fieldset>
    );
  });

export { Input };
