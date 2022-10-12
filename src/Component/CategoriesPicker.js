import React, { useEffect, useState } from 'react'
import { Select } from "@mantine/core";
import { baseURL } from "../Services/OrgabudAPI";
import axios from "axios";
export default function CategoriesPicker() {

    const [categories, setCategories] = useState([]);
    const [value, setValue] = useState(null);

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
    
    console.log(value)
    return (
      <Select
        className="category-picker"
        placeholder="Catégories"
        onChange={setValue}
        data={categories.map((e) => {
          return { value: e.slug, label: e.name };
        })}
      />
    );
}
