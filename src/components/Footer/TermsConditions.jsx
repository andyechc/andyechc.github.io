import React, {useState, useContext, Suspense} from 'react'
import LanguageContext from "/src/context/LanguageContext";

const FooterModal = React.lazy(()=> import('./FooterModal'))

export function TermsConditions(){
  const { text } = useContext(LanguageContext);
  const [showModal, setShowModal] = useState(false)
  
  const handleClick = ()=> {
    setShowModal(!showModal)
  }
  
  return (
    <>
      <p className='text-gray-300 cursor-pointer hover:text-primary' onClick={handleClick}>
        {text.footer.tc}
      </p>
      
      {showModal &&
        <Suspense>
          <FooterModal 
            onClick={handleClick} 
            text={text.footer.tcText}
            title={text.footer.tc}
            btnText={text.footer.modalBtn}
          />
        </Suspense>
      }
    </>
  )
}