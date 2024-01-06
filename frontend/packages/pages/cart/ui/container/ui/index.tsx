import { ReactNode } from 'react'
import './style.scss'

type CartItemsContainerProps = {
  children: ReactNode | ReactNode[],
}

export function CartItemsContainer({ children } :CartItemsContainerProps) {
  return (
    <main className='cart-container'>
      {children}
    </main>
  )
}

