'use client'
import Image from 'next/image'
import CountUp from 'react-countup';

const RightChoice = () => {
  return (
    <div className="py-20 px-5 md:px-0">
      <div className="max-w-screen-xl mx-auto">
        <div className='grid md:grid-cols-2 gap-10 justify-between items-center'>
            <div className='flex flex-col gap-3'>
                <p>The Right Choice</p>
                <h2 className='text-4xl font-bold'>We are The Best Programming T-shirt Company in Town, Trust Us!</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum totam facere culpa aliquid? Optio tempora natus officia! Consequatur nostrum minima, culpa non odit sequi mollitia? Consectetur voluptatum, nobis eaque voluptatem officiis, soluta deserunt ex eos, porro ipsum laudantium accusamus iusto ipsam? Quod laborum accusantium porro nulla iusto non iste officiis quisquam in voluptatem magni, magnam rem mollitia, delectus vero tenetur et!</p>
                <div className="flex gap-10">
                <div>
                    <h1 className='text-3xl text-orange-500 font-bold'>
                    <CountUp end={14000} />
                    +
                    </h1>
                    <p>Sold Goods by Product</p>
                </div>
                <div>
                    <h1 className='text-3xl text-black font-bold'>
                    <CountUp end={6000} />
                    +
                    </h1>
                    <p>Trusted by Client</p>
                </div>
                </div>
            </div>
            <div className="md:flex items-center gap-3">
                <div className="flex flex-col gap-1 justify-center bg-slate-100 p-5 rounded mb-3 md:mb-0">
                    <Image src={'https://i.ibb.co/Qngfps8/cashback.png'} alt='moneyback' width={100} height={100}/>
                    <h5>Money Back Grunted</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, placeat.</p>
                </div>
                <div className='flex flex-col gap-3'>
                <div className="flex flex-col gap-1 item-center bg-slate-100 p-5 rounded">
                    <Image src={'https://i.ibb.co/7Y20D3R/fabric.png'} alt='moneyback' width={100} height={100}/>
                    <h5>Best Fabric</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, placeat.</p>
                </div>
                <div className="flex flex-col gap-1 item-center bg-slate-100 p-5 rounded">
                    <Image src={'https://i.ibb.co/kHRmPhV/printer.png'} alt='moneyback' width={100} height={100}/>
                    <h5>Good Print</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, placeat.</p>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default RightChoice