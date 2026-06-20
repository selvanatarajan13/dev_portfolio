import { Typography as MuiTypography, TypographyProps } from "@mui/material";

export default function Typography({ children, ...props }: TypographyProps) {
    return (
        <MuiTypography
            color="text.primary"
            {...props}
        >
            {children}
        </MuiTypography>
    )   
}