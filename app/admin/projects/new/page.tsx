"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";
import { BUILDING_TYPES, PIPELINE_STAGES, PRIORITY_LEVELS, CONSTRUCTION_PHASES, CLEANUP_TYPES, PROJECT_SOURCES } from "@/lib/db/schema";

export default function NewProjectPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    projectName: "",
    projectType: "commercial",
    address: "",
    city: "",
    state: "ID",
    zipCode: "",
    county: "",
    buildingType: "",
    buildingSqft: "",
    numberOfFloors: "",
    numberOfUnits: "",
    buildingDescription: "",
    permitNumber: "",
    permitDate: "",
    estimatedStartDate: "",
    currentPhase: "",
    estimatedDrywallDate: "",
    estimatedFinishDate: "",
    estimatedCleanupStart: "",
    estimatedCleanupDurationDays: "",
    gcCompanyName: "",
    gcContactName: "",
    gcContactTitle: "",
    gcContactEmail: "",
    gcContactPhone: "",
    ownerCompany: "",
    ownerContact: "",
    ownerPhone: "",
    architectFirm: "",
    architectContact: "",
    cleanupType: [] as string[],
    cleanupNotes: "",
    estimatedProjectValue: "",
    estimatedCleanupValue: "",
    pipelineStage: "discovered",
    priority: "medium",
    source: "manual",
    notes: "",
  });

  const update = (field: string, value: any) => setForm({ ...form, [field]: value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.projectName || !form.city) return;
    setSaving(true);

    try {
      const body: any = {};
      Object.entries(form).forEach(([k, v]) => {
        const dbKey = k.replace(/([A-Z])/g, "_$1").toLowerCase();
        if (v === "" || (Array.isArray(v) && v.length === 0)) return;
        if (["building_sqft", "number_of_floors", "number_of_units", "estimated_cleanup_duration_days"].includes(dbKey)) {
          body[dbKey] = parseInt(v as string) || undefined;
        } else if (["estimated_project_value", "estimated_cleanup_value"].includes(dbKey)) {
          body[dbKey] = v;
        } else {
          body[dbKey] = v;
        }
      });

      const res = await fetch("/api/admin/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("Failed to create project");
      const project = await res.json();
      router.push(`/admin/projects/${project.id}`);
    } catch (e) {
      alert("Failed to save project");
    } finally {
      setSaving(false);
    }
  };

  const toggleCleanup = (type: string) => {
    setForm({
      ...form,
      cleanupType: form.cleanupType.includes(type)
        ? form.cleanupType.filter(t => t !== type)
        : [...form.cleanupType, type],
    });
  };

  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/projects/list" className="text-gray-400 hover:text-white"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="text-xl font-bold text-white">New Project</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Section title="Project Info">
          <Field label="Project Name *">
            <input data-testid="input-project-name" className="input-field" value={form.projectName} onChange={(e) => update("projectName", e.target.value)} required />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Project Type">
              <select className="input-field" value={form.projectType} onChange={(e) => update("projectType", e.target.value)}>
                <option value="commercial">Commercial</option>
                <option value="residential">Residential</option>
                <option value="industrial">Industrial</option>
                <option value="government">Government</option>
                <option value="mixed_use">Mixed Use</option>
              </select>
            </Field>
            <Field label="Building Type">
              <select className="input-field" value={form.buildingType} onChange={(e) => update("buildingType", e.target.value)}>
                <option value="">Select...</option>
                {BUILDING_TYPES.map(t => <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1).replace("_", " ")}</option>)}
              </select>
            </Field>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Field label="Square Footage">
              <input data-testid="input-sqft" type="number" className="input-field" value={form.buildingSqft} onChange={(e) => update("buildingSqft", e.target.value)} />
            </Field>
            <Field label="Floors">
              <input type="number" className="input-field" value={form.numberOfFloors} onChange={(e) => update("numberOfFloors", e.target.value)} />
            </Field>
            <Field label="Units">
              <input type="number" className="input-field" value={form.numberOfUnits} onChange={(e) => update("numberOfUnits", e.target.value)} />
            </Field>
          </div>
          <Field label="Description">
            <textarea className="input-field h-20" value={form.buildingDescription} onChange={(e) => update("buildingDescription", e.target.value)} />
          </Field>
        </Section>

        <Section title="Location">
          <Field label="Address">
            <input data-testid="input-address" className="input-field" value={form.address} onChange={(e) => update("address", e.target.value)} />
          </Field>
          <div className="grid grid-cols-3 gap-4">
            <Field label="City *">
              <input data-testid="input-city" className="input-field" value={form.city} onChange={(e) => update("city", e.target.value)} required />
            </Field>
            <Field label="State">
              <select className="input-field" value={form.state} onChange={(e) => update("state", e.target.value)}>
                <option value="ID">Idaho</option>
                <option value="UT">Utah</option>
              </select>
            </Field>
            <Field label="ZIP">
              <input className="input-field" value={form.zipCode} onChange={(e) => update("zipCode", e.target.value)} />
            </Field>
          </div>
        </Section>

        <Section title="Timeline">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Permit Number">
              <input className="input-field" value={form.permitNumber} onChange={(e) => update("permitNumber", e.target.value)} />
            </Field>
            <Field label="Current Phase">
              <select className="input-field" value={form.currentPhase} onChange={(e) => update("currentPhase", e.target.value)}>
                <option value="">Select phase...</option>
                {CONSTRUCTION_PHASES.map(p => <option key={p} value={p}>{p.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}</option>)}
              </select>
            </Field>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Field label="Permit Date"><input type="date" className="input-field" value={form.permitDate} onChange={(e) => update("permitDate", e.target.value)} /></Field>
            <Field label="Start Date"><input type="date" className="input-field" value={form.estimatedStartDate} onChange={(e) => update("estimatedStartDate", e.target.value)} /></Field>
            <Field label="Drywall Date"><input type="date" className="input-field" value={form.estimatedDrywallDate} onChange={(e) => update("estimatedDrywallDate", e.target.value)} /></Field>
            <Field label="Finish Date"><input type="date" className="input-field" value={form.estimatedFinishDate} onChange={(e) => update("estimatedFinishDate", e.target.value)} /></Field>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Est. Cleanup Start"><input type="date" className="input-field" value={form.estimatedCleanupStart} onChange={(e) => update("estimatedCleanupStart", e.target.value)} /></Field>
            <Field label="Cleanup Duration (days)"><input type="number" className="input-field" value={form.estimatedCleanupDurationDays} onChange={(e) => update("estimatedCleanupDurationDays", e.target.value)} /></Field>
          </div>
        </Section>

        <Section title="General Contractor">
          <div className="grid grid-cols-2 gap-4">
            <Field label="GC Company"><input className="input-field" value={form.gcCompanyName} onChange={(e) => update("gcCompanyName", e.target.value)} /></Field>
            <Field label="Contact Name"><input className="input-field" value={form.gcContactName} onChange={(e) => update("gcContactName", e.target.value)} /></Field>
            <Field label="Title"><input className="input-field" value={form.gcContactTitle} onChange={(e) => update("gcContactTitle", e.target.value)} placeholder="Project Manager" /></Field>
            <Field label="Phone"><input type="tel" className="input-field" value={form.gcContactPhone} onChange={(e) => update("gcContactPhone", e.target.value)} /></Field>
          </div>
          <Field label="Email"><input type="email" className="input-field" value={form.gcContactEmail} onChange={(e) => update("gcContactEmail", e.target.value)} /></Field>
        </Section>

        <Section title="Owner / Architect">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Owner/Developer"><input className="input-field" value={form.ownerCompany} onChange={(e) => update("ownerCompany", e.target.value)} /></Field>
            <Field label="Owner Contact"><input className="input-field" value={form.ownerContact} onChange={(e) => update("ownerContact", e.target.value)} /></Field>
            <Field label="Architect Firm"><input className="input-field" value={form.architectFirm} onChange={(e) => update("architectFirm", e.target.value)} /></Field>
            <Field label="Architect Contact"><input className="input-field" value={form.architectContact} onChange={(e) => update("architectContact", e.target.value)} /></Field>
          </div>
        </Section>

        <Section title="Cleanup Scope">
          <div className="flex flex-wrap gap-2">
            {CLEANUP_TYPES.map(type => (
              <button
                key={type}
                type="button"
                onClick={() => toggleCleanup(type)}
                className={`px-3 py-1.5 rounded-lg text-xs border transition-colors ${
                  form.cleanupType.includes(type)
                    ? "bg-cyan-500/20 border-cyan-500/30 text-cyan-400"
                    : "bg-gray-800/50 border-gray-700/50 text-gray-400 hover:border-gray-600"
                }`}
              >
                {type.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
              </button>
            ))}
          </div>
          <Field label="Cleanup Notes"><textarea className="input-field h-20" value={form.cleanupNotes} onChange={(e) => update("cleanupNotes", e.target.value)} /></Field>
        </Section>

        <Section title="Pipeline & Financials">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Field label="Pipeline Stage">
              <select className="input-field" value={form.pipelineStage} onChange={(e) => update("pipelineStage", e.target.value)}>
                {PIPELINE_STAGES.map(s => <option key={s} value={s}>{s.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}</option>)}
              </select>
            </Field>
            <Field label="Priority">
              <select className="input-field" value={form.priority} onChange={(e) => update("priority", e.target.value)}>
                {PRIORITY_LEVELS.map(p => <option key={p} value={p}>{p.charAt(0).toUpperCase() + p.slice(1)}</option>)}
              </select>
            </Field>
            <Field label="Est. Project Value ($)">
              <input type="number" className="input-field" value={form.estimatedProjectValue} onChange={(e) => update("estimatedProjectValue", e.target.value)} />
            </Field>
            <Field label="Est. Cleanup Value ($)">
              <input type="number" className="input-field" value={form.estimatedCleanupValue} onChange={(e) => update("estimatedCleanupValue", e.target.value)} />
            </Field>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Source">
              <select className="input-field" value={form.source} onChange={(e) => update("source", e.target.value)}>
                {PROJECT_SOURCES.map(s => <option key={s} value={s}>{s.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}</option>)}
              </select>
            </Field>
          </div>
          <Field label="Notes"><textarea className="input-field h-20" value={form.notes} onChange={(e) => update("notes", e.target.value)} /></Field>
        </Section>

        <div className="flex justify-end gap-3 pt-4 border-t border-gray-800/50">
          <Link href="/admin/projects/list" className="px-4 py-2 text-sm text-gray-400 hover:text-white">Cancel</Link>
          <button
            type="submit"
            disabled={saving}
            data-testid="button-save-project"
            className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white px-6 py-2 rounded-lg text-sm font-medium"
          >
            <Save className="w-4 h-4" />
            {saving ? "Saving..." : "Save Project"}
          </button>
        </div>
      </form>

      <style jsx>{`
        :global(.input-field) {
          width: 100%;
          background: rgba(17, 24, 39, 0.5);
          border: 1px solid rgba(55, 65, 81, 0.5);
          border-radius: 0.5rem;
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
          color: #e5e7eb;
          outline: none;
          transition: border-color 0.15s;
        }
        :global(.input-field:focus) {
          border-color: rgba(6, 182, 212, 0.5);
        }
        :global(.input-field::placeholder) {
          color: #6b7280;
        }
      `}</style>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#111827] border border-gray-800/50 rounded-xl p-6">
      <h2 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs text-gray-500 mb-1.5">{label}</label>
      {children}
    </div>
  );
}
