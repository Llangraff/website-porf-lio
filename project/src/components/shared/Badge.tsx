interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Badge({ children, variant = 'primary' }: BadgeProps) {
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white',
    secondary: 'text-blue-500 bg-blue-50',
  };

  return (
    <span className={`text-sm px-3 py-1 rounded-full ${variants[variant]}`}>
      {children}
    </span>
  );
}