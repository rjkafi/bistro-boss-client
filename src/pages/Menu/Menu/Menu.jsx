import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import { Helmet } from "react-helmet-async";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const Menu = () => {
   const [menu]=useMenu();
   const offer=menu.filter(item=> item.category === "offered"); 
   const dessert=menu.filter(item=> item.category === "dessert"); 
   const pizza=menu.filter(item=> item.category === "pizza"); 
   const salad=menu.filter(item=> item.category === "salad"); 
   const soup=menu.filter(item=> item.category === "soup"); 
 
    return (
        <> 
        <Helmet>
        <title> Bistro-Boss || Menu</title>
        </Helmet>
           <Cover menuImg={menuImg} title="Our Menu" subTitle='Would you like to try a dish?'></Cover>
           <SectionTitle heading="TODAY'S OFFER" subHeading="Don't Miss"></SectionTitle>
           <MenuCategory items={offer} btnText="ORDER YOUR FAVOURITE FOOD" ></MenuCategory>
           <Cover menuImg={dessertImg} title="DESSERTS" subTitle='
           "Indulge in the sweet symphony of flavors with our handcrafted desserts. From rich, velvety chocolate creations to light and airy fruit-infused delights, every bite is a masterpiece.
           '></Cover>
           <MenuCategory items={dessert} title={"dessert"} btnText="ORDER YOUR FAVOURITE FOOD"></MenuCategory> 
           {/* Pizza */}
           <Cover menuImg={pizzaImg} title="PIZZA" subTitle='
           Our pizzas are a masterpiece of authentic flavors, featuring a perfectly crisp crust, rich tomato sauce, and a generous layer of melted cheese. Topped with the freshest ingredients, from classic pepperoni to gourmet options like roasted vegetables or artisan meats, each slice is crafted with care.
           '></Cover>
           <MenuCategory items={pizza} title={"pizza"}  btnText="ORDER YOUR FAVOURITE FOOD"></MenuCategory> 
           {/* Salads */}
           <Cover menuImg={saladImg} title="SALAD" subTitle='
           Salad is thoughtfully prepared, combining wholesome textures and bold dressings to create a perfect harmony of taste.
           '></Cover>
            <MenuCategory items={salad} title={"salad"}  btnText="ORDER YOUR FAVOURITE FOOD"></MenuCategory>
             {/*Soups  */}
             <Cover menuImg={soupImg} title="SOUP" subTitle='
            Soup are made with the freshest ingredients, from hearty vegetables to tender meats and aromatic herbs, each bowl is a testament to our dedication to quality. 
           '></Cover>
            <MenuCategory items={soup} title={"soup"} btnText="ORDER YOUR FAVOURITE FOOD"></MenuCategory>
        </>
    );
};

export default Menu;