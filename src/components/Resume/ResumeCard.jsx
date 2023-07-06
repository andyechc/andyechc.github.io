import Page from "/src/icons/page";
import Github from "/src/icons/github";

export function ResumeCard({description, repo, web, img, alt}){
  return(
    <div className="relative w-full max-w-[600px] max-h-[500px] bg-primary overflow-hidden rounded-md flex flex-col gap-2 shadow-xl shadow-[#00f5]">
      <div className='w-full h-full flex justify-center bg-primary bg-opacity-50 opacity-0 absolute top-0 left-0 p-10 hover:opacity-100 rounded-md transition-all z-10'>
        <p className='text-3xl sm:text-5xl lg:text-6xl text-white font-extrabold text-center'>{description}</p>
      </div>
      
      <img className="w-full object-cover aspect-auto" src={img} alt={alt}/>
      
      <div className='w-full flex justify-center items-center gap-5 p-3 z-10'>
        <a className='w-10' href={`https://github.com/andev-code/${repo}`} target="_blank"><Github/></a>
        <a className='w-10' href={`https://${web}.vercel.app`} target="_blank"><Page/></a>
      </div>
    </div>
  )
}