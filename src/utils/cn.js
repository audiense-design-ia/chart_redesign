import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/* esto sirve para unir classNames, ver ejemplo en BotonSecundario.jsx */

export function cn(...inputs) {
  return twMerge(clsx(inputs));
} 