import Link from "next/link";

type Props = {
  title?: string;
  links: { href: string; label: string }[];
};

export function InternalLinksSection({
  title = "Related pages",
  links,
}: Props) {
  if (!links.length) return null;

  return (
    <aside className="mt-10 rounded-card border border-line bg-section-alt p-4 sm:mt-12 sm:p-6">
      <h2 className="font-serif text-lg font-semibold text-navy sm:text-xl">
        {title}
      </h2>
      <ul className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-2">
        {links.map((link) => (
          <li key={link.href} className="min-w-0">
            <Link
              href={link.href}
              className="inline-flex min-h-touch items-center text-sm font-medium text-gold hover:underline sm:text-base"
            >
              <span className="break-words">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
