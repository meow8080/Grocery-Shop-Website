import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

// REAL SHOP PRODUCTS (PER KG)
const productsData = {
  rice: [
    { id: 1, name: "Sona Shakti Rice (26 kg bag)", price: 1650 },
    { id: 2, name: "Sona Shakti Rice (10 kg bag)", price: 720 },
    { id: 3, name: "Arham BPT Rice (26 kg bag)", price: 1260 },
    { id: 4, name: "Ridhi Sidhi Rice", price: 85 },
    { id: 5, name: "India Gate Basmati Rice", price: 135 },
    { id: 6, name: "KRT Rice", price: 45 },
    { id: 7, name: "Swastik Rice", price: 40 },
    { id: 8, name: "Aram Boiled Rice", price: 55 },
    { id: 9, name: "Joha Rice", price: 175 },
    { id: 10, name: "Loose Rice", price: 65 },
    { id: 11, name: "BPT Loose Rice", price: 55 },
  ],

  dal: [
    { id: 12, name: "Moong Dal (Non Polished)", price: 120 },
    { id: 13, name: "Masur Dal (Medium)", price: 100 },
    { id: 14, name: "Chana Dal", price: 80 },
    { id: 15, name: "Toor (Arhar) Dal", price: 110 },
    { id: 16, name: "Urad Dal", price: 100 },
    { id: 17, name: "Mix Dal", price: 160 },
  ],

  grains: [
    { id: 18, name: "Peanuts (Moongfali)", price: 0 },
    { id: 19, name: "Desi Chana", price: 0 },
    { id: 20, name: "Gota Moong", price: 0 },
    { id: 21, name: "Kabuli Chana (Medium)", price: 0 },
    { id: 22, name: "Kabuli Chana (Big)", price: 0 },
    { id: 23, name: "White Peas", price: 0 },
    { id: 24, name: "Yellow Mustard", price: 0 },
  ],
};

function Products() {
  const { category } = useParams();
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");

  const products = productsData[category] || [];

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="px-4 md:px-10 py-6">
        <h1 className="text-2xl font-bold mb-4 capitalize">
          {category}
        </h1>

        <input
          type="text"
          placeholder="Search items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {filteredProducts.length === 0 ? (
          <p className="text-gray-500 mt-6">
            No products found.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-4 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <h2 className="font-semibold text-sm">
                    {item.name}
                  </h2>

                  <p className="text-gray-700 mt-1">
                    {item.price > 0
                      ? `₹${item.price} / kg`
                      : "Price on request"}
                  </p>
                </div>

                {item.price > 0 && (
                  <button
                    onClick={() => addToCart(item)}
                    className="mt-3 bg-indigo-600 text-white py-2 rounded-lg text-sm hover:bg-indigo-700"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Products;