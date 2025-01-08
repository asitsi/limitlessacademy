import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Limit Less Academy - Premier Cricket Training Academy",
  description: "LimitsLess Cricket Academy in Pune nurtures future cricket stars with expert coaching and top facilities. From beginners to pros, our tailored programs help all players excel. Unleash your potential and elevate your cricket game today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
