import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9000/payment-history`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  return (
    <div className="max-w-2xl mx-auto mt-32">
      <div className="overflow-x-auto my-12">
        <table className="table border">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Transaction ID</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={item._id} className="shadow">
                <td>{i + 1}</td>
                <td>{item.transactionId}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
