"use client";

import { createContext, useContext } from "react";

type LabDemoContextState = {
  type: "preview" | "full-page";
} | null;

const LabDemoContext = createContext<LabDemoContextState>({
  type: "preview",
});

type LabDemoProviderProps = LabDemoContextState & {
  children: React.ReactNode;
};

/**
 * Provider for the lab demo context
 * @param type - The type of demo
 * @param children - The children to render
 * @returns The lab demo provider
 */
export const LabDemoProvider = ({ type, children }: LabDemoProviderProps) => {
  return (
    <LabDemoContext.Provider
      value={{
        type,
      }}
    >
      {children}
    </LabDemoContext.Provider>
  );
};

/**
 * Hook to use the lab demo context
 * @returns The lab demo context
 */
export const useLabDemo = () => {
  const context = useContext(LabDemoContext);
  if (!context) {
    throw new Error("useLabDemo must be used within a LabDemoProvider");
  }

  return context;
};
