// Css
import "tailwindcss/tailwind.css";
import "../shared/css/fonts.css";
import "../shared/css/extra.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RootLayout from "../layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
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
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return router.pathname.includes("/admin") ? (
    <h1>Hello</h1>
  ) : (
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
