import Head from "next/head";
import Header from "../components/header/header";
import MainNav from "../components/mainNav/mainNav";
import AsideNav from "../components/asideNav/asideNav";
import Slider from "../components/slider/slider";
import Advantages from "../components/advantages/advantages";
import Calculator from "../components/calculator/calculator";
import WorkTime from "../components/worktime";
import PopularCategories from "../components/popularCategories/popularCategories";
import Posts from "../components/posts/smallPosts";
import TopGoods from "../components/topgoods/topgoods";
import Subscribe from "../components/subscribe/subscribe";
import ReviewsSmall from "../components/reviewsSmall";
import AboutSmall from "../components/aboutSmall";
import BrandSlider from "../components/brandSlider/brandsSlider";
import WhatsApp from "../components/whatsApp";
import Footer from "../components/footer/footer";
import Preloader from "../components/preloader";


export default function Index(){
  return(
    <>
     <div className="content-wrapper">

        <Head>
          <title>Мос - фильтр | Главная</title>
          <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Описание страницы сайта." />
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        </Head>

        <Header />
        <MainNav activeLink={"Главная"}/>

        <section className="content-block">
            <div className="content-left visible-content">
                <AsideNav />
            </div>
            <div className="content-right">
                <Slider />
                <Advantages />
            </div>
        </section>

        <section className="content-block">
            <div className="content-left with-border with-margin with-padding">
                <WorkTime />
            </div>
            <div className="content-right">
                <Calculator />
            </div>
        </section>

        <section className="content-block">
            <div className="content-left with-border with-margin with-padding">
                <Posts />
            </div>
            <div className="content-right">
                <PopularCategories />
            </div>
        </section>

        <section className="content-block">
            <div className="content-left">
                <Subscribe />
                <ReviewsSmall />
            </div>
            <div className="content-right">
                <TopGoods />
            </div>
        </section>

        <section className="content-block">
            <div className="content-left">
                <WhatsApp marginTop="3rem"/>
            </div>
            <div className="content-right">
                <AboutSmall />
                <BrandSlider />
            </div>
        </section>





        <style jsx>{`


        `}</style>

    </div>

    <Footer />
   </>
  )
}
