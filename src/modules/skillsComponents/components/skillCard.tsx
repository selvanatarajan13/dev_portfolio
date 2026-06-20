

import { Box, Typography } from '@mui/material';

import { BaseCard } from '@/components/common/card';
import { Tag } from '@/components/common/tag';
import { Icon1 } from '@/components/common/icon';

import { SkillCardProps } from './skillCard.types';

export const SkillCard = ({
    index,
    title,
    desc,
    icon: Icon,
    skills = [],
    iconBg,
    iconColor,
    border,
    glow,
    animated = true,
    inView = true,
}: SkillCardProps) => {

    console.log('iconBg: ', iconBg)

    return (
        <BaseCard
            variant="outlined"
            className={`${border} ${glow}`}
            sx={{
                height: '100%',
                width: '100%',
                p: 4,
                display: 'flex',
                flexDirection: 'column',


                opacity: inView ? 1 : 0,

                transform: inView
                    ? 'translateY(0)'
                    : 'translateY(1px)',

                transition: animated
                    ? `
                        opacity 0.6s ${index ? index * 100 : 0}ms,
                        transform 0.6s ${index ? index * 100 : 0}ms,
                        box-shadow 0.3s,
                        border-color 0.3s
                    `
                    : 'none',
            }}
        >
            {/* Card Number */}
            {index !== undefined && (
                <Typography
                    sx={{
                        position: 'absolute',
                        top: 24,
                        right: 24,
                        fontSize: 12,
                        fontWeight: 700,
                        color: '#D4D4D8',
                        fontFamily: 'monospace',
                    }}
                >
                    {String(index + 1).padStart(2, '0')}
                </Typography>
            )}

            {/* Icon */}
            <Icon1
                backgroundColor={iconBg}
            >
                <Icon
                    size={22}
                    className={iconColor}
                />
            </Icon1>

            {/* Title */}
            <Typography
                variant="h6"
                sx={{
                    mt: 3,
                    mb: 1.5,
                    fontWeight: 700,
                    color: '#09090B',
                }}
            >
                {title}
            </Typography>

            {/* Description */}
            <Typography
                variant="body2"
                sx={{
                    mb: 3,
                    color: '#71717A',
                    lineHeight: 1.8,
                }}
            >
                {desc}
            </Typography>

            {/* Skills */}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1,
                }}
            >
                {skills.map((skill) => (
                    <Tag
                        key={skill}
                        label={skill}
                    />
                ))}
            </Box>
        </BaseCard>
    );
};