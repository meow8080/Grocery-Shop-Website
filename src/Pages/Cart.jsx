import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
  } = useCart();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const phoneNumber = "918638069105";

  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) return;

    let message = "Hello, I want to place an order:\n\n";

    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} × ${item.quantity} = ₹${
        item.price * item.quantity
      }\n`;
    });

    message += `\nTotal Amount: ₹${totalAmount}\n\nPlease confirm availability.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");

    setTimeout(() => {
      clearCart();
    }, 500);
  };

  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border p-4 rounded-lg"
                >
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">
                      ₹{item.price} × {item.quantity}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-3 py-1 bg-slate-200 rounded"
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-3 py-1 bg-slate-200 rounded"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 ml-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-right">
              <p className="text-lg font-semibold">
                Total: ₹{totalAmount}
              </p>

              <button
                onClick={handleWhatsAppOrder}
                className="mt-4 w-full bg-emerald-600 text-white py-3 rounded-lg"
              >
                Order on WhatsApp
              </button>

            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Cart;
