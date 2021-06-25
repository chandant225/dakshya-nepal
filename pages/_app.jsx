import "tailwindcss/tailwind.css";
import "../shared/css/fonts.css";
import RootLayout from "../layout";

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
