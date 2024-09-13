import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 pt-8 mx-auto ">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl">
        {/* Left Section: Academy details */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-2xl font-bold mb-4 text-primary">
            Sprouts Academy LLC
          </h3>
          <p className="mb-2">1739 East Elizabeth Avenue Linden,</p>
          <p className="mb-2">NJ 07036 USA</p>
          <p className="mb-2">Email: applications@njlittlesprouts.com</p>
          <p className="mb-2">Contact: (908) 941-7330</p>
        </div>

        {/* Schedule Section */}
        <div className="mb-4 md:mb-0 flex flex-col items-center sm:items-start">
          <h4 className="text-2xl font-bold mb-2">Schedule</h4>
          <p>Mon: 7:30 AM – 4:30 PM</p>
          <p>Tue: 7:30 AM – 4:30 PM</p>
          <p>Wed: 7:30 AM – 4:30 PM</p>
          <p>Thu: 7:30 AM – 4:30 PM</p>
          <p>Fri: 7:30 AM – 4:30 PM</p>
          <p>Sat: Closed</p>
          <p>Sun: Closed</p>
        </div>

        {/* Additional Info Section */}
        <div className="md:pl-8 flex flex-col items-center sm:items-start">
          <h4 className="text-2xl font-bold mb-2">Additional Info</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>CPR-certified staff</li>
            <li>Early childhood education-certified staff</li>
            <li>First aid-certified staff</li>
            <li>Health screenings available</li>
            <li>Outdoor play space</li>
            <li>1 classroom facility</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
