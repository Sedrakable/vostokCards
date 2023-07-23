import { useEffect, useState } from "react";
import { useWindowDimensions } from "./useWindowDimensions";

export const DESKTOP_BREAKPOINT_WIDTH = 1680;
export const LAPTOP_BREAKPOINT_WIDTH = 1200;
export const TABLET_BREAKPOINT_WIDTH = 640;

export function useWindowResize() {
  const [responsiveView, setResponsiveView] = useState<{
    isMobile: boolean;
    isTablet: boolean;
    isLaptop: boolean;
    isDesktop: boolean;
    isMobileOrTablet: boolean;
  }>({
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    isDesktop: false,
    isMobileOrTablet: false,
  });
  const { width } = useWindowDimensions();

  useEffect(() => {
    function handleResize() {
      const isMobile = width! < TABLET_BREAKPOINT_WIDTH;
      const isTablet =
        width! >= TABLET_BREAKPOINT_WIDTH && width! < LAPTOP_BREAKPOINT_WIDTH;
      const isLaptop =
        width! >= LAPTOP_BREAKPOINT_WIDTH && width! < DESKTOP_BREAKPOINT_WIDTH;
      const isDesktop = width! >= DESKTOP_BREAKPOINT_WIDTH;

      setResponsiveView({
        isMobile,
        isTablet,
        isLaptop,
        isDesktop,
        isMobileOrTablet: isMobile || isTablet,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return responsiveView;
}
