import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ( {item} ) => {
    const { _id, image, name, price, recipe } = item; 
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [,refetch]=useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem ={
                menuId: _id,
                email: user.email,
                name,
                image,
                price 
            };
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${name} added to the cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch the cart update items count
                        refetch();
                    }
                    
                });
        } else {
            Swal.fire({
                title: "You aren't logged in",
                text: "Please login to add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };

    return (
        <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-black text-white text-sm px-2 py-1 rounded">
                    ${price}
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-gray-600 text-sm mt-2">
                    {typeof recipe === 'string' ? recipe : JSON.stringify(recipe)}
                </p>
                <button
                    onClick={()=>handleAddToCart(item)}
                    className="w-full mt-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                >
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};

export default FoodCard;
