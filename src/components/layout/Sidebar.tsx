// src/components/layout/Sidebar.tsx
import type { FC, ReactNode } from "react";
import CustomIcon from "../icons/Custom";

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <aside className="w-20 md:w-64 bg-neutral-900 border-r border-white/10 h-screen sticky top-0 flex flex-col justify-between py-6 px-2 md:px-4">
      <div className="flex flex-col gap-6">{children}</div>
      <div className="mt-auto px-2 md:px-4">
        <button className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white transition">
          <CustomIcon name="refresh" size={18} color="#fff" />
          <span className="hidden md:inline">Refresh</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
