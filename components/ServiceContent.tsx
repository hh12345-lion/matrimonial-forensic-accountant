import type { ServiceContentBlock } from "@/lib/data/services";
import { ResponsiveTable } from "@/components/ui/ResponsiveTable";

export function ServiceContent({ blocks }: { blocks: ServiceContentBlock[] }) {
  return (
    <div className="prose-mfa min-w-0 max-w-none space-y-8 break-words">
      {blocks.map((block, index) => {
        if (block.type === "prose") {
          return (
            <div key={index}>
              {block.heading && (
                <h2 className="font-serif text-xl font-semibold text-navy sm:text-2xl">
                  {block.heading}
                </h2>
              )}
              {block.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 48)}
                  className={`text-body leading-relaxed ${block.heading ? "mt-4" : ""}`}
                >
                  {p}
                </p>
              ))}
            </div>
          );
        }
        if (block.type === "list") {
          return (
            <div key={index}>
              <h2 className="font-serif text-xl font-semibold text-navy sm:text-2xl">
                {block.heading}
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-body">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          );
        }
        return (
          <div key={index}>
            <h2 className="font-serif text-xl font-semibold text-navy sm:text-2xl">
              {block.heading}
            </h2>
            <div className="mt-4">
              <ResponsiveTable columns={block.columns} rows={block.rows} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
