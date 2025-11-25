import React from "react";
import { Construction } from "lucide-react";

export default function UnderConstruction({ title }) {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-center p-6 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50">
      <div className="bg-slate-100 p-4 rounded-full mb-4">
        <Construction className="w-8 h-8 text-slate-400" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-slate-500 max-w-sm mt-2">
        This management panel is currently under development. Check back soon for updates.
      </p>
    </div>
  );
}
