import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium',
  {
    variants: {
      variant: {
        default: 'border border-sky-100 bg-sky-50 text-[#0798D0]',
        outline: 'border border-slate-200 bg-white text-slate-600',
        active: 'bg-[#0798D0] text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export function Badge({ className, variant, children, ...props }) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props}>
      {children}
    </span>
  );
}
