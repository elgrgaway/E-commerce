import { useState } from "react";
import emailjs from "emailjs-com";
import History from "../common/History";

const Contact = () => {
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_e315yid",
        "template_nyyqqip",
        formData,
        "PQJmmhTuQmtNwSd7m"
      )
      .then(() => {
        setSuccessMsg("Message sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
        setTimeout(() => {
          setSuccessMsg("");
        }, 3000);
      })
      .catch(() => {
        setErrorMsg("Failed to send message. Please try again.");
      });
  };
  return (
    <div className=" relative">
      <History page="Contact" />
      {successMsg && (
        <div className=" absolute top-9 left-3 bg-green-400 text-white p-2.5 rounded">
          {successMsg}
        </div>
      )}
      {errorMsg && (
        <div className=" absolute top-9 left-3 bg-red-400 text-white p-2.5 rounded">
          {errorMsg}
        </div>
      )}
      <div className="flex  justify-between gap-8 max-w-[82%] m-auto mb-36 max-lg:flex-col-reverse max-xl:max-w-[90%]">
        <div className="flex flex-col shadow px-8 py-10 max-w-[340px] max-lg:max-w-full">
          <div className="top">
            <div className="flex items-center gap-4 mb-6">
              <img src="phone.png" alt="phone icon" />
              <h4 className=" font-medium">Call To Us</h4>
            </div>
            <span className="block mb-4">
              We are available 24/7, 7 days a week.
            </span>
            <span className="block mb-8">Phone: +8801611112222</span>
          </div>
          <hr />
          <div className="bottom mt-8">
            <div className="flex items-center gap-4 mb-6">
              <img src="mail.png" alt="phone icon" />
              <h4 className=" font-medium">Write To US </h4>
            </div>
            <span className="block mb-4">
              Fill out our form and we will contact you within 24 hours.
            </span>
            <span className="block mb-4">Emails: customer@exclusive.com</span>
            <span className="block mb-4">Emails: support@exclusive.com</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className=" flex-1 shadow px-8 py-10 ">
          <div className="flex  mb-8 gap-4 max-xl:flex-wrap">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
              className="flex-1 bg-[var(--bg-gray)] px-4 py-3 rounded  contact-input"
            />
            <input
              placeholder="Your Email *"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="flex-1 bg-[var(--bg-gray)] px-4 py-3 rounded  contact-input"
            />

            <input
              placeholder="Your Phone *"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="flex-1 bg-[var(--bg-gray)] px-4 py-3 rounded  contact-input"
            />
          </div>

          <textarea
            placeholder="Your Massage"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-[var(--bg-gray)] px-4 py-3  w-full h-52 mb-8 "
          ></textarea>
          <div className=" text-end">
            <button className="bg-[#DB4444] text-white py-4 px-12 rounded ">
              Send Massage
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
