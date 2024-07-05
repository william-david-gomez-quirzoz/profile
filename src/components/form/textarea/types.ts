import { DetailedHTMLProps, TextareaHTMLAttributes } from "react"

type InputProps = {
    label: string
} & DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

export type { InputProps }