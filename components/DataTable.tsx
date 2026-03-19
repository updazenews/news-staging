type DataTableProps = {
  columns: string[];
  rows: Array<Array<string>>;
};

export function DataTable({ columns, rows }: DataTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-soft">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-brand-surface text-brand-slate">
          <tr>
            {columns.map((column) => (
              <th className="px-4 py-3 font-medium" key={column}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr className="border-t border-slate-100" key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td className="px-4 py-3 text-brand-ink" key={`${rowIndex}-${cellIndex}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
