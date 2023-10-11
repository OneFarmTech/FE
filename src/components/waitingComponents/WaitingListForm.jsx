const WaitingListForm = () => {
  return (
    <form action="#" className="flex flex-col items-center gap-5">
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-2 lg:justify-between items-center w-full max-w-7xl">
        <div className="flex flex-col gap-4 w-full ">
          <label htmlFor="name" className="font-bold">Name</label>
          <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3 w-full max-w-lg" type="name" id="name" name="name" placeholder="Enter Your Full Name" />
        </div>

        <div className="flex flex-col gap-4 w-full ">
          <label htmlFor="email" className="font-bold">Email</label>
          <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3 w-full max-w-lg" type="email" id="email" name="email" placeholder="Enter Your Email" />
        </div>

        <div className="flex flex-col gap-4 w-full ">
          <label htmlFor="phone" className="font-bold">Your Phone Number</label>
          <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3 w-full max-w-lg" type="phone" id="phone" name="phone" placeholder="Enter Your Phone Number" />
        </div>
      </div>

      <button className="text-white px-20 bg-green-30 py-3" type="submit">Submit</button>
    </form>
  )
};

export default WaitingListForm;
