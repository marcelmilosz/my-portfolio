import { useRef } from "react";
import { StaticImageData } from "next/image";
import MyIcon from "@/app/icons";
import { Button } from "../ui/Button";
import { ImageWithModal } from "./ImageWithModal";
import SectionTitle from "./SectionTitle";
import { FramerTopBottomOpacity } from "./FramerWrappers";

type HorizontalCertGalleryProps = {
  images: StaticImageData[];
  title?: string;
  subtitle?: string;
};

export function HorizontalCertGallery({ images, title, subtitle }: HorizontalCertGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: direction === "left" ? -400 : 400, behavior: "smooth" });
  };

  return (
    <FramerTopBottomOpacity className="relative w-full">
      {/* Scrollable gallery */}

      <div className={`flex items-center gap-4 ${title ? "justify-between" : "justify-end"}`}>
        {title &&
          <SectionTitle title={title} subtitle={subtitle} className="pt-0" />
        }
        <div className="flex gap-2">
          {/* Left arrow  */}
          <Button variant="primary" shape="circle" rounded="xl" onClick={() => scroll("left")}>
            <MyIcon iconName="arrow_left" iconSize="lg" iconStroke="1.5" />
          </Button>

          {/* Right arrow  */}
          <Button variant="primary" shape="circle" rounded="xl" onClick={() => scroll("right")}>
            <MyIcon iconName="arrow_left" iconRotateHorizontally iconSize="lg" iconStroke="1.5" />
          </Button>
        </div>
      </div>
      <div ref={scrollRef} className="w-full overflow-x-auto no-scrollbar">
        <div className="flex gap-4 py-4 w-max">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="min-w-[150px] max-w-[150px] flex-shrink-0 rounded-lg shadow-md overflow-hidden"
            >
              <ImageWithModal
                src={img}
                alt={`Certificate ${idx + 1}`}
                className="object-cover w-full h-auto cursor-zoom-in hover:scale-[1.03] transition-transform duration-200 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </FramerTopBottomOpacity>
  );
}
