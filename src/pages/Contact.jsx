import Faq from "../components/Faq";
import bg from '../assets/images/contactbg.png';

const Contact = () => (
  <main className="max-w-[1700px] m-auto">
    <section className="w-full max-w-[2000px] m-auto flex flex-col items-center gap-7 py-10 px-[4%]">
      <h1 className="font-bold text-center text-3xl md:text-5xl"><span className="text-orange-10">Connect</span> with Us We would love to hear from you!</h1>

      <p>Whether you have questions, feedback, or partnership inquiries, our team is ready to assist you.</p>
    </section>

    <section className="py-7 px-[5%] w-full flex flex-col md:flex-row md:gap-10 md:items-center">
      <div>
        <img src={bg} alt="" />
      </div>
      <div className="flex-1">
        <h2 className="text-green-30 text-3xl mb-9">Chat With Us</h2>

        <form action="#" className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="font-bold">Name</label>
            <input className="pl-3 bg-transparent border border-[#C7CDD2] p-4" type="text" id="name" name="name" placeholder="Enter Your Full Name" />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="font-bold">Email</label>
            <input className="pl-3 bg-transparent border border-[#C7CDD2] p-4" type="email" id="email" name="email" placeholder="Enter Your Email Address" />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="phone" className="font-bold">Phone Number</label>
            <input className="pl-3 bg-transparent border border-[#C7CDD2] p-4" type="tel" id="phone" name="phone" placeholder="Enter Your Phone Number " />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="message" className="font-bold">How can we help?</label>
            <textarea className="pl-3 h-44 bg-transparent border border-[#C7CDD2] p-4" id="message" name="message" placeholder="Type your message"></textarea>
          </div>
        </form>
      </div>
      
    </section>

    <section className="py-7 px-[5%] w-full">
      <h2 className="text-green-30 text-3xl mb-9">You Have Questions? We Have Answers.</h2>
      
      <Faq />
    </section>
  </main>
);

export default Contact;
