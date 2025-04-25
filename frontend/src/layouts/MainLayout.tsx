import { Outlet } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import SearchOverlay from '../components/layout/SearchOverlay'
import { useState } from 'react'

const MainLayout = () => {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <Header onSearchClick={() => setSearchOpen(true)} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}

export default MainLayout
