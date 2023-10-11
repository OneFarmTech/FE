import { useState } from "react";
import { Link } from "react-router-dom";
import image from '../assets/images/dashboard/img.svg'
import ChangePage from "../components/pageChange/SwitchPage";

const Kyc = () => {
  const [ page, setPage ] = useState('page1');
  const [ identity, setIdentity ] = useState('one');

  const identityOne = () => {
    setIdentity('one')
  }

  const identityTwo = () => {
    setIdentity('two')
  }

  const identityTthree = () => {
    setIdentity('three')
  }
 
  const pageTwo = () => {
    setPage('page2')
  }

  const pageOne = () => {
    setPage('page1')
  }

  return (
    <section className="flex flex-col w-[90%] max-w-6xl gap-10 mx-auto">
      <h1 className="text-5xl text-center lg:text-left leading-[3.2rem]">Uplaod KYC</h1>

      <ChangePage page1={page == 'page1'} firstTitle='Personal Details' secTitle='ID Proof' />

      {page == 'page1' && (<form action="#" className="flex flex-col gap-5">
        <h2 className="text-3xl text-center lg:text-left leading-[3.2rem] mb-3">Enter your details</h2>

        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex-1 flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <label htmlFor="name" className="font-bold">Name</label>
              <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3" type="text" id="name" name="name" placeholder="Enter Your Full Name" />
            </div>

            <div className="flex flex-col gap-4">
              <label htmlFor="email" className="font-bold">Email</label>
              <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3 lg:flex-1" type="email" id="email" name="email" placeholder="Enter Your Email" />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-5">
            <div className="flex gap-6">
              <div className="flex flex-col gap-4 flex-1">
                <label htmlFor="dob" className="font-bold">Date of Birth:</label>
                <input type="date" name="dob" id="dob" placeholder="Select Your Date of Birth" className="pl-3 bg-transparent border border-[#C7CDD2] p-3 lg:flex-1" />
              </div>

              <div className="flex flex-col gap-4 flex-1">
                <label htmlFor="gender" className="font-bold">Gender:</label>
                <select name="gender" id="gender" className="pl-3 bg-transparent border border-[#C7CDD2] p-3 lg:flex-1">
                  <option disabled selected hidden>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <label htmlFor="code" className="font-bold">Phone Number</label>
              <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3 lg:flex-1" type="text" id="code" name="code" placeholder="Enter Your Phone Number" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col gap-4 flex-1">
            <label htmlFor="street" className="font-bold">Street Address:</label>
            <input type="text" name="street" id="street" placeholder="Your Address" className="pl-3 bg-transparent border border-[#C7CDD2] p-3 lg:flex-1" />
          </div>

          <div className="flex flex-col gap-4 flex-1">
            <label htmlFor="dob" className="font-bold">City:</label>
            <input type="text" name="dob" id="dob" placeholder="Your City" className="pl-3 bg-transparent border border-[#C7CDD2] p-3 lg:flex-1" />
          </div>

          <div className="flex flex-col gap-4 flex-1">
            <label htmlFor="dob" className="font-bold">State:</label>
            <input type="text" name="dob" id="dob" placeholder="Your State" className="pl-3 bg-transparent border border-[#C7CDD2] p-3 lg:flex-1" />
          </div>

          <div className="flex flex-col gap-4 flex-1">
            <label htmlFor="dob" className="font-bold">Country:</label>
            <input type="text" name="dob" id="dob" placeholder="Your Country" className="pl-3 bg-transparent border border-[#C7CDD2] p-3 lg:flex-1" />
          </div>
        </div>

        <div className="flex justify-between w-full pr-3">
          <Link to='/' className="flex items-center text-white py-2 px-16 bg-black-100 lg:block">Go Back</Link>
          <button className="text-white px-16 bg-green-30 py-3" onClick={pageTwo}>Next</button>
        </div>

      </form>)}

      {page != 'page1' && (<form action="#" className="flex flex-col gap-5">

        <h2 className="text-3xl text-center lg:text-left leading-[3.2rem] mb-3">Proof of Identity</h2>

        <div className="flex-1 flex flex-col gap-5">
          <label className="font-bold">Choose document type</label>

          <ul className="flex gap-4 text-white">
            <li className={`bg-green-30 rounded-3xl p-3 cursor-pointer ${identity != 'one' ? 'opacity-50' : 'opacity-100'}`} onClick={identityOne}>National ID Card</li>
            <li className={`bg-green-30 rounded-3xl p-3 cursor-pointer ${identity != 'two' ? 'opacity-50' : 'opacity-100'}`} onClick={identityTwo}>Driver’s License</li>
            <li className={`bg-green-30 rounded-3xl p-3 cursor-pointer ${identity != 'three' ? 'opacity-50' : 'opacity-100'}`} onClick={identityTthree}>International Passport</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Upload ID proof</h3>
          <p>Please provide a clear and legible picture of your valid identification document. Ensure that all details are visible and well-lit for successful verification.</p>
        </div>

        <div className="flex gap-6 my-5">
          <div className="bg-white rounded-2xl p-4 px-7 w-24 shadow-md">
            <img src={image} alt="" />
            <p className="text-center">front</p>
          </div>
          <div className="bg-white rounded-2xl p-4 px-7 w-24 shadow-md">
            <img src={image} alt="" />
            <p className="text-center">back</p>
          </div>

          <div className="flex flex-col gap-4 flex-1">
            <label htmlFor="identity" className="font-bold">ID Number:</label>
            <input type="text" name="identity" id="identity" placeholder="Enter Your ID Number" className="pl-3 bg-transparent border border-[#C7CDD2] p-3 lg:flex-1" />
          </div>
        </div>

        <div className="flex justify-between w-full pr-3">
          <button onClick={pageOne} className="flex items-center text-white py-2 px-16 bg-black-100 lg:block">Go Back</button>
          <button className="text-white px-16 bg-green-30 py-3" type="submit">Submit</button>
        </div>

      </form>)}
    </section>    
  );
};

export default Kyc;
