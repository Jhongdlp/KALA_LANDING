/**
 * Shared by the rendered FAQ accordion and the FAQPage JSON-LD. Google drops
 * the rich result when the structured data doesn't match the visible answer,
 * so both must read the same array — never duplicate this copy.
 */
export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
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
