import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const qty = form.qty.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const details = form.details.value;
    const newCoffee = { name, qty, supplier, taste, category, photo, details };
    console.log(newCoffee);

    //   send data to the server

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Coffee added",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <h1>Add Coffee</h1>
      <form onSubmit={handleAddCoffee}>
        <div className="flex container mx-auto">
          {/* name  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                id=""
                placeholder="coffee name"
                className="input input-bordered"
              />
            </label>
          </div>
          {/* quantity  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Avialable Qty</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="qty"
                id=""
                placeholder="Qty"
                className="input input-bordered"
              />
            </label>
          </div>

          {/* chef */}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Supplier name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                id=""
                placeholder="Supplier name"
                className="input input-bordered"
              />
            </label>
          </div>

          {/* taste  */}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Tsate</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                id=""
                placeholder="Taste"
                className="input input-bordered"
              />
            </label>
          </div>

          {/* Category  */}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                id=""
                placeholder="Category"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Link</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                id=""
                placeholder="photo link"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                id=""
                placeholder="Details"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddCoffee;
