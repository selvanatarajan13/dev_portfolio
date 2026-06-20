import Container from '@mui/material/Container';
import { AppContainerProps } from '@/components/layouts/AppContainer/AppContainer.types';

export default function AppContainer ({ children }: AppContainerProps) {
    return (
        // <Container
        //     maxWidth="xl"
        //     sx={{ px: {xs: 2, sm: 3, md: 4} }}
        // >
        //     {children}
        // </Container>
        <div className='max-w-[1280px] mx-auto px-6 lg:px-10'>
            {children}
        </div>
    );
};