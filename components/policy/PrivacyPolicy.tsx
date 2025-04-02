import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Company privacy policy, company policy, store policy, store privacy policy',
    robots: {
      follow: true,
      index: true
    }
};

export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto p-6 md:p-12 dark:text-gray-400">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-500 mb-2">Privacy Policy</h1>
                <p className="text-sm text-gray-500">Last Updated: January 1, 2024</p>
            </div>

            <div className="mt-10 space-y-6">
                <section>
                    <p>
                        Welcome to <b>Art & Custom Frames</b> ("we," "us," "our"). We are committed to protecting your privacy. 
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                        <a href="https://artandcustomframes.com" className="text-blue-400 hover:underline"> [artandcustomframes.com]</a>. 
                        Please read this Privacy Policy carefully. If you do not agree with the terms, please do not access the site.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-500 mb-3">1. Information We Collect</h2>
                    <p>We may collect information about you in various ways, including:</p>
                    <div className="mt-4 space-y-4">
                        <div>
                            <h3 className="font-semibold text-gray-600">Personal Data</h3>
                            <p className="text-gray-500">
                                Includes your name, email, phone number, and shipping address, provided when using our site or participating in activities such as message boards.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-600">Derivative Data</h3>
                            <p className="text-gray-500">
                                Automatically collected information, including IP address, browser type, and pages viewed before accessing our site.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-600">Financial Data</h3>
                            <p className="text-gray-500">
                                Data related to your payment method (credit card details, expiration date) when making a purchase.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-600">Data from Social Networks</h3>
                            <p className="text-gray-500">
                                If you connect via social networks (Facebook, Google, Instagram), we may collect profile data such as username, email, and public information.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-500 mb-3">2. Use of Your Information</h2>
                    <p>We use the collected data to:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-500">
                        <li>Create and manage your account.</li>
                        <li>Process transactions and send purchase confirmations.</li>
                        <li>Provide customer support and fulfill orders.</li>
                        <li>Send promotional content like newsletters.</li>
                        <li>Analyze site trends and improve services.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-500 mb-3">3. Disclosure of Your Information</h2>
                    <p>We may share your data under these circumstances:</p>
                    <div className="mt-4 space-y-4">
                        <div>
                            <h3 className="font-semibold text-gray-600">By Law or to Protect Rights</h3>
                            <p className="text-gray-500">
                                If required by law, or to investigate policy violations.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-600">Business Transfers</h3>
                            <p className="text-gray-500">
                                In case of a merger, acquisition, or asset sale.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-600">Third-Party Service Providers</h3>
                            <p className="text-gray-500">
                                For services such as payment processing, hosting, and email delivery.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-600 mb-3">4. Security of Your Information</h2>
                    <p className="text-gray-500">
                        We use administrative, technical, and physical security measures to protect your personal data. However, no system is 100% secure.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-600 mb-3">5. Policy for Children</h2>
                    <p className="text-gray-500">
                        We do not knowingly collect data from individuals under 13. If you believe we have collected such data, please contact us for removal.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-600 mb-3">6. Contact Us</h2>
                    <p className="text-gray-500">If you have any questions, contact us at:</p>
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
}