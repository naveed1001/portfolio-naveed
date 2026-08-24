import {
  useEffect,
  useState,
} from "react";

const ScrollProgress = () => {
  const [progress, setProgress] =
    useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop =
        window.scrollY;

      const documentHeight =
        document.documentElement
          .scrollHeight -
        window.innerHeight;

      if (documentHeight <= 0) {
        setProgress(0);
        return;
      }

      const percentage =
        (scrollTop / documentHeight) *
        100;

      setProgress(
        Math.min(
          100,
          Math.max(0, percentage)
        )
      );
    };

    window.addEventListener(
      "scroll",
      updateProgress,
      { passive: true }
    );

    updateProgress();

    return () => {
      window.removeEventListener(
        "scroll",
        updateProgress
      );
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[100] h-[2px] w-full">
      <div
        className="h-full origin-left bg-gradient-to-r from-violet-500 via-fuchsia-500 to-blue-500 transition-transform duration-100"
        style={{
          transform: `scaleX(${progress / 100})`,
        }}
      />
    </div>
  );
};

export default ScrollProgress;