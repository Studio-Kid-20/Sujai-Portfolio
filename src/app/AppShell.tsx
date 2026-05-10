import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { BackgroundEffects } from "@/components/background/BackgroundEffects";
import { MobileBottomNav } from "@/components/navigation/MobileBottomNav";
import { SiteFooter } from "@/components/navigation/SiteFooter";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { resolveDocumentTitle } from "@/data/site";



export function AppShell() {
  const { pathname } = useLocation();


  useEffect(() => {
    document.title = resolveDocumentTitle(pathname);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background text-on-background light:bg-[#f4f2fb] light:text-slate-900 selection:bg-primary selection:text-on-primary">
        <BackgroundEffects />

        <SiteHeader />
        <div className="relative z-10 pb-24 pt-24 md:pb-8 md:pt-28">
          <Outlet />
        </div>
        <SiteFooter />
        <MobileBottomNav />
      </div>
    </SmoothScroll>
  );
}
