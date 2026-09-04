import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

function Icon({ title, children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.2-3.2" />
    </Icon>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </Icon>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Icon>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v1.5M12 19.5V21M4.9 4.9l1.1 1.1M18 18l1.1 1.1M3 12h1.5M19.5 12H21M4.9 19.1 6 18M18 6l1.1-1.1" />
    </Icon>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M17 14.5A7 7 0 0 1 9.5 7 6.2 6.2 0 1 0 17 14.5Z" />
    </Icon>
  );
}

export function ShareIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="18" cy="5" r="2.4" />
      <circle cx="6" cy="12" r="2.4" />
      <circle cx="18" cy="19" r="2.4" />
      <path d="m8.2 13.2 7.6 4.2M15.8 6.6l-7.6 4.2" />
    </Icon>
  );
}

export function LinkIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9.5 14.5 7.8 16a3 3 0 0 1-4.2-4.2l2.4-2.4a3 3 0 0 1 4.2 0" />
      <path d="M14.5 9.5 16.2 8a3 3 0 0 1 4.2 4.2l-2.4 2.4a3 3 0 0 1-4.2 0" />
    </Icon>
  );
}

export function BookmarkIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7 4.5h10v15l-5-3.2-5 3.2v-15Z" />
    </Icon>
  );
}

export function PrintIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7 8V4.5h10V8" />
      <path d="M7 15.5H5.5A1.5 1.5 0 0 1 4 14v-3.5A1.5 1.5 0 0 1 5.5 9h13A1.5 1.5 0 0 1 20 10.5V14a1.5 1.5 0 0 1-1.5 1.5H17" />
      <path d="M7 13.5h10V20H7z" />
    </Icon>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.2l2.6 1.6" />
    </Icon>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M8.5 17c-2.2 0-3.8-1.7-3.8-4 0-3.2 2.4-5.6 5.8-6.5.2.8.3 1.7.2 2.4-1.6.4-2.7 1.4-2.7 2.8 0 .4.1.8.4 1.1.8-.3 1.6-.2 2.2.3.7.6.9 1.6.6 2.5-.4 1.1-1.4 1.4-2.7 1.4Zm9 0c-2.2 0-3.8-1.7-3.8-4 0-3.2 2.4-5.6 5.8-6.5.2.8.3 1.7.2 2.4-1.6.4-2.7 1.4-2.7 2.8 0 .4.1.8.4 1.1.8-.3 1.6-.2 2.2.3.7.6.9 1.6.6 2.5-.4 1.1-1.4 1.4-2.7 1.4Z" />
    </Icon>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <Icon {...props} className={`rtl:rotate-180 ${props.className ?? ""}`}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3.5" y="6" width="17" height="12" rx="1.5" />
      <path d="m4 7 8 6 8-6" />
    </Icon>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="7.5" y="3.5" width="9" height="17" rx="1.8" />
      <path d="M11 18.5h2" />
    </Icon>
  );
}
