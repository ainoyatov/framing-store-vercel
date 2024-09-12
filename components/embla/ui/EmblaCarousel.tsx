'use client';

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';

type PropType = {
  slides: any
  // slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)


  return (
    <section className="embla py-16 px-4">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item:any) => (
            <div className="embla__slide rounded-3xl" key={item.category}>
              <div className="embla__slide__number flex-col space-y-4">
                {/* Center of the slides */}  
                <div className='flex text-xl lg:text-3xl'>
                  {item.category}
                </div>
                <div>
                  <Image 
                    src={item.url}
                    alt='category images'
                    width={150}
                    height={150}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-row py-4">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} className='mr-2' />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} className='ml-2'/>
        </div>

        <div className="flex flex-row gap-2 items-center">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={selectedIndex === index ? 'w-4 h-4 rounded-full border-2 border-cyan-900 opacity-50' : 'w-4 h-4 rounded-full  border-2 opacity-50 border-gray-400'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel





// 'use client';

// import React from 'react'
// import { EmblaOptionsType } from 'embla-carousel'
// import { DotButton, useDotButton } from './EmblaCarouselDotButton'
// import {
//   PrevButton,
//   NextButton,
//   usePrevNextButtons
// } from './EmblaCarouselArrowButtons'
// import useEmblaCarousel from 'embla-carousel-react'
// import Image from 'next/image';

// type PropType = {
//   slides: number[]
//   options?: EmblaOptionsType
// }

// const EmblaCarousel: React.FC<PropType> = (props) => {
//   const { slides, options } = props
//   const [emblaRef, emblaApi] = useEmblaCarousel(options)

//   const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

//   const {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick
//   } = usePrevNextButtons(emblaApi)

//   return (
//     <section className="embla py-16 px-4">
//       <div className="embla__viewport" ref={emblaRef}>
//         <div className="embla__container">
//           {slides.map((index) => (
//             <div className="embla__slide rounded-3xl" key={index}>
//               {/* <div className='embla__slide__number'>
//                 <Image 
//                   src="/public.svg"
//                   alt="carousel category images"
//                 />
//               </div> */}
//               <div className="embla__slide__number">{index + 1}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex flex-row justify-between">
//         <div className="flex flex-row py-4">
//           <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} className='mr-2' />
//           <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} className='ml-2'/>
//         </div>

//         <div className="flex flex-row gap-2 items-center">
//           {scrollSnaps.map((_, index) => (
//             <DotButton
//               key={index}
//               onClick={() => onDotButtonClick(index)}
//               className={selectedIndex === index ? 'w-4 h-4 rounded-full border-2 border-cyan-900 opacity-50' : 'w-4 h-4 rounded-full  border-2 opacity-50 border-gray-400'}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default EmblaCarousel
