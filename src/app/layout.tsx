import type { Metadata } from "next";
import LoadingScreen from "@/components/LoadingScreen";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {console.log("Render HomeLayout");
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body>
        <LoadingScreen/>
       {children}
      </body>
    </html>
  );
}
