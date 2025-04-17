"use client";

import { useParams } from "next/navigation";

import { type ContentType } from "~/features/content/constants";
import { RootJsonLDScript } from "~/features/content/metadata/json-ld";
import { HomepageHeader } from "~/features/homepage/header/header";
import { Container } from "~/features/layout/container";

export default function HomepageLayout({ children }: { children: React.ReactNode }) {
  const params = useParams<{ contentType?: ContentType[] }>();

  const contentType = params.contentType?.[0];

  return (
    <>
      <Container>
        <div className="w-full flex flex-col gap-64 lg:flex-row lg:justify-between lg:items-start lg:gap-64-px ">
          <HomepageHeader selectedContentType={contentType} className="lg:sticky lg:top-container-vertical" />
          {children}
        </div>
      </Container>

      <RootJsonLDScript />
    </>
  );
}
