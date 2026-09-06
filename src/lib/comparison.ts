/**
 * The home page comparison matrix.
 *
 * Every value in a rival column restates a row that is already verified in
 * ./landings.ts (the Termius and JuiceSSH comparisons, checked August 2026).
 * Nothing new is claimed here: two pages contradicting each other about a
 * competitor is precisely what stops an answer engine quoting the site at all.
 *
 * The rows Kammel loses — sync, teams, platform coverage — are not optional. A
 * comparison the author wins outright reads as advertising and gets quoted
 * less, not more, and the same rule already governs landings.ts.
 *
 * RULE: adding a row means adding it to the matching landing first, or having
 * a source you can point at. A comparison that overreaches is a liability.
 */
export type MatrixRow = {
  criterion: string;
  /** One entry per column, in the same order as `columns`. */
  values: string[];
};

export type Matrix = {
  /** columns[0] is ours; the table renders it in the accent colour. */
  columns: string[];
  rows: MatrixRow[];
  /** Rendered under the table — where the facts come from, and when. */
  note: string;
};

export const HOME_COMPARISON: Matrix = {
  columns: ["Kammel", "Termius", "JuiceSSH"],
  rows: [
    {
      criterion: "Licence",
      values: ["Open source, MIT", "Closed source", "Closed source"],
    },
    {
      criterion: "Price",
      values: [
        "Free, every feature",
        "Free tier plus paid Pro and Team plans",
        "Free tier plus a paid Pro unlock",
      ],
    },
    {
      criterion: "Account required",
      values: [
        "None",
        "Required; vault sync is the core feature",
        "Not required",
      ],
    },
    {
      criterion: "Built with",
      values: ["Flutter (Dart), dartssh2, xterm", "Not published", "Not published"],
    },
    {
      criterion: "Code editor",
      values: [
        "Syntax highlighting, saves back over SFTP",
        "Not part of the client",
        "Not included",
      ],
    },
    {
      criterion: "SFTP file explorer",
      values: ["Built in", "Built in", "Not included"],
    },
    {
      criterion: "Docker and database console",
      values: [
        "Docker, SQL console and ER diagram",
        "Not part of the client",
        "Not included",
      ],
    },
    {
      criterion: "Coding-agent notifications",
      values: ["BEL / OSC 9 / OSC 777 heads-up alerts", "Not offered", "Not offered"],
    },
    {
      criterion: "Secret storage",
      values: [
        "Android Keystore / libsecret, on the device",
        "Encrypted cloud vault",
        "App-managed storage",
      ],
    },
    {
      criterion: "Cross-device sync",
      values: [
        "None — data stays on the device",
        "Encrypted cloud vault across devices",
        "Not applicable",
      ],
    },
    {
      criterion: "Team features",
      values: ["None", "Shared vaults with role-based access", "None"],
    },
    {
      criterion: "Platforms",
      values: [
        "Android 8.0+, Linux x86_64",
        "macOS, Windows, Linux, iOS, Android",
        "Android",
      ],
    },
    {
      criterion: "Availability",
      values: [
        "GitHub Releases",
        "App stores on five platforms",
        "Unpublished from Google Play since Dec 2025",
      ],
    },
    {
      criterion: "Last release",
      values: ["Actively developed", "Actively developed", "v3.2.2, February 2021"],
    },
  ],
  note: "Termius details as published on termius.com and JuiceSSH facts as of August 2026: JuiceSSH was unpublished from Google Play on 11 December 2025 and last released v3.2.2 in February 2021. The rows state structure and defaults, not a judgement of quality — Termius covers platforms, cross-device sync and team vaults that Kammel does not.",
};
