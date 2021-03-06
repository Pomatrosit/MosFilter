import Head from "next/head";
import Header from "../../components/header/header";
import MainNav from "../../components/mainNav/mainNav";
import AsideNav from "../../components/asideNav/asideNav";
import Advantages from "../../components/advantages/advantages";
import Footer from "../../components/footer/footer";
import WhatsApp from "../../components/whatsApp";
import Link from "next/link";
import Catalog from "../../components/catalog/catalog";
import Calculator from "../../components/calculator/calculator";
import AboutCartridgesPlatinumWasser from "../../components/aboutBrands/aboutCartridgesPlatinumWasser";



export async function getServerSideProps(context) {
  const res = await fetch('https://mosfilt.firebaseio.com/goods.json?orderBy="categoryId"&equalTo=5');
  const data = await res.json();
  return {
    props: {data}
  }
}

export default function cartridgesPlatinumWasser({data}){

  return(
    <>
     <div className="content-wrapper">

        <Head>
          <title>Мос - фильтр | Картриджи Platinum-wasser</title>
          <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
        </Head>

        <Header />
        <MainNav />

        <section className="content-block">
            <div className="content-left">
                <AsideNav />
                <WhatsApp marginTop="6rem"/>
            </div>
            <div className="content-right">
                 <div className="path2">
                     <Link href="/"><a className="active">Главная </a></Link>
                     /
                     <Link href="/categories/[category]" as="/categories/platinum-wasser"><a className="active"> Platinum-wasser </a></Link>
                     /
                     Комплекты картриджей
                 </div>
                 <h2 className="filters__title">Комплекты картриджей Platinum-wasser</h2>

                 <Catalog goods={data} />
                 <div className="placeholder"></div>
                 <Calculator initialBrand={"Platinum-wasser"} initialOption1={5}/>
                 <Advantages />
                 <div className="horizontal-shape"></div>
                 <AboutCartridgesPlatinumWasser />

            </div>
        </section>




        <style jsx>{`

          .active{
            color: #4862D2;
            text-decoration:none;
          }

          .filters__title{
            font-weight: 600;
            font-size: 24px;
            color: #424242;
            margin:4rem 0;
          }

          .placeholder{
            height:5rem;
          }

          .horizontal-shape{
            margin-bottom:9rem;
          }

          @media screen and (max-width:700px){
            .horizontal-shape{
              opacity:0;
              margin-bottom:0;
            }
          }

        `}</style>

    </div>

    <Footer />
   </>
  )
}
