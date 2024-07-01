import { useContext, useEffect, useState } from "react";
import MyArtListCard from "../Components/MyArtListCard";
import { AuthContext } from "../authentication/AuthSharer";


const MyArt = () => {
    const [userAllCraft, setuserAllCraft] = useState([])
    const {user}=useContext(AuthContext)

    // Fake Json
    useEffect(() => {
        fetch(`http://localhost:5000/userCraft/${user.email}`)
            .then(res => res.json())
            .then(data => setuserAllCraft(data))
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
                    userAllCraft.map(item =><MyArtListCard key={item._id} item={item}></MyArtListCard>)
                }
            </div>
        </div>
    );
};

export default MyArt;