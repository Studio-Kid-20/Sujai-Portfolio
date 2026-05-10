import { MaterialIcon } from "@/components/ui/MaterialIcon";

type Accent = "primary" | "secondary" | "tertiary";

interface NodeData {
  id: string;
  label: string;
  icon: string;
  side: "left" | "right";
  x: number;
  y: number;
  accent: Accent;
  number: string;
  detail: string;
}

const NODES: NodeData[] = [
  // Input Side Nodes (Left) - Pushed further to edges
  { id: "ideas", label: "Ideas", icon: "lightbulb", side: "left", x: 18, y: 18, accent: "primary", number: "01", detail: "Conceptual Framing" },
  { id: "design", label: "Design", icon: "architecture", side: "left", x: 10, y: 50, accent: "secondary", number: "02", detail: "Visual Language" },
  { id: "code", label: "Code", icon: "terminal", side: "left", x: 18, y: 82, accent: "tertiary", number: "03", detail: "Logic Architecture" },
  
  // Output Side Nodes (Right) - Pushed further to edges
  { id: "website", label: "Website", icon: "language", side: "right", x: 82, y: 18, accent: "secondary", number: "04", detail: "Live Deployment" },
  { id: "solution", label: "Solution", icon: "auto_fix_high", side: "right", x: 90, y: 50, accent: "primary", number: "05", detail: "Business Value" },
  { id: "ui-ux", label: "UI/UX", icon: "devices", side: "right", x: 82, y: 82, accent: "tertiary", number: "06", detail: "Human Experience" },
];

const accentColors = {
  primary: "#b6a0ff", // Violet
  secondary: "#ff8ab4", // Pink/Rose
  tertiary: "#8affd6", // Mint/Cyan
};

export function NeuralCanvasSection() {
  return (
    <section className="relative py-24" aria-labelledby="neural-heading">
      <div className="mx-auto max-w-7xl px-6">
        {/* Main Graphic Container with more breathing room */}
        <div className="relative aspect-[16/8] w-full rounded-[4rem] border border-white/5 bg-[#0a0a1a] shadow-2xl overflow-hidden">
          
          {/* Subtle Background Grid - Clean Performance */}
          <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:40px_40px]" />

          {/* Concentric Glow Rings - Re-centered and scaled up */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-[36rem] w-[36rem] rounded-full border border-primary/5 bg-primary/5 animate-pulse-slow" />
            <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10 bg-primary/5" />
          </div>

          {/* Central Hub (SUJAI) - Increased Radius */}
          <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-primary via-secondary to-tertiary p-[1px] shadow-[0_0_100px_rgba(182,160,255,0.25)]">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[#08081a]">
                  <div className="mb-1 text-[11px] font-black uppercase tracking-[0.35em] text-white/40">SYSTEM</div>
                  <span 
                    className="text-2xl tracking-[0.05em] text-white"
                    style={{ fontFamily: "'Jersey 25', cursive" }}
                  >
                    SUJAI
                  </span>
                  {/* Dots removed as requested */}
                </div>
              </div>
            </div>
          </div>

          {/* Connection Layer (SVG) */}
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {NODES.map((node) => {
              const isLeft = node.side === "left";
              const cp1x = isLeft ? node.x + 30 : node.x - 30;
              const cp2x = isLeft ? 50 - 20 : 50 + 20;
              
              const pathD = `M ${node.x} ${node.y} C ${cp1x} ${node.y}, ${cp2x} 50, 50 50`;

              return (
                <g key={`flow-${node.id}`}>
                  <path
                    d={pathD}
                    fill="none"
                    stroke={accentColors[node.accent]}
                    strokeWidth="0.3"
                    strokeOpacity="0.2"
                    className="animate-flow-dash"
                  />
                  {/* Traveling Particle */}
                  {/* Traveling Particle removed as requested */}
                </g>
              );
            })}
          </svg>

          {/* Satellite Nodes - Spaced out and clean */}
          {NODES.map((node) => (
            <div
              key={node.id}
              className="absolute z-20 group"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="flex flex-col items-center gap-3">
                {/* Number Badge */}
                <div 
                  className="mb-[-10px] z-30 px-3 py-1 rounded-lg border border-white/10 bg-[#0a0a20] text-[9px] font-black tracking-widest transition-all group-hover:scale-110 group-hover:border-white/20"
                  style={{ color: accentColors[node.accent] }}
                >
                  {node.number}
                </div>

                <div 
                  className="flex w-36 flex-col overflow-hidden rounded-[2rem] border border-white/5 bg-[#0c0c21]/90 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:translate-y-[-4px]"
                >
                  <div className="flex h-12 items-center justify-center bg-white/[0.03]">
                    <MaterialIcon 
                      name={node.icon} 
                      className="text-2xl" 
                      style={{ color: accentColors[node.accent] }}
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="font-headline font-syne text-[11px] font-bold uppercase tracking-widest text-white">
                      {node.label}
                    </h4>
                    <p className="mt-1 font-inter text-[9px] font-medium leading-relaxed text-white/40">
                      {node.detail}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Description Text Section */}
        <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <h2 className="title-gradient text-3xl font-black leading-tight md:text-4xl">
              Auto-structured process <br /> for the modern web.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="font-jersey20 text-2xl leading-relaxed text-on-surface-variant">
              Every project follows a precise architectural loop, moving from imagination to responsive, live code through a system of interconnected nodes.
            </p>
            <p className="font-jersey20 text-lg text-on-surface-variant opacity-70">
              I turn raw ideas into scalable digital solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
