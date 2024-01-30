"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  const path = usePathname();

  return (
    <div className="bg-blue-500 flex flex-col items-center p-4 min-h-screen text-white">
      <h1 className="font-bold text-2xl text-white mb-8">Projetas</h1>

      <div className="text-white flex">
        <div className="flex gap-4">
          <div className="flex flex-col">
            <Link href={"/"}>
              <Button
                className={`w-full text-white bg-transparent ${
                  path === "/" ? "bg-blue-400" : ""
                }`}
                variant={"link"}
              >
                Dashboard
              </Button>
            </Link>

            <Link href={"/projects"}>
              <Button
                className={`w-full text-white bg-transparent ${
                  path === "/projects" ? "bg-blue-400" : ""
                }`}
                variant={"link"}
              >
                Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
