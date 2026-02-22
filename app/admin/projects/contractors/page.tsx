"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Search, Plus, Users, Building2, Phone, Mail, TrendingUp } from "lucide-react";
import { RELATIONSHIP_STATUSES } from "@/lib/db/schema";

const STATUS_COLORS: Record<string, string> = {
  prospect: "bg-gray-500/20 text-gray-400",
  contacted: "bg-blue-500/20 text-blue-400",
  active_partner: "bg-green-500/20 text-green-400",
  past_partner: "bg-amber-500/20 text-amber-400",
  cold: "bg-red-500/20 text-red-400",
};

export default function ContractorsPage() {
  const [contractors, setContractors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [form, setForm] = useState({ companyName: "", phone: "", email: "", city: "", state: "ID", website: "" });
  const [saving, setSaving] = useState(false);

  const fetchContractors = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (statusFilter) params.set("relationship_status", statusFilter);

    try {
      const res = await fetch(`/api/admin/contractors?${params}`);
      const data = await res.json();
      setContractors(data.contractors || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [search, statusFilter]);

  useEffect(() => { fetchContractors(); }, [fetchContractors]);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.companyName) return;
    setSaving(true);
    try {
      await fetch("/api/admin/contractors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company_name: form.companyName,
          phone: form.phone || undefined,
          email: form.email || undefined,
          city: form.city || undefined,
          state: form.state,
          website: form.website || undefined,
        }),
      });
      setShowAddForm(false);
      setForm({ companyName: "", phone: "", email: "", city: "", state: "ID", website: "" });
      fetchContractors();
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-6 lg:p-8 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">Contractor Directory</h1>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          data-testid="button-add-contractor"
          className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          <Plus className="w-4 h-4" /> Add GC
        </button>
      </div>

      {showAddForm && (
        <form onSubmit={handleAdd} className="bg-[#111827] border border-gray-800/50 rounded-xl p-4 space-y-3">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Company Name *</label>
              <input
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300"
                value={form.companyName}
                onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Phone</label>
              <input
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Email</label>
              <input
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">City</label>
              <input
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">State</label>
              <select
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300"
                value={form.state}
                onChange={(e) => setForm({ ...form, state: e.target.value })}
              >
                <option value="ID">Idaho</option>
                <option value="UT">Utah</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Website</label>
              <input
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={() => setShowAddForm(false)} className="px-3 py-1.5 text-xs text-gray-400">Cancel</button>
            <button type="submit" disabled={saving} className="px-4 py-1.5 text-xs bg-cyan-600 text-white rounded-lg disabled:opacity-50">
              {saving ? "Saving..." : "Add Contractor"}
            </button>
          </div>
        </form>
      )}

      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            data-testid="input-search-contractors"
            placeholder="Search contractors..."
            className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg pl-10 pr-4 py-2 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500/50"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className="bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-2 text-sm text-gray-300"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All</option>
          {RELATIONSHIP_STATUSES.map(s => <option key={s} value={s}>{s.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}</option>)}
        </select>
      </div>

      <div className="grid gap-3">
        {loading ? (
          Array.from({ length: 3 }).map((_, i) => <div key={i} className="h-24 bg-gray-800/30 rounded-xl animate-pulse" />)
        ) : contractors.length === 0 ? (
          <div className="bg-[#111827] border border-gray-800/50 rounded-xl p-12 text-center">
            <Users className="w-10 h-10 text-gray-600 mx-auto mb-3" />
            <p className="text-gray-500">No contractors yet</p>
            <button onClick={() => setShowAddForm(true)} className="text-cyan-400 text-sm hover:underline mt-1">Add your first GC</button>
          </div>
        ) : (
          contractors.map((gc) => (
            <Link
              key={gc.id}
              href={`/admin/projects/contractors/${gc.id}`}
              data-testid={`card-contractor-${gc.id}`}
              className="bg-[#111827] border border-gray-800/50 hover:border-gray-700/50 rounded-xl p-4 transition-colors block"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-medium text-white">{gc.companyName}</h3>
                  <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                    {gc.city && <span className="flex items-center gap-1"><Building2 className="w-3 h-3" /> {gc.city}, {gc.state}</span>}
                    {gc.phone && <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {gc.phone}</span>}
                    {gc.email && <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {gc.email}</span>}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded ${STATUS_COLORS[gc.relationshipStatus] || STATUS_COLORS.prospect}`}>
                    {(gc.relationshipStatus || "prospect").replace(/_/g, " ")}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                <span>Bid: {gc.projectsBid || 0}</span>
                <span>Won: {gc.projectsWon || 0}</span>
                {gc.totalRevenue && Number(gc.totalRevenue) > 0 && (
                  <span className="text-green-400 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> ${Number(gc.totalRevenue).toLocaleString()}
                  </span>
                )}
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
