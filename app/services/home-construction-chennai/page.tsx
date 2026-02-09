import { Metadata } from "next";
import ConstructionClient from "./ConstructionClient";

export const metadata: Metadata = {
    title: "Construction Company in Chennai | Residential & Commercial",
    description: "Leading construction company in Chennai offering residential & commercial construction, turnkey projects, renovations, and complete interior execution.",
    keywords: "Construction company in Chennai offering residential & commercial construction, house and villa construction, turnkey projects, trusted local contractors near me",
    alternates: {
        canonical: "https://www.skrbuilder.com",
    },
    robots: {
        index: true,
        follow: true,
    },
    authors: [{ name: "SKR Builders And Promoters" }],
    openGraph: {
        title: "Residential & Commercial Construction in Chennai – SKR Builders",
        type: "website",
        url: "https://www.skrbuilder.com",
        siteName: "SKR Builders And Promoters",
        description: "SKR Builders & Promoters offer complete residential construction in Chennai with planning, approvals, RCC framework, site supervision, finishing works, and handover.",
        images: [{
            url: "https://www.facebook.com/photo/?fbid=122095204365236866&set=pb.61587105986571.-2207520000",
        }],
    },
    twitter: {
        card: "summary",
        site: "https://www.skrbuilder.com",
        title: "SKR Builders And Promoters - best Construction Company in Chennai",
        description: "Leading construction company in Chennai offering residential and commercial construction services, turnkey projects, house and villa construction, and project management.",
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

export default function ConstructionPage() {
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
                "name": "Construction Services",
                "item": "https://www.skrbuilder.com/services/construction",
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ConstructionClient />
        </>
    );
}
