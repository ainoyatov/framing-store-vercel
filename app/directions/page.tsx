import Directions from '@/components/google/directions'
import Maps from '@/components/Map'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Directions'
}

const MapsDirections = () => {

  return (
    <div>
      <Directions />
    </div>
  )
}

export default MapsDirections
