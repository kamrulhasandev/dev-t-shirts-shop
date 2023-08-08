import Service from '@/components/Service/Service'
import Slider from '@/components/slider/Slider'
import Image from 'next/image'
import AllProduct from './products/page'
import Payment from '@/components/Payment/Payment'



export default function Home() {
  return (
    <div>
      <Slider/>
      <Service/>
      <AllProduct/>
      <Payment/>
    </div>
  )
}
