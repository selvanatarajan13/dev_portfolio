import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import AppContainer from '@/components/layouts/AppContainer';

type AppSectionProps = {
    id: string;
    bg?: string;
    children: ReactNode;
}
export default function AppSection({ id, bg, children }: AppSectionProps) {
    return (
        <section id={id} className={cn("py-32 bg-white", bg && `${bg}`)}>
            <AppContainer>
                {children}
            </AppContainer>
        </section>
    );
};