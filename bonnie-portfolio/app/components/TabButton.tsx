import React from 'react'

const TabButton = ({ isActive, selectTab, children }) => {
  const buttonClasses = isActive ? 'text-white border-b border-teal-500' : 'text-[#ADB7BE]'
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses} `}>
        {children}
      </p>
    </button>
  )
}

export default TabButton
