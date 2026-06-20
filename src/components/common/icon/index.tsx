'use client';

import { cn } from "@/lib/utils";
import { Box } from "@mui/material";
import { ReactNode } from "react";

type AppIconProps = {
    children: ReactNode;
    size?: number;
    backgroundColor?: string;
};

export const Icon1 = ({
    children,
    size = 48,
    backgroundColor,
}: AppIconProps) => {
    return (
        <Box
            className={cn("flex items-center rounded-2xl mb-6", backgroundColor)}
            sx={{
                width: size,
                height: size,
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                borderRadius: '16px',
            }}
        >
            {children}
        </Box>
    );
};