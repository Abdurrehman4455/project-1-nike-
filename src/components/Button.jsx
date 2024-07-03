
const Button = ({label,backgroundColor,textColor,borderColor}) => {
  return (
    <button className={`flex  justify-center items-center  gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      
       ${backgroundColor
        ?`${backgroundColor} ${textColor} ${borderColor}`:'bg-coral-red rounded-full text-white '
       }
      
      
      
      bg-coral-red rounded-full border-coral-red mt-2`}
    >
       {label}
      

    </button>
    
  )
}

export default Button;
