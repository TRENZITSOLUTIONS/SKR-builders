import { Metadata } from "next";
import LandAdvisoryClient from "./LandAdvisoryClient";

export const metadata: Metadata = {
    title: "Land Buying & Selling Services in Chennai | Real Estate",
    description: "SKR Builders and Promoters provide land buying and selling services in Chennai with expert advisory, legal verification, and transparent property transactions.",
    keywords: "land buying and selling services in Chennai, verified residential and commercial plots, legal documentation, land valuation, registration, and expert land consultants",
    alternates: {
        canonical: "https://www.skrbuilder.com",
    },
    robots: {
        index: true,
        follow: true,
    },
    authors: [{ name: "SKR Builders And Promoters" }],
    openGraph: {
        title: "Land Buying & Selling Services in Chennai – SKR Builders",
        type: "website",
        url: "https://www.skrbuilder.com",
        siteName: "SKR Builders And Promoters",
        description: "SKR Builders and Promoters provide secure land buying and selling services with approved plots, clear documentation, and transparent property transactions.",
        images: [{
            url: "https://www.facebook.com/photo/?fbid=122095204365236866&set=pb.61587105986571.-2207520000",
        }],
    },
    twitter: {
        card: "summary",
        site: "https://www.skrbuilder.com",
        title: "SKR Builders & Promoters – Land Buying & Selling Services in Chennai",
        description: "SKR Builders and Promoters offer verified land buying and selling services with DTCP and CMDA approved plots, legal documentation, clear titles, and transparent deals.",
        creator: "@skrbuilders",
        images: ["x.com/skrbuilders/photo"],
    },
    other: {
        "audience": "all",
        "contact": "",
        "revisit-after": "3 days",
        "language": "english",
        "distribution": "global",
        "rating": "general",
        "copyright": "by https://www.skrbuilder.com",
        "url": "https://www.skrbuilder.com",
    },
};

export default function LandAdvisoryPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "SKR Builders And Promoters",
        "image": "",
        "@id": "https://www.skrbuilder.com/",
        "url": "https://www.skrbuilder.com/",
        "telephone": "+91 90874 11115",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "292/1, Leo Apartment, Viduthalai Nagar, 13th Street, S.Kolathur",
            "addressLocality": "Chennai",
            "postalCode": "600117",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 12.948870537511432,
            "longitude": 80.19871619913584
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            "https://www.facebook.com/profile.php?id=61587105986571",
            "https://x.com/skrbuilders",
            "https://www.instagram.com/skrbuildersofficial/",
            "https://youtube.com/shorts/Eg4y-pvH_e8?feature=share",
            "https://www.skrbuilder.com/"
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <LandAdvisoryClient />
        </>
    );
}
