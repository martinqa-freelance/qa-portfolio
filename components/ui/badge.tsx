import clsx from 'clsx';

export function Badge({ label, className }: { label: string; className?: string }) {
  return (
    <span className={clsx('px-2 py-1 text-xs rounded bg-blue-100 text-blue-800', className)}>
      {label}
    </span>
  );
}
