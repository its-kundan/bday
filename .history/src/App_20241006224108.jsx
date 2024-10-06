// import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      {!submitted ? (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold mb-4">Enter Your Name</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="border rounded-lg px-4 py-2 text-lg"
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Submit
            </button>
          </form>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-6">Wishing You Happy Birthday Dear {name}!</h1>
          <div className="space-x-4">
            <FacebookShareButton url={window.location.href} quote={`Happy Birthday ${name}!`}>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Share on Facebook</button>
            </FacebookShareButton>
            <TwitterShareButton url={window.location.href} title={`Happy Birthday ${name}!`}>
              <button className="bg-blue-400 text-white px-4 py-2 rounded-lg">Share on Twitter</button>
            </TwitterShareButton>
            <WhatsappShareButton url={window.location.href} title={`Happy Birthday ${name}!`}>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Share on WhatsApp</button>
            </WhatsappShareButton>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default App;
