import {useContext} from 'react'

import {useForm, ValidationError} from '@formspree/react'

import Send from '/src/icons/send'
import Spinner from '/src/icons/spinner'

import LanguageContext from "/src/context/LanguageContext";

export function Form(){
  const [state, handleSubmit] = useForm("mqkvkbab");
  
  const { text } = useContext(LanguageContext);
  const textContact = {...text.contact};
  
  return(
    <form 
      className="w-full h-full max-w-[800px] flex flex-col justify-center items-center gap-5 accent-primary text-white text-md font-normal caret-primary"
      onSubmit={handleSubmit}
    >
      <div className="w-full flex gap-5 justify-center items-center">
        <input
          name="name"
          className="w-full bg-transparent border border-gray-600 rounded px-2 py-3 focus:border-primary focus:outline-0 active:border-0 active:outline-0  transition-all" 
          type="text" 
          placeholder={textContact.form.name}
          required
        />
        
        <ValidationError
          className='text-md text-red-400 font-bold'
          prefix={textContact.form.name}
          field="name"
          errors={state.errors}
        />
        
        <input
          name="lastName"
          className="w-full bg-transparent border border-gray-600 rounded px-2 py-3 focus:border-primary focus:outline-0 transition-all" 
          type="text" 
          placeholder={textContact.form.lastName}
          required
        />
        
        <ValidationError
          prefix={textContact.form.lastName}
          field="lastName"
          errors={state.errors}
        />
      </div>
      
      <input 
        name="email"
        className="w-full bg-transparent border border-gray-600 rounded px-2 py-3 focus:border-primary focus:outline-0 transition-all" 
        type="email" 
        placeholder="Email"
        required
      />
      
      <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
      />
      
      <textarea
        name="message"
        className="w-full h-full min-h-[250px] bg-transparent border border-gray-600 rounded px-2 py-3 resize-y focus:border-primary focus:outline-0 transition-all" 
        placeholder={textContact.form.message}
        required
      />
      
      <ValidationError
          prefix={textContact.form.message}
          field="message"
          errors={state.errors}
      />
      
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full text-xl font-bold text-white bg-primary px-5 py-2 rounded hover:bg-opacity-50 disabled:opacity-50 disabled:hover:bg-opacity-100 transition-colors"
      >
        {state.submitting 
          ? (<>{textContact.form.btnSubmitting} <Spinner/></>)
          : (<>{textContact.form.button} <Send/></>)
        }
      </button>
      
      {
        state.succeeded &&
          <span className="text-center text-lg sm:text-xl text-green-200 font-bold animate-showY">
            {textContact.form.success}
          </span>
      }
    </form>
  )
}