import { Link } from "react-router-dom";
import logo from "../components/Logo.jpeg"

function Hero() {
  return (
    <section className="text-center py-16 px-6 bg-slate-50">
        <div className="flex flex-col items-center gap-12 py-7">
            <img src={logo} alt="Shop Logo"   className="w-36 h-36 rounded-full object-cover shadow-lg"/>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Fresh Groceries Delivered Near You
            </h2>

            <p className="text-gray-600 mb-6">
                Daily essentials, fresh vegetables & trusted local service
            </p>
        </div>

        <Link
            to="/options"
            className="inline-block bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600"
        >
            View Options
        </Link>
    </section>
  );
}

export default Hero;