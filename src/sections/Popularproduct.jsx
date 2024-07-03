import { products } from "../constants"
import PopularproductCard from "../components/PopularproductCard"
const Popularproduct = () => {
  return (
    <section id="products "className="max-container  max-sm:mt-12">
        <div className="flex flex-col  justify-start gap-5 px-4 sm:px-10 ">
        <h2 className=" text-base sm:text-sm text-4xl font-palaquin font-bold sm:text-3xl md:text-4xl"><span className="text-coral-red ">Popular Products</span> </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray "  >experiences top-notch quality 
          and style with our sought-after
           selections Discover a world of 
           comfort, Designs and values</p>
        </div>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3
        sm:grid-cols-2  grid-cols-1 
        sm:gap-4 gap-14">
          {
            products.map((product)=>(
              <PopularproductCard key={product.name} {...product}/>
            ))
          }

        </div>
    </section>
  )
}

export default Popularproduct
