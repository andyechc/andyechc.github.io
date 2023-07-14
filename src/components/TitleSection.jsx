import { useRef } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export function TitleSection({ title, quote }) {
  const titleVisorRef = useRef();
  const [isTitleIntersecting] = useIntersectionObserver(titleVisorRef, false);

  return (
    <div
      ref={titleVisorRef}
      className="w-full min-h-[100px] flex flex-col justify-center items-center gap-2"
    >
      {isTitleIntersecting && (
        <>
          <span className="text-primary text-xl font-medium animate-show">
            {title}
          </span>
          <h3 className="text-white text-4xl font-extrabold text-center inline animate-show">
            {quote}
          </h3>
        </>
      )}
    </div>
  );
}
