const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl m-4">Contact Us</h1>
      <input
        className="p-2 m-2 border border-black rounded-lg"
        placeholder="name"
      />
      <input
        className="p-2 m-2 border border-black rounded-lg"
        placeholder="message"
      />
      <button className="p-2 m-2  bg-gray-100 rounded-lg">Submit</button>
    </div>
  );
};

export default Contact;
