"use client";

import { useState } from "react";
import { Database, Wifi, WifiOff, RefreshCw, Settings, Key, Globe, FileSearch } from "lucide-react";

const DATA_SOURCES = [
  {
    id: "construction_wire",
    name: "ConstructionWire / BuildCentral",
    description: "Industry-standard database with 720,000+ commercial construction projects. Primary data source for project leads.",
    envVar: "CONSTRUCTIONWIRE_API_KEY",
    website: "constructionwire.com",
    tier: "Tier 1",
    icon: "🏗️",
  },
  {
    id: "construction_monitor",
    name: "Construction Monitor",
    description: "Building permit data from 70+ metro areas. Earliest signal for new construction projects.",
    envVar: "CONSTRUCTION_MONITOR_API_KEY",
    website: "constructionmonitor.com",
    tier: "Tier 1",
    icon: "📋",
  },
  {
    id: "shovels",
    name: "Shovels.ai",
    description: "Modern API for building permit and contractor intelligence. Inspection status indicates project phases.",
    envVar: "SHOVELS_API_KEY",
    website: "shovels.ai",
    tier: "Tier 1",
    icon: "🔍",
  },
  {
    id: "construct_a_lead",
    name: "Construct-A-Lead",
    description: "Pre-bid construction project leads with GC contacts and materials lists.",
    envVar: "CONSTRUCT_A_LEAD_API_KEY",
    website: "constructalead.com",
    tier: "Tier 1",
    icon: "📊",
  },
  {
    id: "google_places",
    name: "Google Places",
    description: "Find construction companies and general contractors in target markets.",
    envVar: "GOOGLE_PLACES_API_KEY",
    website: "Google Cloud Console",
    tier: "Tier 2",
    icon: "📍",
  },
];

export default function SourcesPage() {
  const [testing, setTesting] = useState<string | null>(null);

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div>
        <h1 className="text-xl font-bold text-white flex items-center gap-2">
          <Database className="w-5 h-5 text-cyan-400" /> Data Sources
        </h1>
        <p className="text-sm text-gray-500 mt-1">Connect construction project databases and permit feeds to automatically discover new projects.</p>
      </div>

      <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
        <h3 className="text-sm font-medium text-amber-400 mb-1">Getting Started</h3>
        <p className="text-xs text-amber-300/70">
          To connect data sources, sign up for API access with each provider and add the API key as an environment variable.
          ConstructionWire (BuildCentral API) is the highest priority — call 866-316-5300 to get API access.
        </p>
      </div>

      <div className="grid gap-4">
        {DATA_SOURCES.map(source => (
          <div key={source.id} className="bg-[#111827] border border-gray-800/50 rounded-xl p-5" data-testid={`card-source-${source.id}`}>
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{source.icon}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-white">{source.name}</h3>
                    <span className="text-xs px-2 py-0.5 bg-gray-800 text-gray-400 rounded">{source.tier}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{source.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-xs text-red-400">
                  <WifiOff className="w-3 h-3" /> Not Connected
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-800/30 flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1"><Key className="w-3 h-3" /> {source.envVar}</span>
                <a href={`https://${source.website}`} target="_blank" rel="noopener" className="flex items-center gap-1 text-cyan-400 hover:underline">
                  <Globe className="w-3 h-3" /> {source.website}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="px-3 py-1.5 text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg flex items-center gap-1"
                  onClick={() => setTesting(source.id)}
                >
                  <RefreshCw className={`w-3 h-3 ${testing === source.id ? "animate-spin" : ""}`} />
                  Test Connection
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#111827] border border-gray-800/50 rounded-xl p-5">
        <h3 className="font-medium text-white mb-2 flex items-center gap-2"><FileSearch className="w-4 h-4 text-purple-400" /> Manual Sources</h3>
        <p className="text-sm text-gray-500 mb-4">Projects can also be added manually from these sources:</p>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          {[
            { label: "Drive-by sightings", desc: "Spot construction sites while driving" },
            { label: "GC network / referrals", desc: "Tips from existing contractor relationships" },
            { label: "Plan room postings", desc: "Check local plan rooms for new projects" },
            { label: "Chamber of commerce", desc: "Business announcements and new developments" },
            { label: "News articles", desc: "Local construction news and groundbreaking announcements" },
            { label: "CSV import", desc: "Bulk upload from any spreadsheet source" },
          ].map(s => (
            <div key={s.label} className="bg-gray-800/30 rounded-lg p-3">
              <p className="text-gray-300">{s.label}</p>
              <p className="text-xs text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
