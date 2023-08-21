import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9000/payment-history/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  console.log(data);

  return (
    <div className="container mx-auto mt-32">
      <div className="overflow-x-auto my-12">
        <table className="table border">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={item._id} className="shadow">
                <td>{i + 1}</td>
                <td>{item.date}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
