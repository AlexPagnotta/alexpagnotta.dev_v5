"use client";

import { usePathname } from "next/navigation";

import { LabDemoPreviewContainer } from "~/features/lab/demo-preview-container";

import { LabDemo } from "../../carousel-demo/demo";
import { contentMetadata } from "../../metadata";

export default function LabDemoSlot() {
  const pathname = usePathname();

  return (
    <LabDemoPreviewContainer
      href={`${pathname}/demo`}
      accentColor={contentMetadata.accentColor}
      className="aspect-auto h-[550px]"
    >
      <LabDemo />
    </LabDemoPreviewContainer>
  );
}
