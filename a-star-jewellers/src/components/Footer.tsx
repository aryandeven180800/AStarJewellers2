// Footer.tsx

import React, { useEffect, useState } from 'react';
import '../styles/Footer.css';

declare global {
  interface Window {
    google: any;
  }
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubscribe = async () => {
    try {
      // Call the backend route to subscribe the user
      const response = await fetch('http://localhost:3000/api/email/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Display a success message or perform other actions
        console.log('Subscription successful');
        alert('Subscription successful');
      } else {
        // Handle the error
        console.error('Failed to subscribe:', response.statusText);
      }
    } catch (error) {
      console.error('Error during subscription:', error);
    }
  };

  const openGoogleMaps = () => {
    const address = 'A-1406 Kabra Divine Towers, SV Road, Malad West, Mumbai 400064';
    const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;

    // Open the link in a new tab
    window.open(googleMapsUrl, '_blank');
  };

  // Function to initialize the Google Map
  const initMap = () => {
    if (!window.google) {
      // Handle the case where Google Maps API is not loaded
      console.error('Google Maps API not loaded.');
      return;
    }

    const mapOptions = {
      center: { lat: 19.186112, lng: 72.848893 }, // Replace with the specific location coordinates
      zoom: 15, // Adjust the zoom level as needed
    };

    const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);

    // Marker for the specific location
    const marker = new window.google.maps.Marker({
      position: { lat: 19.19403076171875, lng: 72.84751892089844 }, // Replace with the specific location coordinates
      map: map,
      title: 'A-1406 Kabra Divine Towers, SV Road, Malad West, Mumbai 400064',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Log the form data to the console
      console.log('Form data:', formData);

      // Assuming you have an API endpoint to handle form submissions
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Form submission was successful
        console.log('Form submitted successfully');
        alert('Form submitted successfully')
        // Reset the form data if needed
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        // Handle errors if the form submission fails
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };

  useEffect(() => {
    // Load the Google Maps API script dynamically
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBzD2fDtXQFIWWijf3UNMklnhQYoPJr9CM&callback=initMap`;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="footer-container">
      {/* Left Section */}
      <div className="subscription-box">
        <h3>Subscribe to Our Newsletter</h3>
        <p>Stay updated with our latest products and promotions. Enter your email below:</p>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>

      {/* Center Section */}
      <div className="contact-section-container">
        <h3>Contact Us</h3>
        <div className="contact-section">
          <p>Email: astarjewel71@gmail.com</p>
          <p>Email: shethdeven1@gmail.com</p>
          <p>Phone: +91 9821417367</p>
          <p>Address: A-1406 Kabra Divine Towers, SV Road, Malad West, Mumbai 400064</p>

          {/* Google Maps Container */}
          <div id="map"></div>
          <a href="#" onClick={openGoogleMaps}>
            View on Google Maps
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="contact-form-container">
        <h3>If you want us to contact you, please fill this form</h3>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
