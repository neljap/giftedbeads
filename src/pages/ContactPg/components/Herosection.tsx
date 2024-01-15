import { Navbar } from "../../components"
import Gifthero from "../../../assets/giftyhero.jpg";
import { useState } from "react";
import { toast } from "react-toastify";
import {IoLocationOutline, IoTimeOutline} from "react-icons/io5"
import { FaPhoneVolume } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { ConItemCd } from "../../ui";


const Herosection = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false);

    const ContactItems = [
        {
            id: 1,
            heading: "Address",
            text: "Click the icon in the bottom right of the page to talk to our agents during business hours. At other times we will respond as soon as possible.",
            icon: <IoLocationOutline size={25} />
        },
        {
            id: 2,
            heading: "Phone",
            text: "+234 123456",
            icon: <FaPhoneVolume size={25}/>
        },
        {
            id: 3,
            heading: "Email",
            text: "gifty@gmail.com",
            icon: <FaRegEnvelope size={25} />
        },
        {
            id: 4,
            heading: "Open Hours",
            text: "24/7",
            icon: <IoTimeOutline size={25}/>
        }

    ]

    const handleSubmit = async(e: any) => {
        e.preventDefault()
        setLoading(true)
        try{

        }catch(err: any){
            toast.error(err.code, {position: "bottom-left"})
        }finally{
            setLoading(false)
        }
    }
  return (
    <>
    <div className='bg-hero bg-center bg-cover h-[50vh]'>
        <Navbar />

        <p>About</p>
    </div>
    <div className='container'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 justify-center items-center">
        

        <div>
        <h2 className="text-start pb-4 font-[600] text-3xl">Send Us An Message</h2>
        <p>If you would like to know more about our policies, you can consult our Terms and Conditions. You will also be able to follow your order (tracking number will be provided in an e-mail after ordering). You wish to return some items? Click here.</p>
        <div className="flex flex-col gap-4 justify-start items-start">
            {ContactItems.map(item => (
                <ConItemCd key={item.id} heading={item.heading} icon={item.icon} text={item.text}/>
            ))}
        </div>
        </div>
        <div>
            <h2 className="text-center pb-4 font-[600] text-3xl">Send Us An Message</h2>
            <form action="" onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <label>Full Name</label>
                    <input type="text" value={name} onChange={(e: any) => setName(e.target.value)} className="border border-black p-2 rounded-xl"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label>Email Address</label>
                    <input type="text" value={email} onChange={(e: any) => setEmail(e.target.value)}  className="border border-black p-2 rounded-xl"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label>Message</label>
                    <textarea name="" id="" cols={30} rows={10} onChange={(e: any) => setMessage(e.target.value)} value={message} className="w-full border border-black p-2 rounded-xl"></textarea>
                </div>
            <button type="submit" className="w-full py-2 bg-slate-950 text-white rounded-2xl">{loading ? "SENDING..." : "SEND"}</button>  
            </form>
            
      </div>  
    </div>
    </div>
    </>
    
  )
}

export default Herosection