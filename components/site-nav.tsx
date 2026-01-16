/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-20 w-full bg-[#21437d]">
      <div className="max-w-7xl mx-auto w-full flex h-14 items-center justify-between px-6">
        <div className="mr-4 flex">
          <Link
            href="/"
            className="mr-6 flex items-center gap-2 font-semibold text-lg tracking-tight text-white"
          >
            <img
              src="/yup-logo.png"
              alt="YourUniPath"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        <div className="flex flex-1 w-full justify-end">
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-white/80 hover:text-white text-sm">
              Blog
            </Link>
            <a
              href={siteConfig.mainSiteUrl}
              className="bg-white text-[#21437d] px-4 py-2 rounded-md text-sm font-medium hover:bg-white/90"
            >
              Find Your Course
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
