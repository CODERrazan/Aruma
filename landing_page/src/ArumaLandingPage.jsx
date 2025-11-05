import React, { useEffect } from "react";

const PROJECT = {
  name: "Aruma",
  tagline: "Describe your app in one short, catchy line.", // TODO
  logo: "https://github.com/maram-ra/Aruma/blob/main/frontend/public/logo.png",          // TODO
  heroImage: "https://placehold.co/1600x900?text=Cover",   // TODO
  deployedUrl: "https://example.com",                      // TODO
  repoUrl: "https://github.com/your-user/your-repo",       // TODO
  holbertonUrl: "https://www.holbertonschool.com/",
};

const FEATURES = [
  { title: "Feature One", description: "Explain your first feature briefly.", media: "https://placehold.co/1200x800?text=Feature+1" },
  { title: "Feature Two", description: "Explain your second feature briefly.", media: "https://placehold.co/1200x800?text=Feature+2" },
  { title: "Feature Three", description: "Explain your third feature briefly.", media: "https://placehold.co/1200x800?text=Feature+3" },
  { title: "Feature Four", description: "Explain your fourth feature briefly.", media: "https://placehold.co/1200x800?text=Feature+4" },
];

const TEAM = [
  { name: "Developer One", role: "Full-Stack Developer", links: { linkedin: "#", github: "#" } },
  { name: "Developer Two", role: "Frontend Developer", links: { linkedin: "#", github: "#" } },
  { name: "Developer Three", role: "Backend Developer", links: { linkedin: "#", github: "#" } },
  { name: "Developer Four", role: "UI/UX Designer", links: { linkedin: "#", github: "#" } },
];

export default function ArumaLandingPage() {
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest("a[href^='#']");
      if (!a) return;
      const id = a.getAttribute("href");
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const brand = {
    text: "#3a0b0b",
    subtle: "#5a5050",
    border: "#e0ddd3",
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* ================= HEADER ================= */}
      <header
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: "var(--color-bg)",
    borderBottom: `1px solid ${brand.border}`,
    boxShadow: "0 3px 10px rgba(58, 11, 11, 0.08)",
    backdropFilter: "blur(6px)",
  }}
>
  <div
    className="mx-auto max-w-7xl px-6"
    style={{
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr", // left / center / right
      alignItems: "center",
      height: "80px",
      gap: "16px",
    }}
  >
    {/* LEFT: Nav */}
    <nav
      style={{
        justifySelf: "start",
        display: "flex",
        alignItems: "center",
        gap: "24px",
      }}
    >
      <a href="#features" className="btn-text" style={{ color: brand.text }}>
        Features
      </a>
      <a href="#about" className="btn-text" style={{ color: brand.text }}>
        About
      </a>
    </nav>

    {/* CENTER: Logo */}
    <div style={{ justifySelf: "center" }}>
      <img
        src={PROJECT.logo}
        alt="Aruma Logo"
        className="object-contain"
        style={{ height: "56px", width: "auto", filter: "contrast(95%) brightness(98%)" }}
      />
    </div>

    {/* RIGHT: Button */}
    <div style={{ justifySelf: "end" }}>
      <a
        href={PROJECT.deployedUrl}
        target="_blank"
        rel="noreferrer"
        className="btn-main btn-small"
      >
        Go to Aruma Website
      </a>
    </div>
  </div>
</header>
<div style={{ height: "80px" }} />




      {/* ================= HERO ================= */}
      <section id="home" className="relative">
        <div
          className="w-full"
          style={{
            height: "60vh",
            minHeight: 400,
            backgroundImage: `url(${PROJECT.heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderBottom: `1px solid ${brand.border}`,
          }}
        />
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="relative -mt-20 rounded-2xl p-8 sm:p-10"
            style={{
              background: "var(--color-bg)",
              border: `1px solid ${brand.border}`,
              boxShadow: "0 6px 16px rgba(58,11,11,0.08)",
            }}
          >
            <div className="text-center">
              <h1
                className="hero-title mb-3"
                style={{
                  color: brand.text,
                  fontSize: "3.2rem",
                  lineHeight: 1.15,
                }}
              >
                {PROJECT.name}
              </h1>
              <p
                className="hero-subtext mx-auto"
                style={{
                  color: brand.subtle,
                  fontSize: "1.15rem",
                  maxWidth: "600px",
                }}
              >
                {PROJECT.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="grid items-center gap-8"
              style={{
                gridTemplateColumns: i % 2 === 0 ? "2fr 3fr" : "3fr 2fr",
              }}
            >
              <div
                className="px-4 md:px-8"
                style={{
                  order: i % 2 === 0 ? 1 : 2,
                  color: brand.subtle,
                  textAlign: i % 2 === 0 ? "left" : "right",
                }}
              >
                <h3 className="text-3xl font-semibold mb-3" style={{ color: brand.text }}>
                  {f.title}
                </h3>
                <p className="text-base leading-relaxed">{f.description}</p>
              </div>

              <div
                className="rounded-2xl overflow-hidden shadow"
                style={{
                  order: i % 2 === 0 ? 2 : 1,
                  border: `1px solid ${brand.border}`,
                  boxShadow: "0 6px 18px rgba(58,11,11,0.1)",
                  maxHeight: "360px",
                }}
              >
                <img
                  src={f.media}
                  alt={f.title}
                  className="w-full h-full object-cover object-center"
                  style={{ maxHeight: "360px" }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT / DEVELOPERS ================= */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-6" style={{ color: brand.text }}>
            About the Project
          </h2>
          <p className="max-w-2xl mb-12" style={{ color: brand.subtle }}>
            This project was inspired by a real problem I encountered...
            It’s also part of my Portfolio Project for Holberton School —{" "}
            <a
              href={PROJECT.holbertonUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#6b6078",
                textDecoration: "underline",
                textDecorationStyle: "dotted",
              }}
            >
              Holberton School
            </a>.
          </p>

          <h3 className="text-2xl font-semibold mb-8" style={{ color: brand.text }}>
            Our Developers
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "24px",
              alignItems: "stretch",
              width: "100%",
            }}
          >
            {TEAM.map((m, i) => (
              <div
                key={i}
                style={{
                  background: "#f5f5ee",
                  border: `1px solid ${brand.border}`,
                  borderRadius: "16px",
                  boxShadow: "0 3px 10px rgba(58, 11, 11, 0.08)",
                  padding: "22px",
                  textAlign: "left",
                  height: "100%",
                }}
              >
                <h4
                  style={{
                    color: brand.text,
                    fontWeight: 700,
                    margin: "0 0 6px",
                    fontSize: "18px",
                  }}
                >
                  {m.name}
                </h4>
                <p
                  style={{
                    color: "#6a5e5e",
                    margin: "0 0 14px",
                    fontSize: "15px",
                  }}
                >
                  {m.role}
                </p>

                <div
                  style={{
                    display: "inline-flex",
                    gap: "14px",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <a
                    href={m.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#0a66c2",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    <i className="bi bi-linkedin"></i> LinkedIn
                  </a>

                  <a
                    href={m.links.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#171515",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    <i className="bi bi-github"></i> GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-10 border-t" style={{ borderColor: brand.border }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p style={{ color: "#6a5e5e" }}>
            © {new Date().getFullYear()} {PROJECT.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#home" className="btn-text" style={{ color: brand.text }}>Top</a>
            <a href="#features" className="btn-text" style={{ color: brand.text }}>Features</a>
            <a href="#about" className="btn-text" style={{ color: brand.text }}>About</a>
            <a href={PROJECT.deployedUrl} target="_blank" rel="noreferrer" className="btn-text" style={{ color: brand.text }}>Open App</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
