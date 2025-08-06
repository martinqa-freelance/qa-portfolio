import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded font-medium',
        variant === 'primary' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black',
        className
      )}
      {...props}
    />
  );
}
