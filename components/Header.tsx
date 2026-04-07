import React from 'react'
import HeaderMenu from './HeaderMenu'
import Logo from './Logo'
import Container from './Container'
import { Button } from './ui/button'
import Image from 'next/image'
import MobileMenu from './MobileMenu'


const Header = () => {
  return (
    <header className = "border-b border-b-gray-400 py-5">
        <Container className="flex items-center justify-between gap-7 text-lightColor">
          <Logo>
            <Image src="/logo.png" alt="Cartzen Logo" width={130} height={130} />
          </Logo>
          <MobileMenu />
          <HeaderMenu />
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">Login</Button>
            <Button variant="outline" size="sm">Cart</Button>
          </div>
        </Container>
      </header>
  )
}

export default Header
