type Props = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  contained?: boolean;
};

export function Section({ children, id, className = "", contained = true }: Props) {
  return (
    <section id={id} className={`section ${className}`}>
      {contained ? <div className="container">{children}</div> : children}
    </section>
  );
}
