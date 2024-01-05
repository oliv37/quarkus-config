import { Inter } from "next/font/google";
import AppProvider from "@/components/shared/providers/AppProvider";
import Header from "./Header";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

const time = new Date().getTime();

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <AppProvider>
          <Header />
          {props.children}
        </AppProvider>
        <script src={`/theme.js?v=${time}`} async />
      </body>
    </html>
  );
}
