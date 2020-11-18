import {useState} from "react";
import LandingButton from "./landingButton";

const GoodModal = ({good}) => {

  const steps = 3;
  const [translate, setTranslate] = useState(0);
  const [policy, setPolicy] = useState(true);

  return(
    <>
      <div className="good-modal">

        <div className="modal-track">

          <div className="modal-step modal-step1">
            <div className="modal__left">
              <div className="modal-left__background"></div>
              <img src={good.img} alt={good.title}/>
            </div>
            <div className="modal__right">
               <p className="good__subtitle">{good.subtitle}</p>
               <p className="good__title">{good.title}</p>
               <div className="good__shape"></div>
               <p className="good__text">Гарантия:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>1 год</span></p>
               <p className="good__text">Доставка:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Бесплатно в пределах МКАД</span></p>
               <p className="good__text">Состав:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Полный комплект</span></p>
               <p className="good__text">Стоимость:&nbsp;&nbsp;&nbsp;<span>{good.price} &nbsp;<i style = {{fontSize:"13px"}}className="fas fa-ruble-sign"></i></span></p>
               <div className="good__shape"></div>

               <div className="button-group">
                   <LandingButton
                       text="Заказать в один клик"
                       css={{maxWidth:"47%", height:"50px", marginBottom:"0rem", background:"#004990",
                       after:"#fff", hoverColor:"#424242", boxShadow:"none", border:"2px solid #004990"}}
                       clickHandler={() => setTranslate(1)}
                       />
                   <LandingButton
                       text="Заказать по телефону"
                       css={{maxWidth:"47%", height:"50px", marginBottom:"0rem", background:"#fff", color:"#004990",
                       border:"2px solid #004990", after:"#fff", hoverColor:"#424242"}}
                       />
               </div>
            </div>
          </div>

          <div className="modal-step modal-step2">
             <h3 className="order-title">Оставить заявку</h3>
             <p className="order-text">Укажите ваш контактный номер телефона и <br/> мы свяжемся с вами в течение 5 минут</p>
             <input type="text" className="input-phone"/>
             <LandingButton
                 text="Отправить"
                 css={{maxWidth:"33rem", height:"60px", marginBottom:"3rem", background:"#004990",
                 after:"#fff", hoverColor:"#424242", boxShadow:"none", border:"2px solid #004990", margin:"0 auto"}}
                 clickHandler={() => setTranslate(1)}
                 />
              <div className="policy-group">
                  <div className="policy-checkbox" onClick={() => setPolicy(prev => !prev)}>
                    {
                      policy && <svg className="policy-checkbox__inner" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.23882 7.05748L1.41653 4.223L0 5.63473L4.23387 9.88625L12.7359 1.41779L11.3243 0L4.23882 7.05748Z" fill="#004990"/>
                      </svg>
                    }
                  </div>
                  <p className="policy">Даю свою разрешение на  обработку персональных <br/>данных согласно <span>политике конфиденциальности</span></p>
              </div>
          </div>

        </div>

      </div>

      <style jsx>{`
        .good-modal{
          width:100%;
          overflow:hidden;
        }

        .modal-track{
          width:300%;
          height:45rem;
          transform:translateX(${-translate*100/steps}%);
          transition:0.5s;
          display:flex;
          align-items:center;
        }

        .modal-step{
          width:calc(100% / ${steps});
        }

        .modal__left{
          width:30%;
          display:flex;
          align-items:Center;
          justify-content:center;
          background: #C9DEF3;
          height:100%;
          position:relative;
          overflow:hidden;
        }

        .modal__left img {
          width:60%;
          z-index:2;
        }

        .modal-left__background{
          height:500px;
          width:500px;
          background:transparent;
          border:150px solid #fff;
          position:absolute;
          border-radius:50%;
          z-index:1;
          bottom:-250px;
          left:-250px;
        }

        .modal__right{
          width:70%;
          height:100%;
          padding:4rem 8rem 4rem 4rem;
        }

        .modal-step1{
          display:flex;
          align-items:Center;
          height:100%;
        }

        .good__subtitle{
          font-weight: 600;
          font-size: 14px;
          color: #606060;
          margin-bottom:0.5rem;
          margin-top:0;
        }

        .good__title{
          font-weight: bold;
          font-size: 24px;
          color: #424242;
          margin-top:0.5rem;
        }

        .good__shape{
          height:1px;
          width:262px;
          background: #E3E3E3;
          margin-bottom: 3.8rem;
          margin-top:3.8rem;
        }

        .good__text{
          font-size: 14px;
          letter-spacing: 0.045em;
          color: #424242;
        }

        .good__text span{
          font-weight: 600;
          font-size: 14px;
          color: #004990;
        }

        .button-group{
          display:flex;
          align-items:center;
          justify-content:space-between;
        }

        .input-phone{
          outline:none;
          background: #FFFFFF;
          border: 1px solid #B7CCE0;
          height:6rem;
          width:100%;
          max-width:330px;
          padding:0 27px;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          color: #424242;
          margin:3.5rem auto 2rem auto;
          display:block;
        }

        .order-title{
          font-weight: bold;
          font-size: 24px;
          color: #424242;
          margin:2.8rem 0 2.7rem 0;
          text-align:center;
        }

        .order-text{
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          text-align: center;
          color: #606060;
        }

        .policy-group{
          display:flex;
          align-items:center;
          justify-content:center;
          margin:3rem auto;
        }

        .policy-group input{
          cursor:pointer;
          margin-right:2rem;
        }

        .policy-checkbox{
          height:20px;
          width:20px;
          cursor:pointer;
          border: 2px solid #004990;
          border-radius: 2px;
          margin-right:20px;
          display:flex;
          align-items:center;
          justify-content:center;
        }
        `}</style>
    </>
  )
}

export default GoodModal;
