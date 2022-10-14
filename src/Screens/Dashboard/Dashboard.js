import React, { useState, useEffect } from 'react'
import { Button } from '@mantine/core';
import CategoriesPicker from "../../Component/CategoriesPicker";
import MonthPicker from "../../Component/MonthPicker";
import BudgetContenant from "../../Component/BudgetContenant";
import { baseURL } from "../../Services/OrgabudAPI";
import axios from "axios";

export default function Dashboard() {
  const now = new Date();
  const [categoryTitle, setCategoryTitle] = useState('')
  const [month, setMonth] = useState(now.getMonth())
  const [year, setYear] = useState(now.getFullYear())
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    let tokenData = {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    };
    await axios.get(baseURL + "categories", tokenData).then(
      (response) => {
        setCategories(response.data)
      }
    )
  }
  useEffect(() => {
    getCategories()
  }, []) 

    return (
      <>
      <div className="navigation-categories-box">
      <CategoriesPicker categories={categories} categoryTitle={categoryTitle} setCategoryTitle={setCategoryTitle} />
      <MonthPicker month={month} setMonth={setMonth} year={year} setYear={setYear}/>
      </div>
      <div className="go-back-today">
          <span className='go-back-today-space'>  </span>
          <Button className="go-back-today-button" variant="subtle" compact uppercase>
          Aujourd'hui
        </Button>
      </div>
        
      <div className="contenair">
        <BudgetContenant categories={categories} categoryId={categoryTitle} month={month} year={year} />
          
      </div>
      </>
    );
}
