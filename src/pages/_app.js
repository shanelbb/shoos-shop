import "@/styles/normalize.css";
import "@/styles/globals.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
    return (
        <main>
            {/* <Layout> */}
            <Component {...pageProps} />
            {/* </Layout> */}
        </main>
    );
}
