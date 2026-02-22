"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, Building2, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

export default function TimelinePage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    fetch("/api/admin/projects?limit=200")
      .then(r => r.json())
      .then(data => setProjects(data.projects || []))
      .finally(() => setLoading(false));
  }, []);

  const getDaysInMonth = (m: number, y: number) => new Date(y, m + 1, 0).getDate();
  const getFirstDayOfMonth = (m: number, y: number) => new Date(y, m, 1).getDay();

  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = getFirstDayOfMonth(month, year);
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const getProjectsForDate = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return projects.filter(p =>
      p.estimatedCleanupStart === dateStr ||
      p.estimatedDrywallDate === dateStr ||
      p.estimatedFinishDate === dateStr
    );
  };

  const prevMonth = () => { if (month === 0) { setMonth(11); setYear(year - 1); } else setMonth(month - 1); };
  const nextMonth = () => { if (month === 11) { setMonth(0); setYear(year + 1); } else setMonth(month + 1); };

  if (loading) return <div className="p-8"><div className="h-8 bg-gray-800 rounded w-48 animate-pulse" /></div>;

  return (
    <div className="p-6 lg:p-8 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">Timeline</h1>
        <div className="flex items-center gap-3">
          <button onClick={prevMonth} className="p-1 text-gray-400 hover:text-white"><ChevronLeft className="w-5 h-5" /></button>
          <span className="text-white font-medium">{monthNames[month]} {year}</span>
          <button onClick={nextMonth} className="p-1 text-gray-400 hover:text-white"><ChevronRight className="w-5 h-5" /></button>
        </div>
      </div>

      <div className="bg-[#111827] border border-gray-800/50 rounded-xl overflow-hidden">
        <div className="grid grid-cols-7 border-b border-gray-800/50">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
            <div key={day} className="p-2 text-center text-xs text-gray-500 font-medium">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} className="min-h-[80px] p-1 border-b border-r border-gray-800/20" />
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const dayProjects = getProjectsForDate(day);
            const isToday = day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear();

            return (
              <div key={day} className={`min-h-[80px] p-1 border-b border-r border-gray-800/20 ${isToday ? "bg-cyan-500/5" : ""}`}>
                <span className={`text-xs ${isToday ? "text-cyan-400 font-bold" : "text-gray-500"}`}>{day}</span>
                <div className="space-y-0.5 mt-0.5">
                  {dayProjects.map(p => {
                    const isCleanup = p.estimatedCleanupStart === `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                    const isDrywall = p.estimatedDrywallDate === `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                    return (
                      <Link key={p.id} href={`/admin/projects/${p.id}`}
                        className={`block text-[10px] px-1 py-0.5 rounded truncate ${
                          isCleanup ? "bg-green-500/20 text-green-400" :
                          isDrywall ? "bg-amber-500/20 text-amber-400" :
                          "bg-blue-500/20 text-blue-400"
                        }`}
                        title={p.projectName}
                      >
                        {p.projectName}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex gap-4 text-xs text-gray-500">
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-green-500/30" /> Cleanup Start</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-amber-500/30" /> Drywall Date</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-blue-500/30" /> Finish Date</span>
      </div>
    </div>
  );
}
