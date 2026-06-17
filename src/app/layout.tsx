import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { footerLinks } from "../../profile.config";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-serif", weight: ["400"] });

const description =
    "Kibet Brian — full-stack software engineer building production-ready web and mobile applications for startups and businesses.";

export const metadata: Metadata = {
    title: "Kibet Brian",
    description,
    metadataBase: new URL("https://kibetbrian.codes"),
    openGraph: {
        title: "Kibet Brian",
        description,
        url: "https://kibetbrian.codes",
        type: "website",
        images: ["/images/memoji-computer.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Kibet Brian",
        description,
        images: ["/images/memoji-computer.png"],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kibet Brian",
    jobTitle: "Full-Stack Software Engineer",
    url: "https://kibetbrian.codes",
    sameAs: footerLinks.map((link) => link.href),
    worksFor: {
        "@type": "Organization",
        name: "Nogeybix Labs",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body
                className={twMerge(
                    inter.variable,
                    calistoga.variable,
                    "bg-gray-900 text-white font-sans antialiased"
                )}>
                {children}
            </body>
        </html>
    );
}
