import { useLoaderData } from "react-router-dom";
import CraftCard from "../Components/CraftCard";


const CategoryList = () => {

    const data = useLoaderData()
    console.log(data)
    return (
        <div className="w-11/12 md:w-10/12 mx-auto py-3 grid grid-cols-1 md:grid-cols-3">
            {
                data.map(item=><CraftCard key={item._id} item={item}></CraftCard>)
            }
        </div>
    );
};

export default CategoryList;