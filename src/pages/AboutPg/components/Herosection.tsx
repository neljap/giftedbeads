import { Navbar } from '../../components'
import Gifthero from '../../../assets/giftyhero.jpg';
import TestimonyCard from '../../ui/TestimonyCard';

const Herosection = () => {
  return (
    <>
    <div className='bg-hero bg-center bg-cover h-[50vh]'>
        <Navbar />

        <p>About</p>
    </div>
    <div className='container'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 justify-center items-center">
        

        <div className='w-full h-80'>
          <img src={Gifthero} alt=""  className="w-full h-full object-cover rounded-xl"/>
        </div>
        <div className="flex flex-col gap-6">
            <div>
              <p className="text-lg md:text-3xl  font-[Jost] pb-2">Who We Are?</p>
            </div>
            <p className='text-md'>At , we want every person to have the opportunity to succeed based on merit, regardless of race, color, religion, creed, ancestry, national origin, sex, age, disability, marital status, citizenship status, sexual orientation, gender identity expression, military or veteran status, or any other criterion. Why is this so important? To us, diverse and inclusive teams enriched with people of distinctive backgrounds make us better. They help us generate better ideas, reach more balanced decisions, engage our communities and help our clients achieve better outcomes.</p>
          </div>
      </div>  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 justify-center items-center">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-lg md:text-3xl font-[Jost] pb-2">Our Story</p>
            </div>
            <p className='text-md'>provides advanced investment strategies and wealth management solutions to forward-thinking investors around the world. Through its distinct investment brands Management, we offers a diversity of investment approaches, encompassing bottom-up fundamental active management, Responsible Investing, systematic investing and customized implementation of client-specified portfolio exposures. Exemplary service, timely innovation and attractive returns across market cycles have been hallmarks of since the origin.</p>
          </div>
          
        </div>
        <div className='w-full h-80'>
          <img src={Gifthero} alt=""  className="w-full h-full object-cover rounded-xl"/>
        </div>
      </div>
      <div className='py-8 grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center'>
        <TestimonyCard />
        <TestimonyCard />
        <TestimonyCard />
      </div>
    </div>
    
    </>
    
  )
}

export default Herosection