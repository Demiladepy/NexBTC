import type { FC } from "react";
import {
  Wallet,
  Bitcoin,
  ArrowRight,
  Home,
  Settings,
  Lock,
  RefreshCw,
  Shield,
} from "lucide-react";

type LucideIconName =
  | "wallet"
  | "bitcoin"
  | "arrow-right"
  | "home"
  | "settings"
  | "lock"
  | "refresh"
  | "shield";

interface CustomIconProps {
  /** Optional Lucide icon name */
  name?: LucideIconName;
  /** Optional custom SVG path */
  svgPath?: string;
  /** Icon size in pixels */
  size?: number;
  /** Icon color */
  color?: string;
  /** Background for icon circle (optional) */
  bgColor?: string;
  /** Border for icon circle (optional) */
  borderColor?: string;
  /** Additional Tailwind classes */
  className?: string;
  /** Hover effect */
  hoverEffect?: boolean;
}

/** Lucide icon registry */
const ICONS: Record<
  LucideIconName,
  FC<{ size?: number; color?: string; className?: string }>
> = {
  wallet: Wallet,
  bitcoin: Bitcoin,
  "arrow-right": ArrowRight,
  home: Home,
  settings: Settings,
  lock: Lock,
  refresh: RefreshCw,
  shield: Shield,
};

const CustomIcon: FC<CustomIconProps> = ({
  name,
  svgPath,
  size = 24,
  color = "#fff",
  bgColor,
  borderColor,
  className = "",
  hoverEffect = true,
}) => {
  const baseClasses = `inline-flex items-center justify-center rounded-full transition-all duration-200 ${
    hoverEffect ? "hover:scale-110 hover:shadow-lg" : ""
  } ${className}`;

  const circleStyle = {
    backgroundColor: bgColor,
    border: borderColor ? `2px solid ${borderColor}` : undefined,
    width: size + 12,
    height: size + 12,
  };

  // Render Lucide icon
  if (name && ICONS[name]) {
    const IconComponent = ICONS[name];
    return (
      <div style={circleStyle} className={baseClasses}>
        <IconComponent size={size} color={color} />
      </div>
    );
  }

  // Render custom SVG
  if (svgPath) {
    return (
      <div style={circleStyle} className={baseClasses}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={svgPath} />
        </svg>
      </div>
    );
  }

  // Fallback empty div
  return <div style={circleStyle} className={baseClasses} />;
};

export default CustomIcon;
