
import '../../app/globals.css';
import SideNavBar from './SideNavbar';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='layout-bg-container'>
      <div className='side-nav-bg-container'>
        <SideNavBar open={true} />
      </div>
      <div>
        {children}
      </div>
    </div>
    
    
  )
}
