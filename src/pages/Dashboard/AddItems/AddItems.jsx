import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic=useAxiosPublic();
    const axiosSecure=useAxiosSecure();


    const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


    const onSubmit =  async(data) => {
        // image upload to the imgbb and get an url
        const imageFile={image: data.image[0]};
       const res= await axiosPublic.post(image_hosting_api, imageFile,{
          headers:{
            "content-type": "multipart/form-data"
          }
       }) 
    //    send the menu iten data with url
    if(res.data.success){
         const menuItem={
            name:data.name,
            category:data.category,
            price:parseFloat(data.price),
            recipe:data.recipe,
            image:res.data.data.display_url
         }
        // post with image url and menu item in the server
        const menuRes = await axiosSecure.post('/menu',menuItem)
        console.log(menuRes.data)
        if(menuRes.data.insertedId){
        //   show success popUp
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} Added Successsfuly`,
            showConfirmButton: false,
            timer: 1500
          });
        }
    }
       console.log(res.data)
        reset(); 
    };

    return (
        <>
            <SectionTitle heading='ADD AN ITEM' subHeading='What’s New?'></SectionTitle>
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Recipe Name*</label>
                        <input
                            type="text"
                            placeholder="Recipe name"
                            {...register('name', { required: true })}
                            className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Category*</label>
                            <select
                            defaultValue='default'
                                {...register("category", { required: true })}
                                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                            >
                                <option disabled value='default'>Select a Category</option>
                                <option value='salad'>Salad</option>
                                <option value='pizza'>Pizza</option>
                                <option value='dessert'>Dessert</option>
                                <option value='soup'>Soup</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Price*</label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Recipe Details</label>
                        <textarea
                            placeholder="Recipe Details"
                            {...register('recipe')}
                            className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Upload Image</label>
                        <input 
                            type="file"
                            {...register('image')}
                            className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <button type="submit" className="btn flex items-center justify-center px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                        ADD ITEM <FaUtensils /> 
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddItems;
