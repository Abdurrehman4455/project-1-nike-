
import Hero from'./sections/Hero';
import Popularproduct from'./sections/Popularproduct';
import SuperQuality from './sections/SuperQuality';
import Services from'./sections/Services';
import Specialoffer from'./sections/Specialoffer';
import CustomerReviews from'./sections/CustomerReviews';
import Suscribe from'./sections/Suscribe';
import Footer from'./sections/Footer';
import Nav from'./components/Nav'
//import { CustomerReviews,Footer,Hero,Popularproduct,Services,SuperQuality,Suscribe } from "./sections";
const App = () => (
  <main className="realtive">
    <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b">
     <Hero/>
     
    </section>
    <section className="padding">
       <Popularproduct/>
    </section>
    <section className="padding">
       
   <SuperQuality/>
      
    </section>
    <section className="padding-x py-10 ">
      <Services/>
    </section>
    <section className="padding">
      <Specialoffer/>
  
    
    </section>
    <section className=" ">
    <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16">
    <Suscribe/>
    </section>
    <section className="padding bg-black">
      <Footer/>
    </section>
  </main>

)

export default App;