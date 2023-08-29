import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";

const AppointmentForm = () => {
  const { user } = useContext(AuthContext);
  const userName = user?.email.split("@")[0];
  const [name, setName] = useState(userName);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState(user?.email);
  const [date, setDate] = useState("");
  const [data, setData] = useState({});
  const id = localStorage.getItem("id");

  useEffect(() => {
    fetch(`http://localhost:9000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data[0]));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const appointment = {
      name,
      phone,
      email,
      date,
      ...data,
    };
    // console.log(appointment);

    fetch("http://localhost:9000/appointment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => {
        if (res.status === 201) {
          alert("Appointment Booked Successfully");
          setPhone("");
          setDate("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mt-28">
      <h2 className="text-center text-4xl font-bold  my-8">
        Appointment for Service
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
            htmlFor="date"
          >
            Date
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
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

export default AppointmentForm;
