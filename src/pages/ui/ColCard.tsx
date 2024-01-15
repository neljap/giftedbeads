import { Button } from "."

interface Coltypes{
    coltext: string,
    colstyles: string
}

const ColCard = ({coltext, colstyles}: Coltypes) => {
  return (
    <div className={`${colstyles} bg-cover bg-center`}>
        <div>
            <p>POPULAR</p>
            <p>{coltext}COLLECTION</p>
            <Button btntext="SHOP NOW" btnStyles="bg-transparent border-black hover:bg-black hover:text-white"/>
        </div>
    </div>
  )
}

export default ColCard