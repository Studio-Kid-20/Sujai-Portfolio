import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

const tabs = [
  { to: "/", label: "Home", icon: "home", end: true },
  { to: "/projects", label: "Work", icon: "grid_view", end: false },
  { to: "/skills", label: "Skills", icon: "psychology", end: false },
  { to: "/contact", label: "Contact", icon: "mail", end: false },
] as const;

export function MobileBottomNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0c0c21]/90 pb-6 pt-2 backdrop-blur-xl md:hidden"
      aria-label="Mobile primary"
    >
      <div className="mx-auto flex max-w-lg items-center justify-around px-4">
        {tabs.map((tab) => (
          <NavLink key={tab.to} to={tab.to} end={tab.end} className="relative py-2 px-4">
            {({ isActive }) => (
              <div className="flex flex-col items-center gap-1">
                <motion.div
                  animate={{ 
                    scale: isActive ? 1.2 : 1,
                    color: isActive ? "#b6a0ff" : "#aaa8c4"
                  }}
                  className="relative z-10"
                >
                  <MaterialIcon name={tab.icon} className="text-2xl" />
                </motion.div>
                <span className={`font-label text-[10px] font-bold uppercase tracking-wider ${isActive ? "text-primary" : "text-on-surface-variant"}`}>
                  {tab.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav-pill"
                    className="absolute inset-0 z-0 rounded-2xl bg-primary/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </div>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

