"use client";
import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import store from "./store";
import { Provider } from "react-redux";

import "./styles.css";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Provider store={store}>
      <div id="wd-kambaz" className="d-flex">
        <KambazNavigation />
        <div className="flex-fill wd-main-content-offset p-3">{children}</div>
      </div>
    </Provider>
  );
}
