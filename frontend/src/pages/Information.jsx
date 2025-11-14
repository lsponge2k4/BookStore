// src/pages/Information.jsx
import Footer from '../components/Footer';

export default function Information() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* About Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Book Store</h1>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            For over <strong>25 years</strong>,Book Store has been a cornerstone of the literary community, providing carefully curated books that inspire love, expand knowledge, and preserve history.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Our passion for books drives everything we do — from hand-selecting each title in our collection to providing personalized recommendations for every reader who walks through our doors.
                        </p>
                        <a
                            href="/location"
                            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
                        >
                            Visit Our Stores
                        </a>
                    </div>
                    <div>
                        <img
                            src="/lovebook.webp"
                            alt="IYM Book Store Interior"
                            className="w-full h-full object-cover rounded-xl shadow-xl"
                        />
                    </div>
                </div>

                {/* Mission */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        To foster a love of reading by providing access to exceptional books that educate, inspire, and entertain. We believe in the transformative power of literature to connect people, broaden perspectives, and enrich lives.
                    </p>
                </div>

                {/* Specialty Collections */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Specialty Collections</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Romance */}
                        <div className="bg-white p-8 rounded-xl shadow text-center">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">Heart</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Love & Romance</h3>
                            <p className="text-gray-600 text-sm">
                                From classic love stories to contemporary romance novels, discover books that celebrate the many faces of love and human connection.
                            </p>
                        </div>

                        {/* Learning */}
                        <div className="bg-white p-8 rounded-xl shadow text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">Book</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Knowledge & Learning</h3>
                            <p className="text-gray-600 text-sm">
                                Expand your mind with our collection of educational books, self-help guides, and thought-provoking reads for lifelong personal growth.
                            </p>
                        </div>

                        {/* Heritage */}
                        <div className="bg-white p-8 rounded-xl shadow text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">History</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">History & Heritage</h3>
                            <p className="text-gray-600 text-sm">
                                Journey through time with our carefully selected historical accounts, biographies, and cultural narratives that preserve and share our collective past.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Services */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-xl">Truck</span>
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Free Shipping</h4>
                            <p className="text-sm text-gray-600">Enjoy free shipping on all orders over $50. We deliver nationwide with tracking information provided.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-xl">Return</span>
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Easy Returns</h4>
                            <p className="text-sm text-gray-600">Not satisfied? Return any book within 30 days for a full refund. No questions asked.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-xl">Star</span>
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Personal Recommendations</h4>
                            <p className="text-sm text-gray-600">Our knowledgeable staff provides personalized book recommendations based on your reading preferences.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-xl">Calendar</span>
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Book Club Events</h4>
                            <p className="text-sm text-gray-600">Join our monthly book club meetings and author events at any of our store locations.</p>
                        </div>
                    </div>
                </div>

                {/* Get In Touch */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Have questions about our books or services? We'd love to hear from you!
                    </p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="mailto:info@iymbookstore.com"
                            className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
                        >
                            Contact Us
                        </a>
                        <a
                            href="/location"
                            className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition"
                        >
                            Visit Our Stores
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}