import {useRef} from 'react'
import { useIntersectionObserver } from "/src/hooks/useIntersectionObserver";

import Page from "/src/icons/page";
import Github from "/src/icons/github";

export function ResumeCard({title, description, repo, web, img, alt}){
  const imgVisorRef = useRef();
  const [isImgIntersecting] = useIntersectionObserver(imgVisorRef);
  
  return(
    <article className="w-full rounded-md flex flex-wrap md:flex-nowrap justify-center items-center gap-10 animate-showY">
      <aside 
        className='max-w-[200px] min-h-[200px] md:min-w-[200px] md:max-w-[300px] mb-[15px] flex justify-center'
        ref={imgVisorRef}
      >
        {isImgIntersecting &&
          <img 
            className="aspect-square object-top rounded-md shadow-[15px_15px_0] shadow-primary animate-appear" 
            src={img}
          />
        }
      </aside>
      
      <section className='flex flex-col items-center gap-5'>
        <article className='w-full flex justify-center items-center flex-col gap-2'>
          <h4 className="text-xl font-bold text-white md:w-full">{title}</h4>
          <p className="text-center md:text-left text-md text-gray-200 font-normal">{description}</p>
        </article>
        
        <footer className='flex justify-center items-center gap-5'>
          <a className='text-3xl' href={`https://github.com/andev-code/${repo}`} target="_blank">
            <Github/>
          </a>
          <a className='text-3xl' href={`https://${web}.vercel.app`} target="_blank">
            <Page/>
          </a>
        </footer>
      </section>
    </article>
  )
}