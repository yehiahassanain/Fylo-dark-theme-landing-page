import React, { useState } from "react";
import TestimonialsBox from "./TestimonialsBox";

const Testimonials = () => {
  const [testData, setTestData] = useState([
    {
      id: 1,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore excepturi incidunt quo deserunt quidem accusamus iure ab earumreprehenderit debitis!",
      image: "profile-1.jpg",
      position: "founder & CEO, Huddle",
      name: "Ahmed",
    },
    {
      id: 2,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore excepturi incidunt quo deserunt quidem accusamus iure ab earumreprehenderit debitis!",
      image: "profile-2.jpg",
      position: "founder & CEO, Huddle",
      name: "Mohamed",
    },
    {
      id: 3,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore excepturi incidunt quo deserunt quidem accusamus iure ab earumreprehenderit debitis!",
      image: "profile-3.jpg",
      position: "founder & CEO, Huddle",
      name: "Eman",
    },
  ]);
  return (
    <section className="pb-[350px]">
      <div className="container relative">
        <div >
          <img src="/src/assets/images/bg-quotes.png" alt="bg-quoit-image" className="absolute left-[20px] top-[-35px]"/>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] relative z-20">
            {testData.map((item) => (
              <TestimonialsBox 
                key={item.id}
                desc={item.desc} 
                image={item.image} 
                position={item.position} 
                name={item.name}
                />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
