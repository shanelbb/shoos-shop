import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className="footerContact">
                <div className="footerLogo">
                    <Link href="/">
                        <h3>shoos.</h3>
                    </Link>
                </div>
                <p>Call Us: 1.800.876.5432</p>
                <p>Email Us: information@shoos.com</p>
            </div>
            <div className="siteInfo">
                <p>
                    Made by{" "}
                    <a
                        href="https://github.com/dcminogue"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Dan
                    </a>
                    ,{" "}
                    <a
                        href="https://github.com/Mpalko07"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Monica,
                    </a>{" "}
                    &{" "}
                    <a
                        href="https://shanelmadethis.com/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Shanel
                    </a>{" "}
                    &#169; 2024
                </p>
            </div>
        </footer>
    );
}
