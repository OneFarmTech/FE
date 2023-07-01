import Button from "../components/Button";

const Signup = () => (
  <form className="flex flex-col items w-[80%] max-w-3xl gap-5 my-4 mx-auto">
    <input className="inline-block w-[100%] h-10 pl-3 border border-slate" type="text" placeholder="Full name" />
    <input className="inline-block w-[100%] h-10 pl-3 border border-slate" type="email" placeholder="Email address" />
    <input className="inline-block w-[100%] h-10 pl-3 border border-slate" type="password" name="password" id="password" placeholder="Enter password" />

    <Button name="Sign Up" type="submit" />
  </form>
);

export default Signup;
