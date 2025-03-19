

import { cn } from '@/lib';
import React from 'react'
type NavItemProps = {
  title: string;
  Icon: React.ReactNode;
  isActive?: boolean;
  href: string;
  onClick?: () => void;
  className?: string;
}
export default function NavItem({title, Icon, href, onClick, isActive, className}: NavItemProps) {
  const stateClass = isActive ? 'bg-accent-strong text-navigation-icon-hover  shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)]' : 'text-navigation-icon-default';
  return (
    <div className={cn(`w-12x h-12x p-3x rounded-full flex items-center justify-center ${stateClass}`, className)} onClick={onClick}>
      {Icon}
    </div>
  )
}
