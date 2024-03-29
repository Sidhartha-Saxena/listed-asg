import "./globals.css";
import { Montserrat, Albert_Sans } from "next/font/google";
import AuthContext from "./authContext";
const albersans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-albertsans",
});
const monts = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${monts.variable} ${albersans.variable}`}>
        <AuthContext>{children}</AuthContext>
      </body>
    </html>
  );
}
