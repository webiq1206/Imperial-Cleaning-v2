"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Bell, Calendar, Phone, Building2, AlertTriangle, Clock } from "lucide-react";

export default function FollowUpsPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/follow-ups")
      .then(r => r.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-8"><div className="h-8 bg-gray-800 rounded w-48 animate-pulse" /></div>;

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <h1 className="text-xl font-bold text-white">Follow-ups & Reminders</h1>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="bg-[#111827] border border-gray-800/50 rounded-xl p-4">
          <h2 className="text-sm font-medium text-amber-400 flex items-center gap-2 mb-3">
            <Clock className="w-4 h-4" /> Scheduled Follow-ups ({data?.followUps?.length || 0})
          </h2>
          {(!data?.followUps || data.followUps.length === 0) ? (
            <p className="text-gray-500 text-sm">No follow-ups scheduled</p>
          ) : (
            <div className="space-y-2 max-h-[500px] overflow-y-auto">
              {data.followUps.map((f: any) => (
                <div key={f.id} className="bg-gray-800/30 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-white">{f.nextAction || f.subject}</p>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      new Date(f.nextActionDate) < new Date() ? "bg-red-500/20 text-red-400" : "bg-amber-500/20 text-amber-400"
                    }`}>
                      {f.nextActionDate}
                    </span>
                  </div>
                  {f.details && <p className="text-xs text-gray-500 mt-1">{f.details}</p>}
                  {f.projectId && (
                    <Link href={`/admin/projects/${f.projectId}`} className="text-xs text-cyan-400 hover:underline mt-1 inline-block">
                      View Project →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-[#111827] border border-gray-800/50 rounded-xl p-4">
          <h2 className="text-sm font-medium text-red-400 flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4" /> Approaching Cleanup ({data?.approachingCleanup?.length || 0})
          </h2>
          {(!data?.approachingCleanup || data.approachingCleanup.length === 0) ? (
            <p className="text-gray-500 text-sm">No projects with approaching cleanup dates in the next 30 days</p>
          ) : (
            <div className="space-y-2 max-h-[500px] overflow-y-auto">
              {data.approachingCleanup.map((p: any) => (
                <Link key={p.id} href={`/admin/projects/${p.id}`} className="bg-gray-800/30 hover:bg-gray-800/50 rounded-lg p-3 block transition-colors">
                  <p className="text-sm text-white">{p.projectName}</p>
                  <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                    <Building2 className="w-3 h-3" /> {p.city}, {p.state}
                    <Calendar className="w-3 h-3 ml-2" /> Cleanup: {p.estimatedCleanupStart}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="bg-[#111827] border border-gray-800/50 rounded-xl p-4">
          <h2 className="text-sm font-medium text-purple-400 flex items-center gap-2 mb-3">
            <Phone className="w-4 h-4" /> Outreach Needed ({data?.outreachNeeded?.length || 0})
          </h2>
          {(!data?.outreachNeeded || data.outreachNeeded.length === 0) ? (
            <p className="text-gray-500 text-sm">No projects approaching drywall phase that need outreach</p>
          ) : (
            <div className="space-y-2 max-h-[500px] overflow-y-auto">
              {data.outreachNeeded.map((p: any) => (
                <Link key={p.id} href={`/admin/projects/${p.id}`} className="bg-gray-800/30 hover:bg-gray-800/50 rounded-lg p-3 block transition-colors">
                  <p className="text-sm text-white">{p.projectName}</p>
                  <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                    <span className="capitalize">{(p.currentPhase || "").replace(/_/g, " ")}</span>
                    <span className="capitalize">{(p.pipelineStage || "").replace(/_/g, " ")}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
