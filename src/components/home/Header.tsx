import React from "react";
import useRender from "@/hooks/useRender";
import Tablet from "@/components/home/header/Tablet";
import Desktop from "@/components/home/header/Desktop";
import Mobile from "@/components/home/header/Mobile";

const Header = () => {
  const [render] = useRender();

  switch (render) {
    case "tablet":
      return <Tablet />;

    case "desktop":
      return <Desktop />;

    default:
      return <Mobile />;
  }
};

export default Header;
