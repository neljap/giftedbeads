import { FaStar } from "react-icons/fa6"
import giftmg from "../../assets/giftyhero.jpg";


const TestimonyCard = () => {
  return (
    <div className="border border-black rounded-xl p-4">
        <div className="flex flex-row gap-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
        </div>
        <p></p>
        <div className="flex flex-col gap-4">
          <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nesciunt cupiditate quod quos soluta eum sunt facilis laboriosam doloremque excepturi sint amet dolorum totam laborum tempora eligendi non, aliquam a.</p>
          <div className=" flex flex-row">
<div className="w-12 h-12">
             <img src={giftmg} alt="" className="w-full h-full rounded-full"/>
          </div>
           
            <div>
                <p>John Doe</p>
                <p>Shop Owner</p>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default TestimonyCard