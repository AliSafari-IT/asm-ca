import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Layout from "@theme/Layout";
import { IMessage } from "@site/src/interfaces/IMessage";
import { v4 as uuidv4 } from 'uuid';

const SERVICE_ID = "service_9m1uuup";
const TEMPLATE_ID = "template_2ie8whg";
const PUBLIC_KEY = "vVlEiwNEj0k6uzMt3";

export const ContactUs = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [previousMessagesCount, setPreviousMessagesCount] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");
  const [messageUrl, setMessageUrl] = useState(null);
  const form = useRef();

  useEffect(() => {
    // Fetch the logged-in user details from the backend
    const usersUrls = ["https://localhost:44337/api/users", "http://localhost:5146/api/users"];

    const fetchLoggedInUser = async () => {
      console.log("Fetching logged-in user...");

      // Check if the api url is available
      usersUrls.forEach((url) => {
        const meUrl = url + "/me";
        fetch(meUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // Add this line to send cookies with the request
        })
          .then(async (response) => {
            if (response.ok) {
              const data = await response.json();
              console.log("Logged-in user details: ", data);
              setLoggedInUser(data);
              // Set the email field if the fetched userName is a valid email
              if (validateEmail(data.userName)) {
                setEmail(data.userName);
              }
              // Fetch the user's previous message count
              if (data && data.userName) {
                const msgUrl = url + "/" + data.userName + "/messages";
                const messagesResponse = await fetch(`${msgUrl}`);
                if (messagesResponse.ok) {
                  setMessageUrl(msgUrl);
                  const count = await messagesResponse.json();
                  setPreviousMessagesCount(count);
                  // get out of the loop
                  return;
                }
              }
            } else {
              console.error("Error fetching logged-in user:", response.statusText);
            }
          })
          .catch((error) => {
            console.error("Error fetching logged-in user or message count:", error);
          });
      })
    };

    fetchLoggedInUser();

  }, []);


  useEffect(() => {
    if (messageUrl) {
      console.log("Saving message to database...", messageUrl);

      // Fetch messages for the logged-in user
      const fetchMessages = async () => {
        if (loggedInUser && loggedInUser.userName) {
          try {
            const response = await fetch(messageUrl);
            if (response.ok) {
              const data = await response.json();
              setMessages(data);
            } else {
              console.error("Error fetching messages:", response.statusText);
            }
          } catch (error) {
            console.error("Error fetching messages:", error);
          }
        }
      };

      fetchMessages();

    }
  }, [messageUrl]);

  // Utility function to validate email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "message") setMessage(value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setErrorMessage("");

    // save the current message to the database
    const currentMessage: IMessage = {
      id: uuidv4(),
      userName: loggedInUser.userName,
      content: message,
      // Timestamp of when the message was sent, using ISO string
      dateSent: new Date().toISOString(),
      isRead: false,
    };
    console.log("Saving message to database:", currentMessage, " via ", messageUrl);

    // Save the message to the database
    fetch(messageUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentMessage),
    })
      .then(async (response) => {
        if (response.ok) {
          console.log("Message saved to database");
          setMessageUrl(null);
          setPreviousMessagesCount(previousMessagesCount + 1);
          setMessages([...messages, currentMessage]);
        } else {
          console.error("Error saving message to database:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error saving message to database:", error);
      });

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          alert("Message Sent, We will get back to you shortly!");
          console.log("Email send successfully...");
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
        <div>
          <h1>Your Messages</h1>
          {messages.length > 0 ? (
            <ul>
              {messages.map((message) => (
                <li key={message.id}>{message.content}</li>
              ))}
            </ul>
          ) : (
            <p>No previous messages found</p>
          )}
        </div>
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
