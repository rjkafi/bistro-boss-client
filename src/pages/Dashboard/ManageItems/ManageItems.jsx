import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure=useAxiosSecure();
    
    const handleDeleteItem=  (item)=>{
      
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async (result) => {
            if (result.isConfirmed) {
                const res= await axiosSecure.delete(`/menu/${item._id}`)
                // console.log(res.data)
                if(res.data.deletedCount > 0){
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been successfully deleted`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
           
            }
          });
    }


    return (
        <>
            <SectionTitle heading="Manage All Items" subHeading='Hurry Up !'></SectionTitle>
            <div className="my-7">
                <div className="overflow-x-auto ">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price </th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                            menu.map((item,index)=><tr key={item._id}>
                            <th>
                                {/* index */}
                               {index+1}  
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className=" h-16 w-16">
                                            <img
                                                src={item.image}
                                                alt="" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h2 className="">{item.name}</h2>
                            </td>
                            <td>{item.price}</td>
                            <th>
                              <Link to={`/dashboard/updateItem/${item._id}`}>
                              <button 
                              className="btn btn-lg bg-orange-500 text-white text-xl"><FaEdit></FaEdit></button>
                              </Link>
                            </th>
                            <th>
                                <button 
                                onClick={()=>handleDeleteItem(item)}
                                className="btn btn-ghost  btn-lg text-red-400 text-xl"><FaTrash></FaTrash></button>
                            </th>
                        </tr>)
                          }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ManageItems;