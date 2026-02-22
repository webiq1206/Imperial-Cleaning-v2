"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MapPin, Building2, DollarSign, Filter, Layers } from "lucide-react";

const PHASE_COLORS: Record<string, { bg: string; text: string; label: string }> = {
  pre_construction: { bg: "bg-gray-400", text: "text-gray-400", label: "Pre-Construction" },
  site_work: { bg: "bg-gray-400", text: "text-gray-400", label: "Site Work" },
  foundation: { bg: "bg-gray-400", text: "text-gray-400", label: "Foundation" },
  framing: { bg: "bg-yellow-400", text: "text-yellow-400", label: "Framing" },
  rough_in: { bg: "bg-yellow-400", text: "text-yellow-400", label: "Rough-In" },
  drywall: { bg: "bg-orange-400", text: "text-orange-400", label: "Drywall" },
  interior_finishes: { bg: "bg-orange-400", text: "text-orange-400", label: "Interior Finishes" },
  exterior_finishes: { bg: "bg-orange-400", text: "text-orange-400", label: "Exterior Finishes" },
  punch_list: { bg: "bg-red-400", text: "text-red-400", label: "Punch List" },
  final_inspection: { bg: "bg-red-400", text: "text-red-400", label: "Final Inspection" },
  complete: { bg: "bg-green-400", text: "text-green-400", label: "Complete" },
};

const STAGE_COLORS: Record<string, { bg: string; text: string }> = {
  awarded: { bg: "bg-green-400", text: "text-green-400" },
  in_progress: { bg: "bg-cyan-400", text: "text-cyan-400" },
  bid_submitted: { bg: "bg-amber-400", text: "text-amber-400" },
  lost: { bg: "bg-red-400", text: "text-red-400" },
};

export default function MapPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [colorBy, setColorBy] = useState<"phase" | "stage">("phase");

  useEffect(() => {
    fetch("/api/admin/projects?limit=200")
      .then(r => r.json())
      .then(data => setProjects(data.projects || []))
      .finally(() => setLoading(false));
  }, []);

  const idahoProjects = projects.filter(p => p.state === "ID");
  const utahProjects = projects.filter(p => p.state === "UT");

  const getColor = (project: any) => {
    if (colorBy === "phase") {
      return PHASE_COLORS[project.currentPhase]?.bg || "bg-gray-400";
    }
    return STAGE_COLORS[project.pipelineStage]?.bg || "bg-blue-400";
  };

  if (loading) return <div className="p-8"><div className="h-8 bg-gray-800 rounded w-48 animate-pulse" /></div>;

  return (
    <div className="p-6 lg:p-8 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-white flex items-center gap-2"><MapPin className="w-5 h-5 text-cyan-400" /> Project Map</h1>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setColorBy("phase")}
            className={`px-3 py-1.5 rounded-lg text-xs ${colorBy === "phase" ? "bg-cyan-500/20 text-cyan-400" : "bg-gray-800 text-gray-400"}`}
          >
            By Phase
          </button>
          <button
            onClick={() => setColorBy("stage")}
            className={`px-3 py-1.5 rounded-lg text-xs ${colorBy === "stage" ? "bg-cyan-500/20 text-cyan-400" : "bg-gray-800 text-gray-400"}`}
          >
            By Stage
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div className="bg-[#111827] border border-gray-800/50 rounded-xl p-6" style={{ minHeight: "500px" }}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-white mb-3">Idaho ({idahoProjects.length} projects)</h3>
                <div className="space-y-2">
                  {idahoProjects.length === 0 ? (
                    <p className="text-gray-500 text-sm">No Idaho projects</p>
                  ) : (
                    idahoProjects.map(p => (
                      <button
                        key={p.id}
                        onClick={() => setSelectedProject(p)}
                        className={`w-full text-left flex items-center gap-2 p-2 rounded-lg transition-colors ${
                          selectedProject?.id === p.id ? "bg-gray-700/50" : "hover:bg-gray-800/50"
                        }`}
                      >
                        <span className={`w-2.5 h-2.5 rounded-full ${getColor(p)} shrink-0`} />
                        <span className="text-sm text-gray-300 truncate">{p.projectName}</span>
                        <span className="text-xs text-gray-600 ml-auto shrink-0">{p.city}</span>
                      </button>
                    ))
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-white mb-3">Utah ({utahProjects.length} projects)</h3>
                <div className="space-y-2">
                  {utahProjects.length === 0 ? (
                    <p className="text-gray-500 text-sm">No Utah projects</p>
                  ) : (
                    utahProjects.map(p => (
                      <button
                        key={p.id}
                        onClick={() => setSelectedProject(p)}
                        className={`w-full text-left flex items-center gap-2 p-2 rounded-lg transition-colors ${
                          selectedProject?.id === p.id ? "bg-gray-700/50" : "hover:bg-gray-800/50"
                        }`}
                      >
                        <span className={`w-2.5 h-2.5 rounded-full ${getColor(p)} shrink-0`} />
                        <span className="text-sm text-gray-300 truncate">{p.projectName}</span>
                        <span className="text-xs text-gray-600 ml-auto shrink-0">{p.city}</span>
                      </button>
                    ))
                  )}
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-6 text-center">Full map view requires a Google Maps API key. Add projects with addresses to see them here.</p>
          </div>
        </div>

        <div>
          {selectedProject ? (
            <div className="bg-[#111827] border border-gray-800/50 rounded-xl p-4 space-y-3 sticky top-4">
              <h3 className="font-medium text-white">{selectedProject.projectName}</h3>
              <div className="space-y-1 text-sm">
                {selectedProject.address && <p className="text-gray-400">{selectedProject.address}</p>}
                <p className="text-gray-400">{selectedProject.city}, {selectedProject.state} {selectedProject.zipCode}</p>
                {selectedProject.buildingType && <p className="text-gray-500 capitalize">{selectedProject.buildingType.replace("_", " ")}</p>}
                {selectedProject.buildingSqft && <p className="text-gray-500">{selectedProject.buildingSqft.toLocaleString()} sqft</p>}
                {selectedProject.gcCompanyName && <p className="text-gray-500">GC: {selectedProject.gcCompanyName}</p>}
                {selectedProject.currentPhase && (
                  <p className={`capitalize ${PHASE_COLORS[selectedProject.currentPhase]?.text || "text-gray-400"}`}>
                    Phase: {selectedProject.currentPhase.replace(/_/g, " ")}
                  </p>
                )}
                {selectedProject.estimatedCleanupValue && (
                  <p className="text-green-400">Value: ${Number(selectedProject.estimatedCleanupValue).toLocaleString()}</p>
                )}
              </div>
              <Link href={`/admin/projects/${selectedProject.id}`} className="block text-center text-xs bg-cyan-600 hover:bg-cyan-500 text-white py-2 rounded-lg">
                View Details
              </Link>
            </div>
          ) : (
            <div className="bg-[#111827] border border-gray-800/50 rounded-xl p-6 text-center">
              <MapPin className="w-8 h-8 text-gray-600 mx-auto mb-2" />
              <p className="text-gray-500 text-sm">Select a project to view details</p>
            </div>
          )}

          <div className="bg-[#111827] border border-gray-800/50 rounded-xl p-4 mt-4">
            <h4 className="text-xs font-medium text-gray-400 mb-2">Legend</h4>
            {colorBy === "phase" ? (
              <div className="space-y-1">
                <LegendItem color="bg-gray-400" label="Early (Pre-construction → Foundation)" />
                <LegendItem color="bg-yellow-400" label="Approaching (Framing → Rough-In)" />
                <LegendItem color="bg-orange-400" label="Key Window (Drywall → Finishes)" />
                <LegendItem color="bg-red-400" label="Cleanup Imminent (Punch List)" />
                <LegendItem color="bg-green-400" label="Complete / Awarded" />
              </div>
            ) : (
              <div className="space-y-1">
                <LegendItem color="bg-blue-400" label="In Pipeline" />
                <LegendItem color="bg-amber-400" label="Bid Submitted" />
                <LegendItem color="bg-green-400" label="Awarded" />
                <LegendItem color="bg-cyan-400" label="In Progress" />
                <LegendItem color="bg-red-400" label="Lost" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2 text-xs text-gray-400">
      <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
      {label}
    </div>
  );
}
