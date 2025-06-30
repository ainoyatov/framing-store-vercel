'use client'

import Maps from '@/components/Map'
import CustomButton from '@/components/CustomButton'

const Directions = () => {

  const handleScroll = () => {
      window.open('https://maps.app.goo.gl/TzLRD7pQWW7RpYVT7', '_blank')
  }
  
  return (
    <div className='flex flex-col md:flex-row'>
      
      <div className='flex flex-col p-4 items-center w-full md:my-16'>
        <div className="m-8 max-md:mt-10 flex justify-center text-center">
          <h1 className="text-[36px] md:text-[42px] lg:text-[48px] xl:text-[50px]  font-extrabold bg-gradient-to-r from-[#026974] to-[#00a8e8] bg-clip-text text-transparent">
            Store Address
          </h1>
        </div>
        <div className='address__subtitle'>8221 E. Evans Rd, Suite C </div> 
        <div className='address__subtitle'>Scottsdale, AZ 85260</div>
        <div>
          <CustomButton 
              title="Directions"
              containerStyles="address__button"
              handleClick={handleScroll}
          />
        </div>
      </div>
      
      <div className='h-screen w-full md:h-auto p-4 md:p-8 drop-shadow-xl'>
        <Maps/>
      </div>
      

    </div>
  )
}

export default Directions;
