/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { IoStar } from "react-icons/io5";


const CraftCard = ({ item }) => {

    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl relative">
            <figure className="px-5 pt-5">
                <img
                    src={item.image}
                    alt="Shoes"
                    className="rounded-xl w-full object-cover h-56" />
            </figure>
            <div className="card-body items-center text-center">
                <div className="flex gap-3 items-end">
                    <p className="font-semibold">{item.subCategory}</p>
                    <p className="flex justify-center items-center gap-1"><IoStar /> {item.rating}</p>
                </div>
                <h2 className="text-xl font-bold text-center">{item.name}</h2>

                <p>{item.description}</p>
                {/* <p>Status : <span className="text-green-600">{item.stockStatus}</span></p> */}
                <div className="card-actions">
                    <button className="btn btn-outline">Price : {item.price} $</button>
                    <Link to={`/craftDetails/${item._id}`} className="btn btn-primary" >View Details</Link>
                </div>
            </div>
            <div className="absolute top-10 py-3 px-6 rounded-r-full bg-cyan-300">
                <h3 className="text-blue-900 font-semibold">{item.stock}</h3>
            </div>
        </div>
    );
};

export default CraftCard;