import { useContext } from "react";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../authentication/AuthSharer";


const UpdateCraft = () => {

    const item = useLoaderData()
    const navigate = useNavigate()

    const {categoryData} = useContext(AuthContext)

    const handleAddCraft = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const description = form.description.value;
        const subCategory = form.subCategory.value;
        const stock = form.stock.value;
        const customization = form.customization.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const proccessingTime = form.proccessingTime.value;

        const newCraft = { name, image, description, subCategory, stock, customization, price, rating, proccessingTime }

        fetch(`https://masu-server.vercel.app/updateCraft/${item._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Your Product Has Been Added.",
                        showConfirmButton: false,
                        timer: 1700
                    });
                    form.reset()
                    navigate("/myCraft")
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!Try Again",
                    });

                }
            })

    }

    return (
        <div className="w-11/12 md:w-10/12 mx-auto">
            <form onSubmit={handleAddCraft} className="border-b border-gray-900/10 pb-12">
                <div className="text-center py-5 bg-sky-200 rounded-tl-lg rounded-br-lg">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Update a Craft</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">Please make sure to every field is filled up.</p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Item Name
                        </label>
                        <div className="mt-2">
                            <input
                                required
                                type="text"
                                name="name"
                                id="first-name"
                                defaultValue={item.name}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Image
                        </label>
                        <div className="mt-2">
                            <input
                                required
                                type="text"
                                name="image"
                                id="last-name"
                                defaultValue={item.image}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-6">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Short Description
                        </label>
                        <div className="mt-2">
                            <input
                                id="text"
                                name="description"
                                type="text"
                                defaultValue={item.description}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    {/* Subcategory */}
                    <div className="sm:col-span-2">
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                            Subcategory Name
                        </label>
                        <div className="mt-2">
                            <select
                                id="country"
                                name="subCategory"
                                defaultValue={item.subCategory}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            >
                                {
                                    categoryData.map(category => <option key={category.id}>{category.categoryName}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    {/* Stock */}
                    <div className="sm:col-span-2">
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                            Stock Status
                        </label>
                        <div className="mt-2">
                            <select
                                id="country"
                                name="stock"
                                defaultValue={item.stock}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            >
                                <option>In Stock</option>
                                <option>Made To Order</option>
                            </select>
                        </div>
                    </div>
                    {/* Customization*/}
                    <div className="sm:col-span-2">
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                            Customization
                        </label>
                        <div className="mt-2">
                            <select
                                id="country"
                                name="customization"
                                defaultValue={item.customization}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            >
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                            Price
                        </label>
                        <div className="mt-2">
                            <input
                                required
                                type="number"
                                step="0.1"
                                name="price"
                                id="city"
                                defaultValue={item.price}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                            Rating
                        </label>
                        <div className="mt-2">
                            <input
                                required
                                type="number"
                                step="0.1"
                                name="rating"
                                id="region"
                                defaultValue={item.rating}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                            Proccessing Time
                        </label>
                        <div className="mt-2">
                            <input
                                type="number"
                                name="proccessingTime"
                                id="region"
                                defaultValue={item.proccessingTime}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <input type="submit" className="btn btn-block bg-green-500" value="Update Item" />
                </div>
            </form>
        </div>
    );
};

export default UpdateCraft;