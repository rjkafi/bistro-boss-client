import { useLoaderData, useNavigate } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
     const { register, handleSubmit } = useForm();
     const axiosPublic=useAxiosPublic();
    const axiosSecure=useAxiosSecure();
    const navigate=useNavigate();
    const { _id,name, recipe,category, price} = useLoaderData();
   

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
          const menuRes = await axiosSecure.patch(`/menu/${_id}`,menuItem)
          console.log(menuRes.data)
          if(menuRes.data.modifiedCount> 0){
          //   show success popUp
          Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${data.name} Updated Successfully`,
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/dashboard/manageItems')
          }
      }
         console.log(res.data)
         
      };




    return (
        <>
            <SectionTitle heading='Update Item' subHeading='Refreash Info'></SectionTitle>
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Recipe Name*</label>
                        <input
                            type="text"
                            defaultValue={name}
                            placeholder="Recipe name"
                            {...register('name', { required: true })}
                            className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Category*</label>
                            <select
                                defaultValue={category}
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
                                defaultValue={price}
                                {...register('price', { required: true })}
                                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Recipe Details</label>
                        <textarea
                        defaultValue={recipe}
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
                            Update Menu ITEM 
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UpdateItem;