
import NextImage from "next/image";


const BusinessHours = () => {

    return (
        <div className='my-12 sm:my-12 grid text-left lg:grid-cols-2'>
          <div className='flex flex-col justify-center max-w-4xl'>
            
          </div>

          <div className='hero__image-container my-8 sm:mx-10'>
            <NextImage 
                src='/store-hours.svg'
                alt='hours of operation'
                width={750}
                height={750}
            />
          </div>
        </div>
    );

}

export default BusinessHours;