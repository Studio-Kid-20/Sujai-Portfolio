import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const TiltCard = ({ children, className }: Props) => {
  return (
    <div className={`relative h-full w-full ${className}`}>
      <div className="h-full w-full">
        {children}
      </div>
    </div>
  );
};
