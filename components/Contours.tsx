/** Linhas de contorno em forma de ondas, usadas só como fundo. */
export function Contours({ className = "", rows = 14 }) {
  const lines = Array.from({ length: rows }, (_, row) => {
    const y = (row + 0.5) * (600 / rows);
    const points = Array.from({ length: 25 }, (_, step) => {
      const x = step * 50;
      const wave = Math.sin(x / 190 + row * 0.55) * 26 + Math.sin(x / 83 - row * 0.3) * 9;
      return `${x},${(y + wave).toFixed(1)}`;
    });
    return `M${points.join(" L")}`;
  });

  return (
    <svg
      viewBox="0 0 1200 600"
      preserveAspectRatio="none"
      aria-hidden
      className={`pointer-events-none absolute inset-0 size-full ${className}`}
    >
      {lines.map((d) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}
