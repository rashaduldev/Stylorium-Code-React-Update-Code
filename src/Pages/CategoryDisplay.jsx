import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Navber/Nav";

const CategoryDisplay = () => {
  const { category, subcategory } = useParams(); // Retrieve category and subcategory from URL
  const [images, setImages] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then(response => response.json())
      .then(data => {
        // Find the category
        const selectedCategory = data.categories.find(
          cat => cat.category.toLowerCase() === category.toLowerCase()
        );

        if (selectedCategory) {
          // Find the subcategory within the matched category
          const selectedSubcategory = selectedCategory.subcategories.find(
            subcat => subcat.name.toLowerCase() === subcategory.toLowerCase()
          );

          if (selectedSubcategory) {
            setImages(selectedSubcategory.images);
          } else {
            setImages(null); // No subcategory found
          }
        } else {
          setImages(null); // No category found
        }
      })
      .catch(error => console.error("Error fetching data:", error));
  }, [category, subcategory]);

  if (!images) return <p>Loading or no images available...</p>;

  return (
    <div>
      <Nav isVisible={true} />
      <div className="mt-28 pb-24 bg-white">
        <div className="container mx-auto">
          <iframe
            width="1560"
            height="315"
            src="https://www.youtube.com/embed/U7jyIVjXldM?autoplay=1&mute=1&si=Vq-fG0spCMccGu6J"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <h1 className="text-5xl font-bold pt-[10px] container mx-auto">{`${category} - ${subcategory}`}</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 container mx-auto gap-10">
          {images.map((image, index) => (
            <div key={index} className="card rounded-lg border w-96 h-96">
              <img src={image} alt={`${subcategory} ${index + 1}`} className="w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDisplay;
