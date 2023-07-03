export default function TitleSection ({title, quote}){
  return(
    <div className="flex flex-col justify-center items-center gap-2 animate-show">
        <span className="text-primary text-md font-medium">{title}</span>
        <h3 className="text-white text-3xl font-extrabold text-center inline">
          {quote}
        </h3>
      </div>
  )
}