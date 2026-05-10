import { HomeFooter } from "@/components/navigation/footer/HomeFooter";



export function SiteFooter() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="font-jersey20">
      <HomeFooter onScrollTop={scrollTop} />
    </div>
  );
}
