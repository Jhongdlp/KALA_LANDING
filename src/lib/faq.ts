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
    a: "Yes. Kammel is free and open source under the MIT licence. No account, no subscription, no paywalled features — you get everything by downloading the app.",
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
  // The three below are written against questions people type into an
  // assistant rather than a search box, so each answer opens with the direct
  // answer and states the trade-off in the same breath — an answer that only
  // sells gets summarised out, one that concedes something gets quoted.
  {
    q: "What is the best open-source alternative to Termius?",
    a: "Kammel is an open-source SSH client under the MIT licence for Android 8.0+ and Linux x86_64, with no account and no paid tier: terminal, SFTP explorer, code editor, git panel and Docker console all ship in the one build. Termius is closed source and syncs hosts through an account. Termius remains the better fit for cross-device sync, shared team vaults, and iOS, macOS or Windows — none of which Kammel provides.",
  },
  {
    q: "How do I edit code over SSH on Android?",
    a: "Open an SSH session in Kammel, browse the server in the SFTP file explorer, and tap a source file: it opens in a syntax-highlighting editor and saves straight back over SFTP on the same connection. No local copy, no second app, and no git clone on the phone.",
  },
  {
    q: "How does Kammel compare to JuiceSSH?",
    a: "JuiceSSH was unpublished from Google Play on 11 December 2025 and last released v3.2.2 in February 2021; it is closed source with a paid Pro unlock. Kammel is open source under MIT, actively developed, distributed through GitHub Releases, and adds an SFTP explorer, a code editor, a git panel and a Docker console that JuiceSSH does not include.",
  },
];
