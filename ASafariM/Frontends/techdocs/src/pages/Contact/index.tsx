import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Layout from "@theme/Layout";

export const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5146/api/users", {
      credentials: 'include', // Include credentials if necessary
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setError(true);
        setLoading(false);
      });
  }, []);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "message") setMessage(value);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9m1uuup", "template_2ie8whg", form.current, {
        publicKey: "vVlEiwNEj0k6uzMt3",
      })
      .then(
        () => {
          alert("Message Sent, We will get back to you shortly!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Email send failed...", error.text);
          alert("An error occurred, Please try again.");
        }
      );
  };

  const LoadingIcon = () => (
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg> 
  );


  return (
    <Layout title={"Contact Us"}>
      <div className="flex flex-col items-center justify-center p-5 min-h-screen">
        <div className="p-4 rounded-lg shadow-md w-full max-w-xl text-center mb-5">
          <h1 className="text-3xl font-bold info p-3 rounded-lg">Contact Us</h1>
          <p className="text-lg font-semibold">Current users: {users.length}</p>
          <div>
            <p className="text-lg font-semibold">Users:</p>
            {error && <p className="text-red-500">Error fetching users.</p>}
            {loading && <LoadingIcon />} 
            {users.map((user, index) => (
              <ul key={index}>
                <li>
                  <span>{user.userName}</span> {' → '}
                  <span>{user.emailConfirmed ? 'Confirmed' : 'Not Confirmed'}</span>
                </li>
              </ul>
            ))}
          </div>
          <p className="text-lg font-semibold">Send us a message</p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="p-8 rounded-lg shadow-lg w-full max-w-xl space-y-6 border border-gray-200"
        >
          <div>
            <label className="block text-lg font-semibold mb-2">Name</label>
            <input
              className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">Email</label>
            <input
              className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">Message</label>
            <textarea
              className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-40 resize-vertical"
              name="message"
              value={message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="text-center">
            <input
              className="w-full py-3 bg-blue-500 font-semibold rounded-md hover:bg-blue-600 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-200"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ContactUs;


