import { SidebarContext } from '../contexts/SidebarContext'
import { useContext } from 'react'

function useSidebarContext() {
  return useContext(SidebarContext)
}

export default useSidebarContext