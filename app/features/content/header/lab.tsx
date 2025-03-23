import { ContentHeader, type ContentHeaderProps } from "~/features/content/header/header";
import type { LabContentMetadata } from "~/features/content/metadata/metadata.server";
import { Icon } from "~/features/ui/icon/icon";
import { TextEnricher } from "~/features/ui/text-enricher";

type LabContentHeaderProps = ContentHeaderProps & {
  metadata: LabContentMetadata;
};

export const LabContentHeader = ({ metadata: { title, stack }, ...rest }: LabContentHeaderProps) => {
  return (
    <ContentHeader {...rest}>
      <ContentHeader.Body className="gap-16">
        <ContentHeader.Title>{title}</ContentHeader.Title>
        <HeaderStackSubtitle stack={stack} />
      </ContentHeader.Body>
    </ContentHeader>
  );
};

const HeaderStackSubtitle = ({ stack }: Pick<LabContentMetadata, "stack">) => {
  if (!stack || stack.length === 0) return null;

  const dict = {
    Motion: <Icon name="motion" className="h-[2.8rem]" />,
    Tailwind: <Icon name="tailwind" className="h-[2.8rem]" />,
  };

  return (
    <ContentHeader.Subtitle className="flex flex-col gap-8">
      <span className="inline-flex items-center justify-end">
        <TextEnricher mode="append" dict={dict}>
          {stack.join("+ ")}
        </TextEnricher>
      </span>
    </ContentHeader.Subtitle>
  );
};
