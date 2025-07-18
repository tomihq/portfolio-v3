import { DM_Sans as FontSans } from "next/font/google"

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ["400", "600", "700", "900"]
  })