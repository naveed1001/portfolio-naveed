import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

interface ImageLightboxProps {
  images: string[];

  activeIndex: number;

  open: boolean;

  onClose: () => void;

  onPrevious: () => void;

  onNext: () => void;
}

const ImageLightbox = ({
  images,
  activeIndex,
  open,
  onClose,
  onPrevious,
  onNext,
}: ImageLightboxProps) => {
  if (!open) {
    return null;
  }

  const image =
    images[activeIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
        onClick={onClose}
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20"
          aria-label="Close image viewer"
        >
          <X size={21} />
        </button>

        {/* Counter */}
        <div className="absolute left-1/2 top-5 -translate-x-1/2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
          {activeIndex + 1} /{" "}
          {images.length}
        </div>

        {/* Previous */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onPrevious();
            }}
            className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20 sm:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>
        )}

        {/* Media */}
        {image.endsWith(".webm") ? (
          <motion.video
            key={image}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            src={image}
            autoPlay
            loop
            muted
            playsInline
            onClick={(event) => event.stopPropagation()}
            className="max-h-[85vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
          />
        ) : (
          <motion.img
            key={image}
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.25,
            }}
            src={image}
            alt={`Project screenshot ${
              activeIndex + 1
            }`}
            onClick={(event) =>
              event.stopPropagation()
            }
            className="max-h-[85vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
          />
        )}

        {/* Next */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20 sm:right-8"
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageLightbox;