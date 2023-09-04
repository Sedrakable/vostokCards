import React, { useEffect, useState, ReactNode } from "react";
import { ScrollRestoration } from "react-router-dom";

const Route: React.FC<{ path: string; children: ReactNode }> = ({
  path,
  children,
}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return currentPath === path ? (
    <>
      {children}
      <ScrollRestoration
        getKey={(location, matches) => {
          // default behavior
          return location.key;
        }}
      />
    </>
  ) : null;
};

export default Route;
