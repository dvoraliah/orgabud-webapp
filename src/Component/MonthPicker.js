import React from 'react'
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

export default function MonthPicker({month, setMonth, year, setYear}) {
  const stringMonth = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
  
  const onLeftArrowClicked = () => {
    if(month === 0) {
      month = 12
      setYear(year - 1)
    }
    setMonth(month - 1)
    // console.log(month)
  }
  const onRightArrowClicked = () => {
    if (month === 11) {
      month = -1
      setYear(year + 1)
    }
    setMonth(month + 1)
  }

    return (
      <>
        <div className="month-string-navigation">
          <IoMdArrowDropleft className="navigation-arrow" size={100} onClick={onLeftArrowClicked}/>
          <div className="string-month-name">{ stringMonth[month]  + " " + year}</div>
          <IoMdArrowDropright className="navigation-arrow" size={100} onClick={onRightArrowClicked}/>                      
        </div>
      </>
    );
}
