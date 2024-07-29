"use client"
import LeftSidebar from "../_components/left-sidebar";
import RightSidebar from "../_components/right-sidebar";

export default function SidebarLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col xl:flex-row ">
      
      <LeftSidebar />
      <main className="relative h-full flex-1">
       

        {children}
      </main>
      <RightSidebar />
    </section>
  );
}
