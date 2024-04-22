import BannerContent from "@/components/contents/BannerContent";
import Section_1 from "@/components/contents/Section_1";
import Section_2 from "@/components/contents/Section_2";
import Section_3 from "@/components/contents/Section_3";
import { GlobeContainer } from "@/components/items/Globe";
import { CardHoverEffectContainer } from "@/components/items/CardHoverEffectContainer";
import { NavbarMenu } from "@/components/items/navbar";
export default function Home() {
  return (
    <main className="flex flex-col">
      {/* <BannerContent /> */}
      <NavbarMenu />
      <Section_1 />
      <Section_2 />
      <Section_3 />
    </main>
  );
}
