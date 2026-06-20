'use client';

import { Chip } from "@mui/material";

type AppBadgeProps = {
    label: string;
};

export const Badge = ({ label }: AppBadgeProps) => {
    return (
        <Chip 
            label={label}
            size="small"
            sx={{
                height: 28,
                borderRadius: 999,
                backgroundColor: '#EEF2FF',
                color: '#4F46E5',
                fontWeight: 600,
                fontSize: '12px',
            }}
        />
    );
};