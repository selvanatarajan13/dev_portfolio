'use client';

import { Card, CardProps } from "@mui/material";
import { ReactNode } from "react";

type CardVariant = | 'defaultCommon' | 'outlined' | 'gradient' | 'accentTop' |'project';

type BaseCardProps = CardProps & {
    children: ReactNode;
    variant?: CardVariant;
    hoverable?: boolean;
    animated?: boolean;
    accentColor?: string;
};

const getVariantStyles = (
    variant?: CardVariant,
    accentColor?: string
) => {
    switch (variant) {
        case 'outlined':
            return {
                backgroundColor: '#fff',
                border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: '24px',
                cursor: 'default',
            };

        case 'gradient':
            return {
                background:
                    'linear-gradient(135deg, #4338CA 0%, #6366F1 100%)',
                color: '#fff',
            };

        case 'accentTop':
            return {
                borderTop: `4px solid ${accentColor ?? '#4F46E5'}`,
                backgroundColor: '#fff',
            };

        case 'project':
            return {
                overflow: 'hidden',
                backgroundColor: '#fff',
            };

        default:
            return {
                backgroundColor: '',
            };
    }
};

export const BaseCard = ({ children, variant, hoverable = true, animated = true, accentColor, sx, ...props }: BaseCardProps) => {
    return (
        <Card
            elevation={0}
            {...props}
            sx={{
                position: 'relative',

                overflow: 'hidden',

                transition: animated
                    ? 'all 0.3s ease'
                    : 'none',

                ...(hoverable && {
                    '&:hover': {
                        transform: 'translateY(px)',
                        boxShadow:
                            '0 20px 40px rgba(0,0,0,0.08)',
                    },
                }),

                ...getVariantStyles(
                    variant,
                    accentColor
                ),

                ...sx,
            }}
        >
            {children}
        </Card>
    )
}