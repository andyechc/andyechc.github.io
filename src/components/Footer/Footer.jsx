import { Logo } from "../Logo";
import { SocialMedias } from "../SocialMedias";

export function Footer(){
  return(
    <section className='w-full flex flex-wrap md:justify-evenly items-center py-10 px-10 bg-gradient-to-b from-gray-950 to-blue-950 gap-20'>
      <article className='max-w-[300px] flex flex-col justify-center gap-5'>
        <Logo />
        <p className="text-md font-normal text-gray-300">J.Andy Echevarria Contreras. Frontend Developer. A Developer Who Loves To Code. "Self-discipline and motivation have been key to my success as a Self-Taught Developer".</p>
        <SocialMedias/>
      </article>
      
      <article className='max-w-[150px] flex flex-col justify-center gap-5'>
        <span className='text-white text-lg font-bold'>Shortcuts</span>
        <nav className="text-md text-gray-300 font-normal flex flex-col gap-2">
          <a className='hover:text-primary' href='#home'>Home</a>
          <a className='hover:text-primary' href='#about'>About</a>
          <a className='hover:text-primary' href='#skills'>Skills</a>
          <a className='hover:text-primary' href='#resume'>Resume</a>
          <a className='hover:text-primary' href='#contact'>Contact</a>
        </nav>
      </article>
      
      <article className='max-w-[150px] flex flex-col justify-center gap-2'>
       <span className='text-white text-lg font-bold'>Adress
          <p className="text-md font-normal text-gray-300">Havana, Cuba</p>
        </span>
       <span className='text-white text-lg font-bold'>Email
        <p className="text-md font-normal text-gray-300">andevcode@gmail.com</p>
       </span>
       <span className='text-white text-lg font-bold'>Phone
        <p className="text-md font-normal text-gray-300">+5356804881</p>
       </span>
      </article>
      
      <div className='w-full max-w-[1000px] flex-grow flex flex-wrap justify-between gap-5'>
        <span className="text-md text-gray-300">
          Designed and Developed by 
            <strong className="text-white"> andev </strong>
          © 2023
        </span>
        <a className='text-gray-300 hover:primary'>Terms & Conditions</a>
        <a className='text-gray-300 hover:primary'>Privacy Policy</a>
      </div>
    </section>
  )
}