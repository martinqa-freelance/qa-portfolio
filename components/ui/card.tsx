import { ReactNode } from 'react';
import clsx from 'clsx';

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={clsx('bg-white p-4 rounded shadow', className)}>{children}</div>;
}
