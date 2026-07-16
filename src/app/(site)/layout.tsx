import KalaHeader from "@/components/kala/KalaHeader";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <KalaHeader />
      {children}
    </>
  );
}
