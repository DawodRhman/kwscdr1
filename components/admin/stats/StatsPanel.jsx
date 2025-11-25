"use client";
import React from "react";
import UnderConstruction from "../UnderConstruction";

export default function StatsPanel() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Stats & Counters</h2>
        <p className="text-slate-500">Manage the animated counters on the homepage.</p>
      </div>
      <UnderConstruction title="Stats Management" />
    </div>
  );
}
