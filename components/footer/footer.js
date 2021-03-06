import LogoSvg from "../header/logoSvg";
import SubscribeInput from "../subscribe/subscribeInput";
import Logo from "../header/logoWithoutH1";
import Link from "next/link";
import $ from "jquery";
import {useEffect} from "react";

const Footer = () => {

  const footerBlockClickHandler = e => {
    if (window.innerWidth <=500){
      $(e.target).next().slideToggle();
      $(e.target).prev().toggleClass("arrow-reverse");
    }
  }



  useEffect(() => {
    setTimeout(()=>{
      if (window && window.innerWidth <= 500) $(".mobile-height").next().slideUp(50);
    }, 100);
    setTimeout(()=>{
       window.addEventListener("resize", () => {
         if (window.innerWidth > 500) $(".mobile-height").next().show();
         else {
           $(".mobile-height").prev().removeClass("arrow-reverse");
           $(".mobile-height").next().hide();
         }

       });
    }, 1000)

  } , []);

  return(
    <div className="footer">
      <svg className="logo-svg"width="419" height="391" viewBox="0 0 419 391" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M193.273 6.60454C188.967 10.9234 186.555 16.73 186.555 22.7776C186.555 28.8252 188.967 34.6318 193.273 38.9506L324.882 168.335C346.894 190.074 362.094 217.57 368.676 247.553C375.259 277.537 372.946 308.748 362.013 337.477C351.08 366.207 331.987 391.246 307.002 409.62C282.018 427.993 252.192 438.928 221.071 441.126C189.95 443.323 158.842 436.69 131.443 422.015C104.044 407.34 81.507 385.24 66.5103 358.341C51.5137 331.443 44.6877 300.877 46.844 270.276C49.0004 239.676 60.0484 210.327 78.6746 185.718L112.696 217.844C97.2279 241.476 91.1466 269.878 95.6117 297.635C100.077 325.391 114.776 350.562 136.907 368.348C159.038 386.134 187.053 395.292 215.611 394.076C244.169 392.859 271.273 381.353 291.756 361.752C302.604 351.158 311.213 338.559 317.088 324.681C322.963 310.802 325.988 295.918 325.988 280.886C325.988 265.854 322.963 250.97 317.088 237.092C311.213 223.214 302.604 210.615 291.756 200.021L225.951 135.329C223.791 133.205 221.226 131.52 218.404 130.371C215.581 129.221 212.555 128.63 209.5 128.63C206.445 128.63 203.42 129.221 200.597 130.371C197.774 131.52 195.209 133.205 193.049 135.329C190.889 137.453 189.175 139.974 188.006 142.749C186.836 145.524 186.235 148.498 186.235 151.502C186.235 154.505 186.836 157.48 188.006 160.255C189.175 163.03 190.889 165.551 193.049 167.675L258.854 232.367C271.246 245.372 278.009 262.605 277.714 280.423C277.418 298.241 270.087 315.247 257.27 327.848C244.452 340.449 227.153 347.657 209.029 347.947C190.904 348.238 173.375 341.589 160.147 329.405C147.121 316.504 139.811 299.064 139.811 280.886C139.811 262.709 147.121 245.268 160.147 232.367C162.419 230.307 164.232 227.806 165.472 225.022C166.712 222.239 167.352 219.233 167.352 216.194C167.352 213.155 166.712 210.149 165.472 207.366C164.232 204.582 162.419 202.082 160.147 200.021L94.3423 135.329C92.2168 133.196 89.6721 131.511 86.8631 130.376C84.0541 129.242 81.0397 128.681 78.0031 128.728C71.8225 128.744 65.8877 131.11 61.44 135.329C32.1186 164.124 12.1435 200.822 4.04187 240.78C-4.05979 280.738 0.076065 322.161 15.9261 359.808C31.7761 397.454 58.6282 429.634 93.0851 452.275C127.542 474.915 168.056 487 209.5 487C250.945 487 291.458 474.915 325.915 452.275C360.372 429.634 387.224 397.454 403.074 359.808C418.924 322.161 423.06 280.738 414.958 240.78C406.856 200.822 386.881 164.124 357.56 135.329L226.175 6.60454C221.782 2.3712 215.875 0 209.724 0C203.572 0 197.666 2.3712 193.273 6.60454Z" fill="white" />
          <path d="M148.684 110.559L153.131 109.235L157.134 107.029L158.913 105.706C159.486 105.248 160.008 104.731 160.469 104.162L162.026 102.618C162.546 102.009 162.994 101.343 163.36 100.632C164.224 99.4581 164.968 98.202 165.583 96.8823L166.918 92.4706C166.918 92.4706 166.918 90.9265 166.918 90.2647C167.027 89.5334 167.027 88.7901 166.918 88.0588C166.918 82.2085 164.575 76.5977 160.405 72.4609C156.235 68.3241 150.579 66 144.681 66H142.458H140.234C138.69 66.2043 137.189 66.6511 135.787 67.3235L131.784 69.3088L130.005 70.6324L128.226 72.1765L126.892 73.9412C126.311 74.4142 125.853 75.0197 125.558 75.7059C124.733 76.9813 123.99 78.3075 123.334 79.6765C122.69 81.0033 122.241 82.4146 122 83.8677C122 83.8677 122 85.4118 122 86.2941V90.7059C122 90.7059 122 92.25 122 92.9118C122.238 94.4363 122.687 95.9208 123.334 97.3235C123.949 98.6432 124.694 99.8993 125.558 101.074C125.845 101.827 126.301 102.506 126.892 103.059L128.226 104.603L130.005 106.147L131.784 107.471L135.787 109.676L140.234 111H149.129L148.684 110.559Z" fill="white"/>
      </svg>

      <div className="footer__main">
         <div className="footer__contacts">
            <p className="footer__title">Мы находимся</p>
            <div className="footer__info-block adaptive-padding">
              <p className="footer__text with-img">
              <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.00002 11.1176C7.39146 11.1176 6.79657 10.9365 6.29057 10.5972C5.78458 10.2578 5.3902 9.77552 5.15731 9.21121C4.92443 8.64691 4.8635 8.02597 4.98222 7.42691C5.10094 6.82785 5.39399 6.27758 5.82431 5.84569C6.25462 5.41379 6.80288 5.11966 7.39974 5.0005C7.99661 4.88134 8.61527 4.9425 9.17751 5.17624C9.73974 5.40998 10.2203 5.80581 10.5584 6.31367C10.8965 6.82152 11.0769 7.4186 11.0769 8.0294C11.076 8.84815 10.7515 9.63308 10.1747 10.212C9.59783 10.791 8.81577 11.1167 8.00002 11.1176V11.1176ZM8.00002 6.17646C7.63489 6.17646 7.27795 6.28513 6.97435 6.48873C6.67075 6.69234 6.43413 6.98173 6.2944 7.32031C6.15467 7.65889 6.11811 8.03145 6.18934 8.39089C6.26057 8.75032 6.4364 9.08049 6.69459 9.33963C6.95278 9.59876 7.28173 9.77524 7.63985 9.84674C7.99797 9.91823 8.36917 9.88154 8.70651 9.74129C9.04385 9.60105 9.33218 9.36355 9.53504 9.05884C9.7379 8.75412 9.84617 8.39588 9.84617 8.0294C9.84568 7.53812 9.65102 7.0671 9.30491 6.71971C8.95879 6.37233 8.4895 6.17695 8.00002 6.17646V6.17646Z" fill="white"/>
                    <path d="M8 21L1.86473 13.5383C1.77948 13.4262 1.69512 13.3135 1.61164 13.2C0.56363 11.7763 -0.00253177 10.0374 8.51118e-06 8.25C8.51118e-06 6.06196 0.842863 3.96354 2.34315 2.41637C3.84344 0.869194 5.87827 0 8 0C10.1217 0 12.1566 0.869194 13.6568 2.41637C15.1571 3.96354 16 6.06196 16 8.25C16.0025 10.0366 15.4366 11.7747 14.3891 13.1978L14.3884 13.2C14.3884 13.2 14.1702 13.4955 14.1374 13.5353L8 21ZM2.77237 12.2963C2.77382 12.2963 2.94255 12.5272 2.9811 12.5767L8 18.681L13.0254 12.5685C13.0574 12.5272 13.2276 12.2948 13.2284 12.294C14.0845 11.1308 14.5471 9.71027 14.5454 8.25C14.5454 6.45979 13.8558 4.7429 12.6283 3.47703C11.4008 2.21116 9.73596 1.5 8 1.5C6.26404 1.5 4.59918 2.21116 3.37167 3.47703C2.14416 4.7429 1.45455 6.45979 1.45455 8.25C1.45303 9.71118 1.91621 11.1326 2.7731 12.2963H2.77237Z" fill="white"/>
              </svg>
              <span>Россия, г. Москва,<br /> ул Шарикоподшипниковкая 16</span></p>
            </div>
            <div className="footer__info-block with-mt-4">
              <p className="footer__title adaptive-padding-bottom">Телефоны</p>
              <p className="footer__text with-img">
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.7821 8.97138C14.6997 8.38775 14.2573 7.93275 13.6878 7.79713C11.4742 7.26863 10.9193 5.97013 10.8257 4.52988C10.4331 4.4555 9.73478 4.375 8.5494 4.375C7.36401 4.375 6.66567 4.4555 6.27312 4.52988C6.17949 5.97013 5.62459 7.26863 3.41101 7.79713C2.84151 7.93363 2.39914 8.38775 2.31668 8.97138L1.88977 11.9831C1.73945 13.0436 2.50394 14 3.56735 14H13.5314C14.594 14 15.3593 13.0436 15.209 11.9831L14.7821 8.97138ZM8.5494 11.8055C7.35113 11.8055 6.37963 10.8255 6.37963 9.618C6.37963 8.4105 7.35113 7.4305 8.5494 7.4305C9.74767 7.4305 10.7192 8.4105 10.7192 9.618C10.7192 10.8255 9.74681 11.8055 8.5494 11.8055ZM17.0962 3.5C17.0756 2.1875 13.796 0.000875 8.5494 0C3.30192 0.000875 0.0223605 2.1875 0.00260405 3.5C-0.0171524 4.8125 0.0206426 6.5205 2.1801 6.23612C4.70635 5.90275 4.55087 5.00412 4.55087 3.71962C4.55087 2.82362 6.60554 2.6075 8.5494 2.6075C10.4933 2.6075 12.5471 2.82362 12.5479 3.71962C12.5479 5.00412 12.3925 5.90275 14.9187 6.23612C17.0773 6.5205 17.116 4.8125 17.0962 3.5Z" fill="white"/>
              </svg>
              <span > <a href="tel:+74957446181" className ="footer-link footer-go">8 (495) 744 - 61 - 81</a></span></p>
              <p className="footer__text with-img">
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.7821 8.97138C14.6997 8.38775 14.2573 7.93275 13.6878 7.79713C11.4742 7.26863 10.9193 5.97013 10.8257 4.52988C10.4331 4.4555 9.73478 4.375 8.5494 4.375C7.36401 4.375 6.66567 4.4555 6.27312 4.52988C6.17949 5.97013 5.62459 7.26863 3.41101 7.79713C2.84151 7.93363 2.39914 8.38775 2.31668 8.97138L1.88977 11.9831C1.73945 13.0436 2.50394 14 3.56735 14H13.5314C14.594 14 15.3593 13.0436 15.209 11.9831L14.7821 8.97138ZM8.5494 11.8055C7.35113 11.8055 6.37963 10.8255 6.37963 9.618C6.37963 8.4105 7.35113 7.4305 8.5494 7.4305C9.74767 7.4305 10.7192 8.4105 10.7192 9.618C10.7192 10.8255 9.74681 11.8055 8.5494 11.8055ZM17.0962 3.5C17.0756 2.1875 13.796 0.000875 8.5494 0C3.30192 0.000875 0.0223605 2.1875 0.00260405 3.5C-0.0171524 4.8125 0.0206426 6.5205 2.1801 6.23612C4.70635 5.90275 4.55087 5.00412 4.55087 3.71962C4.55087 2.82362 6.60554 2.6075 8.5494 2.6075C10.4933 2.6075 12.5471 2.82362 12.5479 3.71962C12.5479 5.00412 12.3925 5.90275 14.9187 6.23612C17.0773 6.5205 17.116 4.8125 17.0962 3.5Z" fill="white"/>
              </svg>
              <span> <a className ="footer-link footer-go" href="tel:+79254950004">8 (925) 495 - 00 - 04</a></span></p>
            </div>
            <div className="footer__info-block">
              <p className="footer__title adaptive-padding adaptive-padding-bottom">По вопросам сотрудничества</p>
              <p className="footer__text with-img">
              <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.75788 2.69799C7.82666 2.69799 8.83375 3.15658 9.57179 3.87348V3.8756C9.57179 3.53134 9.81109 3.27091 10.1418 3.27091H10.2258C10.7478 3.27091 10.8523 3.7473 10.8523 3.89762L10.8545 9.24792C10.8182 9.59853 11.2285 9.77977 11.4565 9.5545C12.3424 8.67245 13.4042 5.01553 10.9048 2.89828C8.57388 0.922034 5.44542 1.24851 3.7821 2.35795C2.01422 3.54023 0.88419 6.15165 1.98184 8.60597C3.18055 11.2817 6.60738 12.08 8.64694 11.2839C9.67941 10.8803 10.1554 12.2294 9.08224 12.6711C7.46486 13.3389 2.95744 13.2707 0.852254 9.74208C-0.570014 7.35848 -0.494766 3.16547 3.27899 0.993173C6.16333 -0.669717 9.96903 -0.209002 12.2632 2.10939C14.6606 4.53534 14.5219 9.0743 12.1814 10.8388C11.1214 11.6413 9.54729 10.8608 9.55866 9.69169L9.54685 9.31059C8.80881 10.0182 7.82666 10.4332 6.75788 10.4332C4.64351 10.4332 2.782 8.63095 2.782 6.58653C2.782 4.52009 4.64351 2.69883 6.75788 2.69883V2.69799ZM9.41736 6.43875C9.3373 4.941 8.1889 4.03905 6.80119 4.03905H6.74869C5.14924 4.03905 4.26071 5.25859 4.26071 6.64116C4.26071 8.19141 5.33386 9.17043 6.74213 9.17043C8.31402 9.17043 9.34605 8.05717 9.42129 6.74024L9.41736 6.43875Z" fill="white"/>
              </svg>
              <span><a className ="footer-link footer-go" href="mailto:info@mos-filter.ru">info@mos-filter.ru</a></span></p>
              <div className="footer__adaptive-show">
                 <p>Подписаться на новости</p>
                 <SubscribeInput />
                 <span>2020 © Все права защищены. «Мос — фильтр» Магазин фильтров для воды. </span>
              </div>
            </div>
         </div>

         <div className="footer__about footer__block">
             <img className="footer__vector" src="/img/vector.svg" alt=""/>
             <p className="footer__title mobile-height" onClick={footerBlockClickHandler}>Компания</p>

             <div className="footer__info-block">
               <Link href="/about"><a className="footer__text footer-link">О компании</a></Link>
               <Link href="/reviews"><a className="footer__text footer-link">Отзывы</a></Link>
               <Link href="/forbusiness"><a className="footer__text footer-link">Для бизнеса</a></Link>
               <Link href="/payment"><a className="footer__text footer-link">Оплата и доставка</a></Link>
               <Link href="/posts"><a className="footer__text footer-link">Статьи</a></Link>
               <Link href="/contacts"><a className="footer__text footer-link">Контакты</a></Link>
               <div className="footer__info-block">
                 <p className="footer__title adaptive-padding">Задать вопрос</p>
                 <a href="#" className="footer__text footer-link with-pb" onClick={() => {
                   window.open("https://wa.me/79254950004", "_blank");
                 }}>WhatsApp</a>
               </div>
             </div>

         </div>

         <div className="footer__brands footer__block">
             <img className="footer__vector" src="/img/vector.svg" alt=""/>
             <p className="footer__title mobile-height" onClick={footerBlockClickHandler} >Бренды</p>
             <div className="footer__info-block">
               <Link href="/categories/[category]" as="/categories/atoll"><a className="footer__text footer-link">Atoll</a></Link>
               <Link href="/categories/[category]" as="/categories/aquaphor"><a className="footer__text footer-link">Аквафор</a></Link>
               <Link href="/categories/[category]" as="/categories/geizer"><a className="footer__text footer-link">Гейзер</a></Link>
               <Link href="/categories/[category]" as="/categories/barier"><a className="footer__text footer-link">Барьер</a></Link>
               <Link href="/categories/[category]" as="/categories/platinum-wasser"><a className="footer__text footer-link">Platinum Wasser</a></Link>
               <Link href="/categories/[category]" as="/categories/others"><a className="footer__text footer-link with-pb">Другие</a></Link>
             </div>
         </div>

         <div className="footer__services footer__block">
             <img className="footer__vector" src="/img/vector.svg" alt=""/>
             <p className="footer__title mobile-height" onClick={footerBlockClickHandler} >Услуги</p>
             <div className="footer__info-block">
               <Link href="/replacement/others"><a className="footer__text footer-link">Замена картриджей</a></Link>
               <Link href="/installation/others"><a className="footer__text footer-link">Установка фильтров</a></Link>
               <Link href="/repair/others"><a className="footer__text footer-link with-pb">Ремонт и диагностика фильтров</a></Link>
             </div>
             <div className="footer__info-block">
               <div className="sub">
                 <p className="footer__title with-pb">Подписаться на новости</p>
                 <SubscribeInput />
                 <Logo color="#fff" fill="#4862D2" marginTop="4rem" justifyContent="flex-end"/>
               </div>

             </div>
         </div>
      </div>
      <div className="footer__manufactory">
        <div className="footer__manufactory-inner">
            <p style={{marginRight:"2rem"}}>2020 © Все права защищены. «Мос — фильтр» Магазин фильтров для воды. </p>
            <img src="/img/manufactory-logo.png" alt="manufactory"/>
        </div>
      </div>

      <style jsx>{`

        .footer__adaptive-show{
          margin-top:4rem;
          position:relative;
          padding-top:2rem;
          display:none;
        }

        .footer-go{
          cursor:pointer;
          color:#888888;
          text-decoration:none;
        }

        .footer__adaptive-show p {
          font-weight: bold;
          font-size: 16px;
          color: #E8E8E8;
          margin-bottom:3rem;
        }

        .footer__adaptive-show span {
          font-weight: 600;
          font-size: 12px;
          line-height: 16px;
          color: #E1E1E1;
          margin-top:4.5rem;
          display:block;
          margin-bottom:3rem;
        }

        .footer__adaptive-show:before{
          content:"";
          position:absolute;
          height:1px;
          width:200%;
          left:-50%;
          top:0;
          background:#b0b0b0;
        }

        .logo-svg{
          position:absolute;
          bottom:0;
          z-index:0;
          left:50%;
          opacity:0.02;
        }
        .footer{
          margin:0;
          padding:0;
          background: #484848;
          position:relative;
          overflow:hidden;
        }
        .footer__main{
          display:flex;
          justify-content:space-between;
          width:95%;
          margin:0 auto;
          max-width:1200px;
          padding-top:4rem;
          padding-bottom:7rem;
          position:relative;
          z-index:10;
          flex-wrap:wrap;
        }
        .footer__manufactory{
          padding:2rem 0;
          background: #616161;
          position:relative;
          z-index:10;
        }
        .footer__manufactory-inner{
          width:95%;
          margin:0 auto;
          max-width:1200px;
          display:flex;
          align-items:center;
          justify-content:space-between;
        }
        .footer__title{
          font-weight: bold;
          font-size: 16px;
          color: #FFFFFF;
          margin-bottom:0;
        }
        .footer__text{
          font-weight: normal;
          font-size: 14px;
          line-height: 19px;
          color: #8B8B8B;
          text-decoration:none;
          display:block;
        }
        .footer-link{
          margin:1.4rem 0;
          transition:0.3s;
        }
        .with-img{
          display:flex;
          align-items:center;
        }
        .with-img span {
          margin-left:2.3rem;
        }
        .with-pb{
          padding-bottom:2rem;
        }
        .footer__info-block{
          padding-top:3rem;
        }
        .footer__contacts{
          width:25%;
          position:relative;
          padding-right:1rem;
          order:1;
        }
        .footer__contacts:after{
          position:absolute;
          content:"";
          width:1px;
          height:90%;
          right:0;
          top:2rem;
          background:#626262;
        }
        .footer__about, .footer__brands, .footer__services{
          width:20%;
        }
        .footer__about{
          order:2;
        }
        .footer__brands{
          order:3;
        }
        .footer__services{
          order:4;
        }

        .footer__manufactory p{
          font-weight: 600;
          font-size: 14px;
          color: #E1E1E1;
        }

        .footer__block{
          position:relative;
        }

        .footer__vector{
          position:absolute;
          right:0;
          top:2.5rem;
          transition:0.3s;
          display:none;
        }

        .arrow-reverse{
          transform:rotateX(180deg);
        }

        .footer__block:after{
          content:"";
          position:absolute;
          height:1px;
          width:120%;
          left:-10%;
          bottom:0;
          background:#b0b0b0;
          display:none;
        }


        @media(hover:hover){
          .footer-link:hover{
            color:#fff;
          }
        }

        @media screen and (max-width:900px){
          .footer__contacts:after{
            display:none;
          }
          .footer__contacts, .footer__about, .footer__brands, .footer__services{
            width:50%;
          }
          .footer__about, .footer__services{
            text-align:right;
          }
          .footer__main{
            padding-top:2rem;
          }
        }



        @media screen and (max-width:500px){
          .footer__manufactory-inner p{
            display:none;
          }
          .footer__manufactory-inner img{
            margin:0 auto;
          }
          .footer__contacts, .footer__about, .footer__brands, .footer__services{
            width:100%;
          }
          .footer__about, .footer__services{
            text-align:left;
          }
          .sub{
            display:none;
          }
          .footer-link{
            width:auto;
          }
          .mobile-height{
            height:5rem;
          }
          .footer__info-block{
            padding-top:0;
          }
          .footer__block:after{
            display:block;
          }
          .footer__block{
            margin-bottom:1rem;
          }
          .footer__main{
            padding-top:1rem;
            padding-bottom:2rem;
          }
          .footer__adaptive-show{
            display:block;
          }
          .footer__vector{
            display:block;
          }
          .with-mt-4{
            margin-top:4rem;
          }
          .adaptive-padding{
            padding-top:2rem;
          }
          .adaptive-padding-bottom{
            padding-bottom:2rem;
          }


          .footer__contacts{
            order:4;
          }
          .footer__about{
            order:1;
          }
          .footer__brands{
            order:1;
          }
          .footer__services{
            order:3;
          }
          .footer__main{
            width:90%;
          }

        }
      `}</style>
    </div>
  )
}

export default Footer;
