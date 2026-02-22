"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

export const dynamic = "force-dynamic";
import Link from "next/link";
import { FileText, Plus, DollarSign, Calendar, Building2 } from "lucide-react";

const STATUS_COLORS: Record<string, string> = {
  draft: "bg-gray-500/20 text-gray-400",
  submitted: "bg-amber-500/20 text-amber-400",
  under_review: "bg-blue-500/20 text-blue-400",
  accepted: "bg-green-500/20 text-green-400",
  rejected: "bg-red-500/20 text-red-400",
  expired: "bg-gray-600/20 text-gray-500",
  revised: "bg-purple-500/20 text-purple-400",
};

export default function ProposalsPage() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("project_id");
  const [proposals, setProposals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [project, setProject] = useState<any>(null);
  const [calcResult, setCalcResult] = useState<any>(null);
  const [calcForm, setCalcForm] = useState({ buildingType: "office", buildingSqft: "", cleanupPhases: ["rough_clean", "light_clean", "final_clean"], margin: 0.15 });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const params = projectId ? `?project_id=${projectId}` : "";
    fetch(`/api/admin/proposals${params}`)
      .then(r => r.json())
      .then(data => setProposals(data.proposals || []))
      .finally(() => setLoading(false));

    if (projectId) {
      fetch(`/api/admin/projects/${projectId}`)
        .then(r => r.json())
        .then(setProject);
    }
  }, [projectId]);

  const calculate = async () => {
    if (!calcForm.buildingSqft) return;
    try {
      const res = await fetch("/api/admin/projects/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          buildingType: calcForm.buildingType,
          buildingSqft: parseInt(calcForm.buildingSqft),
          cleanupPhases: calcForm.cleanupPhases,
          margin: calcForm.margin,
        }),
      });
      setCalcResult(await res.json());
    } catch (e) {
      console.error(e);
    }
  };

  const createProposal = async () => {
    if (!calcResult || !projectId) return;
    setSaving(true);
    try {
      const scopeItems = calcResult.phases.map((p: any) => ({
        phase: p.phase.replace(/_/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase()),
        estimated_hours: p.totalHours,
        crew_size: p.crewSize,
        estimated_days: p.estimatedDays,
        price: p.price,
      }));

      await fetch("/api/admin/proposals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          project_id: projectId,
          title: `Post-Construction Cleanup Proposal — ${project?.projectName || "Project"}`,
          scope_items: scopeItems,
          subtotal: calcResult.subtotal,
          total: calcResult.total,
        }),
      });

      setShowCreate(false);
      setCalcResult(null);
      const res = await fetch(`/api/admin/proposals?project_id=${projectId}`);
      setProposals((await res.json()).proposals || []);
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-6 lg:p-8 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">
          {project ? `Proposals — ${project.projectName}` : "All Proposals"}
        </h1>
        {projectId && (
          <button onClick={() => setShowCreate(!showCreate)} data-testid="button-new-proposal" className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
            <Plus className="w-4 h-4" /> New Proposal
          </button>
        )}
      </div>

      {showCreate && (
        <div className="bg-[#111827] border border-gray-800/50 rounded-xl p-6 space-y-4">
          <h2 className="text-lg font-semibold text-white">Bid Calculator</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Building Type</label>
              <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300"
                value={calcForm.buildingType}
                onChange={(e) => setCalcForm({ ...calcForm, buildingType: e.target.value })}
              >
                {["office", "medical", "retail", "apartment", "warehouse", "school", "hotel", "church", "restaurant", "government"].map(t => (
                  <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Square Footage</label>
              <input type="number" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300"
                value={calcForm.buildingSqft}
                onChange={(e) => setCalcForm({ ...calcForm, buildingSqft: e.target.value })}
                placeholder={project?.buildingSqft?.toString() || "50000"}
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Margin %</label>
              <input type="number" step="0.01" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300"
                value={calcForm.margin * 100}
                onChange={(e) => setCalcForm({ ...calcForm, margin: parseFloat(e.target.value) / 100 || 0 })}
              />
            </div>
            <div className="flex items-end">
              <button onClick={calculate} className="w-full bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                Calculate
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {["rough_clean", "light_clean", "final_clean"].map(phase => (
              <button key={phase} type="button"
                onClick={() => {
                  const phases = calcForm.cleanupPhases.includes(phase)
                    ? calcForm.cleanupPhases.filter(p => p !== phase)
                    : [...calcForm.cleanupPhases, phase];
                  setCalcForm({ ...calcForm, cleanupPhases: phases });
                }}
                className={`px-3 py-1.5 rounded-lg text-xs border ${
                  calcForm.cleanupPhases.includes(phase)
                    ? "bg-cyan-500/20 border-cyan-500/30 text-cyan-400"
                    : "bg-gray-800/50 border-gray-700/50 text-gray-400"
                }`}
              >
                {phase.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
              </button>
            ))}
          </div>

          {calcResult && (
            <div className="space-y-3">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2 text-gray-400">Phase</th>
                    <th className="text-right py-2 text-gray-400">$/sqft</th>
                    <th className="text-right py-2 text-gray-400">Hours</th>
                    <th className="text-right py-2 text-gray-400">Crew</th>
                    <th className="text-right py-2 text-gray-400">Days</th>
                    <th className="text-right py-2 text-gray-400">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {calcResult.phases.map((p: any) => (
                    <tr key={p.phase} className="border-b border-gray-800/30">
                      <td className="py-2 text-gray-300 capitalize">{p.phase.replace(/_/g, " ")}</td>
                      <td className="py-2 text-right text-gray-400">${p.pricePerSqft}</td>
                      <td className="py-2 text-right text-gray-400">{p.totalHours}</td>
                      <td className="py-2 text-right text-gray-400">{p.crewSize}</td>
                      <td className="py-2 text-right text-gray-400">{p.estimatedDays}</td>
                      <td className="py-2 text-right text-green-400 font-medium">${p.price?.toLocaleString()}</td>
                    </tr>
                  ))}
                  <tr className="font-bold">
                    <td colSpan={5} className="py-2 text-white">Total</td>
                    <td className="py-2 text-right text-green-400">${calcResult.total?.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-end">
                <button onClick={createProposal} disabled={saving} className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium disabled:opacity-50">
                  {saving ? "Creating..." : "Create Proposal"}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="space-y-3">
        {loading ? (
          Array.from({ length: 3 }).map((_, i) => <div key={i} className="h-20 bg-gray-800/30 rounded-xl animate-pulse" />)
        ) : proposals.length === 0 ? (
          <div className="bg-[#111827] border border-gray-800/50 rounded-xl p-12 text-center">
            <FileText className="w-10 h-10 text-gray-600 mx-auto mb-3" />
            <p className="text-gray-500">No proposals yet</p>
          </div>
        ) : (
          proposals.map(p => (
            <div key={p.id} className="bg-[#111827] border border-gray-800/50 rounded-xl p-4" data-testid={`card-proposal-${p.id}`}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-white font-medium">{p.title || p.proposalNumber}</p>
                  <p className="text-xs text-gray-500 mt-1">{p.proposalNumber} · v{p.version}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded ${STATUS_COLORS[p.status] || STATUS_COLORS.draft}`}>
                    {(p.status || "draft").replace(/_/g, " ")}
                  </span>
                  {p.total && <span className="text-sm text-green-400 font-medium">${Number(p.total).toLocaleString()}</span>}
                </div>
              </div>
              <div className="flex gap-4 mt-2 text-xs text-gray-500">
                <span>{new Date(p.createdAt).toLocaleDateString()}</span>
                {p.validUntil && <span>Expires: {p.validUntil}</span>}
                <span>{p.paymentTerms}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
