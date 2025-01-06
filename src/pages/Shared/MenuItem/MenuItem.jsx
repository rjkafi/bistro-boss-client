

const MenuItem = ({item}) => {
    const {recipe,image,name,price}= item;
    return (
        <>
       <div className="flex gap-4">
       <img style={{borderRadius: " 0 200px 200px 200px"}} className="w-[116px]" src={image} alt="" />
        <div>
            <h4 className="text-xl font-semibold">{name}------</h4>
            <p>{recipe}</p>
        </div>
        <h5 className="text-[#BB8506] text-xl">${price}</h5>
       </div>
            
        </>
    );
};

export default MenuItem;