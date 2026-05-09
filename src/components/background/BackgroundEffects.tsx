export const BackgroundEffects = () => {
  return (
    <>
      {/* Background Depth Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-25">
        <div className="absolute top-[-5%] left-[-5%] w-[35%] h-[35%] rounded-full bg-primary/15 blur-[80px] animate-pulse" />
        <div className="absolute bottom-[15%] right-[-5%] w-[25%] h-[25%] rounded-full bg-secondary/15 blur-[60px] animate-pulse delay-700" />
        <div className="absolute top-[30%] right-[15%] w-[20%] h-[20%] rounded-full bg-tertiary/10 blur-[40px] animate-pulse delay-1000" />

        {/* Grain Texture - Disabled for performance */}
        {/* <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" /> */}
      </div>

      {/* Page Specific Decor Layer - Disabled for performance */}
      {/* <div className="fixed inset-0 z-[1] pointer-events-none">
        ...
      </div> */}
    </>
  );
};
