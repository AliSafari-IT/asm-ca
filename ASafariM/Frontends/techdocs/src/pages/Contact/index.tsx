import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Layout from "@theme/Layout";

export const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5146/api/users")
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

  const handleChange = (e) => {
    const { name: fieldName, value } = e.target;
    if (fieldName === "name") setName(value);
    if (fieldName === "email") setEmail(value);
    if (fieldName === "message") setMessage(value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9m1uuup", "template_2ie8whg", form.current, "vVlEiwNEj0k6uzMt3")
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

  return (
    <Layout title="Contact Us">
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-6">
          <h1 className="text-2xl font-bold text-center text-gray-700">Contact Us</h1>

          {loading && <p className="text-center text-gray-500">Loading users...</p>}
          {error && <p className="text-center text-red-500">Failed to load users.</p>}

          {!loading && !error && (
            <div className="text-center mb-4">
              <p className="text-gray-600">Current users: {users.length}</p>
              <ul className="text-left text-gray-600">
                {users.map((user) => (
                  <li key={user.id}>
                    <span>{user.name}</span> {" → "} <span>{user.email}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Name</label>
              <input
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Message</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                name="message"
                value={message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-600 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
