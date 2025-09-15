import { ReactNode } from "react";
import TOC from "./TOC";
import "./layout.scss"

export default function LabsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="labs-layout-container">
      <div className="table-contents-wrapper">
        <TOC />
      </div>
      <div className="lab-content">
        <h1>Labs</h1>
        {children}
      </div>
    </div>
  );
}
