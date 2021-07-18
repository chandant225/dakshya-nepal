// Css
import "tailwindcss/tailwind.css";
import "../shared/css/fonts.css";
import "../shared/css/extra.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RootLayout from "../layout";
import "../styles/skeleton.css";
import "../styles/navigation.css";
import "../styles/custom-text-slick.css";
import "../styles/fonts.css";
import "../styles/animation.css";
import "aos/dist/aos.css";
import MessengerCustomerChat from "react-messenger-customer-chat";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
      <MessengerCustomerChat
        pageId={process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID}
        appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}
        themeColor="#ffb001"
      />
      ,
    </RootLayout>
  );
}

export default MyApp;
