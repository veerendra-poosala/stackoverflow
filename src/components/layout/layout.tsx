import '../../app/globals.css'
import SideNavBar from './SideNavbar'
import TopBar from './TopBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="layout-bg-container flex flex-row">
      <div className="side-nav-bg-container fixed">
        <SideNavBar open={true} />
      </div>
      <div className="main-container relative left-[220px] flex flex-col shadow-lg w-[82%] -z-40">
        <div className='relative'>
          <TopBar />
          <div className="relative top-14 flex flex-row">
            <div className=''>{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
