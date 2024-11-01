import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubscribed(true);
    setEmail("");
    setError("");
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div
      className="newsletter text-black mx-auto flex flex-col justify-center gap-4 items-center bg-[#fceade] bg-cover bg-no-repeat w-full max-w-3xl h-auto p-10 rounded-2xl shadow-lg mt-20 relative z-10"
      style={{ backgroundImage: 'url(bg-shadow.png)', marginBottom: '-150px' }}
    >
      <h2 className="text-4xl font-extrabold mb-4 text-gray-800">Subscribe to our Newsletter</h2>
      <p className="text-xl font-medium mb-6 text-gray-700">Get the latest updates and news right in your inbox!</p>
      {subscribed ? (
        <p className="text-lg font-semibold text-green-600">Thanks for subscribing! We'll keep you updated.</p>
      ) : (
        <div className="flex flex-col items-center w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            aria-label="Email address"
            className="rounded-lg shadow-md w-72 border p-3 mb-3 text-gray-700 outline-none"
          />
          <button
            className="border py-2 px-6 rounded-lg shadow-md text-white bg-teal-950 transition duration-300"
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default Newsletter;