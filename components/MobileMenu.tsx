'use client'
import { AlignLeft } from 'lucide-react'
import React, { useState } from 'react'
import SideBar from './SideBar'

const MobileMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
    <div>
        <AlignLeft className='hover:text-darkColor hoverEffect md:hidden'/>
    </div>
    <div className = "md:hidden">
      <SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
    </>
  )
}

export default MobileMenu
