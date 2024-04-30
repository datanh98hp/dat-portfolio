import { ImagesSliderContainer } from "@/components/items/ImageSlide";
import { LayoutGridContainer } from "@/components/items/LayoutGridContainer";
import { NavbarMenu } from "@/components/items/navbar";
export default function Gallery() {
  return (
    <main className="flex flex-col dark:bg-[#0B1F3A] bg-[#FEF9EF]">
      <NavbarMenu />
      <div className="h-screen">
        <ImagesSliderContainer title="Gallery" />
      </div>

      <LayoutGridContainer />
    </main>
  );
}
