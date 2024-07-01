import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";


const CategorySection = () => {
    const [categoryData,setCategoryData]=useState([])

    // From Api
    useEffect(() => {
        fetch("https://masu-server.vercel.app/categories")
            .then(res => res.json())
        .then(data=>setCategoryData(data))
    }, [])
    

    return (
        <div className="flex justify-around items-center py-4 md:py-10 flex-wrap bg-pink-50 md:rounded-tl-full md:rounded-br-full mt-9">
            {
                categoryData.map(category=><CategoryCard key={category._id} category={category}></CategoryCard>)
            }
        </div>
    );
};

export default CategorySection;