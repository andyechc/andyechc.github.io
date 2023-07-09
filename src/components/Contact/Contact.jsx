import {TitleSection} from '../TitleSection'

export function Contact(){
  return (
    <section id='contact' className="w-full h-full py-32 px-10 bg-gradient-to-b from-black to-gray-950 flex flex-col justify-center items-center gap-24">
      <TitleSection title="Contact" quote="Keep In Touch"/>
      
      <form className="w-full h-full max-w-[800px] flex flex-col justify-center items-center gap-5 accent-primary text-white text-md font-normal caret-primary">
        <div className="w-full flex gap-5 justify-center items-center">
          <input 
            className="w-full bg-transparent border border-gray-600 rounded px-2 py-3 focus:border-primary focus:outline-0 active:border-0 active:outline-0  transition-all" 
            type="text" 
            placeholder="Nombre"
          />
          
          <input 
            className="w-full bg-transparent border border-gray-600 rounded px-2 py-3 focus:border-primary focus:outline-0 transition-all" 
            type="text" 
            placeholder="Apellidos"
          />
        </div>
        
        <input 
          className="w-full bg-transparent border border-gray-600 rounded px-2 py-3 focus:border-primary focus:outline-0 transition-all" 
          type="email" 
          placeholder="Email"
        />
        
        <textarea 
          className="w-full h-full min-h-[250px] bg-transparent border border-gray-600 rounded px-2 py-3 resize-y focus:border-primary focus:outline-0 transition-all" 
          placeholder="Comments"
        />
      </form>
    </section>
  )
}