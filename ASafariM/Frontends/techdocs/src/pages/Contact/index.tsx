import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Layout from "@theme/Layout";

export const ContactUs = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [previousMessagesCount, setPreviousMessagesCount] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  useEffect(() => {
    // Fetch the logged-in user details from the backend
    const fetchLoggedInUser = async () => {
      try {
        const response = await fetch("https://localhost:44337/api/users/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // Add this line to send cookies with the request
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Logged-in user details: ", data);
        setLoggedInUser(data);

        // Fetch the user's previous message count
        if (data && data.userName) {
          const messagesResponse = await fetch(`https://localhost:44337/api/users/${data.userName}/messages`);
          if (messagesResponse.ok) {
            const count = await messagesResponse.json();
            setPreviousMessagesCount(count);
          }
        }
      } catch (error) {
        console.error("Error fetching logged-in user or message count:", error);
      }
    };
    if (loggedInUser === null) {
      fetchLoggedInUser();
    }
  }, [loggedInUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "message") setMessage(value);
  };

  const sendEmail = (e) => {
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

  return (
    <Layout title={"Contact Us"}>
      <div className="flex flex-col items-center justify-center p-5 min-h-screen">
        <div className="p-4 rounded-lg shadow-md w-full max-w-xl text-center mb-5">
          <h1 className="text-3xl font-bold info p-3 rounded-lg">Contact Us</h1>
          {loggedInUser && (
            <h5 className="text-lg">Hello, {loggedInUser.userName}!</h5>
          )}
          {previousMessagesCount > 0 && (
            <h6 className="text-md mt-2">You have contacted us {previousMessagesCount} times previously.</h6>
          )}
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
