import React from 'react'
import job from '../assets/jobRole.jpg'
import {Star} from "lucide-react"
import { Divider } from '@mui/material'
const SmallCard = () => {
  return (
    <div className='border-1 border-gray-400 rounded-2xl p-4'>
        <img src={job} alt=""  className='h-13 w-17'/>
        <p className='font-bold text-xs text-200 p-1'>LinkedIn</p>
        <div className='flex items-center'>
            <Star size={20} color="yellow" />
            <p className='text-xs text-amber-300'>4.5</p>
            <Divider orientation="vertical" className='mx-2' />
            <p className='text-xs text-gray-600'>8.3K + reviews</p>
        </div>
    </div>
  )
}
export default SmallCard;