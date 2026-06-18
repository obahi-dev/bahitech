import Image from "next/image";

type LogoProps = {
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { width: 160, height: 34 },
  md: { width: 220, height: 47 },
  lg: { width: 280, height: 60 },
};

export default function Logo({ size = "md" }: LogoProps) {
  const { width, height } = sizes[size];
  return (
    <Image
      src="/bahitech-logo-v2.png"
      alt="BahiTech Solutions"
      width={width}
      height={height}
      priority
      unoptimized
      className="logo-ltr h-auto w-auto"
    />
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="5" cy="16" r="3" fill="#C8A96E" />
      <circle cx="16" cy="5" r="2.5" fill="#9A927E" />
      <circle cx="16" cy="27" r="2.5" fill="#9A927E" />
      <circle cx="27" cy="16" r="4" fill="#FDFAF4" />
      <line x1="7.5" y1="14" x2="14" y2="7" stroke="#9A927E" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="7.5" y1="18" x2="14" y2="25" stroke="#9A927E" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="18" y1="7" x2="24" y2="13" stroke="#E8B84B" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="25" x2="24" y2="19" stroke="#E8B84B" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="27" cy="16" r="2" fill="#E8B84B" />
      <circle cx="5" cy="16" r="1.2" fill="#FDFAF4" />
    </svg>
  );
}
