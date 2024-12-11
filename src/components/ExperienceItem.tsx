import { useState } from "preact/hooks";
import "../css/experienceItem.css";

type Props = {
  date: string;
  role: string;
  description: string;
  className?: string;
};

export default function ExperienceItem({
  date,
  description,
  role,
  className,
}: Props) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const mouseMoveHandler = (e: any) => {
    setX(e.offsetY);
    setY(e.offsetX)
  };

  return (
    <li
      className={`item relative flex flex-col p-5 max-w-[500px] rounded-md overflow-hidden ${className}`}
      onMouseMove={mouseMoveHandler}
      style={`--x: ${x}px; --y: ${y}px`}
    >
      <small className="text-white/80 text-base">{date}</small>
      <strong className="text-[#c87137] text-2xl">{role}</strong>
      <p class="text-white/60">{description}</p>
    </li>
  );
}
