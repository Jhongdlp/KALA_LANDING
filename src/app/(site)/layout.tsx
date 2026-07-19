import KalaHeader from "@/components/kala/KalaHeader";
import KalaFooter from "@/components/kala/KalaFooter";
import { getRepoStars } from "@/lib/github";

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const stars = await getRepoStars();
  return (
    <>
      <KalaHeader stars={stars} />
      {children}
      <KalaFooter />
    </>
  );
}
