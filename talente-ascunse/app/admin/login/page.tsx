"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full max-w-sm">
        <div className="flex flex-col items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image src="/logo.jpeg" alt="EXCEDO" width={48} height={48} className="w-full h-full object-cover" />
          </div>
          <div className="text-center">
            <h1 className="font-bold text-gray-900">Panou Admin</h1>
            <p className="text-gray-400 text-sm">Talente Ascunse · EXCEDO</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Parolă"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#1a9410] text-gray-900"
            autoFocus
          />
          {error && (
            <p className="text-red-500 text-sm text-center">Parolă incorectă</p>
          )}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full py-3 rounded-xl bg-[#1a9410] hover:bg-[#157a0d] text-white font-semibold transition-colors disabled:opacity-50"
          >
            {loading ? "Se verifică..." : "Intră în panou"}
          </button>
        </form>
      </div>
    </div>
  );
}
