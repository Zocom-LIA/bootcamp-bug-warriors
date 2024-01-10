import { ReactNode } from "react";
import "./style.scss";
import React from "react";

export enum Status {
  Ongoing = "ONGOING",
  Done = "DONE",
}

type DashboardColumnProps = {
  children: ReactNode | ReactNode[];
  status: Status;
};

export function DashboardColumn({ children, status }: DashboardColumnProps) {
  return (
    <main className="dashboard-column">
      <section className="dashboard-column__head">
        <h2>{status}&nbsp; </h2>
        <span className="dashboard-column__head__line"></span>
      </section>
      {children}
    </main>
  );
}
