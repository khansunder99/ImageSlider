import Carousel from "../components/Carousel";
export default function ImageSlider() {
  const slides = [
    "https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/hut-dog-combo6293.png",
    "https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/hut-dog-combo6293.png",
    "https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/hut-dog-combo6293.png",
    "https://d2l1qb2xg9gi7w.cloudfront.net/kh/images/Website/hut-dog-combo6293.png",
  ];

  return (
    <div className="relative">
      <div className="max-w-lg">
        <Carousel>
          {[...slides.map((index) => <img src={index}></img>)]}
        </Carousel>
      </div>
    </div>
  );
}
