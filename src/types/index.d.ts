import { store } from "@/features/store";
import { ReactNode } from "react";

interface Children {
  children: ReactNode;
}

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

type IsMobile = boolean | null;

interface TimeLabel {
  time: number,
  label: string,
}

interface DealsCountdown {
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
}