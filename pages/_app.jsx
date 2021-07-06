// Css
import "tailwindcss/tailwind.css";
import "../shared/css/fonts.css";
import "../shared/css/extra.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RootLayout from "../layout";
import "../styles/skeleton.css";
import "../styles/custom-text-slick.css";
import "../styles/fonts.css";
import "aos/dist/aos.css";
import MessengerCustomerChat from "react-messenger-customer-chat";

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
      <MessengerCustomerChat
        pageId="1454212978176971"
        appId="779641199345768"
        themeColor="#ffb001"
      />
      ,
    </RootLayout>
  );
}

export default MyApp;
