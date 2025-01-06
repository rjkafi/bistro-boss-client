

const FoodCard = ({item}) => {
    const {recipe,image,name,price}= item;
    return (
        <>
         <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={image} 
          alt=""
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-black text-white text-sm px-2 py-1 rounded">
          ${price}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600 text-sm mt-2">
          {recipe}
        </p>
        <button className="w-full mt-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
          ADD TO CART
        </button>
      </div>
    </div>
            
        </>
    );
};

export default FoodCard;