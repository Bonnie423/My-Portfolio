import React from 'react'

const ProjectTags = ({name,onClick, isSelected}) => {
  
  const buttonStyle = isSelected? 'text-white border-teal-500': 'text-[#ADB7BE] border-slate-600 hover:border-white'

  return (
    <div>
      <button onClick={()=>onClick(name)} className={`${buttonStyle} rounded-full border-2 py-3 px-6 text-xl cursor-pointer`}>
        {name}
      </button>
    </div>
  )
}

export default ProjectTags
