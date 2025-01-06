import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({ items ,title,coverImg,btnText}) => {
    return (
        <div>
            
            <div className="grid md:grid-cols-2 gap-6 my-12">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center my-8">
              <Link to={`/order/${title}`}>
              <button className=" rounded-xl hover:bg-[#D99904] hover:text-white px-2 py-3 uppercase bg-transparent border-b-2 text-center text-xl font-bold">
                {btnText}
                </button>
              </Link>
            </div>

        </div>

    );
};

export default MenuCategory;