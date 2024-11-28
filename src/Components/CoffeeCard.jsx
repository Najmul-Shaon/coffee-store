import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, qty, supplier, taste, category, photo, details } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("delete confirm");
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl border-2 container mx-auto my-6">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
      <div className="join join-vertical">
        <button className="btn join-item">View</button>
        <button className="btn join-item">Edit</button>
        <button onClick={() => handleDelete(_id)} className="btn join-item">
          Delete
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
