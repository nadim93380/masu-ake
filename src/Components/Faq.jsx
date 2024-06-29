

const Faq = () => {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">How do I place an order?</summary>
                            <div className="px-4 pb-4">
                                <p>To place an order, browse our products, add items to your cart, and proceed to checkout. Follow the prompts to enter your shipping and payment information.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What payment methods do you accept?</summary>
                            <div className="px-4 pb-4">
                                <p>We accept major credit cards (Visa, MasterCard, American Express), PayPal, and [any other payment methods].</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What is your return policy?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>We accept returns within [X] days of purchase. Items must be unused and in their original packaging. Please visit our returns policy page for more details and instructions on how to initiate a return.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;