import { useEffect, useState } from "react";
import MyArtListCard from "../Components/MyArtListCard";


const MyArt = () => {
    const [allData, setAllData] = useState([])



    // Fake Json
    useEffect(() => {
        fetch("/fakeData.json")
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])
    

    return (
        <div className="w-11/12 md:w-10/12 mx-auto">
            <div className="flex justify-end my-4 pb-2 border-b-2">
                <select id="pricingType" name="pricingType"
                    className="h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
                    <option value="All" selected="">All</option>
                    <option value="Freemium">Customizable</option>
                    <option value="Free">Not Customizable</option>
                </select>
            </div>

            <div>
                {
                    allData.map(item =><MyArtListCard key={item.id} item={item}></MyArtListCard>)
                }
            </div>
        </div>
    );
};

export default MyArt;