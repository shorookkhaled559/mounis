interface FooterNoteProps {
  text: string;
}

export function FooterNote({ text }: FooterNoteProps) {
  return <p className="w-full max-w-[min(calc(100%-1.5rem),var(--page))] mx-auto mt-6 pt-4 px-3 border-t border-[var(--line)] text-[var(--muted)] text-[0.85rem] box-border md:px-4">{text}</p>;
}
