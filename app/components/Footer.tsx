import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 pt-8">
      <div className="container mx-auto grid grid-cols-3 gap-4 max-w-5xl">
        {/* Left Section: Academy details */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-primary">
            Sprouts Academy LLC
          </h3>
          <p className="mb-2">1739 East Elizabeth Avenue Linden,</p>
          <p className="mb-2">NJ 07036 USA</p>
          <p className="mb-2">Email: applications@njlittlesprouts.com</p>
          <p className="mb-2">Contact: (908) 941-7330</p>
        </div>

        {/* Right Section: Schedule and Additional Info */}

        {/* Schedule */}
        <div className="mb-4 md:mb-0">
          <h4 className="text-2xl font-bold mb-2">Schedule</h4>
          <p>Mon: 7:30 AM – 4:30 PM</p>
          <p>Tue: 7:30 AM – 4:30 PM</p>
          <p>Wed: 7:30 AM – 4:30 PM</p>
          <p>Thu: 7:30 AM – 4:30 PM</p>
          <p>Fri: 7:30 AM – 4:30 PM</p>
          <p>Sat: Closed</p>
          <p>Sun: Closed</p>
        </div>

        {/* Additional Details in 3 Columns */}
        <div className="md:pl-8">
          <h4 className="text-xl font-bold mb-2">Additional Info</h4>
          <ol className=" gap-4 list-inside">
            <li>CPR-certified staff</li>
            <li>Early childhood education-certified staff</li>
            <li>First aid-certified staff</li>
            <li>Health screenings available</li>
            <li>Outdoor play space</li>
            <li>1 classroom facility</li>
          </ol>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
