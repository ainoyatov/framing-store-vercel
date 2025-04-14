'use client'

import Maps from '@/components/Map'
import CustomButton from '@/components/CustomButton'

const Directions = () => {

  const handleScroll = () => {
      window.open('https://maps.app.goo.gl/TzLRD7pQWW7RpYVT7', '_blank')
  }
  
  return (
    <div className='flex flex-col md:flex-row py-8'>
      
      <div className='flex flex-col p-4 items-center w-full md:my-16'>
        <div className='address__title mb-4 flex items-center'>Store address</div>
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
      
      <div className='p-4 h-screen w-full md:h-auto py-8 md:py-0 drop-shadow-xl'>
        <Maps/>
      </div>
      

    </div>
  )
}

export default Directions;
