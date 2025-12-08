// src/pages/Location.jsx
import Footer from '../components/Footer';

export default function Location() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">Our Store Locations</h1>
                    <p className="text-gray-600">Visit us at any of our convenient locations across the city</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Downtown Branch */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <img
                            src="/phuongnambook.jpg"
                            alt="Downtown Branch"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Downtown Branch</h3>
                            <div className="space-y-2 text-gray-600 text-sm">
                                <p className="flex items-center gap-2">
                                    123 Main Street, Downtown, City 12345
                                </p>
                                <p className="flex items-center gap-2">
                                    (555) 123-4567
                                </p>
                                <p className="flex items-center gap-2">
                                    downtown@iymbookstore.com
                                </p>
                                <div className="mt-3 pt-3 border-t">
                                    <p className="font-medium">Hours:</p>
                                    <p>Mon-Fri: 9:00 AM - 8:00 PM</p>
                                    <p>Saturday: 10:00 AM - 6:00 PM</p>
                                    <p>Sunday: 12:00 PM - 5:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* University Campus */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <img
                            src="/nhanamstore.webp"
                            alt="University Campus"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">University Campus</h3>
                            <div className="space-y-2 text-gray-600 text-sm">
                                <p className="flex items-center gap-2">
                                    456 College Ave, University District, City 12346
                                </p>
                                <p className="flex items-center gap-2">
                                    (555) 234-5678
                                </p>
                                <p className="flex items-center gap-2">
                                    campus@iymbookstore.com
                                </p>
                                <div className="mt-3 pt-3 border-t">
                                    <p className="font-medium">Hours:</p>
                                    <p>Mon-Fri: 8:00 AM - 9:00 PM</p>
                                    <p>Saturday: 11:00 AM - 7:00 PM</p>
                                    <p>Sunday: 11:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shopping Mall */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <img
                            src="/tanviet.webp"
                            alt="Shopping Mall"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Shopping Mall</h3>
                            <div className="space-y-2 text-gray-600 text-sm">
                                <p className="flex items-center gap-2">
                                    789 Mall Boulevard, Westside, City 12347
                                </p>
                                <p className="flex items-center gap-2">
                                    (555) 345-6789
                                </p>
                                <p className="flex items-center gap-2">
                                    mall@iymbookstore.com
                                </p>
                                <div className="mt-3 pt-3 border-t">
                                    <p className="font-medium">Hours:</p>
                                    <p>Mon-Fri: 10:00 AM - 9:00 PM</p>
                                    <p>Saturday: 10:00 AM - 7:00 PM</p>
                                    <p>Sunday: 11:00 AM - 7:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Need Directions */}
                <div className="bg-gray-50 rounded-2xl p-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Need Directions?</h2>
                    <p className="text-gray-600 mb-6">
                        Can't find us? Give us a call or send us an email and we'll help you get here!
                    </p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="tel:+15551234567"
                            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
                        >
                            Call Us
                        </a>
                        <a
                            href="mailto:info@iymbookstore.com"
                            className="inline-flex items-center gap-2 border border-gray-900 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                        >
                            Email Us
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}