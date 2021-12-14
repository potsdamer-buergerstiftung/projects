import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const COOKIE_NAME = "accept_cookies";

export const useShowNewsletterModal = () => {
  const [showNewsletterModal, setShowNewsletterModal] = useState(true);

  useEffect(() => {
    if (!Cookies.get(COOKIE_NAME)) {
      setShowNewsletterModal(false);
    }
  }, []);

  const closeNewsletterModal = () => {
    setShowNewsletterModal(true);
    Cookies.set(COOKIE_NAME, "accepted", { expires: 365 });
  };

  return {
    showNewsletterModal,
    onCloseNewsletterModal: closeNewsletterModal,
  };
};
