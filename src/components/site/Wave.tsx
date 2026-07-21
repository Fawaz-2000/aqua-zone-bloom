export function Wave({ className = "", color = "white", flip = false }: { className?: string; color?: string; flip?: boolean }) {
  return (
    <div className={`pointer-events-none overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block w-[200%] h-[80px] md:h-[120px] wave-anim"
        aria-hidden
      >
        <path
          fill={color}
          d="M0,64 C240,120 480,0 720,48 C960,96 1200,120 1440,64 L1440,120 L0,120 Z M1440,64 C1680,120 1920,0 2160,48 C2400,96 2640,120 2880,64 L2880,120 L1440,120 Z"
        />
      </svg>
    </div>
  );
}
