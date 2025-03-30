import CCAImage from "~/features/assets/icons/cca.png";
import { ContentHeader, type ContentHeaderProps } from "~/features/content/header/header";
import type { WorkContentMetadata } from "~/features/content/metadata/metadata.server";
import { cn } from "~/features/style/utils";
import { Icon } from "~/features/ui/icon/icon-component";
import { Image } from "~/features/ui/image";
import { BaseLink, Link } from "~/features/ui/link/link";
import { TextEnricher } from "~/features/ui/text-enricher";

type WorkContentHeaderProps = ContentHeaderProps & {
  metadata: WorkContentMetadata;
};

export const WorkContentHeader = ({
  metadata: { title, workName, workAccentColor, workUrl, agencyName, agencyUrl, awards },
  ...rest
}: WorkContentHeaderProps) => {
  return (
    <ContentHeader {...rest}>
      <ContentHeader.Body className="gap-20">
        <HeaderAppendixWrapper agencyName={agencyName} agencyUrl={agencyUrl}>
          <HeaderTitle title={title} workName={workName} workAccentColor={workAccentColor} workUrl={workUrl} />
        </HeaderAppendixWrapper>
        <HeaderAwardsSubtitle awards={awards} />
      </ContentHeader.Body>
    </ContentHeader>
  );
};

const HeaderTitle = ({
  title,
  workName,
  workAccentColor,
  workUrl,
}: Pick<WorkContentMetadata, "title" | "workName" | "workAccentColor" | "workUrl">) => {
  return (
    <ContentHeader.Title>
      <TextEnricher
        mode="replace"
        dict={{
          [workName]: (
            <Link href={workUrl} underline accentColor={workAccentColor}>
              {workName}
            </Link>
          ),
        }}
      >
        {title}
      </TextEnricher>
    </ContentHeader.Title>
  );
};

type HeaderAppendixWrapperProps = Pick<WorkContentMetadata, "agencyName" | "agencyUrl"> & {
  children: React.ReactNode;
};

const HeaderAppendixWrapper = ({ agencyName, agencyUrl, children }: HeaderAppendixWrapperProps) => {
  if (!agencyName) return children;

  const agencyIcon = <Icon name={agencyName} className="h-[5.2rem] hover:rotate-[8deg]" />;

  return (
    <ContentHeader.TitleAppendixWrapper
      className={cn(
        "flex items-center",
        "origin-bottom-right",
        "rotate-6 scale-75 container-header-appendix:rotate-0 container-header-appendix:scale-100",
        "mt-8 container-header-appendix:mt-0"
      )}
      appendix={<>&nbsp;x {agencyUrl ? <BaseLink href={agencyUrl}>{agencyIcon}</BaseLink> : agencyIcon}</>}
    >
      {children}
    </ContentHeader.TitleAppendixWrapper>
  );
};

const HeaderAwardsSubtitle = ({ awards }: Pick<WorkContentMetadata, "awards">) => {
  if (!awards || awards.length === 0) return null;

  const dict = {
    "{Awwwards}": <Icon name="awwwards" className="h-[2.8rem]" />,
    "{FWA}": <Icon name="fwa" className="h-[2.8rem]" />,
    "{CCA}": <Image src={CCAImage} alt="CCA" className="h-[3.2rem] w-auto" sizes="32px" />,
  };

  return (
    <ContentHeader.Subtitle className="flex flex-col gap-8">
      {awards.map((award, index) => (
        <span key={index} className="inline-flex items-center justify-end">
          <TextEnricher mode="replace" dict={dict}>
            {award}
          </TextEnricher>
        </span>
      ))}
    </ContentHeader.Subtitle>
  );
};
