import { Navbar } from "../../components"
import { Button, ColCard } from "../../ui"

const Herosection = () => {
  return (
    <>
    <div className="bg-hero bg-cover bg-center h-screen">
        <Navbar />
        <div className="container">
            <p>Style Destination</p>
            <p>Earings Collection</p>
            <Button btntext="SHOP NOW" btnStyles="bg-white shadow-lg"/>
        </div>
    </div>
    <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14">
        <ColCard coltext="EARRING" colstyles="bg-hero h-64"/>
        <ColCard coltext="RING" colstyles="bg-hero h-64"/>
    </div>    
    </div>
    
    </>
    
  )
}

export default Herosection