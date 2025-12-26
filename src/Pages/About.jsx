import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="px-4 md:px-10 py-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          About Annapurna Bhandar
        </h1>

        <p className="text-gray-700 leading-relaxed mb-4">
          Welcome to <strong>Annapurna Bhandar</strong> — your trusted
          neighborhood grocery shop. We believe that good food starts
          with good quality ingredients, and that’s exactly what we
          provide to our customers every day.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Our shop has been serving the local community with honesty,
          fair pricing, and quality products. From premium rice varieties
          to fresh dals, grains, and daily essentials — we carefully
          select every item so that your family gets the best.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>“Sasta, Achha aur Bharosemand”</strong> — this is the
          principle we follow. Whether you visit our shop or place an
          order online, we ensure the same quality and care every time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="border rounded-lg p-4 text-center shadow-sm">
            <span className="text-3xl">🌾</span>
            <h3 className="font-semibold mt-2">Quality Products</h3>
            <p className="text-sm text-gray-600 mt-1">
              Carefully selected rice, dal, and grains you can trust.
            </p>
          </div>

          <div className="border rounded-lg p-4 text-center shadow-sm">
            <span className="text-3xl">🤝</span>
            <h3 className="font-semibold mt-2">Trusted by Locals</h3>
            <p className="text-sm text-gray-600 mt-1">
              Serving families with honesty and transparency.
            </p>
          </div>

          <div className="border rounded-lg p-4 text-center shadow-sm">
            <span className="text-3xl">📦</span>
            <h3 className="font-semibold mt-2">Easy Ordering</h3>
            <p className="text-sm text-gray-600 mt-1">
              Order easily via WhatsApp and get quick response.
            </p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          We are constantly improving our services to make grocery
          shopping easier for you. Your support and trust motivate us
          to serve you better every day.
        </p>

        <p className="text-gray-700 font-semibold text-center">
          Thank you for choosing Annapurna Bhandar 🙏
        </p>
      </div>

      <Footer />
    </>
  );
}

export default About;