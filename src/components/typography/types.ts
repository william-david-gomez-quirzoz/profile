import { variantTypograpy } from "./constants"

type TypographyProps = {
    variant?: keyof typeof variantTypograpy
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

export type { TypographyProps }