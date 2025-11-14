"use client";
import React from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function Modules() {
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects: Modules</h3>
      <h4>Retrieving Module</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary"
        href={`${HTTP_SERVER}/lab5/module`}
        target="_blank"
      >
        Get Module
      </a>
      <hr />
      <h4>Retrieving name</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary"
        href={`${HTTP_SERVER}/lab5/module/name`}
        target="_blank"
      >
        Get Module Name
      </a>
      <hr />
    </div>
  );
}
