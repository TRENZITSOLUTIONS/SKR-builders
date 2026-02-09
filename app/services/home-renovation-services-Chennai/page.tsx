import { Metadata } from "next";
import RenovationClient from "./RenovationClient";

export const metadata: Metadata = {
    title: "Renovation Services in Chennai | Residential & Commercial",
    description: "SKR Builders provide renovation services in Chennai for residential and commercial properties, including remodeling, structural repairs, and modern upgrades.",
    keywords: "renovation services in Chennai, home renovation contractors, commercial building renovation, house remodeling services, turnkey renovation, contractors near me",
    alternates: {
        canonical: "https://www.skrbuilder.com",
    },
    robots: {
        index: true,
        follow: true,
    },
    authors: [{ name: "SKR Builders And Promoters" }],
    openGraph: {
        title: "Residential & Commercial Renovation in Chennai – SKR Renovation",
        type: "website",
        url: "https://www.skrbuilder.com",
        siteName: "SKR Builders And Promoters",
        description: "SKR Renovation delivers end-to-end home renovation services including structural upgrades, remodeling, waterproofing, electrical works, plumbing, and interior finishes.",
        images: ["https://www.facebook.com/photo/?fbid=122095204365236866&set=pb.61587105986571.-2207520000"],
    },
    twitter: {
        card: "summary",
        site: "@skrbuilders",
        title: "SKR Builders & Promoters – Renovation Services Company in Chennai",
        description: "SKR Renovation delivers end-to-end home renovation with structural upgrades, remodeling, waterproofing, electrical, plumbing services, and full interior transformation.",
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
    },
};

export default function RenovationPage() {
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
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.skrbuilder.com/",
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Renovation Services",
                "item": "https://www.skrbuilder.com/services/renovation",
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <RenovationClient />
        </>
    );
}
