const ChoiseOption = ({text, id, changeHandler, activeId, setOption, setActiveId, setActiveModel}) => {

  const classes = ["choise__option"];
  if (activeId === id) classes.push("active-option");


  return(

      <div className={classes.join(" ")} onClick = {() => {
        changeHandler(text, id);
        setOption(text);
        if (setActiveModel) setActiveModel(id);
      }}>
        {text}

        <style jsx>{`
          .choise__option{
            display:flex;
            align-items:center;
            padding-left:1.4rem;
            font-size: 13px;
            line-height: 16px;
            color: #424242;
            width:100%;
            height:6rem;
            border-bottom:1px solid #E3E3E3;
          }

          .active-option{
            background:#f8f8f8;
          }

          @media(hover:hover){
            .choise__option:not(.active-option):hover{
              color: #4862D2;
            }
          }
        `}</style>
      </div>

  )
}


export default ChoiseOption;
