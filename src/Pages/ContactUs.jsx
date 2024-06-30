/* eslint-disable react/no-unescaped-entities */

const ContactUs = () => {
   

    const handlMsgSent = e => {
        e.preventDefault()
        e.target.reset()
    }

    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-20 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
            <div className="flex flex-col justify-between hidden lg:block">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                    <div className="dark:text-gray-600">We are just one step away</div>
                </div>
                <img src="https://img.freepik.com/free-photo/portrait-woman-customer-service-worker_144627-37948.jpg?t=st=1718262836~exp=1718266436~hmac=7488e083037a53e548e76eff33e083a7d84b2be4b712f9bf144a21e8d6532106&w=1060" alt="" className="rounded-lg h-52 md:h-64" />
            </div>
            <form noValidate="" className="space-y-6" onSubmit={handlMsgSent}>
                <div>
                    <label htmlFor="name" className="text-sm">Full name</label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Name" required/>
                    </label>
                </div>
                <div>
                    <label htmlFor="email" className="text-sm">Email</label>
                    <label className="input input-bordered flex items-center gap-2">
                        
                        <input type="text" className="grow" placeholder="Email" required/>
                    </label>
                </div>
                <div>
                    <label htmlFor="message" className="text-sm">Message</label>
                    <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full" required></textarea>
                </div>
                <button type="submit" className="w-full btn p-3 text-sm font-bold tracking-wide uppercase rounde">Send Message</button>
            </form>
            
        </div>
    );
};

export default ContactUs;