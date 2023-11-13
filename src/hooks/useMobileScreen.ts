import { useEffect, useState } from "react";

export const useMobileScreen = (size = 412) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < size);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 412);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isSmallScreen;
};
