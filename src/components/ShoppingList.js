import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [masterList, setMasterList] = useState(items)

  const itemsToDisplay = masterList.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  }).filter(item => item.name.toLowerCase().includes((search).toLowerCase()));

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  }
  const onSearchChange = (e) => {
    setSearch(e.target.value)
  }
  const onItemFormSubmit = (newItemObj) => {
    setMasterList([...items,newItemObj])
    console.log(itemsToDisplay)
  }
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} onSearchChange={onSearchChange} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
