import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";


const CategorySection = () => {
    const [categoryData,setCategoryData]=useState([])
    


    useEffect(() => {
        fetch("/fakeCategoryData.json")
            .then(res => res.json())
        .then(data=>setCategoryData(data))
    }, [])
    

    return (
        <div className="flex justify-around items-center py-10 flex-wrap bg-slate-100 dark:bg-slate-500 mt-9">
            {
                categoryData.map(category=><CategoryCard key={category.id} category={category}></CategoryCard>)
            }
        </div>
    );
};

export default CategorySection;