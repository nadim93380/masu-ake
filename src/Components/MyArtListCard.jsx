/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const MyArtListCard = ({ item }) => {
    

    return (
        <div className="rounded-lg border px-6 py-6 mt-3">
            <div className="flex flex-col lg:flex-row gap-6">
                <div>
                    <img src={item.image} className="max-w-sm object-cover w-full rounded-lg shadow-xl" />
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">{item.item_name}</h1>
                    <p className="my-3"><span className="font-bold">{item.subcategory_Name}</span></p>
                    <div className="flex flex-col lg:flex-row items-center gap-5">
                        <p>Rating : <span className="font-bold">{item.rating}</span></p>
                        <p>Stock : <span className="font-bold text-green-500">{item.stockStatus}</span></p>
                    </div>
                    <div className="flex justify-center w-full lg:justify-start items-center gap-5 py-5 border-b-2 mb-4">
                        <p>Price :<span className="font-bold"> {item.price} $</span></p>
                        <p>Custimization : <span className="font-bold">{item.customization}</span></p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-3">
                        <Link className="btn btn-accent rounded-full">View Details</Link>
                        <button className="btn bg-blue-100 text-blue-700 rounded-full" disabled><Link>Update</Link></button>
                        <Link className="btn btn-error rounded-full">Delete</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyArtListCard;