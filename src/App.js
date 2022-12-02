import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/menu-data.json";
import BakeryItem from "./components/MenuItem.js"
import Aggregator from "./components/Aggregator"
import Grid from '@mui/material/Unstable_Grid2'
import { Checkbox, Radio, Space } from 'antd';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  const [type, setType] = useState("All")
  const [type2, setType2] = useState("All")
  const [sortBy, setSort] = useState("Popularity")
  const [cart, setCart] = useState({})

  const selectFilterType = e => {
    //console.log(e)
    if(e.length === 0){
      setType("All")
    } else if (e.length === 1) {
      setType(e[0])
    } else {
      setType()
    }
  };

  const selectFilterType2 = e => {
    if(e.length === 0){
      setType2("All")
    } else if (e.length === 1) {
      console.log(e[0])
      setType2(e[0])
    } else {
      setType2()
    }
  };
  
  const matchesFilterType = item => {
    if(type === "All"){
      return true
    } else if (type === item.type) {
      return true
    } else if (type !== item.type) {
      return false 
    } else {
      return false
    }
  }
  const plainOptions = ['Milk Tea', 'Specialty'];
  const plainOptions2 = ['Caffeinated', 'Decaffeinated'];

  const matchesFilterType2 = item => {
    console.log(type2)
    if (type2 === "All"){
      return true
    } else if (type2 === item.caffeine){
      return true
    } else {
      return false
    }
  }

  const doubleFilter = bakeryData.filter(matchesFilterType).filter(matchesFilterType2)

  const onSort = (event) => {
    setSort(event.target.value)
  }
  
  let finalData
  if (sortBy === "Price") {
    finalData = [...doubleFilter].sort((a, b) => a.price - b.price)
  } else if (sortBy === "Popularity") {
    finalData = [...doubleFilter].sort((a, b) => a.rank - b.rank)
  }

  /* cart */
  function handleClick(item) {
    var newQuant = 1
    if (item.name in cart) {
      newQuant = cart[item.name].quantity + 1
    }
    setCart({...cart, [item.name]: {quantity: newQuant, price: item.price}})
  }

  function removeItem(item) {
    let quant = cart[item.name].quantity;
    if (quant > 0) {
      quant -= 1;
      if (quant === 0) {
        const newCart = {};
        for (const key of Object.keys(cart)) {
          if (item.name !== key) {
            newCart[key] = cart[key];
          }
        }
        setCart(newCart)
      } else {
        setCart({...cart, [item.name]: {quantity: quant, price: item.price}})
      }
    }
    
  }

  return (
    <Grid container spacing={5} sx={{px: 12, py: 5}}>
      <Grid xs={2}>

    <h2>sort by</h2>
    <Radio.Group>
        <Space direction="vertical" onChange={onSort}>
          <Radio value={"Popularity"}>Default</Radio>
          <Radio value={"Price"}>Prices low to high</Radio>
        </Space>
      </Radio.Group>

      <h2>drink type</h2>
      <Checkbox.Group style={{ display: "block", marginLeft: 0 }} options={plainOptions} defaultValue={['All']} onChange={selectFilterType} />
       
      <h2>caffeine selection</h2>
      <Checkbox.Group style={{ display: "block", marginLeft: 0 }} options={plainOptions2} defaultValue={['All']} onChange={selectFilterType2} />

      </Grid>
        <Grid xs={8}>
          <h1>Tea Rose Garden</h1> {/* TODO: personalize your bakery (if you want) */}
          <Grid container spacing={2}>
            {finalData.map((item, index) => (
              <Grid key={index} xs={4}>
                <BakeryItem 
                  item={item}
                  handleClick={handleClick}
                  removeItem={removeItem}
                />
              </Grid> 
            ))}
          </Grid>
        </Grid>
      
      <Grid xs>
        <Aggregator cart={cart}></Aggregator>
      </Grid>
    </Grid>
  );
}

export default App;