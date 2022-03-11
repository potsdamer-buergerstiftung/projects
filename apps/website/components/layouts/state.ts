import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";

const showBackButtonState = atom({
  key: "Layout/ShowBackButton",
  default: false,
});

export const useShowBackButtonState = () => useRecoilState(showBackButtonState);

export const useShowBackButton = () => {
  const [_, setShowBackButton] = useRecoilState(showBackButtonState);

  useEffect(() => {
    setShowBackButton(true);
  }, [setShowBackButton]);

  useEffect(() => {
    return () => {
      setShowBackButton(false);
    };
  }, [setShowBackButton]);
};
