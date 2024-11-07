import Nav from "../components/Navber/Nav";
import ShopByBrands from "../components/ShopByBrand";

const ProductGallery = () => {
  return (
    <div>
      <Nav isVisible={true} />
      <div className="w-full mt-[112px] container mx-auto">
        {/* Video Section */}
        <div className="relative w-full h-96 bg-gray-800 flex items-center justify-center my-10">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/U7jyIVjXldM?si=2q_LH-Qfd7vLFk_L"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full object-cover"
          ></iframe>
        </div>

        <ShopByBrands/>
      </div>
    </div>
  );
};

export default ProductGallery;
