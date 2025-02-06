import React from 'react'
import { NavigationBar } from './navigation-bar';
type Tab = {
   title: string;
   Icon: React.JSXElementConstructor<{className?: string}>;
}
interface BottomNavigationProps {
   options: Tab[];
   activeTab?: Tab;
   onSelect: (tab: Tab) => void;
}
export const BottomNavigation = ({options, activeTab, onSelect}: BottomNavigationProps) => {
  return (
    <div className="flex p-1.5x bg-weaker items-center border border-default rounded-xl">
      {options.map((option) => (
         <NavigationBar 
            key={option.title}
            title={option.title}
            Icon={option.Icon}
            state={activeTab?.title === option.title ? "active" : "default"}
            onClick={() => onSelect(option)}
         />
      ))}
    </div>
  )
}
