/* eslint-disable react/prop-types */


const CategoryCard = ({category}) => {
    return (
        <div>
            <div className="avatar flex flex-col justify-center items-center gap-2 md:gap-3">
                <div className="w-10 md:w-24 rounded-full">
                    <img src={category.categoryImage} />
                </div>
                <h3 className="text-sm md:text-xl">{category.categoryName}</h3>
            </div>
        </div>
    );
};

export default CategoryCard;