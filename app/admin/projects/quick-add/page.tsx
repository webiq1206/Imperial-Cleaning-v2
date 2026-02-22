"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Camera, MapPin, Save, ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { BUILDING_TYPES } from "@/lib/db/schema";

export default function QuickAddPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    projectName: "",
    buildingType: "",
    address: "",
    city: "",
    state: "ID",
    buildingDescription: "",
    gcCompanyName: "",
    notes: "",
    buildingSqft: "",
    source: "drive_by",
  });

  const update = (field: string, value: string) => setForm({ ...form, [field]: value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.projectName || !form.city) return;
    setSaving(true);

    try {
      const body: any = {
        project_name: form.projectName,
        project_type: "commercial",
        building_type: form.buildingType || undefined,
        address: form.address || undefined,
        city: form.city,
        state: form.state,
        building_description: form.buildingDescription || undefined,
        gc_company_name: form.gcCompanyName || undefined,
        notes: form.notes || undefined,
        building_sqft: form.buildingSqft ? parseInt(form.buildingSqft) : undefined,
        source: form.source,
        pipeline_stage: "discovered",
        priority: "medium",
      };

      const res = await fetch("/api/admin/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("Failed");
      setSaved(true);
      setTimeout(() => {
        setForm({ projectName: "", buildingType: "", address: "", city: "", state: "ID", buildingDescription: "", gcCompanyName: "", notes: "", buildingSqft: "", source: "drive_by" });
        setSaved(false);
      }, 2000);
    } catch {
      alert("Failed to save");
    } finally {
      setSaving(false);
    }
  };

  if (saved) {
    return (
      <div className="p-6 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
          <Check className="w-8 h-8 text-green-400" />
        </div>
        <h2 className="text-xl font-bold text-white mb-2">Project Saved!</h2>
        <p className="text-gray-400 text-sm">Added to your pipeline as &quot;Discovered&quot;</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/projects" className="text-gray-400 hover:text-white"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="text-lg font-bold text-white">Quick Add Project</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs text-gray-500 mb-1.5">Project Name *</label>
          <input
            data-testid="input-quick-project-name"
            className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500/50"
            placeholder="Mountain View Medical Center"
            value={form.projectName}
            onChange={(e) => update("projectName", e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-xs text-gray-500 mb-1.5">Address</label>
          <input
            data-testid="input-quick-address"
            className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500/50"
            placeholder="123 Main St"
            value={form.address}
            onChange={(e) => update("address", e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs text-gray-500 mb-1.5">City *</label>
            <input
              data-testid="input-quick-city"
              className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500/50"
              placeholder="Idaho Falls"
              value={form.city}
              onChange={(e) => update("city", e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1.5">State</label>
            <select
              className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-3 text-sm text-gray-200 focus:outline-none focus:border-cyan-500/50"
              value={form.state}
              onChange={(e) => update("state", e.target.value)}
            >
              <option value="ID">Idaho</option>
              <option value="UT">Utah</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs text-gray-500 mb-1.5">Building Type</label>
          <div className="grid grid-cols-3 gap-2">
            {BUILDING_TYPES.slice(0, 9).map(type => (
              <button
                key={type}
                type="button"
                onClick={() => update("buildingType", form.buildingType === type ? "" : type)}
                className={`px-3 py-2 rounded-lg text-xs border transition-colors ${
                  form.buildingType === type
                    ? "bg-cyan-500/20 border-cyan-500/30 text-cyan-400"
                    : "bg-gray-800/50 border-gray-700/50 text-gray-400"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1).replace("_", " ")}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs text-gray-500 mb-1.5">Est. Square Footage</label>
          <input
            type="number"
            className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500/50"
            placeholder="50000"
            value={form.buildingSqft}
            onChange={(e) => update("buildingSqft", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-xs text-gray-500 mb-1.5">GC Name</label>
          <input
            className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500/50"
            placeholder="ABC Construction"
            value={form.gcCompanyName}
            onChange={(e) => update("gcCompanyName", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-xs text-gray-500 mb-1.5">Notes</label>
          <textarea
            className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 h-20"
            placeholder="Looks like framing stage, big project..."
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={saving || !form.projectName || !form.city}
          data-testid="button-quick-save"
          className="w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white px-6 py-3 rounded-lg text-sm font-medium"
        >
          <Save className="w-4 h-4" />
          {saving ? "Saving..." : "Save Project"}
        </button>
      </form>
    </div>
  );
}
