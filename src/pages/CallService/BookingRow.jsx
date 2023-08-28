const BookingRow = ({ booking, handleDelete }) => {
  const { _id, description, status } = booking;

  return (
    <tr>
      <th>
        {status === "pending" ? (
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        ) : (
          ""
        )}
      </th>
      <td>{description}</td>
      <td className={status == "confirm" ? "text-green-500" : "text-blue-600"}>
        {status}
      </td>
    </tr>
  );
};

export default BookingRow;
