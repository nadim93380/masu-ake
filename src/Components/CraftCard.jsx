/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const CraftCard = ({ item }) => {

    return (
        <div className="card bg-base-100 w-96 shadow-xl hover:shadow-2xl relative">
            <figure className="px-5 pt-5">
                <img
                    src={item.image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <div className="flex gap-3 items-end">
                    <h2 className="card-title">{item.item_name}</h2>
                    <p>Rating : {item.rating}</p>
                </div>
                <p className="font-semibold">{item.subcategory_Name}</p>
                <p>{item.short_description}</p>
                {/* <p>Status : <span className="text-green-600">{item.stockStatus}</span></p> */}
                <div className="card-actions">
                    <button className="btn btn-outline">Price : {item.price} $</button>
                    <Link to='/craftDetails' className="btn btn-primary">View Details</Link>
                </div>
            </div>
            <div className="absolute top-10 py-3 px-6 rounded-r-full bg-cyan-300">
                <h3 className="text-blue-900 font-semibold">{item.stockStatus}</h3>
            </div>
        </div>
    );
};

export default CraftCard;