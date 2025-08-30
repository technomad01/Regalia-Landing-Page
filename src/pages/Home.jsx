import { Link } from "react-router-dom";
import { useRef } from "react";
import backgroundImage from "../assets/bg.jpg"
import card1 from "../assets/p1.jpg"
import card2 from "../assets/p2.jpg"
import card3 from "../assets/p3.jpg"
import card4 from "../assets/p4.jpg"
import card5 from "../assets/p5.jpg"
import card6 from "../assets/p6.jpg"
import card7 from "../assets/p7.jpg"


export default function Home() {
    const scrollContainer = useRef(null)
    const scrollLeft = () => {
        scrollContainer.current.scrollBy({ left: -300, behavior: "smooth" })
    }
    const scrollRight = () => {
        scrollContainer.current.scrollBy({ left: 300, behavior: "smooth" })
    }
    return (

        <div>
            <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c)' }}>
                <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Find Your Dream Home</h1>
                        <p className="text-xl text-white mb-6">Luxury properties tailored for you</p>
                        <form className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
                            <input type="text" placeholder="Name" className="w-full p-2 mb-3 border rounded" />
                            <input type="email" placeholder="Email" className="w-full p-2 mb-3 border rounded" />
                            <input type="text" placeholder="Interested In" className="w-full p-2 mb-4 border rounded" />
                            <button className="w-full bg-zinc-800 text-white py-2 rounded hover:bg-gray-700">Request Info</button>
                        </form>
                    </div>
                </div>
            </div>

            <section className="py-12 px-6 bg-gray-100 relative">
                <h2 className="text-3xl font-semibold text-center mb-8">Featured Listings</h2>
                <button
                    onClick={scrollLeft} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-200"
                >  &#8592;
                </button>

                <div
                    ref={scrollContainer}
                    className="flex space-x-6 overflow-x-auto">
                    {[
                        {
                            img: card1,
                            price: '$5,500,000',
                            location: 'Far Hills, NJ'
                        },
                        {
                            img: card3,
                            price: '$6,900,000',
                            location: 'Miami Beach, FL'
                        },
                        {
                            img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
                            price: '$4,500,000',
                            location: 'Aspen, CO'
                        },
                        {
                            img: backgroundImage,
                            price: '$3,500,000',
                            location: 'Beverly Hills, CA'
                        },
                        {
                            img: card2,
                            price: '$990,000',
                            location: 'Paradise Valley, AZ'
                        },
                        {
                            img: card4,
                            price: '$4,500,000',
                            location: 'Santa Barbara, CA'
                        },
                        {
                            img: card5,
                            price: '$3,500,000',
                            location: 'Laguna Beach, CA'
                        },
                        {
                            img: card6,
                            price: '$20,000,000',
                            location: 'Tahoe City, CA'
                        },
                        {
                            img: card7,
                            price: '$25,000,000',
                            location: 'Tuscany, Italy'
                        }
                    ].map((property, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden flex-none w-64">
                            <img src={property.img} alt="Property" className="h-64 w-full object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold">{property.price}</h3>
                                <p className="text-gray-600">{property.location}</p>
                                <Link to="/properties" className="mt-4 inline-block text-blue-600 hover:underline">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={scrollRight}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-200"
                >
                    &#8594;
                </button>
            </section>

            <section className="py-12 px-6 text-center">
                <h2 className="text-3xl font-semibold mb-8">Why Choose Us</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-2">Trusted Agents</h3>
                        <p className="text-gray-600">Experienced professionals who care about your goals.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Premium Listings</h3>
                        <p className="text-gray-600">Exclusive access to high-end properties.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                        <p className="text-gray-600">Always here to answer your questions.</p>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 text-white py-6 text-center">
                <p>© 2025 Regalia International Realty All rights reserved.</p>
                <div className="mt-4 space-x-4">
                    <a href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer" className="hover:underline">Facebook</a>
                    <a href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer" className="hover:underline">Instagram</a>
                    <a href="/Contact"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline">Contact</a>
                </div>
            </footer>
        </div>
    );
}

