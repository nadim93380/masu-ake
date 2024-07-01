/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const CategoryCard = ({category}) => {
    return (
        <Link to={`/categoryCraft/${category.categoryName}`}>
            <div className="avatar flex flex-col justify-center items-center gap-2 md:gap-3">
                <div className="w-10 md:w-24 rounded-full">
                    <img src={category.categoryImage} />
                </div>
                <h3 className="text-sm md:text-xl">{category.categoryName}</h3>
            </div>
        </Link>
    );
};

export default CategoryCard;