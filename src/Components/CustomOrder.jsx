/* eslint-disable react/no-unescaped-entities */


const CustomOrder = () => {
    return (
        
		<div className="flex w-11/12 md:w-10/12 mx-auto flex-col my-6 overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-80 dark:bg-gray-500 rounded-lg aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<span className="text-xs uppercase dark:text-gray-600">Join, it's more flexible</span>
				<h3 className="text-3xl font-bold">We're available to showcase your thoughts.</h3>
				<p className="my-6 dark:text-gray-600">A custom design is a unique and personalized design created to meet a client's requirements and preferences.</p>
				<button type="button" className="self-start btn">Contact Now</button>
			</div>
		</div>
    );
};

export default CustomOrder;