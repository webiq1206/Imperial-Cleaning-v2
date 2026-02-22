"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Building2, DollarSign, FileText, TrendingUp, AlertTriangle,
  ArrowRight, Clock, Phone, MapPin, Briefcase
} from "lucide-react";

interface DashboardStats {
  activeProjects: number;
  pipelineValue: number;
  bidsOutstanding: number;
  winRate: number;
  recentActivities: any[];
  hotProjects: any[];
  stageBreakdown: Record<string, number>;
}

const PIPELINE_STAGE_LABELS: Record<string, string> = {
  discovered: "Discovered",
  researching: "Researching",
  gc_contacted: "GC Contacted",
  plans_requested: "Plans Requested",
  plans_received: "Plans Received",
  estimating: "Estimating",
  bid_submitted: "Bid Submitted",
  bid_follow_up: "Follow-Up",
  awarded: "Awarded",
  in_progress: "In Progress",
  completed: "Completed",
  lost: "Lost",
  dormant: "Dormant",
};

const PRIORITY_COLORS: Record<string, string> = {
  hot: "bg-red-500/20 text-red-400 border-red-500/30",
  high: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  medium: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  low: "bg-gray-500/20 text-gray-400 border-gray-500/30",
};

const ACTIVITY_ICONS: Record<string, string> = {
  email: "📧",
  phone_call: "📞",
  site_visit: "🏗️",
  meeting: "🤝",
  bid_submitted: "📄",
  plans_received: "📋",
  follow_up: "🔔",
  note: "📝",
  drive_by: "🚗",
  stage_change: "➡️",
};

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((r) => r.json())
      .then(setStats)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="p-6 lg:p-8">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-gray-800 rounded w-48" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-28 bg-gray-800/50 rounded-xl" />
            ))}
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="h-64 bg-gray-800/50 rounded-xl" />
            <div className="h-64 bg-gray-800/50 rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  if (!stats) return <div className="p-8 text-gray-400">Failed to load dashboard data</div>;

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white" data-testid="text-dashboard-title">Project Pipeline</h1>
          <p className="text-gray-400 text-sm mt-1">Construction project prospecting & bid management</p>
        </div>
        <Link
          href="/admin/projects/new"
          data-testid="button-new-project"
          className="hidden sm:flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          <Building2 className="w-4 h-4" />
          New Project
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Active Projects"
          value={stats.activeProjects}
          icon={<Building2 className="w-5 h-5" />}
          color="cyan"
        />
        <MetricCard
          title="Pipeline Value"
          value={`$${stats.pipelineValue.toLocaleString()}`}
          icon={<DollarSign className="w-5 h-5" />}
          color="green"
        />
        <MetricCard
          title="Bids Outstanding"
          value={stats.bidsOutstanding}
          icon={<FileText className="w-5 h-5" />}
          color="amber"
        />
        <MetricCard
          title="Win Rate"
          value={`${stats.winRate}%`}
          icon={<TrendingUp className="w-5 h-5" />}
          color="purple"
        />
      </div>

      {Object.keys(stats.stageBreakdown).length > 0 && (
        <div className="bg-[#111827] border border-gray-800/50 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Pipeline Overview</h2>
            <Link href="/admin/projects/pipeline" className="text-cyan-400 text-sm hover:underline flex items-center gap-1">
              View Board <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.entries(PIPELINE_STAGE_LABELS).map(([stage, label]) => {
              const count = stats.stageBreakdown[stage] || 0;
              if (count === 0) return null;
              return (
                <div key={stage} className="bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-2 text-center min-w-[80px]">
                  <div className="text-lg font-bold text-white">{count}</div>
                  <div className="text-xs text-gray-400">{label}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-[#111827] border border-gray-800/50 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              Hot Projects
            </h2>
          </div>
          {stats.hotProjects.length === 0 ? (
            <p className="text-gray-500 text-sm">No hot projects at the moment. Add projects and set priority to &quot;hot&quot; or &quot;high&quot;.</p>
          ) : (
            <div className="space-y-3">
              {stats.hotProjects.map((project: any) => (
                <Link
                  key={project.id}
                  href={`/admin/projects/${project.id}`}
                  data-testid={`card-hot-project-${project.id}`}
                  className="block bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700/30 rounded-lg p-3 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="font-medium text-white text-sm truncate">{project.projectName}</h3>
                      <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {project.city}, {project.state}
                      </p>
                    </div>
                    <span className={`shrink-0 text-xs px-2 py-0.5 rounded border ${PRIORITY_COLORS[project.priority] || PRIORITY_COLORS.medium}`}>
                      {project.priority}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                    {project.gcCompanyName && (
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3 h-3" /> {project.gcCompanyName}
                      </span>
                    )}
                    <span>{PIPELINE_STAGE_LABELS[project.pipelineStage] || project.pipelineStage}</span>
                    {project.estimatedCleanupValue && (
                      <span className="text-green-400">${Number(project.estimatedCleanupValue).toLocaleString()}</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="bg-[#111827] border border-gray-800/50 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-cyan-400" />
            Recent Activity
          </h2>
          {stats.recentActivities.length === 0 ? (
            <p className="text-gray-500 text-sm">No activity yet. Start by adding a project and logging your outreach.</p>
          ) : (
            <div className="space-y-3 max-h-[400px] overflow-y-auto">
              {stats.recentActivities.map((activity: any) => (
                <div key={activity.id} className="flex items-start gap-3 text-sm border-b border-gray-800/30 pb-3 last:border-0">
                  <span className="text-lg mt-0.5">{ACTIVITY_ICONS[activity.activityType] || "📋"}</span>
                  <div className="min-w-0">
                    <p className="text-gray-200 truncate">{activity.subject || activity.activityType}</p>
                    {activity.details && (
                      <p className="text-gray-500 text-xs truncate mt-0.5">{activity.details}</p>
                    )}
                    <p className="text-gray-600 text-xs mt-1">
                      {new Date(activity.createdAt).toLocaleDateString()} · {activity.completedBy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, icon, color }: { title: string; value: string | number; icon: React.ReactNode; color: string }) {
  const colorClasses: Record<string, string> = {
    cyan: "from-cyan-500/10 to-transparent border-cyan-500/20 text-cyan-400",
    green: "from-green-500/10 to-transparent border-green-500/20 text-green-400",
    amber: "from-amber-500/10 to-transparent border-amber-500/20 text-amber-400",
    purple: "from-purple-500/10 to-transparent border-purple-500/20 text-purple-400",
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} border rounded-xl p-4`} data-testid={`metric-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-400">{title}</span>
        {icon}
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}
