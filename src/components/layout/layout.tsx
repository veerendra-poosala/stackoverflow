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
      <div className="side-nav-bg-container">
        <SideNavBar open={true} />
      </div>
      <div className="main-container flex flex-col">
        <div>
          <TopBar />
          <div className="flex flex-row">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
