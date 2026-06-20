'use client';

import { Chip } from "@mui/material";

type AppTagProps = {
    label: string;
};

export const Tag = ({ label }: AppTagProps) => {
    return (
        <Chip 
            label={label}
            variant="outlined"
            size="small"
            sx={{
                borderRadius: 3,
                fontWeight: 600,
                backgroundColor: '#FAFAFA',
                borderColor: '#E4E4E7',
                color: '#52525B',
            }}
        />
    );
};