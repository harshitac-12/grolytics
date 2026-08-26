import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#F0FAFA]">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex min-w-0 flex-1 flex-col">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          {children}
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;