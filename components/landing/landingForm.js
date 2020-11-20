import DropDown from "../nextDropDown/nextDropDown";
import PhoneInput from 'react-phone-number-input'
import {useState, useRef} from "react";
import {sendMail} from "../../utils/mail";
import Loader from "./loader";
import LandingButton from "./landingButton";

const LandingForm = ({css, margin, goods}) => {

  const [policy, setPolicy] = useState(true);
  const [loading, setLoading] = useState(false);

  const dropDownOptions = goods.map(good => {
    return {
      id:good.id,
      value:good.title
    }
  });
  dropDownOptions.push({id:1000, value:"Другая модель"});

  const [phone, setPhone] = useState();
  const [name, setName] = useState();
  const [model, setModel] = useState();
  const inputPhone = useRef();

  const isFormValid = () => {
    let valid = false;
    if (inputPhone.current && inputPhone.current.value.length >= 16 && policy) valid=true;
    return valid
  }

  const getModelTitle = () => {
    let title;
    goods.forEach(good =>{
      if (good.id === model) title = good.title;
    });
    return title;
  }

  const clickHandler = () => {
    if (isFormValid()) {
      setLoading(true);
      sendMail(
        {name, phone, model:getModelTitle(), modal:12, payload:"1"}
      ).then(() => {
        setLoading(false);
      });
    }
  }

  const changeNameHandler = e => {
    setName(e.target.value);
  }

  return(
    <>
      <form className="landing-form" style={css}>
        <h2 className="title">Оставить заявку на замену картриджей</h2>

        <input type="text" name="name" placeholder="Ваше имя" onChange = {changeNameHandler}/>

        <PhoneInput ref = {inputPhone}
          placeholder="Enter phone number"
          value={phone}
          onChange={setPhone}
          maxLength="16"
          international
          defaultCountry="RU"
          onChange = {
            () => {
              if (inputPhone.current.value.length <= 2 ) inputPhone.current.value = "+7";
              setPhone(inputPhone.current.value);
            }
          }
          />

        <DropDown
          css={{
            width:"100%",
            height:"6rem",
            margin:"0 0 2.5rem 0"
          }}
          placeholder="Модель фильтра"
          options={dropDownOptions}
          defaultId = {1}
          callBack={setModel}
        />

        <div className="according">
          <div className="policy-group">
              <div className="policy-checkbox" onClick={() => setPolicy(prev => !prev)}>
                {
                  policy && <svg className="policy-checkbox__inner" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.23882 7.05748L1.41653 4.223L0 5.63473L4.23387 9.88625L12.7359 1.41779L11.3243 0L4.23882 7.05748Z" fill="#004990"/>
                  </svg>
                }
              </div>
              <p className="policy">Даю согласие на обработку персональных данных</p>
          </div>
        </div>

        {
          loading ? <Loader css={{margin:"0 auto"}}/>
                  :
                  <div style={{opacity:isFormValid() ? "1" : "0.5"}} onClick = {clickHandler}>
                     <LandingButton
                     text="Отправить заявку"
                     css={{maxWidth:"100%", height:"60px", marginBottom:"0rem"}}
                     />
                 </div>
        }


      </form>



      <style jsx>{`
          .policy-group{
            display:flex;
            align-items:center;
            justify-content:center;
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

          .landing-form{
            background: #FFFFFF;
            border: 1px solid #B7CCE0;
            box-sizing: border-box;
            box-shadow: 14px 13px 26px rgba(0, 0, 0, 0.09);
            width:360px;
            padding:4rem 3rem 3rem 3rem;
            margin: ${margin || '0'};
            position:relative;
            z-index:10;
          }

          .title{
            font-weight: bold;
            font-size: 18px;
            line-height: 22px;
            color: #424242;
            margin:0 0 5rem 0;
            max-width:20rem;
          }

          input{
            height:6rem;
            width:100%;
            background: #F1F1F1;
            margin-bottom: 1.5rem;
            border:none;
            font-weight: 500;
            font-size: 13px;
            color: #424242;
            padding:0 2rem;
            font-family: 'Montserrat', sans-serif;
          }

          ::placeholder{
            color:#424242;
            font-family: 'Montserrat', sans-serif;
          }

          .according{
            display:flex;
            align-items:center;
            margin-bottom:3rem;
          }

          .according__text{
            font-size: 10px;
            color: #424242;
            margin:0;
          }

          .according__checkbox{
            width:20px;
            height:20px;
            border-radius:50%;
            background: #004990;
            border:1px solid #004990;
            margin-right:2.4rem;
            cursor:pointer;
          }
        `}</style>
    </>
  )
}

export default LandingForm;
