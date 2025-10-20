"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function Breadcrumb({
  course,
  cid
}: {
  course: { name: string } | undefined;
  cid: string
}) {
  const pathname = usePathname();
  return (
    <span>
      Course {course?.name} [{cid}] &gt; {pathname.split("/").pop()}
    </span>
  );
}
