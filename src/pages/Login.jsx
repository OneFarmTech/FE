const Login = () => (
  <form className="flex flex-col items w-[80%] max-w-3xl gap-5 my-4 mx-auto">
    <input className="inline-block w-[100%] h-10 pl-3 border border-slate" type="text" placeholder="email" />
    <input className="inline-block w-[100%] h-10 pl-3 border border-slate" type="text" placeholder="password" />
    <button className="inline-block px-8 py-1 rounded-lg bg-green-600 text-white" type="submit">Login</button>
  </form>
);

export default Login;
