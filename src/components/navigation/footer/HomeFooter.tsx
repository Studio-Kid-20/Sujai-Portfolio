import { footerNavLinks, footerResourceLinks } from "@/data/navigation";
import { COPYRIGHT_LINE, SITE_TAGLINE } from "@/data/site";

import { FooterConnectList } from "./FooterConnectList";
import { FooterLinkList } from "./FooterLinkList";

const FOOTER_BLURB =
  "Imagery-first thinking, browser-built execution, and a student builder mindset focused on shipping work that feels alive.";

const policyLinks = footerResourceLinks.filter((link) => link.label === "Privacy" || link.label === "Terms");

type HomeFooterProps = {
  onScrollTop: () => void;
};

export function HomeFooter({ onScrollTop }: HomeFooterProps) {
  return (
    <footer className="relative w-full overflow-hidden border-t border-white/5 bg-[#0c0c21] pb-10 pt-20 light:border-slate-200 light:bg-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[#111128] light:to-slate-200/80" />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 md:grid-cols-4">
        <div className="space-y-6 md:col-span-1">
          <div className="text-2xl font-black text-white light:text-slate-900">{SITE_TAGLINE}</div>
          <p className="font-jersey20 text-base leading-relaxed text-slate-500 light:text-slate-600">{FOOTER_BLURB}</p>
          <div className="inline-flex items-center gap-2 rounded-full border border-tertiary/20 bg-tertiary/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-tertiary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-tertiary" />
            Open for collaborations
          </div>
        </div>

        <div className="space-y-4 md:col-span-1">
          <h4 className="text-base font-bold uppercase tracking-widest text-white light:text-slate-900">
            Navigation
          </h4>
          <FooterLinkList links={footerNavLinks} />
        </div>

        <div className="space-y-4 md:col-span-1">
          <h4 className="text-base font-bold uppercase tracking-widest text-white light:text-slate-900">
            Connect
          </h4>
          <FooterConnectList />
        </div>

        <div className="space-y-4 md:col-span-1">
          <h4 className="text-base font-bold uppercase tracking-widest text-white light:text-slate-900">
            Legal
          </h4>
          <FooterLinkList links={policyLinks} />
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/5 px-8 pt-8 md:flex-row light:border-slate-200">
        <p className="font-jersey20 text-base tracking-wide text-slate-500 light:text-slate-600">{COPYRIGHT_LINE}</p>
        <button
          type="button"
          onClick={onScrollTop}
          className="text-sm text-violet-400 transition-colors hover:text-cyan-400 light:text-violet-700"
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
}
