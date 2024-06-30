import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";


const CategorySection = () => {
    const [categoryData,setCategoryData]=useState([])
    

    // From Fake json
    useEffect(() => {
        fetch("/fakeCategoryData.json")
            .then(res => res.json())
        .then(data=>setCategoryData(data))
    }, [])

    // From Api
    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then(res => res.json())
        .then(data=>console.log(data))
    }, [])
    

    return (
        <div className="flex justify-around items-center py-4 md:py-10 flex-wrap bg-pink-50 rounded-tl-full rounded-br-full mt-9">
            {
                categoryData.map(category=><CategoryCard key={category.id} category={category}></CategoryCard>)
            }
        </div>
    );
};

export default CategorySection;