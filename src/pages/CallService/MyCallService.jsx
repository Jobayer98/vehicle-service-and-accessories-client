import { useContext, useEffect, useState } from "react";
import BookingRow from "./BookingRow";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

const MyCallService = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:9000/my-service?${user?.email}`;
  useEffect(() => {
    const getBookings = async () => {
      const res = await axios.get(url);
      if (res.data) {
        setBookings(res.data);
      }
    };
    getBookings();
  }, [url]);
  console.log(bookings);

  const handleDelete = (id) => {
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:9000/my-service/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleBookingConfirm = (id) => {
    fetch(`https://car-doctor-server-smoky.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };

  return (
    <div className="container mx-auto mt-20 ml-5">
      {bookings.length > 0 ? (
        <>
          <h2 className="text-5xl">Your service: {bookings.length}</h2>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Actions</th>
                  <th>Description</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <BookingRow
                    key={booking._id}
                    booking={booking}
                    handleDelete={handleDelete}
                    handleBookingConfirm={handleBookingConfirm}
                  ></BookingRow>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p className="text-3xl text-center mt-32">You have no service</p>
      )}
    </div>
  );
};

export default MyCallService;
