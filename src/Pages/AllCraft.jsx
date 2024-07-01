import { useEffect, useState } from "react";
import TableRow from "../Components/TableRow";
import Loading from "../Common/Loading";


const AllCraft = () => {
    const [allData, setAllData] = useState([])
    const [showLoader, setShowLoader] = useState(true)

    useEffect(() => {
        fetch("https://masu-server.vercel.app/allCraft")
            .then(res => res.json())
            .then(data => {
                setAllData(data)
                setShowLoader(false)
            })
    }, [])

    if (showLoader) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="w-11/12 md:w-10/12 mx-auto">

                <div className="flex justify-center w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="hidden md:block">Index</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th className="hidden md:block">Customization</th>
                                <th>Stock</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                allData.map((item, index) => <TableRow key={item._id} item={item} index={index}></TableRow>)
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AllCraft;