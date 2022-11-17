import dynamic from "next/dynamic";
import { FC } from "react";

type DefaultLayoutProps = {
  children?: React.ReactNode;
};

const ScrollProgressIndicator = dynamic(
  () => import("../ScrollProgressIndicator")
);

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div>
      {children}
      <div
        className="fixed left-[4vh] top-[50%] z-50 inline-flex origin-top-left items-center align-middle"
        style={{ transform: "rotate(-90deg) translate(-50%, 0)" }}
      >
        <ScrollProgressIndicator />
      </div>
    </div>
  );
};

export default DefaultLayout;
