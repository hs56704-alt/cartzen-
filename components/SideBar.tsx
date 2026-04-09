import React, { FC } from 'react'
import { motion } from "motion/react"
import Logo from './Logo';


interface SidebarProps{
    isOpen: boolean;
    onClose: () => void;
}

const SideBar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div className='fixed inset-y-0 left-0 z-50 bg-darkColor/50 shadow-xl howerEffect w-full'>
      <motion.div>
        <div className='min-w-72 max-w-96 bg-darkColor text-white/90 h-full p-10 border-r border-r-white>
            <Logo>
            <img
              src="/logo.png"
              alt="Cartzen Logo"
              width={130}
              height={120}
              priority
              
            />
            </Logo>
        </div>
      </motion.div>
    </div>
  )
}

export default SideBar
