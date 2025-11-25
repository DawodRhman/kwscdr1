"use client";
import React from "react";
import UnderConstruction from "../UnderConstruction";

export default function WorkflowPanel() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Workflow Steps</h2>
        <p className="text-slate-500">Manage the process steps displayed on the homepage.</p>
      </div>
      <UnderConstruction title="Workflow Management" />
    </div>
  );
}
