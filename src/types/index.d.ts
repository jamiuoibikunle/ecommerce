import { ReactNode } from "react";

interface Children {
  children: ReactNode;
}

type IsMobile = boolean | null;

interface TimeLabel {
  time: number,
  label: string,
}