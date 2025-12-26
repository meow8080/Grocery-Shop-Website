import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function OrderSummary() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) return;

    let message = `🛒 *New Grocery Order* \n\n`;

    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Qty: ${item.quantity} kg\n`;
      message += `   Price: ₹${item.price}/kg\n\n`;
    });

    message += `💰 *Total Amount:* ₹${totalAmount}\n\n`;
    message += `📍 *Annapurna Bhandar*`;

    const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
    clearCart();
    navigate("/");
  };

  return (
    <div className="px-4 md:px-10 py-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Order Summary
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">
          Your cart is empty.
        </p>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border rounded-lg p-4"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    ₹{item.price}/kg × {item.quantity} kg
                  </p>
                </div>

                <div className="font-semibold">
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center border-t pt-4 mb-6">
            <span className="text-lg font-bold">Total</span>
            <span className="text-lg font-bold">
              ₹{totalAmount}
            </span>
          </div>

          <button
            onClick={handleWhatsAppOrder}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
          >
            Place Order on WhatsApp
          </button>
        </>
      )}
    </div>
  );
}

export default OrderSummary;
