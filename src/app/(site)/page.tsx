import KammelHero from "@/components/kammel/KammelHero";
import KammelStair from "@/components/kammel/KammelStair";
import KammelBento from "@/components/kammel/KammelBento";
import KammelDownload from "@/components/kammel/KammelDownload";
import KammelFaq from "@/components/kammel/KammelFaq";

export default function Home() {
  return (
    <main>
      <KammelHero />
      <KammelStair />
      <KammelBento />
      <KammelDownload />
      <KammelFaq />
    </main>
  );
}
