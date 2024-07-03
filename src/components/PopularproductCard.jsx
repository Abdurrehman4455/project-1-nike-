import { star } from "../assets/icons"


const PopularproductCard = ({imgURL,name,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full max-sm:flex flex-col justify-center items center">
     
        <img src={imgURL} alt={name} 
        className="w-[280px ] h-[280px]"/>
        <div className="mt-8 flex justify-start gap-2.5 ml-8 " >
          <img src={star} width={24} height={24} className=""></img>
          <p className="font-montserrat text-xl leading-normal text-slate-gray ">(4.5)</p>
        
        </div>
        <div className="max-sm:flex flex-col justify-center items-center">
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palaquin ml-8">{name}</h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal ml-8" > {price}</p>
        </div>
    </div>
  )
}

export default PopularproductCard
