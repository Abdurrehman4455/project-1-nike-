import { reviews } from "../constants";
import Reviewcard from "../components/Reviewcard";

const CustomerReviews = () => {
  return (
   <section className="max-container ">

    <h3 className="font-palaquin text-center text-4xl font-bold ml-4"> What Our
      <span className="text-coral-red ml-2">   
      Customers</span>Say?
      

    </h3>
    <p className='m-auto mt-4 max-w-lg  text-center info-text'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1  justify-evenly items-center max-lg:flex-col gap-14  ">
          {reviews.map((review)=>(
            <div key={review}>
              <Reviewcard key={review.customerName}  customerName={review.customerName}imgURl={review.imgURL} rating={review.rating} feedback={review.feedback}/>
            </div>
          ))}
      </div>
   </section>

  )
}

export default CustomerReviews;
