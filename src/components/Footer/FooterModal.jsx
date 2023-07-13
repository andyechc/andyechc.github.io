import ReactDOM from 'react-dom/client'

function FooterModal({onClick, title, text, btnText}){
  return (
      <article className="fixed top-0 left-0 w-screen h-full flex justify-center items-center z-20 bg-gray-950 bg-opacity-30 backdrop-blur-[5px] animate-showY">
        <div className="overflow-y-scroll w-[300px] md:w-[60%] h-[80%] bg-blue-950 rounded-md p-10 flex flex-col gap-5">
          <h3 className='text-white text-2xl font-extrabold'>{title}</h3>
          <p className='text-gray-300 text-md font-medium whitespace-pre-line'>
            {text}
          </p>
          <button 
            className='w-[150px] bottom-0 left-0 text-md font-bold text-white bg-primary px-3 py-1 rounded hover:bg-opacity-40 transition-all'
            onClick={onClick}
          >
            {btnText}
          </button>
        </div>
      </article>
  )
}

export default FooterModal