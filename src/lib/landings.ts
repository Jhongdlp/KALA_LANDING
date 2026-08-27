/**
 * Query-intent landing pages.
 *
 * The home page and /features describe the product; these describe the problem
 * somebody typed into a search box. Each entry owns one query cluster, and the
 * `targets` array records which — it is documentation, never rendered, and it
 * is what stops two pages from being written against the same intent and
 * cannibalising each other.
 *
 * Structure follows what actually ranks in this category (Termius runs a
 * near-identical set of per-platform and per-competitor pages): one H1 stating
 * the query, 4–6 H2 sections of real detail, an optional comparison table, and
 * a page-specific FAQ that feeds FAQPage structured data.
 *
 * RULE: every claim here must be true of the shipped app — cross-check against
 * FEATURE_GROUPS in ./features before adding one. Comparison rows about other
 * products state verifiable facts and carry the date they were checked; a
 * comparison that overreaches is a liability, not a ranking signal.
 */
import type { Faq } from "./faq";

export type LandingSection = {
  /** Rendered as the H2. */
  heading: string;
  body: string;
  /** Rendered as H3s under the section. */
  points?: { title: string; body: string }[];
};

export type ComparisonRow = {
  criterion: string;
  kammel: string;
  rival: string;
};

export type Comparison = {
  rival: string;
  /** Shown under the table — where these facts come from and when. */
  note: string;
  rows: ComparisonRow[];
};

export type Landing = {
  slug: string;
  /** <title> without the brand; the layout template appends " — Kammel". */
  title: string;
  /** Meta description, kept under ~155 characters. */
  description: string;
  /** Mono kicker above the H1. */
  kicker: string;
  /** Split over two lines, matching the display type elsewhere on the site. */
  h1: [string, string];
  intro: string;
  /** The query cluster this page exists to answer. Never rendered. */
  targets: string[];
  sections: LandingSection[];
  comparison?: Comparison;
  faqs: Faq[];
  /** Slugs of sibling landings, rendered as an internal-link row. */
  related: string[];
};

export const LANDINGS: Landing[] = [
  {
    slug: "ssh-client-android",
    title: "Free SSH Client for Android",
    description:
      "Kammel is a free, open-source SSH client for Android: multi-session terminal, SFTP explorer, code editor and port forwarding. No account, no subscription.",
    kicker: "Android · SSH",
    h1: ["Free SSH client", "for Android"],
    intro:
      "Save a server once, open a shell in a tap, and keep it alive while you do something else on your phone. Kammel is free and open source — no account, no cloud, no paid tier holding a feature back.",
    targets: [
      "ssh client android",
      "free ssh client android",
      "android ssh app",
      "open source ssh client android",
      "ssh client android no account",
    ],
    sections: [
      {
        heading: "A real terminal, not a text box",
        body: "Kammel ships a full xterm emulator: 256 colours, the alternate screen buffer and mouse reporting, so vim, htop, tmux and full-screen TUIs render the way they do on a desktop instead of collapsing into garbage.",
        points: [
          {
            title: "Programmable key rows",
            body: "Ctrl-C, Esc, Tab, arrows and pipes as tappable keys — plus any command you add yourself. Reorder them, resize them and page through as many rows as you need.",
          },
          {
            title: "Sticky Ctrl and Shift",
            body: "Arm a modifier, then press the next key. It is the combination a soft keyboard cannot otherwise produce, and it is what makes a phone shell usable.",
          },
          {
            title: "Pinch to resize",
            body: "Two fingers scale the terminal font live, and the size is remembered. Scrolling and text selection keep working untouched.",
          },
        ],
      },
      {
        heading: "Sessions that survive the lock screen",
        body: "A native Android foreground service keeps the process and every open shell running while the app is in the background — the same mechanism Termux uses. Switch to your browser, take a call, come back to a build that is still going.",
        points: [
          {
            title: "Terminal tabs",
            body: "Several SSH sessions at once, each with its own shell, working directory and status. Tap to switch, double-tap to rename.",
          },
          {
            title: "One-tap reconnect",
            body: "When a connection drops, a strip appears over the terminal. One tap re-establishes the session and brings back exactly the tunnels that were up.",
          },
        ],
      },
      {
        heading: "Keys and passwords stay on the device",
        body: "There is no Kammel server, so there is nothing to breach. Passwords and private keys are encrypted in the Android Keystore via EncryptedSharedPreferences — never in plain text and never in a config file you might sync somewhere by accident.",
        points: [
          {
            title: "Host key pinning",
            body: "A new server is confirmed once and pinned. A key that later changes blocks the connection instead of shrugging it off — the classic man-in-the-middle signal, taken seriously.",
          },
          {
            title: "Real SHA256 fingerprints",
            body: "Fingerprints are OpenSSH-format SHA256:… strings, byte-for-byte what ssh-keygen -lf prints, so you can compare them against the server you control.",
          },
          {
            title: "Generate a key on the phone",
            body: "Create an ed25519 pair on the device and copy the public half straight into a server's authorized_keys. No laptop in the loop.",
          },
        ],
      },
      {
        heading: "SFTP and a code editor in the same app",
        body: "Every file operation runs over SFTP on the session you are already connected to — no second app, no syncing a copy down first. Open a source file, edit it with syntax highlighting, and save straight back over SFTP.",
        points: [
          {
            title: "Full remote explorer",
            body: "Navigate the server, create, rename, delete, multi-select, copy and paste, with live filtering for the directories that hold three hundred entries.",
          },
          {
            title: "Viewers built in",
            body: "Read PDFs, render Markdown, view images and SVGs, and play video or audio without leaving the app.",
          },
        ],
      },
      {
        heading: "Port forwarding, Docker and git",
        body: "The parts of the job that usually send you back to a laptop are in the app: all three OpenSSH forwarding modes with live byte counters, a Docker console for containers, images, volumes and Compose, and a git panel that drives the repository where it actually lives.",
      },
    ],
    faqs: [
      {
        q: "Is Kammel really free?",
        a: "Yes. Kammel is free and open source under MIT and GPL. There is no account, no subscription and no feature held behind a paid tier — you get everything by installing the app.",
      },
      {
        q: "Which Android versions are supported?",
        a: "Android 8.0 and later. There is also a Linux x86_64 desktop build from the same codebase.",
      },
      {
        q: "Where do I download it?",
        a: "From GitHub Releases. The APK is published there for every release, and the app can check for and install updates itself from the same feed.",
      },
      {
        q: "Does Kammel work without an internet connection to your servers?",
        a: "Kammel needs network access to reach the machine you are connecting to, and nothing else. It makes no other outbound traffic — no account check, no analytics, no crash reporting.",
      },
    ],
    related: [
      "android-terminal",
      "juicessh-alternative",
      "termius-alternative",
      "claude-code-android",
    ],
  },
  {
    slug: "android-terminal",
    title: "Android Terminal Emulator with SSH",
    description:
      "A full xterm terminal for Android: 256 colours, alternate screen buffer, mouse reporting, sticky modifiers and programmable key rows. Free and open source.",
    kicker: "Terminal · xterm",
    h1: ["A terminal", "built for thumbs"],
    intro:
      "Most phone terminals fall over the moment you open something interactive. Kammel runs a patched xterm emulator wrapped in the controls a physical keyboard would otherwise give you.",
    targets: [
      "android terminal emulator",
      "terminal app android",
      "ssh terminal android",
      "xterm android",
      "tmux vim on android",
    ],
    sections: [
      {
        heading: "Full xterm emulation",
        body: "256 colours, the alternate screen buffer and mouse support. That is the specific set that decides whether vim, htop, tmux, lazygit and TUI coding agents render properly or turn into escape-sequence soup — and it is why a terminal that only echoes text is not enough.",
      },
      {
        heading: "The keys a soft keyboard cannot send",
        body: "A phone keyboard has no Ctrl, no Esc, no Tab and no arrows. Kammel adds them back as rows of tappable keys you can rebuild entirely.",
        points: [
          {
            title: "Shortcut editor",
            body: "Build the rows yourself: labels, payloads, order, key height and width, across as many pages as you need.",
          },
          {
            title: "Sticky modifiers",
            body: "Arm Ctrl or Shift, then press the next key, and the combination is sent as one chord.",
          },
          {
            title: "Fullscreen mode",
            body: "Collapse every piece of app chrome and hand the whole screen to the shell, with a floating pill to come back.",
          },
        ],
      },
      {
        heading: "Reading and copying output on a small screen",
        body: "Handle-based selection works over the terminal grid, so you can copy output and paste straight back into the shell. The link grabber scans the scrollback for URLs and lists them newest first — the fix for a dev server or tunnel link that scrolled away three builds ago.",
      },
      {
        heading: "Make it yours",
        body: "Pick the terminal colour scheme, the monospace font and the size for both terminal and editor, adjust interface density, and set an accent colour — including custom ones you mix yourself. The whole interface ships in English and Spanish and switches instantly without dropping your sessions.",
      },
      {
        heading: "Not a local Linux environment",
        body: "Worth being clear about: Kammel is a terminal for connecting to machines over SSH, not a Linux distribution running on the phone. If what you want is a local shell with a package manager on the device itself, Termux is the right tool. If what you want is to reach the servers you already have, that is what Kammel is built for.",
      },
    ],
    faqs: [
      {
        q: "Does vim or tmux work properly?",
        a: "Yes. Kammel implements the alternate screen buffer, 256 colours and mouse reporting, which is what full-screen TUI programs such as vim, htop and tmux need to draw correctly.",
      },
      {
        q: "Can I send Ctrl-C and Esc?",
        a: "Yes, from the programmable key rows. Ctrl and Shift can also be armed as sticky modifiers so any chord can be typed on a soft keyboard.",
      },
      {
        q: "Is this a local terminal like Termux?",
        a: "No. Kammel is an SSH terminal for connecting to remote machines. Termux gives you a Linux environment on the phone itself; the two solve different problems and many people use both.",
      },
    ],
    related: [
      "ssh-client-android",
      "claude-code-android",
      "putty-alternative-android",
    ],
  },
  {
    slug: "claude-code-android",
    title: "Run Claude Code on Android over SSH",
    description:
      "Drive Claude Code and other TUI coding agents from your phone over SSH. Agent notifications, a prompt library, dictation and screenshot upload over SFTP.",
    kicker: "AI agents · SSH",
    h1: ["Run coding agents", "from your phone"],
    intro:
      "An agent working on a remote machine spends most of its time not needing you — and then suddenly needing you. Kammel is built around that loop: it tells you when the agent is waiting, and gets context to it fast.",
    targets: [
      "claude code on android",
      "claude code on phone",
      "run claude code over ssh",
      "ai coding agent from phone",
      "mobile terminal for ai agents",
    ],
    sections: [
      {
        heading: "It tells you when the agent needs you",
        body: "When a backgrounded session signals for input — the terminal BEL, or an OSC 9 / OSC 777 notification, which is what agent CLIs emit — a heads-up notification fires and takes you straight to that tab. You stop babysitting a scrolling log.",
        points: [
          {
            title: "Alerts you can tune",
            body: "Per-event intensity, quiet hours, detector sensitivity and per-session mute, plus a test button.",
          },
          {
            title: "A log of what fired",
            body: "Every alert is recorded with the reason it triggered, so a misfire can be diagnosed instead of remembered.",
          },
        ],
      },
      {
        heading: "Getting context to the agent",
        body: "Typing a long instruction on a phone keyboard is the real friction. Kammel attacks it from three directions.",
        points: [
          {
            title: "Prompt library",
            body: "Save the instructions you send over and over, and insert them as a bracketed paste — dropped into the prompt without submitting, so you can still edit before you commit.",
          },
          {
            title: "Dictation",
            body: "Compose with the device's speech recognizer when typing it out is not worth the effort.",
          },
          {
            title: "Attach a file or a screenshot",
            body: "Pick an image or file and Kammel uploads it over SFTP, then writes the remote path into the prompt so the agent can open it. A screenshot can be pasted straight from the soft keyboard on the same path.",
          },
        ],
      },
      {
        heading: "The session outlives the app",
        body: "A foreground service keeps every shell running while you are elsewhere on the phone, and a dropped connection reconnects in one tap with its tunnels restored. Pair that with tmux on the server and a long agent run survives anything your phone's radio does.",
      },
      {
        heading: "Reviewing what the agent actually changed",
        body: "Kammel's git panel reads git status --porcelain, keeps the index and worktree columns separate, and renders a proper coloured unified diff per file. You can stage, unstage, discard, commit, amend, fetch, pull and push from the panel — so reviewing an agent's work does not mean typing git commands with your thumbs.",
      },
      {
        heading: "Which agents this works with",
        body: "Anything that runs in a terminal. Claude Code, Codex, Gemini CLI, aider and the rest are ordinary TUI programs over SSH — Kammel's job is to render them correctly, notify you when they stop, and make the prompt easy to fill. There is no integration to configure and no API key for Kammel to hold.",
      },
    ],
    faqs: [
      {
        q: "Do I need an API key in Kammel?",
        a: "No. The agent runs on your server and is authenticated there. Kammel is the terminal you drive it through — it never sees or stores a model API key.",
      },
      {
        q: "How do I know when Claude Code is waiting for input?",
        a: "Kammel listens for the terminal bell and OSC 9 / OSC 777 notifications that agent CLIs emit, and raises an Android heads-up notification that opens the right session tab.",
      },
      {
        q: "Can I send a screenshot to the agent?",
        a: "Yes. Paste an image from the soft keyboard or pick a file; Kammel uploads it over SFTP on the same connection and writes the remote path into your prompt so the agent can read it.",
      },
      {
        q: "Will the session survive if I switch apps?",
        a: "Yes. A native Android foreground service keeps every open shell alive in the background. Running the agent under tmux on the server adds a second layer for long jobs.",
      },
    ],
    related: ["ssh-client-android", "android-terminal", "linux-ssh-client"],
  },
  {
    slug: "linux-ssh-client",
    title: "SSH Client for Linux",
    description:
      "The Kammel Linux x86_64 desktop build: same codebase as the Android app, same profiles, SFTP explorer, code editor, Docker console and port forwarding.",
    kicker: "Linux · x86_64",
    h1: ["The same app", "on the desktop"],
    intro:
      "Kammel's Linux build is not a stripped-down port. It is the same codebase, the same server profiles and the same shortcuts as the Android app, compiled for x86_64.",
    targets: [
      "ssh client linux",
      "linux ssh gui client",
      "open source ssh client linux",
      "sftp client linux gui",
    ],
    sections: [
      {
        heading: "One tool on both machines",
        body: "The thing that usually breaks a mobile workflow is that the phone app and the desktop app are different products with different feature sets. Here they are one program: what you learn on the desktop is what you get on the phone, including the saved servers, the tunnel definitions and the key rows you built.",
      },
      {
        heading: "Secrets in libsecret",
        body: "On Linux, passwords and private keys are stored through libsecret — the same service your desktop keyring already uses — rather than in a dotfile. Host keys are pinned on first use and verified with OpenSSH-format SHA256 fingerprints on every later connection.",
      },
      {
        heading: "Everything the mobile build has",
        body: "Multi-session terminal, SFTP explorer with a syntax-highlighting editor, git panel, Docker console, database browser with a SQL console and ER diagram, and local, remote and SOCKS5 port forwarding with live byte counters.",
      },
      {
        heading: "No account, no telemetry",
        body: "There is no sign-up, no analytics and no crash reporting. The only network traffic Kammel makes is the SSH connection you asked for.",
      },
    ],
    faqs: [
      {
        q: "Which Linux distributions are supported?",
        a: "The build targets Linux x86_64 generally. It is published on GitHub Releases alongside the Android APK.",
      },
      {
        q: "Is the Linux version a different app?",
        a: "No. It is the same Flutter codebase as the Android app, so the profiles, shortcuts and feature set match.",
      },
      {
        q: "Are macOS and Windows supported?",
        a: "Not yet. Android 8.0+ and Linux x86_64 are the supported platforms today.",
      },
    ],
    related: ["ssh-client-android", "termius-alternative", "claude-code-android"],
  },
  {
    slug: "juicessh-alternative",
    title: "JuiceSSH Alternative for Android",
    description:
      "JuiceSSH was unpublished from Google Play in December 2025 and last updated in 2021. Kammel is a free, open-source, actively developed replacement for Android.",
    kicker: "Migration · Android",
    h1: ["A JuiceSSH", "replacement"],
    intro:
      "JuiceSSH was unpublished from Google Play on 11 December 2025, and its last release, v3.2.2, shipped in February 2021. If you are looking for somewhere to move your servers, this is what Kammel offers instead.",
    targets: [
      "juicessh alternative",
      "juicessh replacement",
      "juicessh removed play store",
      "apps like juicessh",
      "juicessh not working",
    ],
    sections: [
      {
        heading: "Why this matters more than a missing app",
        body: "An SSH client holds your private keys and your server credentials. Software that has not shipped a security update since 2021 and is no longer distributed is not a good place to keep them — not because anything specific is known to be wrong with it, but because nothing will be fixed if something is found.",
      },
      {
        heading: "What you keep",
        body: "The parts of JuiceSSH people actually relied on all exist here: saved connections with keys or passwords, several sessions at once, a usable soft-keyboard layout for the keys a phone lacks, port forwarding and SFTP.",
        points: [
          {
            title: "Saved servers",
            body: "Host, port, user and either a password or a private key — plus the tunnels that belong to that server. One form, one tap to connect.",
          },
          {
            title: "Multiple sessions",
            body: "Terminal tabs, each with its own shell and working directory, kept alive in the background by a foreground service.",
          },
          {
            title: "Port forwarding",
            body: "Local, remote and SOCKS5, tied to the session's lifecycle and restored automatically on reconnect.",
          },
        ],
      },
      {
        heading: "What you gain",
        body: "Kammel is not a like-for-like clone — it is a workspace rather than only a terminal.",
        points: [
          {
            title: "An SFTP explorer and code editor",
            body: "Browse the server, edit a source file with syntax highlighting, and save back over SFTP on the same connection.",
          },
          {
            title: "A git panel and a Docker console",
            body: "Stage, diff, commit and push; start and stop containers and drive Compose projects.",
          },
          {
            title: "Agent notifications",
            body: "A heads-up notification when a backgrounded session signals that it needs input — built for driving coding agents over SSH.",
          },
        ],
      },
      {
        heading: "Moving your servers over",
        body: "There is no import path — JuiceSSH's connection database is not exportable in a format another client reads, and its keys are held in its own storage. Re-adding a server means entering the host, port and user once and either pasting the private key or generating a fresh ed25519 pair on the phone and appending the public half to the server's authorized_keys. Generating a new key is the better option anyway if the old one has been on an unmaintained app for four years.",
      },
    ],
    comparison: {
      rival: "JuiceSSH",
      note: "JuiceSSH facts as of August 2026: unpublished from Google Play on 11 December 2025, last release v3.2.2 in February 2021. Existing installs still run; new installs are not available from Play.",
      rows: [
        {
          criterion: "Availability",
          kammel: "Published on GitHub Releases, updated actively",
          rival: "Unpublished from Google Play since Dec 2025",
        },
        {
          criterion: "Last release",
          kammel: "Current — in-app update check against GitHub Releases",
          rival: "v3.2.2, February 2021",
        },
        {
          criterion: "Source",
          kammel: "Open source (MIT / GPL)",
          rival: "Closed source",
        },
        {
          criterion: "Price",
          kammel: "Free, all features",
          rival: "Free tier plus a paid Pro unlock",
        },
        {
          criterion: "SFTP file explorer",
          kammel: "Built in, with a syntax-highlighting editor",
          rival: "Not included",
        },
        {
          criterion: "Git and Docker",
          kammel: "Git panel and Docker console built in",
          rival: "Not included",
        },
        {
          criterion: "Key storage",
          kammel: "Android Keystore (EncryptedSharedPreferences)",
          rival: "App-managed storage",
        },
      ],
    },
    faqs: [
      {
        q: "Why was JuiceSSH removed from Google Play?",
        a: "It was unpublished on 11 December 2025. Google requires apps to target recent Android API levels to stay listed, and JuiceSSH's last release was v3.2.2 in February 2021, built against much older APIs.",
      },
      {
        q: "Does my installed copy of JuiceSSH still work?",
        a: "Existing installs generally keep running — it is new installs that are unavailable. The concern is that an app holding SSH keys is no longer receiving security updates.",
      },
      {
        q: "Can I import my JuiceSSH connections into Kammel?",
        a: "No. JuiceSSH does not export its connection database in a format other clients read. Servers are re-added once by hand, and Kammel can generate a fresh ed25519 key on the phone for you to install on the server.",
      },
      {
        q: "Is Kammel free like JuiceSSH's basic tier?",
        a: "Kammel is free in full. There is no Pro unlock — the source is public under MIT and GPL and every feature ships in the one build.",
      },
    ],
    related: [
      "ssh-client-android",
      "termius-alternative",
      "putty-alternative-android",
    ],
  },
  {
    slug: "termius-alternative",
    title: "Termius Alternative: Free and Open Source",
    description:
      "Kammel is an open-source SSH client for Android and Linux with no account and no subscription. How it compares to Termius, and where Termius is the better fit.",
    kicker: "Comparison",
    h1: ["An SSH client", "with no account"],
    intro:
      "Termius is a mature, well-built product. The reasons to pick something else are usually specific: you do not want an account, you want the source to be readable, or you do not want the feature you rely on to move behind a subscription.",
    targets: [
      "termius alternative",
      "free termius alternative",
      "open source termius alternative",
      "ssh client without account",
    ],
    sections: [
      {
        heading: "No account, and nothing to sync",
        body: "Kammel has no sign-up because it has no server. Your hosts, keys and passwords are on the device, encrypted in the Android Keystore or in libsecret on Linux. Nothing is uploaded, and the only outbound traffic the app makes is the SSH connection you asked for.",
      },
      {
        heading: "The trade-off, stated plainly",
        body: "That is the same sentence read from the other side: there is no cross-device sync, no team vault and no shared host list, because there is nowhere to sync to. If several engineers need one managed inventory of servers with role-based access, Termius is built for that and Kammel is not. This page is not going to pretend otherwise.",
      },
      {
        heading: "Everything ships in the one build",
        body: "There is no free tier and no Pro tier. Port forwarding, SFTP, the code editor, the git panel, the Docker console, the database browser, agent notifications and biometric app lock are all simply present.",
      },
      {
        heading: "Built around driving coding agents",
        body: "The clearest difference in day-to-day use: Kammel raises an Android notification when a backgrounded session signals for input, keeps a prompt library, takes dictation, and uploads a pasted screenshot over SFTP so it can hand the remote path to an agent. That loop is what the app is designed around.",
      },
      {
        heading: "You can read the source",
        body: "Kammel is public under MIT and GPL. For a program that holds your private keys, being able to check what it does with them — or hand it to someone who will — is the point.",
      },
    ],
    comparison: {
      rival: "Termius",
      note: "Termius details as published on termius.com, checked August 2026. Termius offers a usable free tier; the rows below describe defaults and structure, not a judgement of quality.",
      rows: [
        {
          criterion: "Account required",
          kammel: "No account at all",
          rival: "Account required; vault sync is the core feature",
        },
        {
          criterion: "Source code",
          kammel: "Open source (MIT / GPL)",
          rival: "Closed source",
        },
        {
          criterion: "Pricing",
          kammel: "Free, every feature",
          rival: "Free tier plus paid Pro and Team plans",
        },
        {
          criterion: "Cross-device sync",
          kammel: "None — data stays on the device",
          rival: "Encrypted cloud vault across devices",
        },
        {
          criterion: "Team features",
          kammel: "None",
          rival: "Shared vaults with role-based access",
        },
        {
          criterion: "Platforms",
          kammel: "Android 8.0+ and Linux x86_64",
          rival: "macOS, Windows, Linux, iOS, Android",
        },
        {
          criterion: "Docker and database console",
          kammel: "Docker, SQL console and ER diagram built in",
          rival: "Not part of the client",
        },
        {
          criterion: "Agent notifications",
          kammel: "BEL / OSC 9 / OSC 777 heads-up alerts",
          rival: "Not offered",
        },
      ],
    },
    faqs: [
      {
        q: "Is Kammel a drop-in replacement for Termius?",
        a: "For single-device use, largely yes. If you rely on syncing one host list across several machines or on shared team vaults, Kammel does not do that — it has no cloud component by design.",
      },
      {
        q: "Can I move my Termius hosts across?",
        a: "There is no importer. Hosts are re-entered once, and Kammel can generate an ed25519 key pair on the device if you would rather not move the existing private key.",
      },
      {
        q: "Does Kammel cost anything later?",
        a: "No. It is open source under MIT and GPL with no paid tier, and there is no account through which to bill you.",
      },
    ],
    related: [
      "ssh-client-android",
      "juicessh-alternative",
      "linux-ssh-client",
    ],
  },
  {
    slug: "putty-alternative-android",
    title: "PuTTY Alternative for Android",
    description:
      "PuTTY has no official Android version. Kammel is a free, open-source SSH client for Android with a full terminal, saved sessions, SFTP and port forwarding.",
    kicker: "Comparison · Android",
    h1: ["PuTTY, but", "on your phone"],
    intro:
      "There is no official PuTTY for Android — PuTTY is a Windows program, with an unofficial Unix port. If you want the same job done from a phone, this is the shape of the equivalent.",
    targets: [
      "putty alternative android",
      "putty for android",
      "putty android app",
      "ssh client like putty android",
    ],
    sections: [
      {
        heading: "What maps directly",
        body: "The PuTTY habits transfer almost one for one.",
        points: [
          {
            title: "Saved sessions",
            body: "PuTTY's session list becomes Kammel's saved servers: host, port, user, credential and the tunnels that belong to that server, in one form.",
          },
          {
            title: "Host key verification",
            body: "PuTTY's first-connection host key prompt is the same trust-on-first-use model Kammel uses, with OpenSSH-format SHA256 fingerprints you can compare against the server.",
          },
          {
            title: "Tunnels",
            body: "PuTTY's Connection → SSH → Tunnels pane maps to local, remote and SOCKS5 forwarding, with live byte counters per tunnel.",
          },
          {
            title: "PuTTYgen",
            body: "Key generation is built in: create an ed25519 pair on the phone and copy the public half into authorized_keys.",
          },
        ],
      },
      {
        heading: "What is better than PuTTY here",
        body: "PSCP and PSFTP are separate executables; in Kammel the file explorer and the terminal are the same session. There is also a syntax-highlighting editor, a git panel, a Docker console and a database browser — none of which PuTTY sets out to be.",
      },
      {
        heading: "What PuTTY does that this does not",
        body: "Kammel is SSH and SFTP. PuTTY also speaks Telnet, Rlogin, raw sockets and serial, and it runs on Windows, which Kammel does not. If you need a serial console or a Windows desktop client, PuTTY remains the right tool.",
      },
      {
        heading: "A terminal that renders properly",
        body: "The reason most phone SSH apps feel worse than PuTTY is emulation. Kammel implements 256 colours, the alternate screen buffer and mouse reporting, so vim, htop and tmux draw correctly, and it adds Ctrl, Esc, Tab and arrows as programmable tappable key rows.",
      },
    ],
    comparison: {
      rival: "PuTTY",
      note: "PuTTY facts as of August 2026: a Windows application with an unofficial Unix port, maintained by Simon Tatham and distributed free under the MIT licence. There is no official Android release.",
      rows: [
        {
          criterion: "Android",
          kammel: "Native Android 8.0+ app",
          rival: "No official Android version",
        },
        {
          criterion: "Platforms",
          kammel: "Android and Linux x86_64",
          rival: "Windows, plus an unofficial Unix port",
        },
        {
          criterion: "File transfer",
          kammel: "SFTP explorer in the same session",
          rival: "Separate PSCP / PSFTP executables",
        },
        {
          criterion: "Protocols",
          kammel: "SSH and SFTP",
          rival: "SSH, Telnet, Rlogin, raw, serial",
        },
        {
          criterion: "Key generation",
          kammel: "Built in (ed25519)",
          rival: "Separate PuTTYgen tool",
        },
        {
          criterion: "Code editor",
          kammel: "Syntax-highlighting editor over SFTP",
          rival: "Not included",
        },
        {
          criterion: "Price",
          kammel: "Free and open source",
          rival: "Free and open source",
        },
      ],
    },
    faqs: [
      {
        q: "Is there an official PuTTY for Android?",
        a: "No. PuTTY is a Windows application with an unofficial Unix port. Anything in an app store calling itself PuTTY is not from the PuTTY project.",
      },
      {
        q: "Can Kammel open my PuTTY .ppk key?",
        a: "Kammel works with OpenSSH-format keys. A PuTTY .ppk can be converted with PuTTYgen's \"Export OpenSSH key\", or you can generate a fresh ed25519 key on the phone and add its public half to the server.",
      },
      {
        q: "Does Kammel support serial connections?",
        a: "No. Kammel speaks SSH and SFTP. For serial consoles, PuTTY remains the better tool.",
      },
    ],
    related: [
      "ssh-client-android",
      "android-terminal",
      "juicessh-alternative",
    ],
  },
];

/** Lookup used by the route and by the related-links row. */
export const LANDING_BY_SLUG = new Map(LANDINGS.map((l) => [l.slug, l]));

export function getLanding(slug: string): Landing | undefined {
  return LANDING_BY_SLUG.get(slug);
}
