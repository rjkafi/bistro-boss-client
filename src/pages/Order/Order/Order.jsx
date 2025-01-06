import Cover from "../../Shared/Cover/Cover";
import coverImg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
    
    const categories=["salad","pizza","soup","dessert","drinks"];
    const {category} =useParams();
    const initialIndex=categories.indexOf(category);
    console.log(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);


    const [menu]=useMenu();
   const drinks=menu.filter(item=> item.category === "drinks"); 
   const dessert=menu.filter(item=> item.category === "dessert"); 
   const pizza=menu.filter(item=> item.category === "pizza"); 
   const salad=menu.filter(item=> item.category === "salad"); 
   const soup=menu.filter(item=> item.category === "soup"); 


    return (
        <>
         <Helmet>
            <title> Bistro-Boss || Menu</title>
        </Helmet>
        <Cover menuImg={coverImg} title=" Our Shop" subTitle="Would you like to try a dish?"></Cover>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>SALAD</Tab>
        <Tab>PIZZA</Tab>
        <Tab>SOUPS</Tab>
        <Tab>DESSERTS</Tab>
        <Tab>DRINKS</Tab>
      </TabList>
      <TabPanel>
       <OrderTab items={salad}></OrderTab>
      </TabPanel>
      <TabPanel>
        <OrderTab
        items={pizza}></OrderTab>
      </TabPanel>
      <TabPanel>
        <OrderTab items={soup}></OrderTab>
      </TabPanel>
      <TabPanel>
        <OrderTab items={dessert}></OrderTab>
      </TabPanel>
      <TabPanel>
        <OrderTab items={drinks}></OrderTab>
      </TabPanel>
    </Tabs>   
            
        </>
    );
};

export default Order;