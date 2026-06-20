
import SectionTitle from "@/components/common/SectionTitle"
import AppSection from "@/components/layouts/AppSection"
import { Box, Grid } from "@mui/material"
import { FEATURES } from "./components/skillCardData"
import { SkillCard } from "./components/skillCard"

type Props = {
    inView?: boolean;
};

export const SkillsComponents = ({ inView = true }: Props) => {
    return (
        <AppSection id="skills" bg="bg-white">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                <Box sx={{ marginBottom: 12 }}>
                    <SectionTitle
                        label="What I Do"
                        title="Where I Create Value"
                        description="Three disciplines — each a focused area of real contribution."
                        textAlignCenter
                    />
                </Box>
                <Grid container spacing={3}>
                    {FEATURES.map((feature, index) => (
                        <Grid
                            key={feature.title}
                            size={{ xs: 12, md: 4 }}
                            sx={{
                                display: 'flex',
                                alignItems: 'stretch',
                            }}
                        >
                            <SkillCard
                                {...feature}
                                index={index}
                                inView={inView}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </AppSection>
    )
}