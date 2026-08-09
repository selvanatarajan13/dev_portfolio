import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import AppContainer from '@/components/layouts/AppContainer';

type AppSectionProps = {
    id: string;
    bg?: string;
    children: ReactNode;
    className?: string;
}
export default function AppSection({ id, bg, children, className }: AppSectionProps) {
    return (
        <section id={id} className={cn("bg-white", bg && `${bg}`, className)}>
            <AppContainer>
                {children}
            </AppContainer>
        </section>
    );
};