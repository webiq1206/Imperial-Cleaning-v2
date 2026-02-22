"use client";

import { useEffect, useState } from "react";
import { DollarSign, Save } from "lucide-react";

export default function PricingPage() {
  const [pricing, setPricing] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<any>({});

  useEffect(() => {
    fetch("/api/admin/pricing")
      .then(r => r.json())
      .then(data => setPricing(data.pricing || []))
      .finally(() => setLoading(false));
  }, []);

  const saveEdit = async (id: string) => {
    try {
      await fetch(`/api/admin/pricing/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm),
      });
      setPricing(pricing.map(p => p.id === id ? { ...p, ...editForm } : p));
      setEditing(null);
    } catch (e) {
      console.error(e);
    }
  };

  const buildingTypes = Array.from(new Set(pricing.map(p => p.building_type)));

  if (loading) return <div className="p-8"><div className="h-8 bg-gray-800 rounded w-48 animate-pulse" /></div>;

  return (
    <div className="p-6 lg:p-8 space-y-4">
      <div>
        <h1 className="text-xl font-bold text-white flex items-center gap-2"><DollarSign className="w-5 h-5 text-green-400" /> Cleanup Pricing</h1>
        <p className="text-sm text-gray-500 mt-1">Per-square-foot pricing rates for estimating cleanup bids. Click to edit.</p>
      </div>

      {buildingTypes.map(type => (
        <div key={type} className="bg-[#111827] border border-gray-800/50 rounded-xl overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-800/50">
            <h3 className="text-sm font-medium text-white capitalize">{type.replace(/_/g, " ")}</h3>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800/30">
                <th className="px-4 py-2 text-left text-xs text-gray-500">Phase</th>
                <th className="px-4 py-2 text-right text-xs text-gray-500">Low $/sqft</th>
                <th className="px-4 py-2 text-right text-xs text-gray-500">Mid $/sqft</th>
                <th className="px-4 py-2 text-right text-xs text-gray-500">High $/sqft</th>
                <th className="px-4 py-2 text-right text-xs text-gray-500">Sqft/hr/person</th>
                <th className="px-4 py-2 w-16"></th>
              </tr>
            </thead>
            <tbody>
              {pricing.filter(p => p.building_type === type).map(p => (
                <tr key={p.id} className="border-b border-gray-800/20 hover:bg-gray-800/20">
                  {editing === p.id ? (
                    <>
                      <td className="px-4 py-2 text-gray-300 capitalize">{p.cleanup_phase.replace(/_/g, " ")}</td>
                      <td className="px-4 py-2"><input type="number" step="0.0001" className="w-full bg-gray-900 border border-gray-700 rounded px-2 py-1 text-sm text-right text-gray-300" value={editForm.price_per_sqft_low || ""} onChange={(e) => setEditForm({ ...editForm, price_per_sqft_low: e.target.value })} /></td>
                      <td className="px-4 py-2"><input type="number" step="0.0001" className="w-full bg-gray-900 border border-gray-700 rounded px-2 py-1 text-sm text-right text-gray-300" value={editForm.price_per_sqft_mid || ""} onChange={(e) => setEditForm({ ...editForm, price_per_sqft_mid: e.target.value })} /></td>
                      <td className="px-4 py-2"><input type="number" step="0.0001" className="w-full bg-gray-900 border border-gray-700 rounded px-2 py-1 text-sm text-right text-gray-300" value={editForm.price_per_sqft_high || ""} onChange={(e) => setEditForm({ ...editForm, price_per_sqft_high: e.target.value })} /></td>
                      <td className="px-4 py-2"><input type="number" className="w-full bg-gray-900 border border-gray-700 rounded px-2 py-1 text-sm text-right text-gray-300" value={editForm.sqft_per_hour_per_person || ""} onChange={(e) => setEditForm({ ...editForm, sqft_per_hour_per_person: parseInt(e.target.value) })} /></td>
                      <td className="px-4 py-2"><button onClick={() => saveEdit(p.id)} className="text-cyan-400 hover:text-cyan-300"><Save className="w-4 h-4" /></button></td>
                    </>
                  ) : (
                    <>
                      <td className="px-4 py-2 text-gray-300 capitalize">{p.cleanup_phase.replace(/_/g, " ")}</td>
                      <td className="px-4 py-2 text-right text-gray-400">${p.price_per_sqft_low}</td>
                      <td className="px-4 py-2 text-right text-gray-300 font-medium">${p.price_per_sqft_mid}</td>
                      <td className="px-4 py-2 text-right text-gray-400">${p.price_per_sqft_high}</td>
                      <td className="px-4 py-2 text-right text-gray-400">{p.sqft_per_hour_per_person}</td>
                      <td className="px-4 py-2">
                        <button onClick={() => { setEditing(p.id); setEditForm({ price_per_sqft_low: p.price_per_sqft_low, price_per_sqft_mid: p.price_per_sqft_mid, price_per_sqft_high: p.price_per_sqft_high, sqft_per_hour_per_person: p.sqft_per_hour_per_person }); }}
                          className="text-gray-500 hover:text-cyan-400 text-xs">Edit</button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
