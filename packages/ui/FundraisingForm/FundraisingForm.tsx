import { FC } from "react";
import { atom, useRecoilState } from "recoil";

enum FormProgress {
  AmountSelection,
  InformationSelection,
}

const fundraisingFormProgressState = atom<FormProgress>({
  key: "fundraisingProgressForm",
  default: FormProgress.AmountSelection,
});

const FundraisingForm: FC = () => {
  const [fundraisingFormProgress, setFundraisingFormProgress] = useRecoilState(
    fundraisingFormProgressState
  );
  switch (fundraisingFormProgress) {
    case FormProgress.InformationSelection:
      return <h1>Information Selection</h1>;
    default:
      return <h1>Amount selection</h1>;
  }
};

export default FundraisingForm;
