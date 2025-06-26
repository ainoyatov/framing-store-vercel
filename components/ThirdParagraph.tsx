'use client'

import ContactFormDesktop from "./contact-forms/contact-form";
import ResendForm from "./contact-forms/ResendContactForm"
import {GoogleReCaptchaProvider} from 'react-google-recaptcha-v3'
import CustomButton from "./CustomButton";
import {Phone} from 'lucide-react';

const ThirdParagraph = () => {

  const handleCall = () => {
    window.location.href = 'tel:4802687182'
  }
  
  return (
    <div className="grid text-left lg:grid-cols-2 gap-8 justify-items-center px-4">
      
      <div className="flex flex-col max-w-2xl justify-center text-center">
        <div className="mt-8 max-md:mt-10 flex justify-center text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#026974] to-[#00a8e8] bg-clip-text text-transparent">
            Get in Touch
          </h1>
        </div>
        <p className="mb-4 hero__subtitle">
          "Your inquiries and feedback are invaluable to us. We look forward to connecting with you."
        </p>
        <div className="flex justify-center">
          <CustomButton
            title="480-268-7182"
            icon={<Phone size={18} />}
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
          {/* <ContactFormDesktop /> */}
          <ResendForm />
        </GoogleReCaptchaProvider>
      </div>

    </div>
  );
}
  
export default ThirdParagraph;