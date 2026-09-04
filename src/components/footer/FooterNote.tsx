interface FooterNoteProps {
  text: string;
}

export function FooterNote({ text }: FooterNoteProps) {
  return <p className="footer-note">{text}</p>;
}
