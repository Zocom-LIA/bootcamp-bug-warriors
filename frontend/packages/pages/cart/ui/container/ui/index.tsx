import { ReactNode } from 'react'
import './style.scss'

type MenuItemsContainerProps = {
  children: ReactNode | ReactNode[],
}

export function MenuItemsContainer({ children } :MenuItemsContainerProps) {
  return (
    <main className='menu-container'>
      {children}
    </main>
  )
}

