/* eslint-disable react/prop-types */


const CraftCard = ({ item }) => {

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
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
                <p>Status : <span className="text-green-600">{item.stockStatus}</span></p>
                <div className="card-actions">
                    <button className="btn btn-outline">Price : {item.price} $</button>
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default CraftCard;