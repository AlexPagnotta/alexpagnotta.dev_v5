import { type ComponentPropsWithoutRef } from "react";

type ContentBodyContainerProps = ComponentPropsWithoutRef<"div">;

export const ContentBodyContainer = ({ children, ...rest }: ContentBodyContainerProps) => {
  return (
    <div className="relative mt-64" {...rest}>
      <main className="max-w-[56rem] ml-auto">{children}</main>
    </div>
  );
};
