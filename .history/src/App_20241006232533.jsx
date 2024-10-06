import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import html2canvas from 'html2canvas';

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const cardRef = useRef(null);
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Capture the card as an image
    html2canvas(cardRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      setImageURL(imgData);
    });
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
          {/* Card with 4:3 aspect ratio */}
          <div className="relative mx-auto w-full max-w-md" style={{ paddingBottom: '75%' }}>
            <div
              ref={cardRef}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg flex items-center justify-center"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4">
              {message}<span className="text-yellow-300">{name}</span> 
              </h1>
            </div>
          </div>

          {/* Social Media Sharing Buttons */}
          <div className="space-x-4 mt-6">
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

          {/* Download the card as an image */}
          {imageURL && (
            <div className="mt-4">
              <a
                href={imageURL}
                download={`HappyBirthday_${name}.png`}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Download Your Card
              </a>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default App;
