import Directions from '@/components/google/directions'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Directions',
  description: 'Picture framing store in Scottsdale, Custom framing near Scottsdale, Art framing in Scottsdale',
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

