import Directions from '@/components/google/directions'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Directions',
  description: 'Visit our frame shop in Scottsdale. Find simple directions, parking info, and store hours to make your visit easy and stress-free.',
  robots: {
    follow: true,
    index: true
  },
}

export default function DirectionMap() {

  return (
    <div>
      <Directions />
    </div>
  )
}

