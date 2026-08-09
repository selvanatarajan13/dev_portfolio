import { ContactComponent } from "@/modules/ContactComponents/ContactComponent";
import { ExperienceComponent } from "@/modules/ExperienceComponents";
import Hero from "@/modules/heroComponents";
import { JourneyComponent } from "@/modules/journeyComponents";
import { SkillsComponents } from "@/modules/skillsComponents";

export default function Home() {
  return (
    <>
      <Hero />
      <JourneyComponent />
      <SkillsComponents />
      <ExperienceComponent />
      <ContactComponent />
    </>
  );
}
