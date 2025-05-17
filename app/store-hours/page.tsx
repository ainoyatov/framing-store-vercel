import React from 'react'
import { Metadata } from 'next'
import NextImage from 'next/image'

export const metadata: Metadata = {
  title: 'Store Hours',
  description: 'Frame shop store hours, open on weekdays, open Saturdays, closed Sundays',
  robots: {
    follow: true,
    index: true,
  },
}

const StoreHoursPage = () => {
  return (
    <div>
      <div className="mt-8 max-md:mt-10 flex justify-center text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#026974] to-[#00a8e8] bg-clip-text text-transparent">
          Store Hours
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row pt-8 px-4 sm:px-8 justify-between gap-8 sm:gap-0">
        {/* Monday - Friday */}
        <div className="flex flex-col items-center text-center">
          <div className="text-3xl lg:text-4xl">Mon - Fri</div>
          <NextImage
            src="/weekday-working-hours.svg"
            alt="Weekday hours of operation"
            width={350}
            height={30}
          />
          <div className="max-sm:hidden mt-2 text-lg">10:00 AM - 5:00 PM</div>
        </div>

        {/* Saturday */}
        <div className="flex flex-col items-center text-center">
          <div className="text-3xl lg:text-4xl">Saturday</div>
          <NextImage
            src="/weekend-working-hours.svg"
            alt="Saturday hours of operation"
            width={350}
            height={30}
          />
          <div className="max-sm:hidden mt-2 text-lg">11:00 AM - 3:00 PM</div>
        </div>

        {/* Sunday */}
        <div className="flex flex-col items-center text-center">
          <div className="text-3xl lg:text-4xl">Sunday</div>
          <NextImage
            src="/sunday-work-hours.svg"
            alt="Sunday hours of operation"
            width={350}
            height={30}
          />
          <div className="max-sm:hidden mt-2 text-lg">Day off</div>
        </div>
      </div>

      {/* Call Now Button */}
      <div className="flex justify-center sm:py-16 ">
        <a
          href="tel:4802687182"
          className="px-6 py-3 bg-cyan-500 dark:bg-white dark:text-black text-white rounded-full transition-colors hover:border-gray-300 hover:bg-fuchsia-400 hover:dark:border-neutral-700 hover:dark:bg-blue-200 drop-shadow-2xl"
        >
          Call Now
        </a>
      </div>
    </div>
  )
}

export default StoreHoursPage
