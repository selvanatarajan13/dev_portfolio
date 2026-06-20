interface TwoColumnLayoutProps {
  children: React.ReactNode;
}

export default function TwoColumnLayout({
  children,
}: TwoColumnLayoutProps) {
  return (
    <div className="grid lg:grid-cols-[360px_1fr] gap-16 xl:gap-24">
      {children}
    </div>
  );
};