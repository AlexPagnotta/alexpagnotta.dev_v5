"use client";

import { usePathname } from "next/navigation";

import { LabDemoPreviewContainer } from "~/features/lab/demo-preview-container";

import { LabDemo } from "../../demo";

export default function LabDemoSlot() {
  const pathname = usePathname();

  return (
    <LabDemoPreviewContainer href={`${pathname}/demo`}>
      <LabDemo />
    </LabDemoPreviewContainer>
  );
}
