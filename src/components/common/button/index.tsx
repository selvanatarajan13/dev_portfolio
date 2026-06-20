// 'use client';

// import { cn } from "@/lib/utils";
// import { Button as MuiButton, ButtonProps } from "@mui/material";

// type VariantType = 'primary' | 'secondary' | 'outline' | 'navbar';

// interface AppButtonProps extends ButtonProps {
//     label?: string;
//     variantType?: VariantType;
// };

// const styles: Record<VariantType, string> = {
//     primary:
//         'bg-[#4F46E5] text-white hover:bg-[#4338CA]',
//     secondary:
//         'bg-zinc-100 text-zinc-800 hover:bg-zinc-200',
//     outline:
//         'border border-zinc-300 text-zinc-700 hover:bg-zinc-50',
//     navbar:
//         'bg-[#4F46E5] text-white rounded-xl',
// };

// export const Button = ({ label, variantType = 'primary', className, ...props }: AppButtonProps) => {
//     return (
//         <MuiButton
//             {...props}
//             disableElevation
//             className={cn(
//                 'rounded-xl px-5 py-2.5 font-semibold normal-case shadow-none',
//                 styles[variantType],
//                 className
//             )}
//         >
//             {label}
//         </MuiButton>
//     );
// };

'use client';

import { Button as MuiButton, ButtonProps } from '@mui/material';
import { cn } from '@/lib/utils';

type VariantType = 'primary' | 'secondary' | 'outline' | 'navbar';

interface AppButtonProps extends ButtonProps {
    label?: string;
    variantType?: VariantType;
}

const buttonStyles = {
    primary: {
        backgroundColor: '#4F46E5',
        color: '#fff',
        borderRadius: '8px',
        '&:hover': {
            backgroundColor: '#4338CA',
        },
    },
    secondary: {
        backgroundColor: '#f4f4f5',
        color: '#27272a',
        borderRadius: '8px',
        '&:hover': {
            backgroundColor: '#e4e4e7',
        },
    },
    outline: {
        border: '1px solid #d4d4d8',
        color: '#3f3f46',
        backgroundColor: 'transparent',
        borderRadius: '8px',
        '&:hover': {
            backgroundColor: '#fafafa',
        },
    },
    navbar: {
        backgroundColor: '#4F46E5',
        color: '#fff',
        borderRadius: '20px', // rounded-xl
        '&:hover': {
            backgroundColor: '#4338CA',
        },
    },
} as const;

export const Button = ({
    label,
    variantType = 'primary',
    className,
    children,
    ...props
}: AppButtonProps) => {
    return (
        <MuiButton
            {...props}
            variant="contained"
            disableElevation
            sx={{
                textTransform: 'none',
                fontWeight: 600,
                boxShadow: 'none',
                ...buttonStyles[variantType],
            }}
            className={cn(
                'px-5 py-2.5',
                className
            )}
        >
            {children ?? label}
        </MuiButton>
    );
};