import React from "react";

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="container mx-auto p-4 font-robotoMono">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: February 12, 2025</p>

            <p className="mt-4">
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
                information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>

            <p className="mt-2">
                We use Your Personal data to provide and improve the Service. By using the Service, You agree to the
                collection and use of information in accordance with this Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Interpretation and Definitions</h2>
            <h3 className="text-xl font-semibold mt-4">Interpretation</h3>
            <p className="mt-2">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The
                following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>

            <h3 className="text-xl font-semibold mt-4">Definitions</h3>
            <p className="mt-2">For the purposes of this Privacy Policy:</p>
            <ul className="list-disc pl-6 mt-2">
                <li><strong>Account</strong> means a unique account created for You to access our Service.</li>
                <li><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party.</li>
                <li><strong>Company</strong> ("We", "Us", "Our") refers to Endlesspedia.</li>
                <li><strong>Cookies</strong> are small files that store browsing history.</li>
                <li><strong>Country</strong> refers to: Poland.</li>
                <li><strong>Device</strong> means any device that can access the Service.</li>
                <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                <li><strong>Service</strong> refers to the Website.</li>
                <li><strong>Website</strong> refers to Endlesspedia, accessible from <a href="https://endlesspedia.netlify.app" className="text-blue-500">here</a>.</li>
                <li><strong>You</strong> means the individual accessing or using the Service.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6">Collecting and Using Your Personal Data</h2>
            <h3 className="text-xl font-semibold mt-4">Types of Data Collected</h3>
            <h4 className="text-lg font-semibold mt-2">Personal Data</h4>
            <p className="mt-2">
                While using Our Service, We may ask You to provide certain personally identifiable information that can be used to contact or identify You.
            </p>

            <h4 className="text-lg font-semibold mt-2">Usage Data</h4>
            <p className="mt-2">
                Usage Data is collected automatically when using the Service, such as IP address, browser type, device information, and time spent on pages.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Tracking Technologies and Cookies</h2>
            <p className="mt-2">
                We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Use of Your Personal Data</h2>
            <ul className="list-disc pl-6 mt-2">
                <li>To provide and maintain our Service.</li>
                <li>To manage Your Account.</li>
                <li>To contact You with updates and information.</li>
                <li>To provide You with special offers and services.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6">Retention of Your Personal Data</h2>
            <p className="mt-2">
                We will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Children's Privacy</h2>
            <p className="mt-2">
                Our Service does not address anyone under the age of 13. We do not knowingly collect personal data from children under 13.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Changes to this Privacy Policy</h2>
            <p className="mt-2">
                We may update Our Privacy Policy from time to time. Changes are effective when posted on this page.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
            <p className="mt-2">
                If you have any questions, You can contact us by email: <a href="mailto:endlesspedia-help@gmail.com" className="text-blue-500">endlesspedia-help@gmail.com</a>
            </p>
        </div>
    );
};

export default PrivacyPolicy;