import React from "react";
import useRender from "@/hooks/useRender";
import Tablet from "@/components/header/Tablet";
import Desktop from "@/components/header/Desktop";
import Mobile from "@/components/header/Mobile";

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
