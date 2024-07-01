import { useEffect, useState } from "react";
import CraftCard from "../Components/CraftCard";


const AllCraft = () => {
    const [allData, setAllData] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/allCraft")
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 md:w-10/12 mx-auto">
                {
                    allData.map(item => <CraftCard key={item._id} item={item}></CraftCard>)
                }
            </div>
        </div>
    );
};

export default AllCraft;