import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Limit Less Academy - Premier Cricket Training Academy",
  description: "At Limit Less Academy, we are committed to nurturing the next generation of cricket stars. Located in [City Name], our state-of-the-art facilities and expert coaching staff provide tailored training for players of all ages and skill levels. Whether you are a beginner looking to learn the fundamentals or an advanced player refining your technique, we offer specialized programs designed to elevate your game. Join us and unleash your limitless potential on the field!",
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
