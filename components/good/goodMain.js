import {useState} from "react";
import {setGoodToLocalStorage} from "../../utils/utils";

const GoodMain = ({good}) => {

  const [goodCount, setGoodCount] = useState(1);

  const changeGoodCount = sign => {
    if (sign === "+") setGoodCount(goodCount+1);
    else if (goodCount > 1) setGoodCount(goodCount-1);
  }

  let garanty="год";
  if (good.garanty >=2 ) garanty ="года"

  return(
    <>
      <div className="good-page__main">
         <div className="good-main__imgs">
             <div className="good-main__big-img">
                <img src={good.img} alt={good.title}/>
             </div>
             <div className="good-main__small-imgs">
                <div className="good-main__small-img"><img src={good.img} alt={good.title}/></div>
                <div className="good-main__small-img"><img src={good.img} alt={good.title}/></div>
                <div className="good-main__small-img"><img src={good.img} alt={good.title}/></div>
             </div>
         </div>
         <div className="good-main__description">
           <div className="good-main__title-and-logo">
             <p className="good-main__title">{good.subtitle + " " + good.title}</p>
             {good.logoImg ? <img src={good.logoImg} alt={good.categoryName} className="good-main__logo"/> : null}
           </div>
           <p className="good-main__articul">Артикул: {good.articul}</p>
           <div className="horizontal-shape" style={{marginBottom:"4rem"}}></div>
           <div className="good-main__long-descrription">{good.desc}</div>
           <div className="horizontal-shape" style={{marginTop:"4rem", marginBottom:"3rem"}}></div>
           <div className="good-main__price-and-garanty">
              <p className="good-main__price">{good.price} ₽ / Шт</p>
              <p className="good-main__garanty">Гарантия {good.garanty} {garanty}</p>
           </div>
           <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M4.373 6.85729L1.0306 3.3827L0 4.45406L4.373 9L12 1.07136L10.9694 0L4.373 6.85729Z" fill="#2EAB33"/>
           </svg>
           <span style = {{marginLeft:"0.5rem", color:"#6B6B6B", fontSize:"12px"}}>Есть в наличии</span>

           <div className="good-main__btns">

              <div className="good-main__plus-minus">
                <div className="good-main__minus-btn" onClick={() => changeGoodCount("-")}>
                      <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="1" x2="10" y2="1" stroke="#9C9C9C" strokeWidth="2"/>
                      </svg>
                </div>
                <div className="good-main__count">{goodCount}</div>
                <div className="good-main__plus-btn" onClick={() => changeGoodCount("+")}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 5H10M5 0L5 10" stroke="#9C9C9C" strokeWidth="2"/>
                  </svg>
                </div>
              </div>

              <div className="good-main__in-cart-btn btn-blue" onClick={() => setGoodToLocalStorage(good.id, goodCount)}>В корзину</div>

              <div className="good-main__one-click-btn one-click-btn">Купить в 1 клик</div>
           </div>

           <div className="horizontal-shape" style={{marginTop:"3rem", marginBottom:"3.4rem"}}></div>

           <div className="good-main__masters">
             <div className="orange-round"></div>
             <div className="good-main__masters-about">
                 <p className="good-main__masters-title">Доверьте замену картриджей нашим специалистам</p>
                 <p className="good-main__masters-subtitle">Мастер доставит и поменяет вам картриджи</p>
             </div>
           </div>

           <div className="horizontal-shape" style={{marginTop:"3.4rem"}}></div>

         </div>
      </div>




      <style jsx>{`
         .good-page__main{
           display:flex;
           justify-content:space-between;
           margin-bottom:2.6rem;
         }

         .good-main__imgs{
           width:45%;
         }

         .good-main__description{
           width:51.5%;
         }

         .good-main__big-img{
           height:45rem;
           border: 1px solid #E3E3E3;
           display:flex;
           align-items:center;
           justify-content:Center;
         }

         .good-main__big-img img {
           height:25rem;
         }

         .good-main__small-imgs{
           display:flex;
           align-items:center;
           margin-top:-1px;
         }

         .good-main__small-img{
           width:calc(100% / 3);
           height:15rem;
           border: 1px solid #E3E3E3;
           display:flex;
           align-items:center;
           justify-content:center;
         }

         .good-main__small-img{
           border-right:none;
         }

         .good-main__small-img:last-child{
           border-right: 1px solid #E3E3E3;
         }

         .good-main__small-img img{
           height:50%;
         }

          .good-main__title-and-logo{
            display:flex;
            align-items:center;
            justify-content:space-between;
          }

          .good-main__title{
            width:60%;
            font-weight: 600;
            font-size: 20px;
            line-height: 27px;
            color: #424242;
            margin-top:0;
          }

          .good-main__logo{
            height:5rem;
          }

          .good-main__articul{
            font-size: 12px;
            line-height: 16px;
            color: #A7A7A7;
            margin-bottom:3rem;
            margin-top:0;
          }

          .horizontal-shape{
            width:100%;
            height:1px;
            background:#d9d9d9;
          }

          .good-main__long-descrription{
            font-size: 13px;
            line-height: 18px;
            color: #424242;
            width:100%;
            max-width:35rem;
            height:5rem;
          }

          .good-main__price-and-garanty{
            display:flex;
            align-items:center;
            justify-content:space-between;
          }

          .good-main__price{
            font-weight: bold;
            font-size: 24px;
            color: #424242;
            margin-top:0;
            margin-bottom:1rem;
          }

          .good-main__garanty{
            font-weight: 600;
            font-size: 12px;
            color: #424242;
            margin-top:0;
          }

          .good-main__btns{
            margin-top:4rem;
            display:flex;
            justify-content:space-between;
          }

          .good-main__plus-minus{
            display:flex;
            height:4rem;
            background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%), #FFFFFF;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
            border-radius: 3px;
          }

          .good-main__minus-btn, .good-main__plus-btn, .good-main__count{
            width:4rem;
            height:4rem;
            display:flex;
            align-items:center;
            justify-content:center;
          }

          .good-main__minus-btn, .good-main__plus-btn{
            cursor:pointer;
          }

          .good-main__count{
            font-size: 13px;
            line-height: 18px;
            color: #424242;
          }

          .good-main__in-cart-btn{
            width:12rem;
            height:4rem;
            border-radius:0.3rem;
            font-size: 13px;
            color: #FFFFFF;
            font-weight:normal;
            width:30%;
          }

          .good-main__one-click-btn{
            width:15rem;
            height:4rem;
            border: 2px solid #4862D2;
            border-radius: 5px;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size: 13px;
            line-height: 18px;
            color: #424242;
            cursor:pointer;
            width:37%;
          }

          .good-main__masters{
            display:flex;
            align-items:center;
          }

          .orange-round{
            width:7.8rem;
            height:7.8rem;
            background: #F97B0F;
            border-radius:50%;
            margin-right:3rem;
          }

          .good-main__masters-title{
            font-weight: bold;
            font-size: 11px;
            line-height: 15px;
            color: #424242;
          }

          .good-main__masters-subtitle{
            font-size: 10px;
            line-height: 14px;
            color: #424242;
          }
      `}</style>
    </>
  )
}

export default GoodMain;