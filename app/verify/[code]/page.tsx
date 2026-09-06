"use client";

import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import { API_BASE_URL } from "@/lib/api";

interface CertificateVerification {
  certificateId: string;
  verificationCode: string;
  traineeName: string;
  courseTitle: string;
  batchName: string;
  issueDate: string;
  completionDate: string;
  finalScore: number;
  status: string;
  organization: string;
}

export default function CertificateVerificationPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const resolvedParams = use(params);
  const code = resolvedParams.code;

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<CertificateVerification | null>(null);
  const [isValid, setIsValid] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function verify() {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE_URL}/certificates/verify/${encodeURIComponent(code)}`);
        const json = await res.json();
        if (json && json.success && json.certificate) {
          setData(json.certificate);
          setIsValid(json.valid);
        } else {
          setErrorMsg(json.message || "Invalid or unrecognized certificate ID.");
          setIsValid(false);
        }
      } catch (err: any) {
        setErrorMsg("Failed to connect to credential registry.");
        setIsValid(false);
      } finally {
        setLoading(false);
      }
    }
    verify();
  }, [code]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-3xl">
        {/* Header Branding */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-blue-500/30">
              G
            </div>
            <span className="font-heading font-black text-xl tracking-tight text-white">
              GoTech<span className="text-blue-500">Edu</span>
            </span>
          </Link>
          <h1 className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
            Official Credential Verification Registry
          </h1>
        </div>

        {loading ? (
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-12 text-center shadow-2xl backdrop-blur-xl">
            <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent mb-4" />
            <p className="text-sm text-slate-400 font-medium">Validating cryptographic credential signatures...</p>
          </div>
        ) : isValid && data ? (
          <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950 p-8 sm:p-12 shadow-2xl shadow-emerald-500/10 backdrop-blur-xl relative overflow-hidden">
            {/* Top decorative accent */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800/80 pb-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-2xl text-emerald-400 shadow-inner">
                  ✓
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Verified Authenticated Credential
                  </span>
                  <h2 className="text-lg font-bold text-white mt-0.5">Certificate of Completion</h2>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Certificate ID</span>
                <span className="font-mono font-bold text-sm text-blue-400 tracking-wider">
                  {data.certificateId}
                </span>
              </div>
            </div>

            {/* Certificate Details Grid */}
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  Issued To Graduate
                </span>
                <p className="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight">
                  {data.traineeName}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-900/60 rounded-2xl border border-slate-800/80 p-5">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                    Course Program
                  </span>
                  <p className="text-base font-bold text-blue-300">{data.courseTitle}</p>
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                    Delivery Cohort
                  </span>
                  <p className="text-sm font-semibold text-slate-200">{data.batchName || "Academic Cohort"}</p>
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                    Issue Date
                  </span>
                  <p className="text-sm text-slate-200">
                    {new Date(data.issueDate).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                    Issuing Organization
                  </span>
                  <p className="text-sm text-slate-200">{data.organization}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
                <div className="text-xs text-slate-400">
                  Verification Code: <span className="font-mono text-slate-300">{data.verificationCode}</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-5 py-2.5 text-xs font-bold text-white transition shadow-lg shadow-blue-600/30 cursor-pointer"
                  >
                    <span>Print Credential</span>
                    <span>🖨️</span>
                  </button>
                  <Link
                    href="/learninghub"
                    className="rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 px-4 py-2.5 text-xs font-semibold text-slate-300 transition"
                  >
                    Browse Courses
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl border border-rose-500/30 bg-slate-900/80 p-8 sm:p-12 text-center shadow-2xl backdrop-blur-xl">
            <div className="mx-auto h-14 w-14 rounded-2xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-3xl text-rose-400 mb-4">
              ✕
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Unverified or Invalid Credential</h2>
            <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">
              {errorMsg || "The certificate ID provided does not match any valid credential in our database."}
            </p>
            <div className="font-mono text-xs text-rose-400 bg-rose-950/40 border border-rose-900/50 rounded-xl py-2 px-4 inline-block mb-6">
              Provided Code: {code}
            </div>
            <div>
              <Link
                href="/learninghub"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-700 px-6 py-3 text-xs font-bold text-white transition"
              >
                Return to GoTechEdu Learning Hub
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
