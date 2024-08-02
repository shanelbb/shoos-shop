import Link from "next/link";
import { useRouter } from "next/router";
import "@/styles/LandingPage.module.css";

export default function LandingPage() {
    const router = useRouter();

    return (
        <>
            <div className="banner landingBanner1">
                <Link
                    href={{
                        pathname: "/gallery",
                        query: { category: "new arrivals" },
                    }}
                >
                    <h2>New Arrivals</h2>
                </Link>
            </div>

            <div className="banner landingBanner2">
                <Link
                    href={{
                        pathname: "/gallery",
                        query: { category: "sneakers" },
                    }}
                >
                    <h2>Sneakers</h2>
                </Link>
            </div>
            <div className="banner landingBanner3">
                <Link
                    href={{
                        pathname: "/gallery",
                        query: { category: "dress shoes" },
                    }}
                >
                    <h2>Dress Shoes</h2>
                </Link>
            </div>
            <div className="banner landingBanner4">
                <Link
                    href={{
                        pathname: "/gallery",
                        query: { category: "boots" },
                    }}
                >
                    <h2>Boots</h2>
                </Link>
            </div>
        </>
    );
}
