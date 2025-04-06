import MeImage from "~/features/assets/icons/me.png";
import MilchickImage from "~/features/assets/icons/milchick.png";
import { IconTextAligner } from "~/features/ui/icon-text-aligner";

export const MeFaceIcon = () => {
  return (
    <IconTextAligner className="w-24">
      <IconTextAligner.Image src={MeImage} alt="Me" sizes="24px" className="rotate-[8deg]" />
    </IconTextAligner>
  );
};

export const MilchickFaceIcon = () => {
  return (
    <IconTextAligner className="w-24">
      <IconTextAligner.Image src={MilchickImage} alt="Milchick" sizes="24px" />
    </IconTextAligner>
  );
};
