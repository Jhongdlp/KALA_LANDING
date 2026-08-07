/**
 * The full feature index, rendered by /features and mirrored into that page's
 * ItemList JSON-LD — one array so the visible copy and the structured data can
 * never drift (same rule as FAQS in ./faq).
 *
 * Every entry describes something the app actually ships; when a feature lands
 * or changes in the Flutter repo, edit it here rather than in the JSX.
 */

export type Feature = {
  /** Mono kicker above the title — the subsystem or surface it lives in. */
  kicker: string;
  title: string;
  body: string;
};

export type FeatureGroup = {
  /** Anchor target, also used by the sticky section nav. */
  id: string;
  /** Short label for the nav chip. */
  nav: string;
  kicker: string;
  /** Split across two lines in the heading — keeps the display type tight. */
  title: [string, string];
  intro: string;
  features: Feature[];
};

export const FEATURE_GROUPS: FeatureGroup[] = [
  {
    id: "connections",
    nav: "Connections",
    kicker: "SSH · Sessions",
    title: ["Connect", "once"],
    intro:
      "Save a server, open as many shells on it as you need, and keep them alive while you do something else on your phone.",
    features: [
      {
        kicker: "Profiles",
        title: "Saved servers",
        body: "Host, port, user and either a password or a private key — plus the tunnels that belong to that server. Edit one form, connect from one tap.",
      },
      {
        kicker: "Multi-session",
        title: "Terminal tabs",
        body: "Several SSH sessions open at the same time, each with its own shell, working directory and status. Tap to switch, double-tap to rename, close what you no longer need.",
      },
      {
        kicker: "Resilience",
        title: "One-tap reconnect",
        body: "When a connection drops, a strip appears over the terminal. One tap re-establishes the session and brings back exactly the tunnels that were up.",
      },
      {
        kicker: "Foreground service",
        title: "Sessions that survive",
        body: "A native Android service keeps the process — and every open shell — running while the app is in the background, the way Termux does.",
      },
      {
        kicker: "ed25519",
        title: "Device SSH key",
        body: "Generate a key pair on the phone and copy the public half straight into a server's authorized_keys. No laptop in the loop.",
      },
      {
        kicker: "Linux desktop",
        title: "Same app on the desktop",
        body: "The Linux x86_64 build is the same codebase, the same profiles and the same shortcuts — not a stripped-down port.",
      },
    ],
  },
  {
    id: "security",
    nav: "Security",
    kicker: "Keystore · Known hosts",
    title: ["Secrets stay", "on device"],
    intro:
      "Nothing is uploaded, synced or phoned home. The only traffic Kammel makes is the SSH connection you asked for.",
    features: [
      {
        kicker: "Hardware-backed",
        title: "Encrypted key storage",
        body: "Passwords and private keys live in the Android Keystore (via EncryptedSharedPreferences) or in libsecret on Linux — never in plain text, never in a config file.",
      },
      {
        kicker: "TOFU",
        title: "Host key pinning",
        body: "A new server is confirmed once and pinned. A key that later changes blocks the connection instead of shrugging it off — the classic MITM signal, taken seriously.",
      },
      {
        kicker: "SHA256",
        title: "Real fingerprints",
        body: "Fingerprints are OpenSSH-format SHA256:… strings, byte-for-byte the ones ssh-keygen -lf prints, so you can compare them against the server you control.",
      },
      {
        kicker: "Audit",
        title: "Known-hosts manager",
        body: "Every pinned server is listed in Settings with its fingerprint, and any entry can be forgotten when a host is legitimately rekeyed.",
      },
      {
        kicker: "Biometrics",
        title: "App lock",
        body: "Optional fingerprint or face unlock when the app comes back to the foreground, falling back to the phone's own PIN, pattern or password.",
      },
      {
        kicker: "Zero telemetry",
        title: "No account required",
        body: "No sign-up, no analytics, no crash pings. Delete the app and nothing of yours is left anywhere else.",
      },
    ],
  },
  {
    id: "terminal",
    nav: "Terminal",
    kicker: "xterm · Patched build",
    title: ["A terminal", "built for thumbs"],
    intro:
      "A real emulator — full-screen TUIs, colours, mouse reporting — wrapped in the controls a physical keyboard would normally give you.",
    features: [
      {
        kicker: "Emulation",
        title: "Full xterm",
        body: "256 colours, alternate screen buffer and mouse support, so vim, htop, tmux and TUI agents render the way they do on a desktop.",
      },
      {
        kicker: "Smart keyboard",
        title: "Programmable key rows",
        body: "Ctrl-C, Esc, Tab, arrows, pipes and your own commands as tappable keys. Reorder them, resize them, page through them, add the ones you actually use.",
      },
      {
        kicker: "Modifiers",
        title: "Sticky Ctrl & Shift",
        body: "Arm a modifier, then press the next key — the combination a soft keyboard can't otherwise produce.",
      },
      {
        kicker: "Gestures",
        title: "Pinch to resize",
        body: "Two fingers scale the terminal font live and the size is remembered. Single-finger scrolling and text selection keep working untouched.",
      },
      {
        kicker: "Focus",
        title: "Fullscreen mode",
        body: "Collapse every piece of app chrome and hand the whole screen to the shell, with a floating pill to come back.",
      },
      {
        kicker: "Scrollback",
        title: "Link grabber",
        body: "Scans the buffer for URLs and lists them newest-first — the fix for a dev server or tunnel link that scrolled away three builds ago.",
      },
      {
        kicker: "Selection",
        title: "Copy without a mouse",
        body: "Handle-based selection over the terminal grid for copying output, plus paste straight back into the shell.",
      },
    ],
  },
  {
    id: "agents",
    nav: "AI agents",
    kicker: "Claude Code · TUI agents",
    title: ["Run agents", "from anywhere"],
    intro:
      "Kammel is built around the loop of driving a coding agent on a remote machine: it tells you when the agent needs you, and gets context to it fast.",
    features: [
      {
        kicker: "BEL · OSC 9/777",
        title: "Agent notifications",
        body: "When a backgrounded session signals that it needs input, a heads-up notification fires and takes you straight to that tab.",
      },
      {
        kicker: "Tuning",
        title: "Alerts you can trust",
        body: "Per-event intensity, quiet hours, detector sensitivity, per-session mute and a test button — plus a log of what fired and why, so a misfire can be diagnosed instead of remembered.",
      },
      {
        kicker: "Snippets",
        title: "Prompt library",
        body: "Save the instructions you send over and over and insert them as a bracketed paste — dropped into the prompt without submitting, so you can still edit before you commit.",
      },
      {
        kicker: "Speech",
        title: "Dictate a prompt",
        body: "Compose with the device's speech recognizer when typing a long instruction on a phone keyboard isn't worth it.",
      },
      {
        kicker: "SFTP upload",
        title: "Attach anything",
        body: "Pick a file or image; Kammel uploads it over SFTP and writes the remote path into the prompt, with a live progress ring while it transfers.",
      },
      {
        kicker: "Clipboard",
        title: "Paste a screenshot",
        body: "Insert an image straight from the soft keyboard. Same path: uploaded, then handed to the agent as a file it can open.",
      },
    ],
  },
  {
    id: "files",
    nav: "Files",
    kicker: "SFTP · re_editor",
    title: ["Browse, edit,", "preview"],
    intro:
      "Every file operation runs over SFTP on the session you're already connected to — no second app, no syncing a copy down first.",
    features: [
      {
        kicker: "Explorer",
        title: "Remote file system",
        body: "Navigate the server, create files and folders, rename and delete, multi-select, copy and paste. The Android back gesture can walk you up the tree instead of leaving.",
      },
      {
        kicker: "Transfers",
        title: "Upload & download",
        body: "Send files from the phone, or pull remote ones into a folder you choose — with a live progress bar and a result strip that waits for you if you switched tabs mid-transfer.",
      },
      {
        kicker: "Editor",
        title: "Syntax-highlighted code",
        body: "Open a source file and edit it with highlighting and a dirty-state indicator; saving writes back over SFTP. The connection is captured when the file opens, so switching sessions never breaks the edit.",
      },
      {
        kicker: "Filter",
        title: "Find it in a long directory",
        body: "Live filtering over the current listing, for the servers where /etc has three hundred entries.",
      },
      {
        kicker: "Viewers",
        title: "PDF, Markdown & media",
        body: "Read PDFs, render Markdown at a zoom level you set, view raster images and SVGs, and play video or audio — all inside the app.",
      },
      {
        kicker: "Sync",
        title: "Terminal follows the explorer",
        body: "Optionally keep the shell's working directory and the file browser's path pointed at the same place.",
      },
    ],
  },
  {
    id: "git",
    nav: "Git",
    kicker: "git · Local or remote",
    title: ["Source control", "in the panel"],
    intro:
      "A git client that drives the repository where it actually lives: on the server over an SSH exec channel, or on the machine running the Linux build.",
    features: [
      {
        kicker: "Status",
        title: "Staged & unstaged, split",
        body: "Parsed from git status --porcelain=v1 -z, keeping the index and worktree columns separate — and safe with paths containing spaces, quotes or renames.",
      },
      {
        kicker: "Actions",
        title: "The whole everyday loop",
        body: "Stage, unstage, discard, commit and amend, fetch, pull (with or without rebase) and push, without typing a single command.",
      },
      {
        kicker: "Diff",
        title: "Coloured unified diff",
        body: "Tap a changed file to read its diff, staged or unstaged, rendered with proper additions and deletions instead of raw patch text.",
      },
      {
        kicker: "Tree",
        title: "Lazy project browser",
        body: "Walk the repository from the same panel and long-press any file to send it to the explorer and editor.",
      },
      {
        kicker: "Safety",
        title: "No shell injection",
        body: "Commands are built from argument lists and quoted individually, so a commit message can contain quotes, $ or newlines and still be exactly what you typed.",
      },
      {
        kicker: "Timeouts",
        title: "Fails instead of hanging",
        body: "Terminal prompts are disabled and ssh runs with BatchMode, so a push that needs a passphrase reports an error rather than freezing the channel.",
      },
    ],
  },
  {
    id: "server",
    nav: "Server",
    kicker: "Monitor · Docker · SQL",
    title: ["Audit the box", "without typing"],
    intro:
      "A dedicated console with its own SSH client, independent from your terminal tabs, for the operations you'd otherwise google the flags for.",
    features: [
      {
        kicker: "Monitor",
        title: "Resources at a glance",
        body: "CPU, memory, disk and service state on live gauges, so a server that's misbehaving announces itself before you start reading logs.",
      },
      {
        kicker: "Docker",
        title: "Container control",
        body: "List containers with state filters, start and stop them with a tap, and inspect the ports they publish.",
      },
      {
        kicker: "Docker",
        title: "Images, volumes & networks",
        body: "Browse everything the daemon holds, check what's eating disk with system usage, and drive Compose projects and their logs.",
      },
      {
        kicker: "Database",
        title: "Tables & rows",
        body: "Connect a database profile and read its tables in a row grid, without shelling into a client.",
      },
      {
        kicker: "Database",
        title: "Schema map",
        body: "An entity-relationship view of the schema — the fastest way to remember how a project's tables actually join.",
      },
      {
        kicker: "Database",
        title: "SQL console",
        body: "Write and run queries against the connected database and read the result inline.",
      },
    ],
  },
  {
    id: "tunnels",
    nav: "Tunnels",
    kicker: "Port forwarding",
    title: ["Forward ports,", "watch traffic"],
    intro:
      "All three OpenSSH forwarding modes, configured per server and managed with the session that carries them.",
    features: [
      {
        kicker: "-L · -R · -D",
        title: "Local, remote & SOCKS5",
        body: "Reach a database bound to the server's loopback, expose a local port back to the host, or point an app at a SOCKS5 proxy running over the connection.",
      },
      {
        kicker: "Live",
        title: "Byte counters",
        body: "A dedicated screen shows every tunnel's throughput, and the terminal toolbar carries a badge that turns red the moment one fails.",
      },
      {
        kicker: "Lifecycle",
        title: "Tied to the session",
        body: "Tunnels start when the session connects, come back on reconnect exactly as they were, and apply live when you edit them — no reconnect needed.",
      },
      {
        kicker: "Binding",
        title: "Loopback by default",
        body: "A forwarded port is only reachable from the phone itself unless you explicitly expose it to the LAN.",
      },
      {
        kicker: "Idle timeout",
        title: "Closes when unused",
        body: "Optionally shut a tunnel down after N minutes with zero open connections — it narrows the exposure window and never cuts a transfer in progress.",
      },
    ],
  },
  {
    id: "personalization",
    nav: "Personalise",
    kicker: "Themes · i18n · Updates",
    title: ["Shape it", "around you"],
    intro:
      "A tool you use every day should look and behave the way you want it to.",
    features: [
      {
        kicker: "Appearance",
        title: "Themes & accent colour",
        body: "Switch the app theme and pick an accent — including custom colours you mix yourself and keep in the palette.",
      },
      {
        kicker: "Terminal",
        title: "Colour schemes & fonts",
        body: "Choose the terminal palette, the monospace font and the size for both the terminal and the editor.",
      },
      {
        kicker: "Layout",
        title: "Shortcut editor",
        body: "Build the quick-key rows yourself: labels, payloads, order, key height and width, across as many pages as you need.",
      },
      {
        kicker: "Scale",
        title: "Interface density",
        body: "Adjust icon scale so the UI fits your screen and your eyes rather than an average of both.",
      },
      {
        kicker: "English · Español",
        title: "Fully localised",
        body: "The whole interface ships in both languages and switches instantly, without losing your open sessions.",
      },
      {
        kicker: "Releases",
        title: "In-app updates",
        body: "Kammel checks GitHub Releases, shows the release notes and installs the new build for you.",
      },
    ],
  },
];

/** Flat count used in the page hero — kept honest by deriving it. */
export const FEATURE_COUNT = FEATURE_GROUPS.reduce(
  (n, g) => n + g.features.length,
  0,
);

export type UseCase = {
  /** Mono line that sets the scene — the moment, not a timestamp. */
  when: string;
  title: string;
  body: string;
  /** What each moment leans on; rendered as a credit line into the index. */
  uses: { label: string; href: string }[];
};

/**
 * The "what is this actually for" moments, shown on the home page between the
 * phone stair and the bento. Four, not more: the landing page's job is to make
 * the case, and /features is where the exhaustive answer lives — so every
 * credit line links into it.
 *
 * The order is a narrative: something breaks, you fix it, you review it, and
 * the last one hands off to the AI-agent cards in the bento below.
 */
export const USE_CASES: UseCase[] = [
  {
    when: "Production is down",
    title: "The alert lands while you're out on the street",
    body: "Open the server console, watch CPU and memory on live gauges, find the container that wedged and restart it with a tap — then tail the Compose logs until they settle. No laptop, no hunting for the right docker flag.",
    uses: [
      { label: "Server console", href: "/features#server" },
      { label: "Docker", href: "/features#server" },
      { label: "Terminal", href: "/features#terminal" },
    ],
  },
  {
    when: "A one-line fix",
    title: "The config is wrong and you know exactly where",
    body: "Browse to the file in the explorer, open it with syntax highlighting, change the line, save it back over SFTP — then reload the service from the terminal tab you already had open on that host.",
    uses: [
      { label: "File explorer", href: "/features#files" },
      { label: "Code editor", href: "/features#files" },
      { label: "SFTP", href: "/features#files" },
    ],
  },
  {
    when: "Before it ships",
    title: "Read every line that changed, then push",
    body: "The git panel splits staged from unstaged and shows the coloured diff of each file. Write the commit message you actually meant to write, push, and it's out — from a phone, on the train.",
    uses: [
      { label: "Git panel", href: "/features#git" },
      { label: "Diff viewer", href: "/features#git" },
    ],
  },
  {
    when: "The agent is waiting",
    title: "Claude Code stops and asks you something",
    body: "The session runs on the VPS while the app sits in the background. A notification says the agent is asking; one tap lands you in that exact tab, and a saved prompt — or a screenshot pasted straight from the keyboard — answers it.",
    uses: [
      { label: "Agent notifications", href: "/features#agents" },
      { label: "Prompt library", href: "/features#agents" },
      { label: "Clipboard upload", href: "/features#agents" },
    ],
  },
];

/** Compatibility strip under the index. Facts only — no marketing rows. */
export const SPEC_ROWS: { label: string; value: string }[] = [
  { label: "Platforms", value: "Android 8+ · Linux x86_64" },
  { label: "Protocols", value: "SSH-2 · SFTP · SOCKS5" },
  { label: "Auth", value: "Password · ed25519 & RSA keys" },
  { label: "Host keys", value: "SHA256 pinning (TOFU)" },
  { label: "Secret storage", value: "Android Keystore · libsecret" },
  { label: "Built with", value: "Flutter · dartssh2 · xterm" },
  // The repository ships a single MIT LICENSE file; "MIT & GPL" elsewhere on
  // the site refers to bundled dependencies, not to this project's own terms.
  { label: "Licence", value: "MIT — open source" },
  { label: "Price", value: "Free. No account, no telemetry" },
];
