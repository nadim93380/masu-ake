import { IoStar } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";


const DetailsCraft = () => {

    const singleData = useLoaderData()

    return (
        <div className="w-11/12 md:w-10/12 mx-auto">
            <div>
                <img src={singleData.image} className="w-full object-cover h-[35vh] md:h-[60vh] rounded-lg" alt="" />
            </div>
            <div className="border-b-2 py-3">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl md:text-4xl font-bold">{singleData.name} <span className="text-sm font-semibold text-green-500">{singleData.stock}</span></h3>
                    <p className="flex justify-center items-center gap-2"><IoStar /> {singleData.rating }</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-sm md:text-2xl font-semibold">{singleData.subCategory}</p>
                    <p className="text-sm md:text-2xl font-semibold">Price : {singleData.price} $</p>
                </div>
            </div>
            <div className=" py-3 space-y-3">
                <h3 className="text-sm md:text-2xl font-semibold border-b-2">Additional Information</h3>
                <p className="text-xs md:text-xl">- {singleData.description}</p>
                <p className="text-xs md:text-xl">- Proccessing time : {singleData.processing_time} days</p>
                <p className="text-xs md:text-xl">- Customization : {singleData.customization}</p>
                <p className="text-xs md:text-xl">- Stock : {singleData.stock}</p>
                

            </div>
        </div>
    );
};

export default DetailsCraft;