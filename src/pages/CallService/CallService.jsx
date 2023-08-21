import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";

const CallService = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [vehicle, setVehicle] = useState("bike");
  const [description, setDescription] = useState("");
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const appointment = {
      name,
      phone,
      email,
      address,
      vehicle,
      description,
    };
    // console.log(appointment);

    fetch("http://localhost:9000/my-service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => {
        if (res.status === 201) {
          alert("Appointment Booked Successfully");
          setName();
          setPhone("");
          setEmail("");
          setAddress("");
          setDescription("");
          setVehicle("bike");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mt-28">
      <h2 className="text-center text-4xl font-bold  my-8">
        Book For Home Service
      </h2>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Vehicle Type
          </label>
          <div className="flex">
            <label className="mr-4">
              <input
                type="radio"
                value="bike"
                checked={vehicle === "bike"}
                onChange={() => setVehicle("bike")}
                className="mr-2"
              />
              Bike
            </label>
            <label>
              <input
                type="radio"
                value="car"
                checked={vehicle === "car"}
                onChange={() => setVehicle("car")}
                className="mr-2"
              />
              Car
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">
            Problem Description
          </label>{" "}
          <br />
          <textarea
            className="border w-full pl-2"
            name="description"
            id=""
            cols=""
            rows="5"
            placeholder="Describe your problem"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-8"
            type="submit"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default CallService;
