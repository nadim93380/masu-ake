import { useContext, useEffect, useState } from "react";
import MyArtListCard from "../Components/MyArtListCard";
import { AuthContext } from "../authentication/AuthSharer";
import Loading from "../Common/Loading";


const MyArt = () => {
    const [userAllCraft, setuserAllCraft] = useState([])
    const { user } = useContext(AuthContext)
    const [show, setShow] = useState([])
    const [reFecther, setReFecther] = useState(false)
    const [loading, setLoading] = useState(true)


    // Real Api data
    useEffect(() => {
        fetch(`http://localhost:5000/userCraft/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setuserAllCraft(data)
                setShow(data)
                setLoading(false)
            })
    }, [reFecther,user])


    const handleShow = e => {
        e.preventDefault()
        const showFor = e.target.filter.value
        if (showFor === "all") {
            setShow(userAllCraft)
            setLoading(false)
            return
        }
        if (showFor === "yes") {
            const customizable = userAllCraft.filter(item => item.customization === "Yes")
            setShow(customizable)
            setLoading(false)
            return
        }
        if (showFor === "no") {
            const nonCustomizable = userAllCraft.filter(item => item.customization === "No")
            setShow(nonCustomizable)
            setLoading(false)
            return
        }
    }

    if (loading) {
        return <Loading></Loading>
    }


    if (show.length < 1) {
        return <>
            <div className="w-11/12 md:w-10/12 mx-auto">
                <div className="flex justify-end my-4 pb-2 border-b-2">
                    <form onSubmit={handleShow}>
                        <select defaultValue="all" id="pricingType" name="filter"
                            className="h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
                            <option value="all" selected="">All</option>
                            <option value="yes">Customizable</option>
                            <option value="no">Not Customizable</option>
                        </select>
                        <button className="btn btn-outline btn-md">Update</button>
                    </form>
                </div>
                <h3 className="text-center text-xl md:text-2xl my-9">No Data Found!</h3>
            </div>
        </>
    }
    else {
        return (
            <div className="w-11/12 md:w-10/12 mx-auto">
                <div className="flex justify-end my-4 pb-2 border-b-2">
                    <form onSubmit={handleShow}>
                        <select id="pricingType" name="filter"
                            className="h-10 border-2 focus:outline-none focus:border-sky-500 rounded px-2 md:px-3 py-0 tracking-wider">
                            <option value="all" selected="">All</option>
                            <option value="yes">Customizable</option>
                            <option value="no">Not Customizable</option>
                        </select>
                        <button className="ml-2 h-10 border-2 focus:outline-none rounded px-2 md:px-3 py-0">Filter</button>
                    </form>
                </div>

                <div>
                    {
                        show.map(item => <MyArtListCard key={item._id} item={item} setReFecther={setReFecther} reFecther={reFecther}></MyArtListCard>)
                    }
                </div>
            </div>
        );
    }
};

export default MyArt;