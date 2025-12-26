import { Link } from "react-router-dom";

const categories = [
  {
    name: "Rice",
    slug: "rice",
    icon: "🍚",
    color: "bg-yellow-100",
  },
  {
    name: "Dal & Pulses",
    slug: "dal",
    icon: "🫘",
    color: "bg-orange-100",
  },
  {
    name: "Grains & Others",
    slug: "grains",
    icon: "🌾",
    color: "bg-amber-100",
  },
];

function Categories() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          to={`/products/${cat.slug}`}
          className={`${cat.color} rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition`}
        >
          <span className="text-3xl mb-2">{cat.icon}</span>
          <span className="font-semibold text-gray-800">
            {cat.name}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default Categories;