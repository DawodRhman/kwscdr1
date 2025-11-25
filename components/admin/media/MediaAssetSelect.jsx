"use client";

import { useAdminMediaLibrary } from "@/hooks/useAdminMediaLibrary";
import { Image as ImageIcon, Video } from "lucide-react";

function isVideo(asset) {
  return asset.mimeType?.startsWith("video/") || asset.url?.match(/\.(mp4|webm|ogg)$/i);
}

export default function MediaAssetSelect({ label, value, onChange }) {
  const { assets } = useAdminMediaLibrary();

  const selectedAsset = assets.find((a) => a.id === value);

  return (
    <div className="space-y-2">
      <label className="block text-xs font-semibold text-slate-500">{label}</label>
      
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      >
        <option value="">Select an asset...</option>
        {assets.map((asset) => (
          <option key={asset.id} value={asset.id}>
            {asset.label || asset.url}
          </option>
        ))}
      </select>

      {selectedAsset && (
        <div className="mt-2 rounded-lg border border-slate-200 bg-slate-50 p-2 flex items-center gap-3">
          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded bg-slate-200">
            {isVideo(selectedAsset) ? (
              <video src={selectedAsset.url} className="h-full w-full object-cover" />
            ) : (
              <img src={selectedAsset.url} alt="" className="h-full w-full object-cover" />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-medium text-slate-900">{selectedAsset.label}</p>
            <p className="truncate text-[10px] text-slate-500">{selectedAsset.mimeType}</p>
          </div>
          {isVideo(selectedAsset) ? <Video size={16} className="text-slate-400" /> : <ImageIcon size={16} className="text-slate-400" />}
        </div>
      )}
    </div>
  );
}
