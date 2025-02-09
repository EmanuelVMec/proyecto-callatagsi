"use client";

import { useState } from "react";
import { FiBarChart, FiChevronDown } from "react-icons/fi";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "h-screen bg-black text-white p-4 transition-all",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="mb-4 p-2 text-gray-400 hover:text-white"
      >
        <FiChevronDown />
      </button>

      <nav>
        <ul className="space-y-4">
          <li className="flex items-center gap-2">
            <FiBarChart />
            {!collapsed && <span>Dashboard</span>}
          </li>
          <li className="flex items-center gap-2">
            <FiChevronDown />
            {!collapsed && <span>Settings</span>}
          </li>
        </ul>
      </nav>
    </aside>
  );
}
