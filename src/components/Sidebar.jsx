import React from 'react';
import { Hash, Edit, DollarSign, GraduationCap, Briefcase, CheckCircle, User, Mail, Calendar, ClipboardList } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { name: 'GENERATE PRN', icon: Hash, hasArrow: false },
    { name: 'ENROLLMENT & REGISTRATION...', icon: Edit, active: true, hasArrow: true },
    { name: 'PAYMENTS', icon: DollarSign, hasArrow: true },
    { name: 'MY PROGRAMME', icon: GraduationCap, hasArrow: true },
    { name: 'SERVICES', icon: Briefcase, hasArrow: true },
    { name: 'E-VOTING', icon: CheckCircle, hasArrow: true },
    { name: 'BIO DATA', icon: User, hasArrow: false },
    { name: 'MY MAILBOX', icon: Mail, hasArrow: false },
    { name: 'ACADEMIC CALENDAR', icon: Calendar, hasArrow: false },
    { name: 'EVALUATION SURVEYS', icon: ClipboardList, hasArrow: false },
  ];

  return (
    <div className="w-64 bg-[#2C3B4E] min-h-screen flex flex-col fixed left-0 top-0 z-30 shadow-lg hidden md:flex">
      {/* Profile Header */}
      <div className="bg-[#2B3B4C] pt-6 pb-4 flex flex-col items-center justify-center border-b border-gray-700">
        <div className="w-20 h-20 bg-white rounded-sm p-1 mb-3">
           <img src="https://api.dicebear.com/7.x/initials/svg?seed=KAU" alt="Profile" className="w-full h-full object-cover rounded-sm grayscale-[20%]" />
        </div>
        <h2 className="text-white text-[13px] font-semibold text-center">KAU Vincent James</h2>
        <p className="text-white text-[11px] text-center font-bold mt-0.5">STUDENT NO.: 2300700547</p>
      </div>
      
      <nav className="flex-1 py-1 overflow-y-auto bg-white">
        <ul className="space-y-0">
          {menuItems.map((item, idx) => {
            const IconName = item.icon;
            return (
              <li key={idx} className="border-b border-gray-100 last:border-0 relative">
                {item.active && (
                   <div className="absolute left-0 top-0 h-full w-1 bg-[#1A935A]"></div>
                )}
                <a
                  href="#"
                  className={`flex items-center justify-between px-5 py-3.5 text-[11px] font-bold transition-colors ${
                    item.active 
                      ? 'text-[#1A935A] bg-gray-50/50' 
                      : 'text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3 w-full">
                    <span className="text-[10px] font-normal text-gray-500 w-3">{String(idx + 1).padStart(2, '0')}</span>
                    <IconName size={14} className={item.active ? 'text-[#1A935A]' : 'text-gray-500'} />
                    <span className="uppercase tracking-wide">{item.name}</span>
                  </div>
                  {item.hasArrow && (
                    <span className="text-[10px] transform rotate-90 opacity-60">❯</span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
