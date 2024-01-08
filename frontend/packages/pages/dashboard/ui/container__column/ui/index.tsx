import { ReactNode } from "react";
import "./style.scss";
import React from "react";

enum Status {
  Preparing = "PREPARING",
  Ready = "READY",
}

type DashboardColumnProps = {
  children: ReactNode | ReactNode[];
  status: Status;
};

export function DashboardColumn({ children, status }: DashboardColumnProps) {
  const headerText = status === Status.Preparing ? "ONGOING" : "DONE";

  return (
    <main className="dashboard-column">
      <div>
        <div>{headerText}</div>
        <div className='.line'></div>
      </div>
      {children}
    </main>
  );
}
