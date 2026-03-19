export function BrandBadge() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid grid-cols-3 gap-1 rounded-lg bg-white p-2 shadow-soft">
        <span className="h-3 w-3 rounded-sm bg-brand-purple" />
        <span className="h-3 w-3 rounded-sm bg-brand-blue" />
        <span className="h-3 w-3 rounded-sm bg-brand-orange" />
        <span className="h-3 w-3 rounded-sm bg-brand-blue" />
        <span className="h-3 w-3 rounded-sm bg-brand-purple" />
        <span className="h-3 w-3 rounded-sm bg-brand-green" />
        <span className="h-3 w-3 rounded-sm bg-brand-orange" />
        <span className="h-3 w-3 rounded-sm bg-brand-blue" />
        <span className="h-3 w-3 rounded-sm bg-brand-orange" />
      </div>
      <div>
        <p className="text-lg font-semibold tracking-tight text-brand-ink">Updaze News</p>
        <p className="text-xs uppercase tracking-wider text-brand-slate">Admin Portal</p>
      </div>
    </div>
  );
}
