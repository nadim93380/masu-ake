/* eslint-disable react/prop-types */


const CategoryCard = ({category}) => {
    return (
        <div>
            <div className="avatar flex flex-col justify-center items-center gap-3">
                <div className="w-10 md:w-24 rounded-full">
                    <img src={category.image} />
                </div>
                <h3 className="text-sm md:text-xl">{category.category_name}</h3>
            </div>
        </div>
    );
};

export default CategoryCard;