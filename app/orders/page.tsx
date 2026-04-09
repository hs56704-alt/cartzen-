import { registeredUser } from '@/hooks/registeredUser';
import React from 'react'

const OrdersPage = async() => {
    await registeredUser();
  return (
    <div>
      OrdersPage
    </div>
  )
}

export default OrdersPage
