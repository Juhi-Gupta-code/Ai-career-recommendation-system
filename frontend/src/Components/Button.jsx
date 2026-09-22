function Button({ children, type = "button" }) {
  return (
    <button
      type={type}
      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
    >
      {children}
    </button>
  );
}

export default Button;