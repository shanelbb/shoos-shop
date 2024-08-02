// import { HashLink } from "react-router-hash-link";

function Footer() {
    return (
        <footer>
            <div className="footerContact">
                <div className="footerLogo">
                    <h3>shoos.</h3>
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
                <p>
                    Images courtesy of{" "}
                    <a href="https://unsplash.com/">unsplash.com</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
