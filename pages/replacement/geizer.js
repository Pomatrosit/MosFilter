import Head from "next/head";
import Header from "../../components/header/header";
import MainNav from "../../components/mainNav/mainNav";
import AsideNav from "../../components/asideNav/asideNav";
import WhatsApp from "../../components/whatsApp";
import Footer from "../../components/footer/footer";
import Link from "next/link";
import Last2Rewiews from "../../components/reviews/last2Reviews";


export default function replacementAtoll(){

  let links= [
    {id:1, text:"Комплекты картриджей", link:`/cartridges/geizer`},
    {id:2, text:"Замена картриджей", link:`/replacement/geizer`},
    {id:3, text:"Ремонт фильтра", link:`/repair/geizer`},
    {id:4, text:"Фильтры для воды", link:`/filters/geizer`},
    {id:5, text:"Установка фильтра", link:`/installation/geizer`}
  ];

  return(
    <>
     <div className="content-wrapper">

        <Head>
          <title>Мос - фильтр | Замена картриджей Гейзер</title>
          <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Описание страницы сайта." />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
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
                    <Link href="/categories/[category]" as="/categories/geizer"><a className="active"> Гейзер </a></Link>
                    /
                    Замена картриджей Гейзер
                </div>
                <div className="d-flex">
                  <div className="flex-left">
                      <img src="/img/categories/ra1.png" alt=""/>
                      <h2 className="service-title">Замена картриджей Гейзер</h2>
                      <p className="service-text"><span className="with-bold">Компания «Мос—Фильтр» занимается профессиональной заменой картриджей </span> на любых
                      моделях фильтров марки «Гейзер». Являясь официальным диллером компания предоставляет всем своим клиентам настоящую
                      <span className="with-bold"> годовую гарантию </span>как на продукцию(картриджи), так и на проведённые работы. </p>
                      <div className="service-btns">
                        <div className="service-btn service-btn1">Заказать услугу</div>
                        <div className="service-btn service-btn2">Задать вопрос специалисту</div>
                      </div>
                      <p className="service-border-text">Предоставляем бесплатную санитарную обработку фильтра </p>
                      <p className="service-subtitle">Что входит в перечень услуги</p>
                      <p className="service-paragraph with-point">Выезд мастера и доставка продукции</p>
                      <p className="service-paragraph with-point">Удаление старых картриджей</p>
                      <p className="service-paragraph with-point">Санитарная обработка фильтра</p>
                      <p className="service-paragraph with-point">Установка новых картриджей</p>
                      <p className="service-paragraph with-point">Установка мембраны</p>
                      <p className="service-paragraph with-point">Наладка нормы давления в фильтре</p>
                      <p className="service-paragraph with-point">Проверка герметичности фильтра</p>
                      <p className="service-paragraph with-point with-margin-bottom">Выписка гарантии</p>

                  </div>
                  <div className="flex-right"><img src="/img/logos/geizer.png" alt=""/></div>
                </div>

                <div className="service-price-block">
                  <div className="price-block__left">
                      <p className="price-block__title">Средняя цена по Москве</p>
                      <p className="price-block__subtitle">Стоимость услуги у нас</p>
                      <div className="service-btns">
                        <div className="service-btn service-btn1">Заказать услугу</div>
                        <div className="service-btn service-btn2">Задать вопрос специалисту</div>
                      </div>
                  </div>
                  <div className="price-block__right">
                      <p className="price-block__title with-line-through">1250 ₽</p>
                      <p className="price-block__subtitle">850 ₽ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="price-block__economy">(Экономия - 400 рублей)</span></p>
                  </div>
                </div>

                <h3 style={{marginTop:"6rem", fontSize:"20px"}} className="service-subtitle">Последние отзывы</h3>
                <Last2Rewiews />

                <div className="service-links">
                  {links.map(link => <Link key={link.id} href={link.link}><a className="service-link">{link.text}</a></Link>)}
                </div>

            </div>
        </section>






        <style jsx>{`
          .content-block{
            display:flex;
            justify-content:space-between;
            margin-bottom:5rem;
          }

          .content-left{
            width:20%;
          }

          .content-right{
            width:78%;
          }

          .with-border{
            border-right:1px solid #E3E3E3;
          }

          .with-margin{
            margin-top:7.8rem;
          }

          .horizontal-shape{
            background: #F0F0F0;
            width:100%;
            height:1px;
            margin-top:8rem;
          }

          .path2{
            margin-top:3.7rem;
            font-size: 12px;
            line-height: 16px;
            color: #424242;
            border-bottom:1px solid #DDDDDD;
            padding-bottom:1.8rem;
          }

          .active{
            color: #4862D2;
            text-decoration:none;
          }

          .d-flex{
            display:Flex;
            margin-top:3rem;
            justify-content:space-between;
          }

          .flex-left{
            width:60%;
          }

          .flex-left img{
            width:100%;
          }

          .service-title{
            font-weight: 600;
            font-size: 24px;
            color: #424242;
            margin:3.5rem 0 4rem 0;
          }

          .with-bold{
            font-weight:600;
          }

          .service-text{
            font-size: 14px;
            line-height: 19px;
            color: #424242;
          }

          .service-btns{
            display:flex;
            justify-content:space-between;
            margin:4rem 0;
          }

          .service-btn{
            height:4.5rem;
            display:flex;
            align-items:center;
            justify-content:center;
            font-weight: 600;
            font-size: 14px;
            color: #424242;
            border: 2px solid #4862D2;
            border-radius: 0.5rem;
            cursor:pointer;
          }

          .service-btn1{
            width:32%;
          }

          .service-btn2{
            width:64%;
          }

          .service-border-text{
              background: #FFFFFF;
              box-shadow: 0px 4px 10px rgba(45, 82, 214, 0.2);
              border-radius: 0px 5px 5px 0px;
              font-weight: bold;
              font-size: 16px;
              line-height: 22px;
              display: flex;
              align-items: center;
              color: #696969;
              padding:5rem;
              border-left:0.5rem solid #4862D2;
              margin-bottom:6rem;
          }

          .service-subtitle{
            font-weight: 600;
            font-size: 20px;
            color: #424242;
            margin-bottom:4rem;
          }

          .service-paragraph{
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 22px;
            color: #424242;
            position:relative;
          }

          .with-point{
            padding-left:2.7rem;
          }

          .with-point:before{
            position:absolute;
            content:"";
            width:0.8rem;
            height:0.8rem;
            border-radius:50%;
            background: radial-gradient(103.33% 90% at 50% 10%, #6089F3 0%, #191792 51.26%, #6089F3 100%), #FFFFFF;
            top:0.6rem;
            left:0;
          }

          .with-margin-bottom{
            margin-bottom:7rem;
          }

          .service-price-block{
            background: #F7F7F7;
            border-radius: 5px;
            padding:4rem 3.5rem 1.5rem 3.5rem;
          }

          .service-price-block{
            display:flex;

          }

          .price-block__left{
            width:55%;
            margin-right:10%;
          }

          .price-block__title{
            font-weight: 600;
            font-size: 16px;
            color: #B2B2B2;
            margin-bottom:1rem;
            margin-top:0;
          }

          .price-block__subtitle{
            font-weight: bold;
            font-size: 24px;
            color: #4E4E4E;
            margin-top:0;
            margin-bottom:5.6rem;
          }

          .with-line-through{
            text-decoration:line-through;
          }

          .price-block__economy{
            font-weight: 600;
            font-size: 14px;
            color: #969595;
          }

          .service-links{
            display:flex;
            align-items:center;
            justify-content:space-between;
            margin-top:10rem;
            padding-top:4.5rem;
            border-top:1px solid #F0F0F0;
          }

          .service-link{
            font-weight: bold;
            font-size: 16px;
            color: #ADADAD;
            text-decoration:none;
          }


        `}</style>

    </div>

    <Footer />
   </>
  )
}
