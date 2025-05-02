"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface NavLinkProps {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, exact = false, children }) => {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={clsx(
        "relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200",
        "text-white hover:text-blue-600 hover:bg-gray-100",
        {
          "bg-green-500 text-blue-700": isActive,
        }
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
