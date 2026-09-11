interface FooterNoteProps {
  text: string;
}

export function FooterNote({ text }: FooterNoteProps) {
  return (
    <p className="mx-auto mt-6 box-border w-full max-w-[min(calc(100%-1.5rem),var(--page))] border-t border-[var(--line)] px-3 pt-4 text-[0.85rem] text-[var(--muted)] md:px-4 rtl:text-right">
      {text}
    </p>
  );
}
