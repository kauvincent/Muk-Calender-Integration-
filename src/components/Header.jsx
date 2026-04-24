import React from 'react';
import { Menu, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-[72px] bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-20 w-full md:ml-64 md:max-w-[calc(100%-16rem)] shadow-sm">
      <div className="flex items-center gap-4">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Makerere_University_logo.png/220px-Makerere_University_logo.png" alt="Makerere Logo" className="h-12" />
        <h1 className="text-[#1A935A] font-bold text-sm hidden lg:block tracking-wide uppercase">MAKERERE UNIVERSITY</h1>
        <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 border border-gray-300 px-3 py-1.5 rounded-sm text-xs font-semibold ml-4">
          <Menu size={14} /> MENU
        </button>
      </div>
      
      <div className="hidden xl:flex items-center gap-1.5">
        {['VIEW BIO DATA', 'VIEW RESULTS', 'VIEW INVOICES', 'VIEW FEES STRUCTURE'].map(text => (
          <button key={text} className="text-[10px] font-bold text-gray-800 hover:text-[#1A935A] border border-gray-200 shadow-sm px-2.5 py-1.5 rounded-sm bg-white">{text}</button>
        ))}
        <button className="text-[10px] font-bold text-gray-800 hover:text-[#1A935A] border border-gray-200 shadow-sm px-2.5 py-1.5 rounded-sm bg-white ml-2">Generate PRN</button>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src="https://api.dicebear.com/7.x/initials/svg?seed=KAU" alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <p className="text-[11px] text-gray-700"><span className="text-gray-900 font-semibold">Hi, KAU</span> <span className="text-[8px] ml-1">▼</span></p>
        </div>
        <button className="text-gray-500 hover:text-gray-700 border-l border-gray-200 pl-4">
          <Mail size={16} />
        </button>
      </div>
    </header>
  );
}
