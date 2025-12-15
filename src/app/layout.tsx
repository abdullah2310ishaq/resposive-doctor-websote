import type { Metadata } from "next";
import "../index.css";
import MenuButton from "../components/MenuButton";
import MenuOverlay from "../components/MenuOverlay";
import { MenuOverlayProvider } from "../components/MenuOverlayContext";

export const metadata: Metadata = {
  title: "Mana of Arta - Mind Spa",
  description: "Mind Spa - Mana of Arta",
  icons: {
    icon: "/round.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MenuOverlayProvider>
          {children}
          <MenuButton />
          <MenuOverlay />
        </MenuOverlayProvider>
      </body>
    </html>
  );
}

