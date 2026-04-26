import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { MobileBottomNav } from "@/components/mobile/MobileBottomNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { documentTitleForPath } from "@/content/site";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { DotGrid, FloatingDecor } from "@/components/ui/BackgroundDecor";

function pickFooterVariant(pathname: string): "home" | "default" {
  return pathname === "/" ? "home" : "default";
}

export function MainLayout() {
  const { pathname } = useLocation();
  const footerVariant = pickFooterVariant(pathname);

  useEffect(() => {
    document.title = documentTitleForPath(pathname);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background text-on-background light:bg-[#f4f2fb] light:text-slate-900 selection:bg-primary selection:text-on-primary">
        {/* Background Depth Elements */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] animate-pulse" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-secondary/20 blur-[100px] animate-pulse delay-700" />
          <div className="absolute top-[20%] right-[10%] w-[25%] h-[25%] rounded-full bg-tertiary/10 blur-[80px] animate-pulse delay-1000" />
          
          {/* Grain Texture */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        {/* Page Specific Decor Layer */}
        <div className="fixed inset-0 z-[1] pointer-events-none">
          {pathname === "/" ? <DotGrid /> : <FloatingDecor />}
        </div>


        <SiteHeader />
        <div className="relative z-10 pb-24 pt-24 md:pb-8 md:pt-28">
          <Outlet />
        </div>
        <SiteFooter variant={footerVariant} />
        <MobileBottomNav />
      </div>
    </SmoothScroll>
  );
}
