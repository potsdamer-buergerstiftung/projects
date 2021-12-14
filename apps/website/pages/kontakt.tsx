import { Default } from "@components/layouts";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("@components/contact/Map"), {
  ssr: false,
});

export default function ContactPage() {
  return (
    <>
      <DynamicComponent />
    </>
  );
}

ContactPage.Layout = Default;
