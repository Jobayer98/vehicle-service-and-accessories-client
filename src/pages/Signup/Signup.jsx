import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";

const SignUp = () => {
  const [error, setError] = useState(false);
  const { createUser } = useContext(AuthContext);
  // navigate to home
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const from = location.state?.form?.pathname || "/";

  const onSubmit = (data) => {
    createUser(data?.email, data?.password)
      .then((res) => {
        console.log(res);
        res.displayName = data.name;
        navigate(from, { replace: true });
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="bg-orange-700 text-white p-2 rounded font-medium cursor-pointer"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              Already Have an Account?{" "}
              <Link className="text-orange-600 font-bold" to="/login">
                Login
              </Link>{" "}
            </p>
            {/* <SocialLogin></SocialLogin> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
