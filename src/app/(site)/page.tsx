import KalaHero from "@/components/kala/KalaHero";
import KalaStair from "@/components/kala/KalaStair";
import KalaBento from "@/components/kala/KalaBento";
import KalaDownload from "@/components/kala/KalaDownload";
import KalaFaq from "@/components/kala/KalaFaq";

export default function Home() {
  return (
    <main>
      <KalaHero />
      <KalaStair />
      <KalaBento />
      <KalaDownload />
      <KalaFaq />
    </main>
  );
}
