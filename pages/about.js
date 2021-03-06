import Head from "next/head";
import Header from "../components/header/header";
import MainNav from "../components/mainNav/mainNav";
import AsideNav from "../components/asideNav/asideNav";
import BrandSlider from "../components/brandSlider/brandsSlider";
import WhatsApp from "../components/whatsApp";
import Footer from "../components/footer/footer";
import Path from "../components/path";
import AboutInner from "../components/about/about";
import Last2Rewiews from "../components/reviews/last2Reviews";
import {useEffect} from "react";
import {initAnalytics} from "../analytics/analytics";
import {useRouter} from "next/router";

export default function About(){

  const router = useRouter();
  useEffect(() => {
    initAnalytics(router.route);
  });
  return(
    <>
     <div className="content-wrapper">

        <Head>
          <title>Мос - фильтр | О компании</title>
          <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        </Head>

        <Header />
        <MainNav activeLink={"О компании"}/>

        <section className="content-block">
            <div className="content-left">
                <AsideNav />
                <WhatsApp marginTop="6rem"/>
            </div>
            <div className="content-right">
                <Path  category="about"/>
                <AboutInner />
                <Last2Rewiews />
                <div className="horizontal-shape"></div>
                <BrandSlider />
            </div>
        </section>


    </div>

    <Footer />
   </>
  )
}
