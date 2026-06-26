"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "← Inicio", icon: "🏠" },
  { href: "/studio", label: "Studio", icon: "🎨" },
  { href: "/videos", label: "Videos", icon: "🎬" },
  { href: "/copy", label: "Copys", icon: "✍️" },
  { href: "/productos", label: "Productos", icon: "📦" },
  { href: "/prompts", label: "Prompts", icon: "💡" },
  { href: "/editor", label: "Editor", icon: "🖊️" },
  { href: "/dashboard", label: "Dashboard", icon: "📊" },
  { href: "/plantillas", label: "Plantillas", icon: "🗂️" },
];

export default function StudioNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <nav style={{
        background: "rgba(10,10,15,0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(124,58,237,0.15)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        padding: "0 24px",
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <Link href="/studio" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 32, height: 32,
            background: "linear-gradient(135deg,#7c3aed,#9d5cf0)",
            borderRadius: 8,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16,
          }}>✨</div>
          <span style={{ fontWeight: 800, fontSize: 16, color: "#f0f0ff" }}>JKings AI Studio</span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 4, alignItems: "center" }} className="desktop-nav">
          {NAV_ITEMS.slice(1).map(item => (
            <Link key={item.href} href={item.href} style={{
              textDecoration: "none",
              padding: "6px 12px",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 500,
              color: pathname === item.href ? "#a78bfa" : "#9090b0",
              background: pathname === item.href ? "rgba(124,58,237,0.12)" : "transparent",
              transition: "all 0.2s",
            }}>
              {item.icon} {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{
          background: "none", border: "1px solid rgba(124,58,237,0.3)",
          color: "#a78bfa", padding: "6px 10px", borderRadius: 8,
          cursor: "pointer", fontSize: 18,
        }} className="mobile-menu-btn">
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          position: "fixed", top: 60, left: 0, right: 0, bottom: 0,
          background: "rgba(10,10,15,0.98)",
          backdropFilter: "blur(20px)",
          zIndex: 99,
          padding: 24,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}>
          {NAV_ITEMS.map(item => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} style={{
              textDecoration: "none",
              padding: "14px 20px",
              borderRadius: 12,
              fontSize: 16,
              fontWeight: 600,
              color: pathname === item.href ? "#a78bfa" : "#f0f0ff",
              background: pathname === item.href ? "rgba(124,58,237,0.15)" : "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}>
              <span style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex; }
        .mobile-menu-btn { display: none; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
