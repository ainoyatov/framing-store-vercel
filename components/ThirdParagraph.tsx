'use client'

import ContactFormDesktop from "./contact-forms/contact-form";
import {GoogleReCaptchaProvider} from 'react-google-recaptcha-v3'
import CustomButton from "./CustomButton";

const ThirdParagraph = () => {

  const handleCall = () => {
    window.location.href = 'tel:4802687182'
  }
  
  return (
    <div className="grid text-left lg:grid-cols-2 gap-8 justify-items-center px-4">
      
      <div className="flex flex-col max-w-2xl justify-center text-center">
        <h1 className="hero__title">Get in Touch</h1>
        <p className="mb-4 hero__subtitle">
          "Your inquiries and feedback are invaluable to us. We look forward to connecting with you."
        </p>
        
        <div className="flex justify-center">
          <CustomButton
            title="Call Now"
            containerStyles="button__color drop-shadow-lg"
            handleClick={handleCall}
          />
        </div>
      </div>

      <div className="flex justify-center items-center max-w-2xl drop-shadow-xl">
        <GoogleReCaptchaProvider 
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA!}
          scriptProps={{
            async: true,
            defer: true,
            appendTo: 'head',
            nonce: undefined,
          }}
        >
          <ContactFormDesktop />
        </GoogleReCaptchaProvider>
      </div>

    </div>
  );
}
  
export default ThirdParagraph;