'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavLinkProps } from "@/interfaces/inav-links";



const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  additionalClasses = "",
}) => {

  const pathname = usePathname();
    const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-gray-400 py-3 hover:text-white px-4 border-b lg:border-r border-gray-700 ${
        isActive ? "border-b-2 text-white border-b-[#FEA55F]" : "lg:border-b-0"
      } ${additionalClasses}`}
    >
      {label}
    </Link>
  );
};

export default NavLink;
