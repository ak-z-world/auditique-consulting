import "./globals.css";
import { roboto, lora, poppins, BricolageGrotesque, inter } from "./fonts";
// Added Header to the layout imports
import { Footer, Header } from "@/components/layout";
import GoToTop from "@/components/common/GoToTop";

export const metadata = {
  metadataBase: new URL("https://auditique-consulting.vercel.app"),

  title: {
    default: "Auditique Consulting | Chartered Accountant & Financial Advisory Firm",
    template: "%s | Auditique Consulting",
  },

  description:
    "Auditique Consulting is a trusted Chartered Accountant firm providing expert tax consultancy, accounting, compliance, and financial advisory services for businesses, professionals, and individuals globally.",

  keywords: [
    "Auditique Consulting",
    "Chartered Accountant firm",
    "Tax consultancy services",
    "Financial advisory services",
    "GST filing services",
    "Income tax filing",
    "Business compliance services",
    "Accounting and bookkeeping",
    "Startup financial advisory",
    "CA firm in Chennai",
    "Global tax consulting",
  ],

  authors: [
    {
      name: "Auditique Consulting",
      url: "https://auditique-consulting.vercel.app",
    },
  ],

  creator: "Auditique Consulting",
  publisher: "Auditique Consulting",

  openGraph: {
    title: "Auditique Consulting | Expert Chartered Accountants & Advisors",
    description: "Empower your business with expert tax planning, GST compliance, accounting, and strategic financial advisory from trusted CA professionals.",
    url: "https://auditique-consulting.vercel.app",
    siteName: "Auditique Consulting",
    images: [
      {
        url: "https://auditique-consulting.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Auditique Consulting - Expert Chartered Accountants & Financial Advisors",
        type: "image/png", // Explicitly declaring the image type helps some platforms render faster
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Auditique Consulting | Expert Chartered Accountants & Advisors",
    description: "Expert tax planning, GST compliance, accounting, and strategic financial advisory for businesses and individuals globally.",
    images: ["https://auditique-consulting.vercel.app/og-image.png"],
    site: "@AuditiqueConsult", // Optional: Replace with your actual Twitter handle
    creator: "@AuditiqueConsult", // Optional: Replace with your actual Twitter handle
  },

  icons: {
    icon: "app/favicon.ico",
    shortcut: "app/favicon.ico",
    apple: "app/favicon.ico",
  },

  category: "Finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${roboto.variable} ${inter.variable} ${lora.variable} ${poppins.variable} ${BricolageGrotesque.className} antialiased`}
      >
        {/* Header added here so it renders on every page */}
        <Header />

        <GoToTop />

        {/* Page content loads here */}
        {children}

        <Footer />
      </body>
    </html>
  );
}