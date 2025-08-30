import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  FileText, 
  CreditCard, 
  FolderOpen, 
  Calendar, 
  Users, 
  MapPin, 
  Settings 
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Applications", href: "/applications", icon: FileText },
  { name: "Passport Details", href: "/passport-details", icon: CreditCard },
  { name: "Documents", href: "/documents", icon: FolderOpen },
  { name: "Appointments", href: "/appointments", icon: Calendar },
  { name: "Applicants Persona", href: "/applicants", icon: Users },
  { name: "Journey Control", href: "/journey-control", icon: MapPin },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function AdminSidebar() {
  return (
    <div className="flex flex-col h-full w-64 bg-sidebar-bg text-sidebar-foreground">
      {/* Logo/Brand */}
      <div className="flex items-center h-16 px-6 border-b border-sidebar-foreground/10">
        <h1 className="text-xl font-semibold text-white">Visa Admin</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) => `
              flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors
              ${isActive 
                ? "bg-sidebar-active text-white shadow-md" 
                : "text-sidebar-foreground hover:bg-sidebar-foreground/10 hover:text-white"
              }
            `}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-foreground/10">
        <p className="text-xs text-sidebar-foreground/60">
          Visa Consultancy Admin v1.0
        </p>
      </div>
    </div>
  );
}