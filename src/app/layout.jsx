import { Inter } from "next/font/google";
import "@/css/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Port | Caynnan",
  description: "Portifolio do caynnan!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
