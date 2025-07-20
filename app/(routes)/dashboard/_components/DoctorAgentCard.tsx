import { Button } from '@/components/ui/button'
import { IconArrowRight } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'
type doctorAgent={
    id:number,
    specialist:string,
    description:string,
    image:string,
    agentPrompt:string,
}
type props={
    doctorAgent:doctorAgent
}
function DoctorAgentCard({doctorAgent}:props) {
  return (
    <div>
        <Image src={doctorAgent.image}
            alt={doctorAgent.specialist}
            width={200}
            height={300}
            className='w-full h-[250px] object-cover rounded-xl mt-5'
            />

        <h2 className='font-bold text-lg mt-2'>{doctorAgent.specialist}</h2>
        <p className='line-clamp-2 mt-1 text-grey-500'>{doctorAgent.description}</p>
        <Button className='w-full mt-2'>Start Consultation<IconArrowRight/></Button>
    </div>
  )
}

export default DoctorAgentCard
