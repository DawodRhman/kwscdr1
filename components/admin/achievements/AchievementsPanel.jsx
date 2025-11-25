"use client";
import React from "react";
import UnderConstruction from "../UnderConstruction";

export default function AchievementsPanel() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Achievements</h2>
        <p className="text-slate-500">Manage awards, milestones, and key achievements.</p>
      </div>
      <UnderConstruction title="Achievements Management" />
    </div>
  );
}
