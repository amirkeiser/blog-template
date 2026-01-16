/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

interface PromoContentProps {
  variant?: "desktop" | "mobile";
  className?: string;
}

export function PromoContent({
  variant = "desktop",
  className,
}: PromoContentProps) {
  if (variant === "mobile") {
    return (
      <div className={cn("border-t border-border bg-muted/20 p-3", className)}>
        <div className="flex items-center gap-3">
          <img
            src="/yup-logo.png"
            alt="YourUniPath"
            className="h-8 w-auto flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-foreground/90 truncate">
              Find Your Perfect Course
            </p>
            <p className="text-xs text-muted-foreground truncate">
              Get matched with university programs
            </p>
          </div>
          <a
            href={siteConfig.mainSiteUrl}
            className="text-xs text-primary hover:text-primary/80 font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            Get Started
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn("border border-border rounded-lg p-4 bg-card", className)}
    >
      <div className="flex flex-col gap-4">
        <div className="w-full h-40 rounded-md bg-gradient-to-br from-[#21437d] to-[#3a5a9b] flex items-center justify-center">
          <img
            src="/yup-logo.png"
            alt="YourUniPath"
            className="h-16 w-auto"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold tracking-tighter">
            Ready to Start Your Journey?
          </h3>
          <p className="text-sm text-muted-foreground">
            Get matched with the perfect university course for your career goals.
            Our advisors help you find and apply to degree programs.
          </p>
        </div>
        <a
          href={siteConfig.mainSiteUrl}
          className="bg-[#21437d] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#21437d]/90 text-center"
        >
          Find Your Course
        </a>
      </div>
    </div>
  );
}
