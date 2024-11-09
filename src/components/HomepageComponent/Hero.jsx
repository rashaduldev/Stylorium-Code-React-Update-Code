import { useEffect, useState } from 'react';
import videoSrc from '../../assets/video/garment_video.mp4'; // Import your video
// import ShineText from '../ShineText';

const Hero = () => {
  const images = [
    'https://i.ibb.co.com/XFLT6FZ/accord.png',
    'https://i.ibb.co.com/6bTYQDj/Certificate4.png',
    'https://i.ibb.co.com/NY7rXqy/Certificate5.png',
    'https://i.ibb.co.com/NWpV6Zs/Certificate6.png',
    'https://i.ibb.co.com/6RzBG3F/Certificate8.png',
    'https://i.ibb.co.com/yp7ZLdZ/Certificate9.png',
    'https://i.ibb.co.com/Bs3QrQt/Certificate10.png',
    'https://i.ibb.co.com/6rvcK4R/Certificate11.png',
    'https://i.ibb.co.com/k27z90G/Certificate12.png',
    'https://i.ibb.co.com/VCzqQcX/Certificate14.png',
    'https://i.ibb.co.com/N1gbTmp/Certificate15.png',
    'https://i.ibb.co.com/rZDcBCM/company-No.jpg',
    'https://i.ibb.co.com/1Mq0fyM/iso-9001.png',
    'https://i.ibb.co.com/CvJhRY6/iso-14001.png',
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [playCount, setPlayCount] = useState(0);

  const handleVideoEnded = () => {
    setPlayCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-[80vh] overflow-hidden">
      <video
        autoPlay
        loop
        className="absolute w-full h-full object-cover"
        onEnded={handleVideoEnded}
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center">
        <div>
         <div className=''>
         {/* <ShineText /> */}
         <div className="header-test mt-5">
                <h1>Stylorium Sourcing Ltd</h1>
            </div>
            <p className="text-white text-lg w-[80%] mx-auto">Stylorium Sourcing is a 100% export Oriented trader, exporter, importer & manufacturer integrated in high value textile & non <br />  textile product. Company started its journey since 2020 and established its WAY TOWARDS SUSTAINABILITY vision in
                2030. Corporate office is located at Dhaka ,Bangladesh.
            </p>
         </div>
         
        </div>
      </div>

      <div className="absolute top-1/2 right-4 w-60 h-32 p-2">
        <img src={images[currentImage]} alt="Partner" className="w-full h-full object-cover" />
      </div>

      {playCount >= 5 && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white">
          <p>The video has played 5 times.</p>
        </div>
      )}
    </section>
  );
};

export default Hero;
