import React, {useState, useContext, Suspense} from 'react'
import LanguageContext from "/src/context/LanguageContext";

const FooterModal = React.lazy(()=> import('./FooterModal'))

export function PrivacyPolicy(){
  const { text } = useContext(LanguageContext);
  const [showModal, setShowModal] = useState(false)
  
  const handleClick = ()=> {
    setShowModal(!showModal)
  }
  
  return (
    <>
      <p className='text-gray-300 cursor-pointer hover:text-primary' onClick={handleClick}>
        {text.footer.pp}
      </p>
      
      {showModal &&
        <Suspense>
          <FooterModal 
            onClick={handleClick} 
            text={text.footer.ppText}
            title={text.footer.pp}
            btnText={text.footer.modalBtn}
          />
        </Suspense>
      }
    </>
  )
}