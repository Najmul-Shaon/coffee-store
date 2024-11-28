import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, qty, supplier, taste, category, photo, details } = coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const qty = form.qty.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const details = form.details.value;
    const updatedCoffee = {
      name,
      qty,
      supplier,
      taste,
      category,
      photo,
      details,
    };
    console.log(updatedCoffee);

    //   send data to the server

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Coffee Updated",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <h1>Update Coffee: {name}</h1>
      <form onSubmit={handleUpdateCoffee}>
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
                defaultValue={name}
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
                defaultValue={qty}
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
                defaultValue={supplier}
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
                defaultValue={taste}
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
                defaultValue={category}
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
                defaultValue={photo}
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
                defaultValue={details}
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Update Coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default UpdateCoffee;
