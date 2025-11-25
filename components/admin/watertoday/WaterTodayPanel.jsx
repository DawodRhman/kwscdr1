"use client";
import React from "react";
import UnderConstruction from "../UnderConstruction";

export default function WaterTodayPanel() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Water Today</h2>
        <p className="text-slate-500">Manage daily water supply updates.</p>
      </div>
      <UnderConstruction title="Water Today Management" />
    </div>
  );
}
