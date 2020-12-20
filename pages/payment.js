import Head from "next/head";
import Header from "../components/header/header";
import MainNav from "../components/mainNav/mainNav";
import AsideNav from "../components/asideNav/asideNav";
import WhatsApp from "../components/whatsApp";
import Footer from "../components/footer/footer";
import Path from "../components/path";
import Payment from "../components/payment";
import Contacts from "../components/contacts/contacts";
import {useEffect} from "react";
import {initAnalytics} from "../analytics/analytics";
import {useRouter} from "next/router";

export default function AboutPayment(){

  const router = useRouter();
  useEffect(() => {
    initAnalytics(router.route);
  });

  return(
    <>
     <div className="content-wrapper">

        <Head>
          <title>Мос - фильтр | Оплата и доставка</title>
          <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Описание страницы сайта." />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        </Head>

        <Header />
        <MainNav activeLink={"Оплата и доставка"}/>

        <section className="content-block">
            <div className="content-left">
                <AsideNav />
                <WhatsApp marginTop="6rem"/>
            </div>
            <div className="content-right">
                <Path  category="payment"/>
                <Payment />
                <Contacts />
            </div>
        </section>

        <style jsx>{`

          .horizontal-shape{
            background: #F0F0F0;
            width:100%;
            height:1px;
            margin-top:8rem;
          }

        `}</style>

    </div>

    <Footer />
   </>
  )
}
