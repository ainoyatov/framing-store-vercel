
import React from 'react'

const ReturnPage = () => {
    
  return (
    <div className="p-6 text-gray-800">
        <div className="mb-6">
            <h1 className="text-2xl font-bold text-center text-gray-900">
            Return Policy for Framing Shop
            </h1>
            <p className="text-center text-sm text-gray-600">
            At <span className='text-bold text-black'>Art & Custom Frames</span>, we are committed to ensuring you are satisfied with your purchase. Please review our return policy for framing services and products below:
            </p>
        </div>

        <div className="space-y-8">
                <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Custom Framing Services</h2>
                <ol className="list-decimal list-inside space-y-4">
                    <li>
                    <h3 className="font-medium">Non-Refundable Items:</h3>
                    <p className="text-gray-700 ml-4">
                        Custom framing orders are tailored specifically to your artwork or items and are therefore non-refundable. This includes:
                    </p>
                    <ul className="list-disc list-inside ml-8 text-gray-600 space-y-1">
                        <li>Frames made to custom sizes.</li>
                        <li>Matting, glass, and other framing materials selected specifically for your order.</li>
                        <li>Any labor or assembly services performed.</li>
                    </ul>
                    </li>
                    <li>
                    <h3 className="font-medium">Damaged or Defective Items:</h3>
                    <p className="text-gray-700 ml-4">
                        If your custom frame arrives damaged or defective:
                    </p>
                    <ul className="list-disc list-inside ml-8 text-gray-600 space-y-1">
                        <li>Notify us within <strong>7 days</strong> of receiving the item.</li>
                        <li>Provide photos of the damage or defect for verification.</li>
                        <li>We will repair or replace the frame at no additional cost.</li>
                    </ul>
                    </li>
                </ol>
            </div>

            <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Ready-Made Frames and Accessories</h2>
            <ol className="list-decimal list-inside space-y-4">
                <li>
                <h3 className="font-medium">Eligibility for Returns:</h3>
                <p className="text-gray-700 ml-4">
                    Ready-made frames and accessories (e.g., hooks, cleaning kits) may be returned if:
                </p>
                <ul className="list-disc list-inside ml-8 text-gray-600 space-y-1">
                    <li>They are in <strong>new and unused condition</strong>.</li>
                    <li>The return request is made within <strong>30 days</strong> of purchase.</li>
                </ul>
                </li>
                <li>
                <h3 className="font-medium">Refund Process:</h3>
                <ul className="list-disc list-inside ml-8 text-gray-600 space-y-1">
                    <li>Returns with a valid receipt will be refunded to the original payment method.</li>
                    <li>Shipping costs are non-refundable unless the item was damaged or defective.</li>
                </ul>
                </li>
            </ol>
            </div>

            <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">General Guidelines</h2>
            <ol className="list-decimal list-inside space-y-4">
                <li>
                <h3 className="font-medium">Proof of Purchase:</h3>
                <p className="text-gray-700 ml-4">
                    A receipt or order confirmation is required for all returns, exchanges, or repairs.
                </p>
                </li>
                <li>
                <h3 className="font-medium">Return Shipping:</h3>
                <ul className="list-disc list-inside ml-8 text-gray-600 space-y-1">
                    <li>For online orders, customers are responsible for return shipping costs unless the item is damaged or defective.</li>
                    <li>Use secure packaging to prevent damage during transit, as we cannot accept damaged returns.</li>
                </ul>
                </li>
                <li>
                <h3 className="font-medium">In-Store Returns:</h3>
                <p className="text-gray-700 ml-4">
                    For faster service, bring your return or concern to our physical store location if applicable.
                </p>
                </li>
            </ol>
            </div>

            <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700">
                If you have any questions or concerns, please contact us at:
            </p>
            <ul className="mt-2 space-y-1 text-gray-600">
                <li>Email: <a href="mailto:info@artandcustomframes.com" className="text-blue-600 underline">info@artandcustomframes.com</a></li>
                <li>Phone: <a href="tel:(480)268-7182" className="text-blue-600 underline">(480) 268-7182</a></li>
            </ul>
            </div>
        </div>

        <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
            We value your business and will work to ensure you are happy with your framing experience!
            </p>
        </div>
    </div>
  )
}

export default ReturnPage