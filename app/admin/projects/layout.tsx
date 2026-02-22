"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, List, Kanban, MapPin, Calendar,
  Users, FileText, DollarSign, Database, PlusCircle,
  ClipboardList, Bell
} from "lucide-react";

const navItems = [
  { href: "/admin/projects", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/projects/pipeline", label: "Pipeline", icon: Kanban },
  { href: "/admin/projects/list", label: "Projects", icon: List },
  { href: "/admin/projects/map", label: "Map", icon: MapPin },
  { href: "/admin/projects/timeline", label: "Timeline", icon: Calendar },
  { href: "/admin/projects/contractors", label: "Contractors", icon: Users },
  { href: "/admin/projects/proposals", label: "Proposals", icon: FileText },
  { href: "/admin/projects/follow-ups", label: "Follow-ups", icon: Bell },
  { href: "/admin/projects/pricing", label: "Pricing", icon: DollarSign },
  { href: "/admin/projects/sources", label: "Data Sources", icon: Database },
];

export default function AdminProjectsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-gray-100">
      <div className="flex">
        <aside className="hidden lg:flex flex-col w-64 min-h-screen bg-[#0d1225] border-r border-gray-800/50 fixed top-0 left-0 z-40">
          <div className="p-6 border-b border-gray-800/50">
            <Link href="/admin/projects" className="block">
              <h1 className="text-lg font-bold text-white">Imperial Cleaning</h1>
              <p className="text-xs text-cyan-400 mt-1">Project Pipeline</p>
            </Link>
          </div>
          <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = item.exact
                ? pathname === item.href
                : pathname.startsWith(item.href);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    isActive
                      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      : "text-gray-400 hover:bg-gray-800/50 hover:text-gray-200"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="p-3 border-t border-gray-800/50">
            <Link
              href="/admin/projects/quick-add"
              data-testid="nav-quick-add"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm bg-cyan-600 hover:bg-cyan-500 text-white transition-colors w-full"
            >
              <PlusCircle className="w-4 h-4" />
              Quick Add Project
            </Link>
          </div>
        </aside>

        <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-[#0d1225] border-b border-gray-800/50 px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/admin/projects" className="flex items-center gap-2">
              <h1 className="text-sm font-bold text-white">Imperial Pipeline</h1>
            </Link>
            <Link
              href="/admin/projects/quick-add"
              className="bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-1.5 rounded-lg text-xs font-medium"
            >
              + Add
            </Link>
          </div>
          <nav className="flex gap-1 mt-2 overflow-x-auto pb-1 -mx-1 px-1">
            {navItems.map((item) => {
              const isActive = item.exact
                ? pathname === item.href
                : pathname.startsWith(item.href);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs whitespace-nowrap transition-colors ${
                    isActive
                      ? "bg-cyan-500/10 text-cyan-400"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <main className="flex-1 lg:ml-64 min-h-screen">
          <div className="lg:hidden h-24" />
          {children}
        </main>
      </div>
    </div>
  );
}
