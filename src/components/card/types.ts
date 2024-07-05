import { DetailedHTMLProps, HTMLAttributes } from "react"

type CardProps = {
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

type CardTitle = {
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>

export type { CardProps, CardTitle }