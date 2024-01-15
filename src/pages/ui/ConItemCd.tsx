
interface conTypes{
    icon: any,
    heading: string,
    text: string
}

const ConItemCd = ({icon, heading, text}: conTypes) => {
  return (
    <div className="flex flex-row gap-4 justify-center items-center">
                <div>
                    {/* <img src={icon} alt="" /> */}
                    {icon} 
                </div>
                <div>
                    <p className="text-xl font-[500]">{heading}</p>
                    <p className="text-md">{text}</p>
                </div>
            </div>
  )
}

export default ConItemCd