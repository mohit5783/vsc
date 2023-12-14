import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.virtualifyme.com/"),
  title: "Virtualify Software Consultancy (VSC) – Mastering Digital Solutions",
  description:
    "Elevate your technological landscape with Virtualify Software Consultancy Pvt Ltd. Experience innovation at its best as we craft digital solutions tailored to meet the unique needs of your business.",

  keywords: [
    "Software",
    "Technology",
    "Solutions",
    "Innovative",
    "Business",
    "Development",
    "Custom",
    "Enterprise",
    "Digital",
    "Platform",
    "Integration",
    "Automation",
    "Analytics",
    "Support",
    "Implementation",
    "Virtualify Software Consultancy",
    "VSC",
  ],
};
const jsonLd = {
  "@context": "http://www.schema.org",
  "@type": "LocalBusiness",
  name: "Virtualify Software Consultancy Pvt. Ltd.",
  url: "https://www.virtualifyme.com/",
  sameAs: ["facebook", "twitter", "youtube", "linkedin"],
  logo: "https://www.virtualifyme.com/_next/image?url=%2Flogo.webp&w=128&q=75",
  image: "https://www.virtualifyme.com/_next/image?url=%2Flogo.webp&w=128&q=75",
  description:
    "Elevate your technological landscape with Virtualify Software Consultancy Pvt Ltd. Experience innovation at its best as we craft digital solutions tailored to meet the unique needs of your business.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "103, Maharana Pratap Colony, Subhash Ward",
    addressLocality: "Harda",
    addressRegion: "Madhya Pradesh",
    postalCode: "461331",
    addressCountry: "India",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "22.342117913308744",
    longitude: "77.09277144451126",
  },
  hasMap: "https://maps.app.goo.gl/anEqib4CjRaTyzWD7",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="sticky top-0 z-20">
          <Header />
        </div>
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
