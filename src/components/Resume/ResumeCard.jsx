import Page from "/src/icons/page";
import Github from "/src/icons/github";

export function ResumeCard({title, description, repo, web, img, alt}){
  return(
    <div className="w-full rounded-md flex flex-wrap md:flex-nowrap justify-center items-center gap-10 animate-showY">
      <div className='max-w-[200px] md:max-w-[300px] mb-[15px] flex justify-center'>
        <img className="object-cover aspect-auto rounded-md shadow-[15px_15px_0] shadow-primary" src={img}/>
      </div>
      
      <div className='flex flex-col items-center gap-5'>
        <div className='w-full flex justify-center items-center flex-col gap-2'>
          <h4 className="text-xl font-bold text-white md:w-full">{title}</h4>
          <p className="text-center md:text-left text-md text-gray-200 font-normal">{description}</p>
        </div>
        
        <div className='flex justify-center items-center gap-5'>
          <a className='w-8' href={`https://github.com/andev-code/${repo}`} target="_blank"><Github/></a>
          <a className='w-8' href={`https://${web}.vercel.app`} target="_blank"><Page/></a>
        </div>
      </div>
    </div>
  )
}