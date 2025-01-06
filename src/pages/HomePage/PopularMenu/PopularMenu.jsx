
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
 const [menu]=useMenu();
 const popular=menu.filter(item=> item.category === "popular")
//  const [menu,setMenu]=useState([]);
//     useEffect(()=>{
//         fetch('menu.json')
//         .then(res=> res.json())
//         .then(data=> {
//             const popularMenu=data.filter(item=> item.category== "popular")
//             console.log(data)
//             setMenu(popularMenu)
//         })
//     },[])
    return (
        <>
        <SectionTitle
          heading="FROM OUR MENU"
          subHeading="Check it out"
        />
        <div className="grid md:grid-cols-2 gap-6 my-12">
           {
            popular.map(item=><MenuItem
            key={item._id}
            item={item}
            ></MenuItem>)
           } 
        </div>
         {/* Centered Button */}
         <div className="flex justify-center my-8">
                <button className=" hover:bg-[#D99904] hover:text-white px-2 py-3 uppercase bg-transparent border-b-2 text-center text-xl font-bold">
                    View Full Menu
                </button>
            </div>
            {/* call us section */}
            <section className="bg-black py-20">
            <div className="container mx-auto text-center">
                <p className="text-white text-4xl md:text-2xl font-semibold">
                    Call Us: +88 0192345678910
                </p>
            </div>
        </section>
        </>
    );
};

export default PopularMenu;