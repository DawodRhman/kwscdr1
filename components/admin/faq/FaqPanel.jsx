"use client";
import React from "react";
import UnderConstruction from "../UnderConstruction";

export default function FaqPanel() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <p className="text-slate-500">Manage the FAQ section content.</p>
      </div>
      <UnderConstruction title="FAQ Management" />
    </div>
  );
}
