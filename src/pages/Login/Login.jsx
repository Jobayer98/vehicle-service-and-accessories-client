import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { useForm } from "react-hook-form";

const Login = () => {
  const [error, setError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { login, loginWithGoogle, loginWithFacebook } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    login(data.email, data.password)
      .then((res) => {
        setError(false);
        console.log(res);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(true);
      });
  };

  // // login with google account
  // const handleLoginGoogle = () => {
  //   loginWithGoogle()
  //     .then((res) => {
  //       setError(false);
  //       if (res?.user) {
  //         notify();

  //         const user = {
  //           name: res.user.displayName,
  //           email: res.user.email,
  //         };
  //         saveUser(user);
  //         navigate(from, { replace: true });
  //       }
  //     })
  //     .catch(() => {
  //       setError(true);
  //     });
  // };

  // // login with facebook account

  // const handLoginFacebook = () => {
  //   loginWithFacebook()

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row">
        <div className="w-1/2 mr-12 block">
          {<img className="hidden md:block" src={img} alt="img" />}
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  className="bg-orange-700 text-white p-2 rounded font-medium cursor-pointer"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="my-4 text-center">
              New to Car Doctors{" "}
              <Link className="text-orange-600 font-bold" to="/signup">
                Sign Up
              </Link>{" "}
            </p>
            {/* <SocialLogin></SocialLogin> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
