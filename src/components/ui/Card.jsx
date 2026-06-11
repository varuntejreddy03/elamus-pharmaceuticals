import { cn } from '../../lib/utils';

export function Card({ className, children, ...props }) {
  return (
    <div className={cn('rounded-2xl border border-slate-200 bg-white shadow-sm', className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={cn('p-5', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...props }) {
  return (
    <div className={cn('px-5 pb-5 pt-0', className)} {...props}>
      {children}
    </div>
  );
}
