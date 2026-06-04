type ResponsiveTableProps = {
  heading?: string;
  columns: string[];
  rows: string[][];
};

/** Table on md+; stacked cards on small screens (no horizontal page scroll). */
export function ResponsiveTable({
  heading,
  columns,
  rows,
}: ResponsiveTableProps) {
  return (
    <div>
      {heading && (
        <h2 className="font-serif text-xl font-semibold text-navy sm:text-2xl">
          {heading}
        </h2>
      )}
      <div
        className={`space-y-4 ${heading ? "mt-6" : ""} md:hidden`}
        role="region"
        aria-label={heading ?? "Data table"}
      >
        {rows.map((row, rowIndex) => (
          <article
            key={`${row[0]}-${rowIndex}`}
            className="rounded-card border border-line bg-white p-4 shadow-card"
          >
            <dl className="space-y-3">
              {columns.map((col, colIndex) => (
                <div key={col}>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-charcoal">
                    {col}
                  </dt>
                  <dd
                    className={`mt-1 text-sm leading-relaxed ${
                      colIndex === 0 ? "font-medium text-navy" : "text-body"
                    }`}
                  >
                    {row[colIndex]}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
      <div
        className={`hidden overflow-x-auto rounded-card border border-line shadow-card md:block ${
          heading ? "mt-6" : ""
        }`}
      >
        <table className="w-full min-w-[520px] text-left text-sm lg:min-w-[600px]">
          <thead className="bg-navy text-white">
            <tr>
              {columns.map((col) => (
                <th key={col} className="px-3 py-3 font-semibold lg:px-4">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line bg-white">
            {rows.map((row, rowIndex) => (
              <tr key={`${row[0]}-${rowIndex}`}>
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`px-3 py-3 lg:px-4 ${
                      ci === 0 ? "font-medium text-navy" : "text-body"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
