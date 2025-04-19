import { ContentHeader, type ContentHeaderProps } from "~/features/content/header/header";
import { formatContentHeaderDate } from "~/features/content/header/utils";
import { type WritingContentMetadata } from "~/features/content/metadata/metadata.server";

type WritingContentHeaderProps = Omit<ContentHeaderProps, "accentColor"> & {
  metadata: WritingContentMetadata;
};

export const WritingContentHeader = ({
  metadata: { title, date, accentColor },
  ...rest
}: WritingContentHeaderProps) => {
  const formattedDate = formatContentHeaderDate(date);

  return (
    <ContentHeader {...rest} accentColor={accentColor}>
      <ContentHeader.Body>
        <ContentHeader.Subtitle className="text-theme-foreground-muted">{formattedDate}</ContentHeader.Subtitle>
        <ContentHeader.Title>{title}</ContentHeader.Title>
      </ContentHeader.Body>
    </ContentHeader>
  );
};
