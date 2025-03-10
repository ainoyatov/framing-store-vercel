import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Company privacy policy, company policy, store policy, store privacy policy',
    robots: {
      follow: true,
      index: true
    }
}


export default function Privacypolicy() {

    return (
        <div className="m-2 md:m-16 dark:text-gray-400">
            <div className="text-xl font-bold m-8">Privacy Policy</div>
            <div className="m-8 font-light">Last Updated: 1/1/2024</div>

            <div className="m-8">
                <div className="mb-4">
                    Welcome to <b>Art & Custom Frames </b> ("we," "us," "our"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [artandcustomframes.com], use our services, or purchase our products. Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.
                </div>

                <div className="mt-8 mb-4">
                    1. Information We Collect
                </div>

                <div className="mb-4">
                    We may collect information about you in a variety of ways. The information we may collect on the site includes: 
                </div>

                <div>
                    **Personal Data**
                </div>
                <div className="mb-4">
                    Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the site or when you choose to participate in various activities related to the site, such as online chat and message boards.
                </div>

                <div>
                    **Derivative Data**
                </div>
                <div className="mb-4">
                    Information our servers automatically collect when you access the site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the site.
                </div>

                <div>
                    **Financial Data**
                </div>
                <div className="mb-4">
                    Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the site. We store only very limited, if any, financial information that we collect.
                </div>
                <div>
                    **Data From Social Networks** 
                </div>
                <div className="mb-4">
                    User information from social networking sites, such as Facebook, Google+, Instagram, including your name, your social network username, location, gender, birth date, email address, profile picture, and public data for contacts, if you connect your account to such social networks.
                </div>

                <div className="mb-4 mt-8">
                    2. Use of Your Information
                </div>

                <div>
                    Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:
                </div>
                
                <ul className="mx-10 list-disc my-4">
                    <li>Create and manage your account.</li>
                    <li>Process your transactions and send you related information, including purchase confirmations and invoices.</li>
                    <li>Manage and fulfill your orders.</li>
                    <li>Provide you with customer support.</li>
                    <li>Send you promotional information, such as newsletters.</li>
                    <li>Respond to your comments, questions, and requests.</li>
                    <li>Improve our website and services.</li>
                    <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
                </ul>

                <div className="mb-4 mt-8">
                    3. Disclosure of Your Information
                </div>
                <div className="mb-4">
                    We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                </div>
                <div className="mb-4">
                    **By Law or to Protect Rights**  
                </div>
                <div className="mb-4">
                    If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
                </div>
                <div className="mb-4">
                    **Business Transfers**  
                </div>
                <div className="mb-4">
                    We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                </div>
                <div className="mb-4">
                    **Third-Party Service Providers**  
                </div>
                <div>
                    We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
                </div>
                <div className="mb-4">
                    **Marketing Communications**
                </div>
                <div className="mb-4">
                    With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.
                </div>
                <div className="mb-4">
                    **Affiliates**
                </div>
                <div className="mb-4">
                    We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.
                </div>
                <div className="mb-4">
                    **Business Partners**
                </div>
                <div className="mb-4">
                    We may share your information with our business partners to offer you certain products, services, or promotions.
                </div>
                <div className="mb-4 mt-8">
                    4. Security of Your Information
                </div>
                <div className="mb-4">
                    We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </div>
                <div className="my-4">
                    5. Policy for Children
                </div>
                <div className="my-4">
                    We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible. If you believe we might have any information from or about a child under 13, please contact us at [Your Contact Information].
                </div>
                <div className="my-4">
                    6. Controls for Do-Not-Track Features
                </div>
                <div className="my-4">
                    Most web browsers and some mobile operating systems include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Policy.
                </div>
                <div className="my-4">
                    7. Options Regarding Your Information
                </div>
                <div className="my-4">
                    You may review, change, or terminate your account at any time. Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use, and/or comply with legal requirements.
                </div>
                <div className="my-4">
                    8. Contact Us
                </div>
                <div className="my-4">
                    If you have questions or comments about this Privacy Policy, please contact us at:
                </div>
                <div className="">Art & Custom Frames</div>
                <div className="">8221 E. Evans Rd., Suite C</div>
                <div className="">Scottsdale, AZ 85260</div>
                <div className="">info@artandcustomframes.com</div>
                <div className="">(480) 268-7182</div>
            </div>

        </div>
    )
}