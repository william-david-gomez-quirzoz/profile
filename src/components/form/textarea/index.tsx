import { roboto } from "src/styles/fonts";
import { InputProps } from "./types";
import { forwardRef, Ref } from "react";

const TextArea = forwardRef(({ label, ...rest }: InputProps, ref: Ref<HTMLTextAreaElement>) => {
  return (
    <fieldset>
      <legend>{label}</legend>

      <textarea ref={ref} {...rest} className={`textarea ${roboto.className}`} />
    </fieldset>
  );
});

export { TextArea };
