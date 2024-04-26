import Navbar from "./_components/navbar";
import OrgSidebar from "./_components/org-sidebart";
import Sidebar from "./_components/sidebar";

const DashboardLayout = ({children} : {children: React.ReactNode}) => {
  return ( 
    <div className="h-full">
      <Sidebar />

      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />

          <div className="h-full flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default DashboardLayout;