import { CSSProperties } from "react";
import { ACCENT, ARCHIVO, MONO } from "./theme";
import type { MatrixRow } from "@/lib/comparison";

/**
 * A real <table> with a scroll container, not a grid of divs: the comparison is
 * tabular data, screen readers announce the row and column headers, and the
 * overflow wrapper is what stops a long table forcing the whole page to scroll
 * sideways on a phone. It is also the shape answer engines extract reliably —
 * an equivalent grid of divs loses the row/column relationship entirely.
 *
 * The heading is the caller's, not this component's: the landings put a plain
 * H2 above it while the home page runs a kicker, an H2 and a spec list first,
 * and baking one of those in here would force the other to nest headings.
 *
 * `columns[0]` is ours and is rendered in the accent colour; the criterion
 * column has no header of its own, so `columns` describes the value columns
 * only.
 */
export default function ComparisonTable({
  caption,
  columns,
  rows,
  note,
}: {
  /** Names the table for screen readers; not shown. */
  caption: string;
  columns: string[];
  rows: MatrixRow[];
  note: string;
}) {
  const cell: CSSProperties = {
    padding: "14px 16px",
    borderTop: "1px solid var(--k-bentoborder)",
    fontSize: 14,
    lineHeight: 1.5,
    color: "var(--k-paratext)",
    verticalAlign: "top",
  };
  const head: CSSProperties = {
    padding: "0 16px 12px",
    textAlign: "left",
    fontFamily: MONO,
    fontSize: 10.5,
    letterSpacing: ".2em",
    textTransform: "uppercase",
    color: "var(--k-bentofaint)",
    whiteSpace: "nowrap",
  };

  return (
    <>
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            // Below this the cells wrap to two words a line and the table stops
            // being readable, so it scrolls inside the wrapper instead. Scales
            // with the column count: two columns fit in less width than three.
            minWidth: 320 + columns.length * 190,
            borderCollapse: "collapse",
            textAlign: "left",
          }}
        >
          <caption
            style={{
              position: "absolute",
              width: 1,
              height: 1,
              overflow: "hidden",
              clip: "rect(0 0 0 0)",
              whiteSpace: "nowrap",
            }}
          >
            {caption}
          </caption>
          <thead>
            <tr>
              {/* The criterion column is the row-header column; it needs the
                  empty cell to keep the header row aligned. */}
              <th scope="col" style={head} />
              {columns.map((column, i) => (
                <th
                  key={column}
                  scope="col"
                  style={i === 0 ? { ...head, color: ACCENT } : head}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.criterion}>
                <th
                  scope="row"
                  style={{
                    ...cell,
                    fontFamily: ARCHIVO,
                    fontWeight: 700,
                    color: "var(--k-ink)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.criterion}
                </th>
                {row.values.map((value, i) => (
                  <td
                    key={columns[i] ?? i}
                    style={i === 0 ? { ...cell, color: "var(--k-sectext)" } : cell}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p
        style={{
          marginTop: 20,
          maxWidth: 720,
          fontSize: 12.5,
          lineHeight: 1.6,
          color: "var(--k-bentofaint)",
        }}
      >
        {note}
      </p>
    </>
  );
}
