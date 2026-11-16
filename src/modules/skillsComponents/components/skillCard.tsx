

import { Box, Divider, Typography } from '@mui/material';

import { BaseCard } from '@/components/common/card';
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
    animated = true,
    inView = true,
}: SkillCardProps) => {

    return (
        <BaseCard
            variant="outlined"
            className="group h-full border-[#EAEAEA] transition-all duration-300 hover:-translate-y-1 hover:border-[#DCD9FF] hover:shadow-[0_16px_36px_-20px_rgba(81,69,255,0.35)]"
            sx={{
                height: '100%',
                width: '100%',
                p: { xs: 3, sm: 3.5, lg: 4 },
                display: 'flex',
                flexDirection: 'column',


                opacity: inView ? 1 : 0,

                transform: inView ? undefined : 'translateY(16px)',

                transition: animated
                    ? `opacity 0.5s ${index ? index * 80 : 0}ms, transform 0.5s ${index ? index * 80 : 0}ms, box-shadow 0.3s, border-color 0.3s`
                    : 'none',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 16px 36px -20px rgba(81, 69, 255, 0.35)',
                    borderColor: '#DCD9FF',
                },
            }}
        >
            {/* Card Number */}
            {index !== undefined && (
                <Typography
                    sx={{
                        position: 'absolute',
                        top: 24,
                        right: 24,
                        fontSize: 13,
                        fontWeight: 600,
                        color: '#A1A1AA',
                        fontFamily: 'monospace',
                    }}
                >
                    {String(index + 1).padStart(2, '0')}
                </Typography>
            )}

            {/* Icon */}
            <Icon1 backgroundColor={iconBg} size={48}>
                <Icon
                    size={22}
                    className={iconColor}
                />
            </Icon1>

            {/* Title */}
            <Typography
                variant="h6"
                sx={{
                    mt: 2.5,
                    mb: 1,
                    pr: 3,
                    fontWeight: 600,
                    color: '#18181B',
                    fontSize: { xs: 20, sm: 21, lg: 22 },
                    lineHeight: 1.25,
                }}
            >
                {title}
            </Typography>

            {/* Description */}
            <Typography
                variant="body2"
                sx={{
                    mb: 2.5,
                    color: '#71717A',
                    fontSize: 14,
                    lineHeight: 1.6,
                    minHeight: { sm: 50 },
                }}
            >
                {desc}
            </Typography>

            {/* Skills */}
            <Divider sx={{ mb: 2.5, borderColor: '#EEEEF2' }} />

            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', columnGap: 2, rowGap: 1.5 }}>
                {skills.map((skill, skillIndex) => (
                    <Typography
                        key={skill}
                        component="span"
                        sx={{
                            minWidth: 0,
                            color: '#3F3F46',
                            fontSize: skillIndex < 2 ? { xs: 17, sm: 18, lg: 19 } : { xs: 15, lg: 16 },
                            fontWeight: 500,
                            lineHeight: 1.4,
                            overflowWrap: 'anywhere',
                        }}
                    >
                        {skill}
                    </Typography>
                ))}
            </Box>
        </BaseCard>
    );
};
