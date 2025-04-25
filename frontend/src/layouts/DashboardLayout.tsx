import { Outlet } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import DashboardSidebar from '../components/dashboard/DashboardSidebar'

const DashboardLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        <DashboardSidebar />
        <main className="flex-grow p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default DashboardLayout
