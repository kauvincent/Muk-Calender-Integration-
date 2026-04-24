import React, { useState } from 'react';
import { CheckCircle, Download, Calendar as CalendarIcon, RefreshCw, Printer, Edit } from 'lucide-react';
import { useSubscription } from '../hooks/useSubscription.js';

export default function DashboardPage() {
  const { subscribe, feedUrl, loading, error } = useSubscription();

  const handleSubscribe = () => {
    // Hardcoded for the authenticated student context
    const studentRegNumber = '23/U/16751/PS';
    subscribe(studentRegNumber);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-4">
      {/* Top Status Bar */}
      <div className="bg-white border border-gray-200 rounded-sm p-3 flex flex-wrap items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-semibold text-[#1A935A]">PROGRAMME:</span>
          <span className="text-gray-700">BACHELOR OF INFORMATION SYSTEMS AND TECHNOLOGY - (BIST)</span>
          <span className="bg-[#1A935A] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm ml-2">ACTIVE</span>
        </div>
        <div className="flex items-center gap-2 text-sm border border-red-300 px-2 py-1 bg-red-50 rounded-sm">
          <span className="text-[#1A935A] text-xs font-semibold">ACADEMIC STATUS:</span>
          <span className="text-red-500 font-semibold text-xs">NORMAL PROGRESS</span>
        </div>
      </div>

      {/* Academic Info Bar */}
      <div className="bg-white border text-xs border-gray-200 rounded-sm px-3 py-2 flex items-center justify-between shadow-sm flex-wrap gap-2">
        <div className="flex items-center gap-3 font-semibold">
          <div className="flex items-center gap-1"><span className="text-gray-800">CURRENT YR.</span><span className="bg-[#1A935A] text-white px-1.5 py-0.5 rounded-sm">2025/2026</span></div>
          <div className="flex items-center gap-1"><span className="text-gray-800">CURRENT SEM.</span><span className="bg-[#1A935A] text-white px-1.5 py-0.5 rounded-sm">SEMESTER II</span></div>
          <div className="flex items-center text-[#1A935A] border border-[#1A935A] px-1.5 py-0.5 rounded-sm bg-green-50"><CheckCircle size={12} className="mr-1" /> ENROLLED</div>
          <div className="flex items-center text-[#1A935A] border border-[#1A935A] px-1.5 py-0.5 rounded-sm bg-green-50"><CheckCircle size={12} className="mr-1" /> REGISTERED</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="border border-red-200 px-2 py-0.5 rounded-sm bg-white"><span className="font-semibold">TOTAL FEES BAL DUE:</span> <span className="text-red-500 font-bold">0/=</span></div>
          <div className="bg-[#1A935A] text-white px-2 py-0.5 rounded-sm font-semibold">BALANCE ON ACCOUNT: 0/=</div>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-sm">
        
        {/* Tabs */}
        <div className="flex items-center justify-between border-b border-gray-200 px-4 pt-3">
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-[#1A935A] border-b-2 border-[#1A935A] pb-2 font-semibold text-sm">
              <Edit size={16} /> ENROLLMENT
            </button>
            <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700 pb-2 font-semibold text-sm">
              <CalendarIcon size={16} /> REGISTRATION
            </button>
          </div>
          <button className="flex items-center gap-1 text-red-500 border border-red-200 bg-red-50 px-3 py-1 rounded-sm text-xs font-semibold mb-2">
            <RefreshCw size={12} /> RELOAD
          </button>
        </div>

        <div className="p-4 space-y-4">
          
          {/* Success Alert */}
          <div className="bg-[#E8F5E9] border border-[#C8E6C9] p-3 rounded-sm flex items-center gap-2 text-[#2E7D32] text-sm font-bold">
            <CheckCircle size={16} className="text-[#1A935A]" /> ENROLLED FOR YEAR 3, SEMESTER II - 2025/2026
          </div>

          {/* Enrollment Details */}
          <div className="flex justify-between items-center mt-6">
            <h3 className="text-[#1A935A] font-bold text-[13px]">ENROLLMENT DETAILS</h3>
            <button className="flex items-center gap-2 text-[#1565C0] border border-[#BBDEFB] bg-[#E3F2FD] px-3 py-1.5 rounded-sm text-xs font-bold shadow-sm hover:bg-[#D0E9fD]">
              <Printer size={12} /> PRINT PROOF OF ENROLLMENT
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#F8F9FA] rounded-sm p-4 border border-gray-200">
               <p className="text-xs text-gray-800 mb-1"><span className="font-bold">ACADEMIC YEAR:</span> 2025/2026</p>
               <p className="text-xs text-gray-800"><span className="font-bold">SEMESTER:</span> SEMESTER II <span className="font-bold ml-2">STUDY YEAR:</span> YEAR 3</p>
            </div>
            <div className="bg-[#F8F9FA] rounded-sm p-4 border border-gray-200">
               <p className="text-xs text-gray-800 mb-1"><span className="font-bold">ENROLLED AS:</span> FINALIST</p>
               <p className="text-xs text-gray-800"><span className="font-bold">ENROLLED BY:</span> SELF</p>
            </div>
            <div className="bg-[#F8F9FA] rounded-sm p-4 border border-gray-200">
               <p className="text-xs text-gray-800 mb-1"><span className="font-bold">ENROLLMENT TOKEN:</span> ENR1426266433</p>
               <p className="text-xs text-gray-800"><span className="font-bold">ENROLLED ON:</span> Tue, Mar 24th 2026, 9:34:14 pm</p>
            </div>
          </div>

          {/* Calendar Feed Section ADDED HERE */}
          <div className="mt-8 border border-[#BBDEFB] rounded-sm overflow-hidden shadow-sm">
            <div className="bg-[#E3F2FD] text-[#0D47A1] px-4 py-2 font-bold text-[12px] flex items-center justify-between cursor-pointer border-b border-[#BBDEFB]">
              <div className="flex items-center gap-2">
                <CalendarIcon size={14} /> TIMETABLE CALENDAR SYNCHRONIZATION
              </div>
              <span className="text-xl leading-none -mt-1 transform rotate-180">^</span>
            </div>
            
            <div className="p-4 bg-white">
              <p className="text-xs text-gray-700 mb-4 font-medium max-w-3xl leading-relaxed">
                Generate an iCalendar (.ics) feed URL to automatically sync your Makerere University timetable with your personal calendar (Google Calendar, Outlook, Apple Calendar).
              </p>
              
              <div>
                <button 
                  onClick={handleSubscribe} 
                  disabled={loading}
                  className="bg-[#1A935A] hover:bg-[#147a4a] text-white px-5 py-3 rounded-sm font-bold text-[11px] transition-colors shadow-sm whitespace-nowrap flex items-center justify-center gap-2"
                >
                  {loading ? 'GENERATING...' : 'GENERATE CALENDAR FEED URL'}
                </button>
              </div>

              {error && (
               <div className="mt-3 p-2 bg-red-50 text-red-700 border border-red-200 rounded-sm text-xs font-semibold">
                  Error: {error}
                </div>
              )}

              {feedUrl && (
                <div className="mt-5 border border-[#C8E6C9] rounded-sm p-4 bg-[#F1F8E9] shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#C8E6C9] rounded-bl-full -mr-8 -mt-8"></div>
                  <CheckCircle size={16} className="absolute top-3 right-3 text-[#2E7D32]" />
                  
                  <p className="text-[#2E7D32] text-xs font-bold mb-2">FEED URL GENERATED SUCCESSFULLY</p>
                  <input 
                    readOnly 
                    value={feedUrl} 
                    className="w-full bg-white border border-[#A5D6A7] rounded-sm px-3 py-2 text-[11px] font-mono outline-none text-gray-800 mb-3 block shadow-inner" 
                    onClick={(e) => e.target.select()}
                  />
                  <div className="flex items-center gap-3">
                     <button 
                       onClick={() => navigator.clipboard.writeText(feedUrl)}
                       className="bg-[#1A935A] border border-[#1A935A] text-white text-[11px] font-bold px-4 py-1.5 rounded-sm shadow-sm hover:bg-[#147a4a] transition-colors"
                     >
                        COPY URL
                     </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
