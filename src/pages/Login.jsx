import Button from "../components/Button";

const Login = () => (
  <form className="flex flex-col items w-[80%] max-w-3xl gap-5 my-4 mx-auto">
    <input className="inline-block w-[100%] h-10 pl-3 border border-slate" type="text" placeholder="email" />
    <input className="inline-block w-[100%] h-10 pl-3 border border-slate" type="text" placeholder="password" />
    <Button type="submit" clas="green" name="Login" />
  </form>
);

export default Login;
