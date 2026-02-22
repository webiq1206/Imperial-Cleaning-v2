"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft, Building2, MapPin, Calendar, Phone, Mail,
  Users, DollarSign, ClipboardList, MessageSquare, Plus,
  Edit, Trash2, Save, X
} from "lucide-react";
import { PIPELINE_STAGES, CONSTRUCTION_PHASES, PRIORITY_LEVELS } from "@/lib/db/schema";

const STAGE_LABELS: Record<string, string> = {
  discovered: "Discovered", researching: "Researching", gc_contacted: "GC Contacted",
  plans_requested: "Plans Requested", plans_received: "Plans Received", estimating: "Estimating",
  bid_submitted: "Bid Submitted", bid_follow_up: "Follow-Up", awarded: "Awarded",
  in_progress: "In Progress", completed: "Completed", lost: "Lost", dormant: "Dormant",
};

const PHASE_LABELS: Record<string, string> = {
  pre_construction: "Pre-Construction", site_work: "Site Work", foundation: "Foundation",
  framing: "Framing", rough_in: "Rough-In", drywall: "Drywall",
  interior_finishes: "Interior Finishes", exterior_finishes: "Exterior Finishes",
  punch_list: "Punch List", final_inspection: "Final Inspection", complete: "Complete",
};

const ACTIVITY_TYPES = [
  { value: "phone_call", label: "Phone Call" },
  { value: "email", label: "Email" },
  { value: "site_visit", label: "Site Visit" },
  { value: "meeting", label: "Meeting" },
  { value: "bid_submitted", label: "Bid Submitted" },
  { value: "plans_received", label: "Plans Received" },
  { value: "follow_up", label: "Follow Up" },
  { value: "note", label: "Note" },
  { value: "drive_by", label: "Drive By" },
];

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<any>(null);
  const [activities, setActivities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showActivityForm, setShowActivityForm] = useState(false);
  const [activityForm, setActivityForm] = useState({ activityType: "phone_call", subject: "", details: "", outcome: "", nextAction: "", nextActionDate: "" });
  const [saving, setSaving] = useState(false);

  const fetchData = async () => {
    try {
      const [pRes, aRes] = await Promise.all([
        fetch(`/api/admin/projects/${params.id}`),
        fetch(`/api/admin/activities?project_id=${params.id}`),
      ]);
      const p = await pRes.json();
      const a = await aRes.json();
      setProject(p);
      setActivities(a.activities || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, [params.id]);

  const updateField = async (field: string, value: any) => {
    try {
      const res = await fetch(`/api/admin/projects/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [field]: value }),
      });
      const updated = await res.json();
      setProject(updated);
    } catch (e) {
      console.error(e);
    }
  };

  const logActivity = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await fetch("/api/admin/activities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          project_id: params.id,
          contractor_id: project?.gcCompanyId || undefined,
          activity_type: activityForm.activityType,
          subject: activityForm.subject,
          details: activityForm.details,
          outcome: activityForm.outcome || undefined,
          next_action: activityForm.nextAction || undefined,
          next_action_date: activityForm.nextActionDate || undefined,
        }),
      });
      setShowActivityForm(false);
      setActivityForm({ activityType: "phone_call", subject: "", details: "", outcome: "", nextAction: "", nextActionDate: "" });
      fetchData();
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  };

  const deleteProject = async () => {
    if (!confirm("Delete this project? This cannot be undone.")) return;
    await fetch(`/api/admin/projects/${params.id}`, { method: "DELETE" });
    router.push("/admin/projects/list");
  };

  if (loading) {
    return (
      <div className="p-6 lg:p-8 space-y-4">
        <div className="h-8 bg-gray-800 rounded w-48 animate-pulse" />
        <div className="grid lg:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map(i => <div key={i} className="h-48 bg-gray-800/50 rounded-xl animate-pulse" />)}
        </div>
      </div>
    );
  }

  if (!project) return <div className="p-8 text-gray-400">Project not found</div>;

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <Link href="/admin/projects/list" className="text-gray-400 hover:text-white mt-1"><ArrowLeft className="w-5 h-5" /></Link>
          <div>
            <h1 className="text-xl font-bold text-white" data-testid="text-project-name">{project.projectName}</h1>
            <div className="flex items-center gap-3 mt-1 text-sm text-gray-400">
              {project.buildingType && <span className="capitalize">{project.buildingType.replace("_", " ")}</span>}
              {project.city && <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {project.city}, {project.state}</span>}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link href={`/admin/projects/new?clone=${params.id}`} className="px-3 py-1.5 text-xs text-gray-400 hover:text-white border border-gray-700 rounded-lg">
            <Edit className="w-3 h-3 inline mr-1" /> Edit
          </Link>
          <button onClick={deleteProject} className="px-3 py-1.5 text-xs text-red-400 hover:text-red-300 border border-red-900/50 rounded-lg">
            <Trash2 className="w-3 h-3 inline mr-1" /> Delete
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <select
          data-testid="select-pipeline-stage-detail"
          className="bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-1.5 text-sm text-gray-200"
          value={project.pipelineStage || "discovered"}
          onChange={(e) => updateField("pipeline_stage", e.target.value)}
        >
          {PIPELINE_STAGES.map(s => <option key={s} value={s}>{STAGE_LABELS[s]}</option>)}
        </select>
        <select
          className="bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-1.5 text-sm text-gray-200"
          value={project.currentPhase || ""}
          onChange={(e) => updateField("current_phase", e.target.value)}
        >
          <option value="">No phase</option>
          {CONSTRUCTION_PHASES.map(p => <option key={p} value={p}>{PHASE_LABELS[p]}</option>)}
        </select>
        <select
          className="bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-1.5 text-sm text-gray-200"
          value={project.priority || "medium"}
          onChange={(e) => updateField("priority", e.target.value)}
        >
          {PRIORITY_LEVELS.map(p => <option key={p} value={p}>{p.charAt(0).toUpperCase() + p.slice(1)}</option>)}
        </select>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <Card title="Building Info" icon={<Building2 className="w-4 h-4 text-cyan-400" />}>
          <InfoRow label="Address" value={project.address} />
          <InfoRow label="City" value={`${project.city}, ${project.state} ${project.zipCode || ""}`} />
          <InfoRow label="Type" value={project.buildingType?.replace("_", " ")} />
          <InfoRow label="Sqft" value={project.buildingSqft?.toLocaleString()} />
          <InfoRow label="Floors" value={project.numberOfFloors} />
          <InfoRow label="Units" value={project.numberOfUnits} />
          {project.buildingDescription && <p className="text-sm text-gray-400 mt-2 border-t border-gray-800/50 pt-2">{project.buildingDescription}</p>}
        </Card>

        <Card title="Timeline" icon={<Calendar className="w-4 h-4 text-amber-400" />}>
          <InfoRow label="Permit Date" value={project.permitDate} />
          <InfoRow label="Start Date" value={project.estimatedStartDate} />
          <InfoRow label="Phase" value={project.currentPhase ? PHASE_LABELS[project.currentPhase] : undefined} />
          <InfoRow label="Drywall Date" value={project.estimatedDrywallDate} />
          <InfoRow label="Finish Date" value={project.estimatedFinishDate} />
          <InfoRow label="Cleanup Start" value={project.estimatedCleanupStart} highlight />
          <InfoRow label="Cleanup Days" value={project.estimatedCleanupDurationDays} />
        </Card>

        <Card title="GC & Contacts" icon={<Users className="w-4 h-4 text-purple-400" />}>
          <InfoRow label="GC Company" value={project.gcCompanyName} />
          <InfoRow label="Contact" value={project.gcContactName} />
          <InfoRow label="Title" value={project.gcContactTitle} />
          {project.gcContactPhone && (
            <div className="flex items-center gap-2 mt-1">
              <Phone className="w-3 h-3 text-gray-500" />
              <a href={`tel:${project.gcContactPhone}`} className="text-sm text-cyan-400 hover:underline">{project.gcContactPhone}</a>
            </div>
          )}
          {project.gcContactEmail && (
            <div className="flex items-center gap-2 mt-1">
              <Mail className="w-3 h-3 text-gray-500" />
              <a href={`mailto:${project.gcContactEmail}`} className="text-sm text-cyan-400 hover:underline">{project.gcContactEmail}</a>
            </div>
          )}
          {(project.ownerCompany || project.architectFirm) && (
            <div className="border-t border-gray-800/50 pt-2 mt-2 space-y-1">
              <InfoRow label="Owner" value={project.ownerCompany} />
              <InfoRow label="Architect" value={project.architectFirm} />
            </div>
          )}
        </Card>

        <Card title="Financials & Bid" icon={<DollarSign className="w-4 h-4 text-green-400" />}>
          <InfoRow label="Project Value" value={project.estimatedProjectValue ? `$${Number(project.estimatedProjectValue).toLocaleString()}` : undefined} />
          <InfoRow label="Est. Cleanup Value" value={project.estimatedCleanupValue ? `$${Number(project.estimatedCleanupValue).toLocaleString()}` : undefined} highlight />
          <InfoRow label="Bid Amount" value={project.bidAmount ? `$${Number(project.bidAmount).toLocaleString()}` : undefined} />
          <InfoRow label="Awarded Amount" value={project.awardedAmount ? `$${Number(project.awardedAmount).toLocaleString()}` : undefined} />
          {project.cleanupType?.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {project.cleanupType.map((t: string) => (
                <span key={t} className="text-xs px-2 py-0.5 bg-cyan-500/10 text-cyan-400 rounded">{t.replace(/_/g, " ")}</span>
              ))}
            </div>
          )}
          {project.cleanupNotes && <p className="text-xs text-gray-500 mt-2">{project.cleanupNotes}</p>}
          <div className="mt-3 pt-3 border-t border-gray-800/50">
            <Link href={`/admin/projects/proposals?project_id=${params.id}`} className="text-xs text-cyan-400 hover:underline">
              View / Create Proposals →
            </Link>
          </div>
        </Card>
      </div>

      {project.notes && (
        <div className="bg-[#111827] border border-gray-800/50 rounded-xl p-4">
          <h3 className="text-sm font-medium text-gray-300 mb-2">Notes</h3>
          <p className="text-sm text-gray-400 whitespace-pre-wrap">{project.notes}</p>
        </div>
      )}

      <div className="bg-[#111827] border border-gray-800/50 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-cyan-400" /> Activity Log
          </h2>
          <button
            onClick={() => setShowActivityForm(!showActivityForm)}
            data-testid="button-log-activity"
            className="flex items-center gap-1 text-xs bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-1.5 rounded-lg"
          >
            <Plus className="w-3 h-3" /> Log Activity
          </button>
        </div>

        {showActivityForm && (
          <form onSubmit={logActivity} className="bg-gray-800/30 border border-gray-700/30 rounded-lg p-4 mb-4 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Type</label>
                <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300"
                  value={activityForm.activityType}
                  onChange={(e) => setActivityForm({ ...activityForm, activityType: e.target.value })}
                >
                  {ACTIVITY_TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Subject</label>
                <input className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300"
                  value={activityForm.subject}
                  onChange={(e) => setActivityForm({ ...activityForm, subject: e.target.value })}
                  placeholder="Called about cleanup bid"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Details</label>
              <textarea className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300 h-16"
                value={activityForm.details}
                onChange={(e) => setActivityForm({ ...activityForm, details: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Outcome</label>
                <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300"
                  value={activityForm.outcome}
                  onChange={(e) => setActivityForm({ ...activityForm, outcome: e.target.value })}
                >
                  <option value="">--</option>
                  <option value="positive">Positive</option>
                  <option value="neutral">Neutral</option>
                  <option value="negative">Negative</option>
                  <option value="no_response">No Response</option>
                  <option value="voicemail">Voicemail</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Next Action</label>
                <input className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300"
                  value={activityForm.nextAction}
                  onChange={(e) => setActivityForm({ ...activityForm, nextAction: e.target.value })}
                  placeholder="Follow up call"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Follow-up Date</label>
                <input type="date" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300"
                  value={activityForm.nextActionDate}
                  onChange={(e) => setActivityForm({ ...activityForm, nextActionDate: e.target.value })}
                />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <button type="button" onClick={() => setShowActivityForm(false)} className="px-3 py-1.5 text-xs text-gray-400">Cancel</button>
              <button type="submit" disabled={saving} className="px-4 py-1.5 text-xs bg-cyan-600 text-white rounded-lg disabled:opacity-50">
                {saving ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        )}

        {activities.length === 0 ? (
          <p className="text-gray-500 text-sm">No activity logged yet.</p>
        ) : (
          <div className="space-y-3">
            {activities.map((a: any) => (
              <div key={a.id} className="flex items-start gap-3 border-b border-gray-800/30 pb-3 last:border-0">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs shrink-0 mt-0.5">
                  {a.activityType === "phone_call" ? "📞" : a.activityType === "email" ? "📧" : a.activityType === "site_visit" ? "🏗️" : a.activityType === "stage_change" ? "➡️" : "📋"}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-white font-medium">{a.subject || a.activityType.replace(/_/g, " ")}</p>
                    <span className="text-xs text-gray-600">{new Date(a.createdAt).toLocaleDateString()}</span>
                  </div>
                  {a.details && <p className="text-xs text-gray-400 mt-0.5">{a.details}</p>}
                  {a.outcome && <span className="text-xs text-gray-500 mt-1 inline-block">Outcome: {a.outcome}</span>}
                  {a.nextAction && (
                    <p className="text-xs text-amber-400 mt-1">Next: {a.nextAction} {a.nextActionDate && `(${a.nextActionDate})`}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Card({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="bg-[#111827] border border-gray-800/50 rounded-xl p-4">
      <h3 className="text-sm font-medium text-gray-300 flex items-center gap-2 mb-3">{icon} {title}</h3>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function InfoRow({ label, value, highlight }: { label: string; value?: string | number | null; highlight?: boolean }) {
  if (!value) return null;
  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-500">{label}</span>
      <span className={highlight ? "text-cyan-400 font-medium" : "text-gray-300"}>{value}</span>
    </div>
  );
}
