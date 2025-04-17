type LabPageLayoutProps = {
  children: React.ReactNode;
  demo: React.ReactNode;
};

export default function LabPageLayout({ children, demo }: LabPageLayoutProps) {
  return (
    <>
      {children}
      {demo}
    </>
  );
}
