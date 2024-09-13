import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-20 text-center" id='about'>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-primary">
        About Us
      </h2>
      <p className="text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-loose">
        We are an Early Education center with a mission to educate, prepare, and help grow young souls into a world of endless possibilities. 
        Our daycare & preschool works with many families, to teach the students in many creative and unique ways. Our staff is trained, 
        prepared, and qualified to work with students between the ages of 2.5-6 years old. <br /> <br /> 
        <em>“Nuestro programa también es Bilingüe”.</em>
      </p>
    </section>
  );
};

export default AboutUs;
