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
      className={`text-[#607B96]  lg:h-full lg:flex lg:items-center hover:text-white hover:bg-gray-800 px-4    ${
        isActive ? "border-b text-white border-b-[#FEA55F]" : "lg:border-b-0"
      } ${additionalClasses}`}
    >
      {label}
    </Link>
  );
};

export default NavLink;
