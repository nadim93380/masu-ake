import { useEffect, useState } from "react";


const DetailsCraft = () => {

    const [singleData, setSingleData] = useState([])

    useEffect(() => {
        fetch("/fakeSingleData.json")
            .then(res => res.json())
            .then(data => {
                setSingleData(data)
                console.log(data)
            })
    }, [])


    return (
        <div className="w-11/12 md:w-10/12 mx-auto">
            <div>
                <img src={singleData.image} className="w-full object-cover h-[35%] md:h-[60vh] rounded-lg" alt="" />
            </div>
            <div className="border-b-2 py-3">
                <div className="flex justify-between items-center">
                    <h3 className="text-2xl md:text-4xl font-bold">{singleData.item_name}</h3>
                    <p>Rating : {singleData.rating }</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-xl md:text-2xl">{singleData.subcategory_Name}</p>
                    <p className="text-xl md:text-2xl font-bold">Price : {singleData.price} $</p>
                </div>
            </div>
            <div className=" py-3 space-y-3">
                <h3 className="text-xl md:text-3xl font-semibold border-b-2">Additional Information</h3>
                <p className="text-sm md:text-xl">- {singleData.short_description}</p>
                <p className="text-sm md:text-xl">- Proccessing time : {singleData.processing_time} days</p>
                <p className="text-sm md:text-xl">- Customization : {singleData.customization}</p>
                <p className="text-sm md:text-xl">- Stock : {singleData.stockStatus}</p>
                

            </div>
        </div>
    );
};

export default DetailsCraft;