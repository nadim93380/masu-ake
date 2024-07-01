/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyArtListCard = ({ item }) => {


    const handleDeleteCraft = (id) => {
        console.log(`delete ${id}`)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(() => {
            fetch(`http://localhost:5000/removeCraft/${id}`, {
                method:"DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount>0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
            
        });
    }


    return (
        <div className="rounded-lg border px-6 py-6 mt-3">
            <div className="flex flex-col lg:flex-row gap-6">
                <div>
                    <img src={item.image} className="max-w-sm object-cover w-full rounded-lg shadow-xl" />
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">{item.name}</h1>
                    <p className="my-3"><span className="font-bold">{item.subcategory}</span></p>
                    <div className="flex flex-col lg:flex-row items-center gap-5">
                        <p>Rating : <span className="font-bold">{item.rating}</span></p>
                        <p>Stock : <span className="font-bold text-green-500">{item.stock}</span></p>
                    </div>
                    <div className="flex justify-center w-full lg:justify-start items-center gap-5 py-5 border-b-2 mb-4">
                        <p>Price :<span className="font-bold"> {item.price} $</span></p>
                        <p>Custimization : <span className="font-bold">{item.customization}</span></p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-3">
                        <Link to={`/craftDetails/${item._id}`} className="btn btn-accent rounded-full">View Details</Link>
                        <button className="btn bg-blue-100 text-blue-700 rounded-full" disabled><Link>Update</Link></button>
                        <Link onClick={() => handleDeleteCraft(item._id)} className="btn btn-error rounded-full">Delete</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyArtListCard;