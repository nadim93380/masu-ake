import { useEffect, useState } from "react";
import CraftCard from "./CraftCard";
// import { Link } from "react-router-dom";


const CraftContainer = () => {

    // const [showButton, setShowButton] = useState(false)
    const [allData, setAllData] = useState([])

    useEffect(() => {
        fetch("https://masu-server.vercel.app/allCraft")
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    // useEffect(() => {
    //     if (allData.length > 6) {
    //         setShowButton(true)
    //     }
    // },[allData])


    return (
        <div>
            <div className="py-12 my-6 w-11/12 md:w-10/12 mx-auto flex justify-center items-center bg-gradient-to-l from-slate-200 rounded-2xl">
                <h3 className="text-centre text-3xl md:text-4xl font-bold text-yellow-500">Available Deals : {allData.length}</h3></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 md:w-10/12 mx-auto">
                {
                    allData.map(item => <CraftCard key={item._id} item={item}></CraftCard>)
                }
            </div>
            {/* <div className="flex justify-center my-3">
                {showButton?<Link to='/allCraft' className="btn btn-outline">Show All</Link>:""}
            </div> */}

        </div>
    );
};

export default CraftContainer;