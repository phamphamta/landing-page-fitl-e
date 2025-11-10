interface BtnLinkProps {
  href: string;
  text: string;
  className?: string;
}

export const BtnLink = ({ href, text, className = "" }: BtnLinkProps) => {
  return (
    <a
      href={href}
      className={`px-6 py-3 rounded-full outline-none cursor-pointer
                 relative overflow-hidden border border-transparent bg-[#FFD700] ${className}`}
    >
      <span className="relative z-10 text-white"> {text}</span>
    </a>
  );
};
