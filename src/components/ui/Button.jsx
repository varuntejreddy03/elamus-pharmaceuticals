import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0798D0] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-[#0798D0] text-white hover:bg-[#067fb0]',
        outline: 'border border-slate-200 bg-white text-slate-700 hover:border-[#0798D0] hover:text-[#0798D0]',
        ghost: 'text-slate-700 hover:bg-slate-100',
        success: 'border border-green-200 bg-green-50 text-green-600',
        white: 'bg-white text-[#0798D0] hover:bg-slate-50',
      },
      size: {
        default: 'h-11 px-5',
        sm: 'h-9 px-3 text-xs',
        lg: 'h-12 px-7',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export function Button({ className, variant, size, children, ...props }) {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({ className, variant, size, children, href, ...props }) {
  return (
    <a href={href} className={cn(buttonVariants({ variant, size, className }))} {...props}>
      {children}
    </a>
  );
}

export { buttonVariants };
