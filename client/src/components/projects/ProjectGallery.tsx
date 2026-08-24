import {
  Maximize2,
} from "lucide-react";

import {
  useState,
} from "react";

import {
  motion,
} from "framer-motion";

import ImageLightbox from "./ImageLightbox";

interface ProjectGalleryProps {
  images: string[];

  title: string;
}

const ProjectGallery = ({
  images,
  title,
}: ProjectGalleryProps) => {
  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0);

  const [
    lightboxOpen,
    setLightboxOpen,
  ] = useState(false);

  if (!images.length) {
    return null;
  }

  const openImage = (
    index: number
  ) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const previousImage = () => {
    setActiveIndex(
      (current) =>
        current === 0
          ? images.length - 1
          : current - 1
    );
  };

  const nextImage = () => {
    setActiveIndex(
      (current) =>
        current === images.length - 1
          ? 0
          : current + 1
    );
  };

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {images.map(
          (image, index) => (
            <motion.button
              key={image}
              type="button"
              onClick={() =>
                openImage(index)
              }
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay:
                  index * 0.05,
              }}
              className={`group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-white/[0.02] text-left ${
                index === 0
                  ? "sm:col-span-2"
                  : ""
              }`}
            >
              <img
                src={image}
                alt={`${title} screenshot ${
                  index + 1
                }`}
                className={`h-full w-full object-contain transition duration-700 group-hover:scale-[1.03] ${
                  index === 0
                    ? "aspect-[16/8]"
                    : "aspect-[16/10]"
                }`}
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/30">
                <div className="flex h-11 w-11 scale-90 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <Maximize2
                    size={18}
                  />
                </div>
              </div>
            </motion.button>
          )
        )}
      </div>

      <ImageLightbox
        images={images}
        activeIndex={activeIndex}
        open={lightboxOpen}
        onClose={() =>
          setLightboxOpen(false)
        }
        onPrevious={
          previousImage
        }
        onNext={nextImage}
      />
    </>
  );
};

export default ProjectGallery;