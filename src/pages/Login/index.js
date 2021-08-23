import React from "react";
import { LoginBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  return (
    <div className="flex h-full">
      <div className="h-full flex-1">
        <img
          src={LoginBg}
          alt="register-img"
          className="h-full w-full bg-cover"
        />
      </div>
      <div className="bg-gray-50 w-96 h-full">
        <div className="px-8">
          <h2 className="text-2xl my-8 text-center">Login</h2>
          <Input label="Email" type="email" placeholder="Email" />
          <Input label="Password" type="password" placeholder="Password" />
          <Gap height={50} />
          <Button title="Login" onClick={() => history.push("/")} />
          <Gap height={100} />
          <Link
            title="Belum punya akun? Daftar sekarang!"
            onClick={() => history.push("/register")}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
