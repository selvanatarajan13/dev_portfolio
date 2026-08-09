// import Container from '@mui/material/Container';
// import { AppContainerProps } from '@/components/layouts/AppContainer/AppContainer.types';
// import { cn } from '@/lib/utils';

// export default function AppContainer ({ children, className }: AppContainerProps) {
//     return (
//         // <Container
//         //     maxWidth="xl"
//         //     sx={{ px: {xs: 2, sm: 3, md: 4} }}
//         // >
//         //     {children}
//         // </Container>
//         <div className={cn('w-full max-w-[1280px] mx-auto px-6 lg:px-10', className)}>
//             {children}
//         </div>
//     );
// };


import { cn } from "@/lib/utils";
import { AppContainerProps } from "./AppContainer.types";

export default function AppContainer({
  children,
  className,
}: AppContainerProps) {
  return (
    <div
      className={cn(
        "w-full max-w-7xl mx-auto px-auto py-15 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}