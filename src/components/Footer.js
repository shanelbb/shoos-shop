import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className="footerContact">
                <div className="footerLogo">
                    <Link href="/#top">
                        <h3>shoos.</h3>
                    </Link>
                </div>
                <div className="contactInfo">
                    <div className="details">
                        <p>Call Us: 1.800.876.5432</p>
                        <p>Email Us: information@shoos.com</p>
                    </div>
                    <div className="hours">
                        <p>
                            Monday&nbsp;-&nbsp;Friday
                            8AM&nbsp;-&nbsp;9PM&nbsp;EST
                        </p>
                        <p>
                            Saturday&nbsp;-&nbsp;Sunday
                            9AM&nbsp;-&nbsp;6PM&nbsp;EST
                        </p>
                    </div>
                </div>
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
