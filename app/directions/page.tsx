import Directions from '@/components/google/directions'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Directions'
}

export default function DirectionMap() {

  return (
    <div>
      <Directions />
    </div>
  )
}


