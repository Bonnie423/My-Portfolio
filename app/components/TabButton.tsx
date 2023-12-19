import React, { ReactNode } from 'react'

interface TabButtonProps {
  isActive: boolean;
  selectTab: () => void;
  children: ReactNode;
}
const TabButton = ({ isActive, selectTab, children }: TabButtonProps) => {
  const buttonClasses = isActive ? 'text-white border-b-4 border-teal-500' : 'text-[#ADB7BE]'
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses} `}>
        {children}
      </p>
      
    </button>
  )
}

export default TabButton
