export default function Icon({
  iconName,
  width = 14,
  height = 14,
  className,
}: {
  iconName: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <img
      className={className}
      alt={iconName}
      src={`https://unpkg.com/lucide-static@latest/icons/${iconName}.svg`}
      width={width}
      height={height}
    />
  );
}
