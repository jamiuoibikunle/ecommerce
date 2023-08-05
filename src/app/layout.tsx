import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "../chakra/ThemeProvider";
import { Children } from "@/types";
import { Providers } from "@/features/provider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Project by Ibikunle Jamiu",
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <ThemeProvider>{children}</ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
