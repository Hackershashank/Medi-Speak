import React from 'react'
import HistoryList from './_components/HistoryList'
import { Button } from '@/components/ui/button'
import DoctorsAgentList from './_components/DoctorsAgentList'

function DashBoard(){
  return (
    <div>
        <div>
            <div className='flex justify-between items-center'>
              <h2 className='font-bold text-2xl'>My DashBoard</h2>
              <Button>Consult with Doctor</Button>
            </div>  
            <HistoryList/>
            <DoctorsAgentList/>
        </div>
        
             
    </div>
  )
}

export default DashBoard
