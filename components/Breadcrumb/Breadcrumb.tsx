"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";

const Breadcrumb = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  // Build breadcrumb trail
  const crumbs = [
    { name: "Home", href: "/" },
    ...segments.map((seg, index) => ({
      name: decodeURIComponent(seg.charAt(0).toUpperCase() + seg.slice(1)),
      href: "/" + segments.slice(0, index + 1).join("/"),
    })),
  ];

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-4">
      <ol className="flex items-center flex-wrap space-x-1 md:space-x-2">
        {crumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <MdChevronRight className="w-4 h-4 text-gray-400 mx-1" />
            )}
            <Link
              href={crumb.href}
              className="text-gray-500 hover:text-gray-800 hover:underline capitalize">
              {crumb.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
