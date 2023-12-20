import { ReactNode } from 'react'
import './style.scss'

type MenuContainerProps = {
  children: ReactNode | ReactNode[],
}

export function MenuContainer({ children } :MenuContainerProps) {
  return (
    <main className='menu-container'>
      {children}
    </main>
  )
}

