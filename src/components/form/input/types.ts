import { DetailedHTMLProps, InputHTMLAttributes } from "react"

type InputProps = {
    label: string
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export type { InputProps }