import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const SIgnIn = () => {
  const { signInUser } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
   
    signInUser(email, pass)
      .then((res) => {
       

        //   last login
        const lastSignTIme = res?.user?.metadata?.lastSignInTime;
        const updatedLoginInfo = {
          email,
          lastSignTIme,
        };
        fetch(`http://localhost:5000/users`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedLoginInfo),
        })
          .then((res) => res.json())
          .then((data) => {
     
          });
      })
      .catch((er) => {
       const code = er.code
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SIgnIn;
