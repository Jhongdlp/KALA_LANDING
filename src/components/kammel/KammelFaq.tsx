"use client";

import { useState } from "react";
import { ACCENT, ANTON, ARCHIVO, MONO } from "./theme";

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is Kammel?",
    a: "An open-source, mobile-first workspace for developers: SSH client, terminal, file explorer and code editor bundled into a single Flutter app for Android and Linux.",
  },
  {
    q: "Is it really free?",
    a: "Yes. Kammel is free and open source under MIT and GPL. No account, no subscription, no paywalled features — you get everything by downloading the app.",
  },
  {
    q: "Which platforms are supported?",
    a: "Android 8 and up, plus Linux on x86_64 as a desktop build. iOS, macOS and Windows are not supported yet.",
  },
  {
    q: "Do you store my SSH keys or passwords?",
    a: "Never in plain text and never on our servers. Passwords and SSH keys are encrypted inside the device's hardware-backed keystore — Android Keystore on mobile, libsecret on Linux.",
  },
  {
    q: "Can I use it with AI coding agents?",
    a: "Yes. Run Claude Code and other agents over SSH, paste screenshots that Kammel uploads by SFTP, and drop the file path straight into the prompt so the agent can read it.",
  },
  {
    q: "How can I contribute?",
    a: "Clone the repository, build it with the Flutter SDK, and open issues or pull requests on GitHub. Bug reports and translations are welcome too.",
  },
];

export default function KammelFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="reveal"
      style={{
        transitionDelay: ".15s",
        position: "relative",
        padding:
          "clamp(56px,9vh,104px) clamp(20px,4vw,64px) clamp(80px,12vh,130px)",
        borderTop: "1px solid var(--k-secborder)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(30px,5vw,80px)",
          alignItems: "flex-start",
        }}
      >
        {/* header column */}
        <div style={{ flex: "1 1 300px", maxWidth: 420 }}>
          <div
            style={{
              fontFamily: MONO,
              fontSize: 11,
              letterSpacing: ".32em",
              textTransform: "uppercase",
              color: "var(--k-statstext)",
              marginBottom: 16,
            }}
          >
            FAQ
          </div>
          <h2
            style={{
              fontFamily: ANTON,
              fontWeight: 400,
              textTransform: "uppercase",
              fontSize: "clamp(38px,6vw,80px)",
              lineHeight: 0.9,
              letterSpacing: "-.005em",
              color: "var(--k-headline)",
            }}
          >
            Good to
            <br />
            know<span style={{ color: ACCENT }}>.</span>
          </h2>
          <p
            style={{
              marginTop: 24,
              maxWidth: 340,
              fontSize: 15,
              lineHeight: 1.6,
              color: "var(--k-paratext)",
            }}
          >
            Everything worth checking before you install. Still stuck? Open an
            issue on GitHub — we read all of them.
          </p>
        </div>

        {/* accordion column */}
        <div
          style={{
            flex: "2 1 480px",
            borderTop: "1px solid var(--k-secborder)",
          }}
        >
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              q={item.q}
              a={item.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{ borderBottom: "1px solid var(--k-secborder)" }}>
      <button
        className="k-faqbtn"
        onClick={onToggle}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          padding: "22px 2px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          className="k-faqq"
          style={{
            fontFamily: ARCHIVO,
            fontWeight: 700,
            fontSize: "clamp(16px,1.4vw,19px)",
            letterSpacing: ".005em",
          }}
        >
          {q}
        </span>
        <span
          aria-hidden="true"
          style={{ position: "relative", width: 14, height: 14, flexShrink: 0 }}
        >
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              width: 14,
              height: 1.6,
              borderRadius: 2,
              background: ACCENT,
              transform: "translateY(-50%)",
            }}
          />
          <span
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              width: 1.6,
              height: 14,
              borderRadius: 2,
              background: ACCENT,
              transform: `translateX(-50%) scaleY(${open ? 0 : 1})`,
              transition: "transform .35s cubic-bezier(.16,1,.3,1)",
            }}
          />
        </span>
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows .4s cubic-bezier(.16,1,.3,1)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <p
            style={{
              margin: 0,
              padding: "0 0 24px",
              maxWidth: 640,
              fontSize: 15,
              lineHeight: 1.65,
              color: "var(--k-paratext)",
            }}
          >
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}
