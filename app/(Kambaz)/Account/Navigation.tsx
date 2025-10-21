"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname();
  const links = [
    "Signin",
    "Signup",
    "Profile",
  ];
  return (
    <div id="wd-account-navigation" className="wd list-group rounded-0">
      {links.map((e, i) => {
        return (
          <Link
            href={e}
            id="wd-course-home-link"
            key={i}
            className={`list-group-item border-0
              ${pathname.includes(e) ? "active" : "text-danger"}`}
          >
            {e}
          </Link>
        );
      })}
      {/* <Link
        href="Signin"
        className={`list-group-item border-0
            ${
              pathname.includes("Account")
                ? "active"
                : "text-danger"
            }`}
      >
        Signin
      </Link>
      <Link href="Signup" className="list-group-item text-danger border-0">
        Signup
      </Link>
      <Link href="Profile" className="list-group-item text-danger border-0">
        Profile
      </Link> */}
    </div>
  );
}
