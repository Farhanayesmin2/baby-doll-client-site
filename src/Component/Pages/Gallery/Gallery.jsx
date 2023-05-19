import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
          const images = [
   "https://i.ibb.co/Pt4r1rK/72d31aa363ef7225248ea4d8ae22c32a.jpg",
"https://i.ibb.co/2gqQHvH/270b63bd55427c307b8a1eb37087b35b.jpg",
"https://i.ibb.co/9vpKCJj/85079ec575e46fb33d5a718f42530a97.jpg",
"https://i.ibb.co/FH1L2vN/2723621e402a11587182702ccbb1be35.jpg",
"https://i.ibb.co/vj5Y7bw/a269fa40a990cc52c87b88398041a961.jpg",
"https://i.ibb.co/XZksn4d/a1196b971e632a2bc22cfabf205b1870.jpg",
"https://i.ibb.co/hZRjs0R/aa70efd5236d701804da7212e5b67ea0.jpg",
"https://i.ibb.co/DbQLX7G/bb3e91b835e9247422c1829ea69b6153.jpg",
"https://i.ibb.co/5F4dnmJ/dbb99b30de30ea3f42de031b9f68f7db.jpg",
"https://i.ibb.co/XtW0ByB/e1ffc5e7bfdc39fb8cb3f5a110ce5f46.jpg",
"https://i.ibb.co/XZXRtZf/e70d3ccf4dd0ad8475dd60e0a09e063b.jpg",
"https://i.ibb.co/PCR6myK/f2c5536edf8b6f028ec9e81b15a9fd11.jpg",
"https://i.ibb.co/RvrtJL0/f583abbeb23f6d3a57973268162030de.jpg",
"https://i.ibb.co/pL3YSs4/4fe74335c77aff9a3d82405fe40f49fc.jpg",
"https://i.ibb.co/3TbH0n4/10da207ff5e2fa71f4c6175a863c686c.jpg",
"https://i.ibb.co/vvs0p5f/28ae8faef95aeabff4734b6f3e86dff2.jpg",
  ]
const Gallery = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);


    return (
      <div >
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div className="text-xl mb-5 font-semibold">
         <h1 data-aos="fade-right" className=' lg:text-5xl leading-tight font-bold font-serif text-[#ddbbdc]  text-center'>Our Top Rated <span className='font-mono'>Doll</span></h1>
         <p data-aos="fade-left"   className='text-gray-500 text-center'>Can you explore more,in our top rated doll as like as<br></br> Barbie doll,Baby doll and lati yellow doll and so more.</p>
          </div>
            <div data-aos-anchor-placement="top-center">
        
         
        <div className="-m-1 flex flex-wrap md:-m-2 ">
          {images.map((image, index) => (
            <div key={index} className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2">
              <img  data-aos="slide-left" className="block mx-auto h-full object-cover object-center rounded-lg shadow-md" src={image} alt={`Gallery Image ${index + 1}`} />
            </div>
          ))}
        </div>
          </div>
          </div>
    </div>
    );
};

export default Gallery;