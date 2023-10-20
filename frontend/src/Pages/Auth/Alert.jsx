

export default function Alert({ message, refference }){
    return (
      <div ref={refference} className=" bg-forth_color_theme text-black_first_theme font-bold py-2 px-4 border-[3px] rounded-lg border-third_color_theme flex items-center mt-5 hidden">
        <p  className="ml-3">{message}</p>
        <button onClick = {(e) => {e.target.parentElement.classList.add("animate-jump-out"); e.target.parentElement.classList.remove("animate-jump-in")}} className=" font-extrabold text-lg ml-3">x</button>

      </div>
    )
  }