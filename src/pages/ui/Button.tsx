
interface btnTypes {
    btntext: string,
    btnStyles: string
}

const Button = ({btntext, btnStyles}: btnTypes) => {
  return (
    <button className={`${btnStyles} px-4 py-2 rounded-xl font-[600]` }>{btntext}</button>
  )
}

export default Button;