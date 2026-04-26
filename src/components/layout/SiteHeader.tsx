import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { primaryNav } from "@/content/site";
import { GradientLogo } from "@/components/ui/GradientLogo";

export function SiteHeader() {
  return (
    <header className="fixed left-1/2 top-6 z-50 w-[95%] max-w-7xl -translate-x-1/2">
      <nav
        className="flex w-full items-center justify-between px-6 py-4 font-headline tracking-tight md:px-10 rounded-2xl border border-white/10 bg-surface/40 shadow-[0px_20px_40px_rgba(0,0,0,0.3)] backdrop-blur-2xl"
        aria-label="Primary"
      >
        <div className="flex items-center gap-2">
          <GradientLogo />
        </div>
        
        <div className="hidden items-center gap-2 md:flex">
          {primaryNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.match === "exact"}
              className="relative px-4 py-2 text-sm font-bold uppercase tracking-widest transition-colors"
            >
              {({ isActive }) => (
                <>
                  <span className={isActive ? "text-white" : "text-on-surface-variant hover:text-white"}>
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-tertiary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <NavLink
            to="/contact"
            className="group relative flex items-center justify-center overflow-hidden rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-on-primary transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Let's Build</span>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-secondary/0 via-white/20 to-secondary/0 opacity-0 transition-opacity group-hover:opacity-100" />
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

