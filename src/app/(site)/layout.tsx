import KammelHeader from "@/components/kammel/KammelHeader";
import KammelFooter from "@/components/kammel/KammelFooter";
import { getRepoStars } from "@/lib/github";

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const stars = await getRepoStars();
  return (
    <>
      <KammelHeader stars={stars} />
      {children}
      <KammelFooter />
    </>
  );
}
