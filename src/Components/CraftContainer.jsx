import { useEffect, useState } from "react";
import CraftCard from "./CraftCard";


const CraftContainer = () => {

    const [allData, setAllData] = useState([])

    useEffect(() => {
        fetch("/fakeData.json")
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])
    return (
        <div>
            <div className="py-12 my-6 w-11/12 md:w-10/12 mx-auto flex justify-center items-center bg-gradient-to-l from-slate-200 rounded-2xl">
                <h3 className="text-centre text-3xl md:text-4xl font-bold text-yellow-500">Available Deals : {allData.length}</h3></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 md:w-10/12 mx-auto">
                {
                    allData.map(item => <CraftCard key={item.id} item={item}></CraftCard>)
                }
            </div>

        </div>
    );
};

export default CraftContainer;