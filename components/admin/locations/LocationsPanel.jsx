"use client";
import React from "react";
import UnderConstruction from "../UnderConstruction";

export default function LocationsPanel() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Office Locations</h2>
        <p className="text-slate-500">Manage contact addresses and map coordinates.</p>
      </div>
      <UnderConstruction title="Locations Management" />
    </div>
  );
}
