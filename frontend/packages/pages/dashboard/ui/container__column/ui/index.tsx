import { ReactNode } from "react";
import "./style.scss";
import React from "react";

export enum Status {
  Preparing = "PREPARING",
  Ready = "READY",
}

type DashboardColumnProps = {
  children: ReactNode | ReactNode[];
  status: Status;
};

export function DashboardColumn({ children, status }: DashboardColumnProps) {
  return (
    <main className="dashboard-column">
      <div>
        <div>{status}</div>
        <span className='.line'></span>
      </div>
      {children}
    </main>
  );
}
