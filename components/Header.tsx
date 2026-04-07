import React from 'react'
import HeaderMenu from './HeaderMenu'
import Logo from './Logo'
import Container from './Container'
import { Button } from './ui/button'


const Header = () => {
  return (
    <header className = "border-b border-b-gray-400 py-5">
        <Container className="flex items-center justify-between gap-7 text-lightColor">
          <Logo />
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
