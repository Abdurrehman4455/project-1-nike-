

const ShoeCard = ({imgurl, changeBigShoeImage ,bigShoeImg}) => {
  const hanleclick=()=>{
     if(bigShoeImg!==imgurl)
      {
        changeBigShoeImage(imgurl.bigShoe)
      }
    
  }
  return (
    <div className={`border-2 rounded-xl
        ${bigShoeImg===imgurl.bigShoe ?'border-coral-red':'border-transparent'}
        cursor-pointer max-sm:flex-1
    
    `}
     
    onClick={hanleclick}
    
    >
      <div className="flex justify-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={imgurl.thumbnail}
        width={127}
        height={103}
        className="object-contain relative z-10">
        
        
        
        </img>
      </div>
   
    </div>
  )
}

export default ShoeCard
