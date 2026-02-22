"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Building2, DollarSign, MapPin, GripVertical, Briefcase } from "lucide-react";

const STAGES = [
  { key: "discovered", label: "Discovered", color: "border-gray-500" },
  { key: "researching", label: "Researching", color: "border-blue-500" },
  { key: "gc_contacted", label: "GC Contacted", color: "border-indigo-500" },
  { key: "plans_requested", label: "Plans Requested", color: "border-violet-500" },
  { key: "plans_received", label: "Plans Received", color: "border-purple-500" },
  { key: "estimating", label: "Estimating", color: "border-pink-500" },
  { key: "bid_submitted", label: "Bid Submitted", color: "border-amber-500" },
  { key: "bid_follow_up", label: "Follow-Up", color: "border-orange-500" },
  { key: "awarded", label: "Awarded", color: "border-green-500" },
  { key: "in_progress", label: "In Progress", color: "border-cyan-500" },
  { key: "completed", label: "Completed", color: "border-emerald-500" },
  { key: "lost", label: "Lost", color: "border-red-500" },
  { key: "dormant", label: "Dormant", color: "border-gray-600" },
];

export default function PipelinePage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [draggedProject, setDraggedProject] = useState<string | null>(null);

  const fetchProjects = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/projects?limit=200");
      const data = await res.json();
      setProjects(data.projects || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchProjects(); }, [fetchProjects]);

  const moveToStage = async (projectId: string, newStage: string) => {
    setProjects(prev =>
      prev.map(p => p.id === projectId ? { ...p, pipelineStage: newStage } : p)
    );

    try {
      await fetch(`/api/admin/projects/${projectId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pipeline_stage: newStage }),
      });
    } catch (e) {
      fetchProjects();
    }
  };

  const handleDragStart = (e: React.DragEvent, projectId: string) => {
    setDraggedProject(projectId);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, stage: string) => {
    e.preventDefault();
    if (draggedProject) {
      moveToStage(draggedProject, stage);
      setDraggedProject(null);
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="h-8 bg-gray-800 rounded w-48 animate-pulse mb-4" />
        <div className="flex gap-4 overflow-x-auto">
          {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-72 h-96 bg-gray-800/30 rounded-xl animate-pulse shrink-0" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-xl font-bold text-white mb-4" data-testid="text-pipeline-title">Pipeline Board</h1>
      <div className="flex gap-3 overflow-x-auto pb-4" style={{ minHeight: "calc(100vh - 180px)" }}>
        {STAGES.map((stage) => {
          const stageProjects = projects.filter(p => p.pipelineStage === stage.key);
          const stageValue = stageProjects.reduce((sum, p) => sum + (Number(p.estimatedCleanupValue) || 0), 0);

          return (
            <div
              key={stage.key}
              className={`w-72 shrink-0 bg-[#111827]/50 rounded-xl border-t-2 ${stage.color} flex flex-col`}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, stage.key)}
              data-testid={`pipeline-column-${stage.key}`}
            >
              <div className="p-3 border-b border-gray-800/30">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-300">{stage.label}</h3>
                  <span className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full">{stageProjects.length}</span>
                </div>
                {stageValue > 0 && (
                  <p className="text-xs text-green-400 mt-1">${stageValue.toLocaleString()}</p>
                )}
              </div>
              <div className="flex-1 p-2 space-y-2 overflow-y-auto">
                {stageProjects.map((project) => (
                  <div
                    key={project.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, project.id)}
                    className={`bg-gray-800/40 hover:bg-gray-800/60 border border-gray-700/30 rounded-lg p-3 cursor-grab active:cursor-grabbing transition-colors ${
                      draggedProject === project.id ? "opacity-50" : ""
                    }`}
                    data-testid={`pipeline-card-${project.id}`}
                  >
                    <Link href={`/admin/projects/${project.id}`} className="block">
                      <h4 className="text-sm font-medium text-white truncate hover:text-cyan-400">{project.projectName}</h4>
                      <div className="flex items-center gap-2 mt-1.5 text-xs text-gray-500">
                        <span className="flex items-center gap-0.5"><MapPin className="w-3 h-3" /> {project.city}</span>
                        {project.buildingType && <span className="capitalize">{project.buildingType}</span>}
                      </div>
                      {project.gcCompanyName && (
                        <p className="text-xs text-gray-500 mt-1 flex items-center gap-1 truncate">
                          <Briefcase className="w-3 h-3" /> {project.gcCompanyName}
                        </p>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        {project.estimatedCleanupValue ? (
                          <span className="text-xs text-green-400">${Number(project.estimatedCleanupValue).toLocaleString()}</span>
                        ) : <span />}
                        <span className={`text-xs px-1.5 py-0.5 rounded border ${
                          project.priority === "hot" ? "bg-red-500/20 text-red-400 border-red-500/30" :
                          project.priority === "high" ? "bg-orange-500/20 text-orange-400 border-orange-500/30" :
                          "bg-gray-700/50 text-gray-500 border-gray-600/50"
                        }`}>
                          {project.priority}
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
