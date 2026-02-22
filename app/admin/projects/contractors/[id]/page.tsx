"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Building2, Phone, Mail, Globe, MapPin, Users, TrendingUp, Plus, Trash2, Save } from "lucide-react";
import { RELATIONSHIP_STATUSES } from "@/lib/db/schema";

export default function ContractorDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [contractor, setContractor] = useState<any>(null);
  const [projects, setProjects] = useState<any[]>([]);
  const [activities, setActivities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState<any>({});
  const [newContact, setNewContact] = useState({ name: "", title: "", email: "", phone: "", notes: "" });
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    fetch(`/api/admin/contractors/${params.id}`)
      .then(r => r.json())
      .then(data => {
        setContractor(data);
        setProjects(data.projects || []);
        setActivities(data.activities || []);
        setForm({
          relationship_status: data.relationshipStatus,
          relationship_notes: data.relationshipNotes || "",
          payment_terms: data.paymentTerms || "",
          notes: data.notes || "",
        });
      })
      .finally(() => setLoading(false));
  }, [params.id]);

  const saveForm = async () => {
    try {
      const res = await fetch(`/api/admin/contractors/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const updated = await res.json();
      setContractor({ ...contractor, ...updated });
      setEditing(false);
    } catch (e) {
      console.error(e);
    }
  };

  const addContact = async () => {
    if (!newContact.name) return;
    const contacts = [...(contractor.contacts || []), newContact];
    try {
      await fetch(`/api/admin/contractors/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contacts }),
      });
      setContractor({ ...contractor, contacts });
      setNewContact({ name: "", title: "", email: "", phone: "", notes: "" });
      setShowContactForm(false);
    } catch (e) {
      console.error(e);
    }
  };

  const deleteContractor = async () => {
    if (!confirm("Delete this contractor? This cannot be undone.")) return;
    await fetch(`/api/admin/contractors/${params.id}`, { method: "DELETE" });
    router.push("/admin/projects/contractors");
  };

  if (loading) return <div className="p-8"><div className="h-8 bg-gray-800 rounded w-48 animate-pulse" /></div>;
  if (!contractor) return <div className="p-8 text-gray-400">Contractor not found</div>;

  const contacts = Array.isArray(contractor.contacts) ? contractor.contacts : [];

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <Link href="/admin/projects/contractors" className="text-gray-400 hover:text-white mt-1"><ArrowLeft className="w-5 h-5" /></Link>
          <div>
            <h1 className="text-xl font-bold text-white" data-testid="text-contractor-name">{contractor.companyName}</h1>
            <div className="flex items-center gap-3 mt-1 text-sm text-gray-400">
              {contractor.city && <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {contractor.city}, {contractor.state}</span>}
              {contractor.phone && <a href={`tel:${contractor.phone}`} className="flex items-center gap-1 text-cyan-400"><Phone className="w-3 h-3" /> {contractor.phone}</a>}
              {contractor.website && <a href={contractor.website} target="_blank" className="flex items-center gap-1 text-cyan-400"><Globe className="w-3 h-3" /> Website</a>}
            </div>
          </div>
        </div>
        <button onClick={deleteContractor} className="text-xs text-red-400 hover:text-red-300 border border-red-900/50 rounded-lg px-3 py-1.5">
          <Trash2 className="w-3 h-3 inline mr-1" /> Delete
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="bg-[#111827] border border-gray-800/50 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-300 flex items-center gap-2"><TrendingUp className="w-4 h-4 text-green-400" /> Relationship</h3>
            <button onClick={() => setEditing(!editing)} className="text-xs text-cyan-400 hover:underline">{editing ? "Cancel" : "Edit"}</button>
          </div>
          {editing ? (
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Status</label>
                <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300"
                  value={form.relationship_status}
                  onChange={(e) => setForm({ ...form, relationship_status: e.target.value })}
                >
                  {RELATIONSHIP_STATUSES.map(s => <option key={s} value={s}>{s.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Notes</label>
                <textarea className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300 h-16"
                  value={form.relationship_notes}
                  onChange={(e) => setForm({ ...form, relationship_notes: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Payment Terms</label>
                <input className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300"
                  value={form.payment_terms}
                  onChange={(e) => setForm({ ...form, payment_terms: e.target.value })}
                  placeholder="Net 30"
                />
              </div>
              <button onClick={saveForm} className="flex items-center gap-1 text-xs bg-cyan-600 text-white px-3 py-1.5 rounded-lg">
                <Save className="w-3 h-3" /> Save
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex justify-between text-sm"><span className="text-gray-500">Status</span><span className="text-gray-300 capitalize">{(contractor.relationshipStatus || "prospect").replace(/_/g, " ")}</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500">Projects Bid</span><span className="text-gray-300">{contractor.projectsBid || 0}</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500">Projects Won</span><span className="text-gray-300">{contractor.projectsWon || 0}</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500">Total Revenue</span><span className="text-green-400">${Number(contractor.totalRevenue || 0).toLocaleString()}</span></div>
              {contractor.paymentTerms && <div className="flex justify-between text-sm"><span className="text-gray-500">Payment Terms</span><span className="text-gray-300">{contractor.paymentTerms}</span></div>}
              {contractor.relationshipNotes && <p className="text-xs text-gray-500 mt-2 border-t border-gray-800/50 pt-2">{contractor.relationshipNotes}</p>}
            </div>
          )}
        </div>

        <div className="bg-[#111827] border border-gray-800/50 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-300 flex items-center gap-2"><Users className="w-4 h-4 text-purple-400" /> Contacts</h3>
            <button onClick={() => setShowContactForm(!showContactForm)} className="text-xs text-cyan-400 hover:underline flex items-center gap-1"><Plus className="w-3 h-3" /> Add</button>
          </div>
          {showContactForm && (
            <div className="bg-gray-800/30 border border-gray-700/30 rounded-lg p-3 mb-3 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <input className="bg-gray-900 border border-gray-700 rounded px-2 py-1.5 text-xs text-gray-300" placeholder="Name *" value={newContact.name} onChange={(e) => setNewContact({ ...newContact, name: e.target.value })} />
                <input className="bg-gray-900 border border-gray-700 rounded px-2 py-1.5 text-xs text-gray-300" placeholder="Title" value={newContact.title} onChange={(e) => setNewContact({ ...newContact, title: e.target.value })} />
                <input className="bg-gray-900 border border-gray-700 rounded px-2 py-1.5 text-xs text-gray-300" placeholder="Email" value={newContact.email} onChange={(e) => setNewContact({ ...newContact, email: e.target.value })} />
                <input className="bg-gray-900 border border-gray-700 rounded px-2 py-1.5 text-xs text-gray-300" placeholder="Phone" value={newContact.phone} onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })} />
              </div>
              <div className="flex justify-end">
                <button onClick={addContact} className="text-xs bg-cyan-600 text-white px-3 py-1 rounded">Add</button>
              </div>
            </div>
          )}
          {contacts.length === 0 ? (
            <p className="text-gray-500 text-sm">No contacts added yet</p>
          ) : (
            <div className="space-y-2">
              {contacts.map((c: any, i: number) => (
                <div key={i} className="bg-gray-800/30 rounded-lg p-2">
                  <p className="text-sm text-white font-medium">{c.name}</p>
                  <p className="text-xs text-gray-500">{c.title}</p>
                  <div className="flex gap-3 mt-1 text-xs">
                    {c.phone && <a href={`tel:${c.phone}`} className="text-cyan-400">{c.phone}</a>}
                    {c.email && <a href={`mailto:${c.email}`} className="text-cyan-400">{c.email}</a>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bg-[#111827] border border-gray-800/50 rounded-xl p-4">
        <h3 className="text-sm font-medium text-gray-300 flex items-center gap-2 mb-3"><Building2 className="w-4 h-4 text-cyan-400" /> Projects ({projects.length})</h3>
        {projects.length === 0 ? (
          <p className="text-gray-500 text-sm">No projects linked to this contractor</p>
        ) : (
          <div className="space-y-2">
            {projects.map((p: any) => (
              <Link key={p.id} href={`/admin/projects/${p.id}`} className="flex items-center justify-between bg-gray-800/30 hover:bg-gray-800/50 rounded-lg p-3 transition-colors">
                <div>
                  <p className="text-sm text-white">{p.projectName}</p>
                  <p className="text-xs text-gray-500">{p.city}, {p.state}</p>
                </div>
                <span className="text-xs text-gray-400 capitalize">{(p.pipelineStage || "").replace(/_/g, " ")}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
