import { ContentHeader, type ContentHeaderProps } from "~/features/content/header/header";
import { formatContentHeaderDate } from "~/features/content/header/utils";
import { type WritingContentMetadata } from "~/features/content/metadata.server";

type WritingContentHeaderProps = ContentHeaderProps & {
  metadata: WritingContentMetadata;
};

export const WritingContentHeader = ({ metadata: { title, date }, ...rest }: WritingContentHeaderProps) => {
  const formattedDate = formatContentHeaderDate(date);

  return (
    <ContentHeader {...rest}>
      <ContentHeader.Body>
        <ContentHeader.Subtitle className="text-theme-foreground-muted">{formattedDate}</ContentHeader.Subtitle>
        <ContentHeader.Title>{title}</ContentHeader.Title>
      </ContentHeader.Body>
    </ContentHeader>
  );
};
