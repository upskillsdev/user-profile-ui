import { cn } from '@nextui-org/react'

type TypographyProps = {
  text?: string
  className?: string
  children?: React.ReactNode
}

export function Paragraph({
  text,
  className,
  children,
}: TypographyProps) {
  return (
    <p
      className={cn(
        'leading-7 [&:not(:first-child)]:mt-6',
        className
      )}
    >
      {children || text}
    </p>
  )
}

export function Subtle({
  text,
  className,
  children,
}: TypographyProps) {
  return (
    <p
      className={cn(
        'text-sm text-zinc-500 dark:text-zinc-400',
        className
      )}
    >
      {children || text}
    </p>
  )
}
