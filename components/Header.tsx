import React from 'react'
import HeaderMenu from './HeaderMenu'
import Logo from './Logo'
import Container from './Container'
import { Button } from './ui/button'
import Image from 'next/image'
import MobileMenu from './MobileMenu'
import { ListOrdered, Search, ShoppingBag } from 'lucide-react'
import CartIcon from './CartIcon'
import SearchBar from './SearchBar'
import { currentUser } from '@clerk/nextjs/server'
import { ClerkLoaded, SignInButton, UserButton, Show } from '@clerk/nextjs'
import Link from 'next/link'



const Header = async () => {
  const user = await currentUser();
  console.log(user)
  

  return (
    <header className = "border-b border-b-gray-400 py-5">
        <Container className="flex items-center justify-between gap-7 text-lightColor">
          <MobileMenu />
          <Logo>
           <Image
              src="/logo.png"
              alt="Cartzen Logo"
              width={130}
              height={120}
              priority
              style={{ width: '100px', height: '30px' }}
            />
          </Logo>
          <div className = "w-auto md:w-1/3 flex items-center justify-center gap-1.5">
          
          <HeaderMenu />
          </div>
          <div className="w-auto md:w-1/3 flex items-center justify-end gap-3">
            <SearchBar />
            <CartIcon />
            <ClerkLoaded>
              <Show when="signed-in">
                 <Link href = {"/orders"} className="group relative">
                    <ListOrdered className='w-5 h-5 group-hover:text-darkColor hoverEffect' />
                    <span className = "absolute -top-1 -right-1 bg-darkColor text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">0</span>
                 </Link>
                 <UserButton />
              </Show>
            { !user && (
            <SignInButton mode = "modal" >
              <button className='text-sm font-semibold hover:text-darkColor hoverEffect'>Login</button>
            </SignInButton>
            )}
            </ClerkLoaded>
            </div>
            
        </Container>
    </header>
  )
}

export default Header
