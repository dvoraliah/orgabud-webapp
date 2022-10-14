import React from 'react'
import { Select } from "@mantine/core";

export default function CategoriesPicker({categories, setCategories, categoryTitle, setCategoryTitle}) {

    
    return (
      <Select
        className="category-picker"
        placeholder="Catégories"
        onChange={setCategoryTitle}
        data={categories.map((e) => {
          return { 
            value: e.id, label: e.name 
          };
        })}
      />
      
    );
}
