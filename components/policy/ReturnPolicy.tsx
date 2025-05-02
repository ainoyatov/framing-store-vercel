
export default function ReturnPage () {
    
    return (
        <div className="max-w-4xl mx-auto p-6 md:p-12 dark:text-gray-400">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-500 mb-2">Return Policy</h1>
                <p className="text-sm text-gray-500">Last Updated: January 1, 2024</p>
            </div>

            <div className="mt-10 space-y-6">

                <section>
                    <p>
                        At <b>Art & Custom Frames</b>, we are committed to ensuring your satisfaction. 
                        Please review our return policy for framing services and products below.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-500 mb-3">Custom Framing Services</h2>
                    <ol className="list-decimal pl-6 space-y-4 text-gray-500">
                        <li>
                            <p className="font-medium">Non-Refundable Items:</p>
                            <p className="ml-4">
                                Custom framing orders are tailored specifically to your artwork or items and are therefore non-refundable. This includes:
                            </p>
                            <ul className="list-disc pl-8 mt-2 space-y-1">
                                <li>Frames made to custom sizes.</li>
                                <li>Matting, glass, and other framing materials selected specifically for your order.</li>
                                <li>Any labor or assembly services performed.</li>
                            </ul>
                        </li>

                        <li>
                            <p className="font-medium">Damaged or Defective Items:</p>
                            <p className="ml-4">If your custom frame arrives damaged or defective:</p>
                            <ul className="list-disc pl-8 mt-2 space-y-1">
                                <li>Notify us within <b>7 days</b> of receiving the item.</li>
                                <li>Provide photos of the damage or defect for verification.</li>
                                <li>We will repair or replace the frame at no additional cost.</li>
                            </ul>
                        </li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-500 mb-3">Ready-Made Frames and Accessories</h2>
                    <ol className="list-decimal pl-6 space-y-4 text-gray-500">
                        <li>
                            <p className="font-medium">Eligibility for Returns:</p>
                            <p className="ml-4">Ready-made frames and accessories may be returned if:</p>
                            <ul className="list-disc pl-8 mt-2 space-y-1">
                                <li>They are in <b>new and unused condition</b>.</li>
                                <li>The return request is made within <b>30 days</b> of purchase.</li>
                            </ul>
                        </li>

                        <li>
                            <p className="font-medium">Refund Process:</p>
                            <ul className="list-disc pl-8 mt-2 space-y-1">
                                <li>Returns with a valid receipt will be refunded to the original payment method.</li>
                                <li>Shipping costs are non-refundable unless the item was damaged or defective.</li>
                            </ul>
                        </li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-500 mb-3">General Guidelines</h2>
                    <ol className="list-decimal pl-6 space-y-4 text-gray-500">
                        <li>
                            <p className="font-medium">Proof of Purchase:</p>
                            <p className="ml-4">A receipt or order confirmation is required for all returns, exchanges, or repairs.</p>
                        </li>
                        <li>
                            <p className="font-medium">Return Shipping:</p>
                            <ul className="list-disc pl-8 mt-2 space-y-1">
                                <li>Customers are responsible for return shipping unless the item is damaged or defective.</li>
                                <li>Use secure packaging to avoid damage during transit, as we cannot accept damaged returns.</li>
                            </ul>
                        </li>
                        <li>
                            <p className="font-medium">In-Store Returns:</p>
                            <p className="ml-4">For faster service, you may return your item to our physical store location.</p>
                        </li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-500 mb-3">Contact Us</h2>
                    <p className="text-gray-500">If you have any questions, please contact us at:</p>
                    <div className="mt-2 text-gray-500">
                        <p><b>Art & Custom Frames</b></p>
                        <p>8221 E. Evans Rd., Suite C</p>
                        <p>Scottsdale, AZ 85260</p>
                        <p>Email: <a href="mailto:info@artandcustomframes.com" className="text-blue-400 hover:underline">info@artandcustomframes.com</a></p>
                        <p>Phone: <a href="tel:+14802687182" className="text-blue-400 hover:underline">(480) 268-7182</a></p>
                    </div>
                </section>
            </div>
        </div>
    );
};