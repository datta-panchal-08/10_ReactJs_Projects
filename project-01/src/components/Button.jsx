import { MdMessage } from "react-icons/md";

const Button = (props) => {
     const {icon ,text,isOutline} = props;
  return (
    <div>
        <button  className = {`px-[2vw] flex items-center ${isOutline ? "bg-zinc-100 mt-4 mb-4 font-semibold text-red-700 border-solid w-[36.6vw] border-[.1vw] border-zinc-700 ":""} justify-center gap-[1vw]  py-[.6vw] bg-black text-white rounded`}>
          
          {icon}
          {text}
        </button>
    </div>
  )
}

export default Button