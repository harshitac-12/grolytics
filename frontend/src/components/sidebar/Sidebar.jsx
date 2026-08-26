import {
  LayoutDashboard,
  Upload,
  Package,
  ReceiptText,
  BarChart3,
  FileText,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Upload Bills",
      path: "/upload-bills",
      icon: Upload,
    },
    {
      label: "Inventory",
      path: "/inventory",
      icon: Package,
    },
    {
      label: "Purchase History",
      path: "/purchase-history",
      icon: ReceiptText,
    },
    {
      label: "Analytics",
      path: "/analytics",
      icon: BarChart3,
    },
    {
      label: "Reports",
      path: "/reports",
      icon: FileText,
    },
    {
      label: "Alerts",
      path: "/alerts",
      icon: Bell,
    },
  ];

  return (
    <aside className="hidden min-h-screen w-64 shrink-0 flex-col bg-[#0B1F3A] text-white md:flex">

      {/* Logo */}
      <div className="flex h-20 items-center border-b border-white/10 px-6">
        <div>
          <h1 className="text-xl font-bold tracking-tight">
            Grolytics
          </h1>

          <p className="mt-0.5 text-xs text-slate-400">
            Your Grocery Analytics
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Menu
        </p>

        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                <Icon size={19} />

                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* Bottom section */}
      <div className="border-t border-white/10 p-3">

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `mb-1 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-white/10 hover:text-white"
            }`
          }
        >
          <Settings size={19} />
          <span>Settings</span>
        </NavLink>

        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-red-500/10 hover:text-red-300">
          <LogOut size={19} />
          <span>Logout</span>
        </button>

      </div>
    </aside>
  );
}

export default Sidebar;