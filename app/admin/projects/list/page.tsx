"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import {
  Search, Filter, ChevronDown, ChevronUp, Building2,
  MapPin, Calendar, ArrowUpDown, Plus, Eye
} from "lucide-react";
import { PIPELINE_STAGES, BUILDING_TYPES, PRIORITY_LEVELS, CONSTRUCTION_PHASES } from "@/lib/db/schema";

const STAGE_LABELS: Record<string, string> = {
  discovered: "Discovered", researching: "Researching", gc_contacted: "GC Contacted",
  plans_requested: "Plans Requested", plans_received: "Plans Received", estimating: "Estimating",
  bid_submitted: "Bid Submitted", bid_follow_up: "Follow-Up", awarded: "Awarded",
  in_progress: "In Progress", completed: "Completed", lost: "Lost", dormant: "Dormant",
};

const STAGE_COLORS: Record<string, string> = {
  discovered: "bg-gray-500/20 text-gray-400",
  researching: "bg-blue-500/20 text-blue-400",
  gc_contacted: "bg-indigo-500/20 text-indigo-400",
  plans_requested: "bg-violet-500/20 text-violet-400",
  plans_received: "bg-purple-500/20 text-purple-400",
  estimating: "bg-pink-500/20 text-pink-400",
  bid_submitted: "bg-amber-500/20 text-amber-400",
  bid_follow_up: "bg-orange-500/20 text-orange-400",
  awarded: "bg-green-500/20 text-green-400",
  in_progress: "bg-cyan-500/20 text-cyan-400",
  completed: "bg-emerald-500/20 text-emerald-400",
  lost: "bg-red-500/20 text-red-400",
  dormant: "bg-gray-600/20 text-gray-500",
};

export default function ProjectListPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [sort, setSort] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [showFilters, setShowFilters] = useState(false);

  const fetchProjects = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({ page: String(page), limit: "25", sort, order });
    if (search) params.set("search", search);
    Object.entries(filters).forEach(([k, v]) => { if (v) params.set(k, v); });

    try {
      const res = await fetch(`/api/admin/projects?${params}`);
      const data = await res.json();
      setProjects(data.projects || []);
      setTotal(data.total || 0);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [page, search, filters, sort, order]);

  useEffect(() => { fetchProjects(); }, [fetchProjects]);

  const toggleSort = (col: string) => {
    if (sort === col) setOrder(order === "asc" ? "desc" : "asc");
    else { setSort(col); setOrder("asc"); }
  };

  return (
    <div className="p-6 lg:p-8 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">All Projects</h1>
        <Link href="/admin/projects/new" data-testid="button-new-project-list" className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
          <Plus className="w-4 h-4" /> New Project
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            data-testid="input-search-projects"
            type="text"
            placeholder="Search projects, addresses, GCs, permits..."
            className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg pl-10 pr-4 py-2 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500/50"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-2 text-sm text-gray-300 hover:border-gray-600"
        >
          <Filter className="w-4 h-4" /> Filters
          {showFilters ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </button>
      </div>

      {showFilters && (
        <div className="bg-gray-800/30 border border-gray-700/30 rounded-lg p-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          <select
            data-testid="select-pipeline-stage"
            className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300"
            value={filters.pipeline_stage || ""}
            onChange={(e) => { setFilters({ ...filters, pipeline_stage: e.target.value }); setPage(1); }}
          >
            <option value="">All Stages</option>
            {PIPELINE_STAGES.map(s => <option key={s} value={s}>{STAGE_LABELS[s]}</option>)}
          </select>
          <select
            className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300"
            value={filters.building_type || ""}
            onChange={(e) => { setFilters({ ...filters, building_type: e.target.value }); setPage(1); }}
          >
            <option value="">All Types</option>
            {BUILDING_TYPES.map(t => <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1).replace("_", " ")}</option>)}
          </select>
          <select
            className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300"
            value={filters.state || ""}
            onChange={(e) => { setFilters({ ...filters, state: e.target.value }); setPage(1); }}
          >
            <option value="">All States</option>
            <option value="ID">Idaho</option>
            <option value="UT">Utah</option>
          </select>
          <select
            className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300"
            value={filters.priority || ""}
            onChange={(e) => { setFilters({ ...filters, priority: e.target.value }); setPage(1); }}
          >
            <option value="">All Priorities</option>
            {PRIORITY_LEVELS.map(p => <option key={p} value={p}>{p.charAt(0).toUpperCase() + p.slice(1)}</option>)}
          </select>
        </div>
      )}

      <div className="bg-[#111827] border border-gray-800/50 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800/50 text-left">
                <th className="px-4 py-3 text-gray-400 font-medium cursor-pointer hover:text-gray-200" onClick={() => toggleSort("project_name")}>
                  <span className="flex items-center gap-1">Project <ArrowUpDown className="w-3 h-3" /></span>
                </th>
                <th className="px-4 py-3 text-gray-400 font-medium">Location</th>
                <th className="px-4 py-3 text-gray-400 font-medium">GC</th>
                <th className="px-4 py-3 text-gray-400 font-medium">Stage</th>
                <th className="px-4 py-3 text-gray-400 font-medium cursor-pointer hover:text-gray-200" onClick={() => toggleSort("estimated_cleanup_value")}>
                  <span className="flex items-center gap-1">Value <ArrowUpDown className="w-3 h-3" /></span>
                </th>
                <th className="px-4 py-3 text-gray-400 font-medium">Priority</th>
                <th className="px-4 py-3 text-gray-400 font-medium w-16"></th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="border-b border-gray-800/30">
                    <td colSpan={7} className="px-4 py-4"><div className="h-4 bg-gray-800 rounded animate-pulse" /></td>
                  </tr>
                ))
              ) : projects.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center text-gray-500">
                    <Building2 className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p>No projects found</p>
                    <Link href="/admin/projects/new" className="text-cyan-400 text-sm hover:underline mt-1 inline-block">Add your first project</Link>
                  </td>
                </tr>
              ) : (
                projects.map((p) => (
                  <tr key={p.id} className="border-b border-gray-800/30 hover:bg-gray-800/20 transition-colors" data-testid={`row-project-${p.id}`}>
                    <td className="px-4 py-3">
                      <Link href={`/admin/projects/${p.id}`} className="text-white hover:text-cyan-400 font-medium">
                        {p.projectName}
                      </Link>
                      {p.buildingType && <span className="text-gray-500 text-xs ml-2">{p.buildingType}</span>}
                    </td>
                    <td className="px-4 py-3 text-gray-400 text-xs">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {p.city}, {p.state}</span>
                    </td>
                    <td className="px-4 py-3 text-gray-400 text-xs">{p.gcCompanyName || "—"}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded ${STAGE_COLORS[p.pipelineStage] || STAGE_COLORS.discovered}`}>
                        {STAGE_LABELS[p.pipelineStage] || p.pipelineStage}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-300 text-xs">
                      {p.estimatedCleanupValue ? `$${Number(p.estimatedCleanupValue).toLocaleString()}` : "—"}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded border ${
                        p.priority === "hot" ? "bg-red-500/20 text-red-400 border-red-500/30" :
                        p.priority === "high" ? "bg-orange-500/20 text-orange-400 border-orange-500/30" :
                        p.priority === "medium" ? "bg-blue-500/20 text-blue-400 border-blue-500/30" :
                        "bg-gray-500/20 text-gray-400 border-gray-500/30"
                      }`}>
                        {p.priority}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <Link href={`/admin/projects/${p.id}`} className="text-gray-500 hover:text-cyan-400">
                        <Eye className="w-4 h-4" />
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {total > 25 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-800/50">
            <span className="text-xs text-gray-500">{total} projects total</span>
            <div className="flex gap-2">
              <button
                disabled={page <= 1}
                onClick={() => setPage(page - 1)}
                className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded disabled:opacity-50"
              >Prev</button>
              <span className="text-xs text-gray-400 px-2 py-1">Page {page}</span>
              <button
                disabled={page * 25 >= total}
                onClick={() => setPage(page + 1)}
                className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded disabled:opacity-50"
              >Next</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
