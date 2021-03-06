import $ from "jquery";

const LandingModelRow = ({setType, imgs, bottom}) => {

  const clickHandler = (id) => {
    $('html, body').animate({
         scrollTop: $(".catalog__title").offset().top
     }, 500);

    if (id === 1) setType(1);
    if (id === 2) setType(2);
  }

  return(
    <>
      <div className="model-row">
        <div className="landing-wrapper">

           <h2 className="title">Весь модельный ряд</h2>

           <p className="subtitle">Обслуживаем модели любого года производства</p>

           <div className="row">
             <div className="card card1" onClick={() => clickHandler(1)}>
               <div className="card__background">
                 <img src={imgs[0]} alt="Проточные фильтры Гейзер" className="card__img"/>
               </div>
               <div className="card__title">Стационарные фильтры</div>
             </div>
             <div className="card" onClick={() => clickHandler(2)}>
               <div className="card__background">
                 <img src={imgs[1]} alt="Системы обратного осмоса Гейзер" className="card__img"/>
               </div>
               <div className="card__title">Системы обратного осмоса</div>
             </div>
           </div>

        </div>
      </div>


      <style jsx>{`
        .model-row{
          margin-bottom:16rem;
        }

        .title{
          font-weight: 600;
          font-size: 30px;
          color: #424242;
          margin-bottom: 0;
        }

        .subtitle{
          font-weight: 500;
          font-size: 16px;
          color: #424242;
          margin-bottom:7rem;
        }

        .row{
          display:flex;
          align-items:center;
          justify-content:space-between;
        }

        .card{
          width:48%;
          cursor:pointer;
        }

        .card__background{
          width:100%;
          height:14rem;
          background:#004990;
          position:relative;
          overflow:hidden;
        }

        .card__img{
          position:absolute;
          bottom:${bottom || "0"};
          right:5rem;
          transition:0.3s;
          height:150px;
        }

        .card__title{
          font-weight: 600;
          font-size: 20px;
          color: #424242;
          margin-top:1.5rem;
        }

        @media(hover:hover){
          .card__background:hover .card__img{
            transform:scale(1.1);
          }
        }

        @media screen and (max-width:1150px){
          .model-row{
            margin-bottom:8rem;
          }
        }

        @media screen and (max-width:650px){
          .row{
            flex-direction:column;
          }
          .card{
            width:100%;
          }
          .card1{
            margin-bottom:4rem;
          }
        }

        @media screen and (max-width:500px){
          .subtitle{
            margin-bottom:4rem;
          }
          .title{
            font-size:24px;
          }
        }

        `}</style>
    </>
  )
}

export default LandingModelRow
