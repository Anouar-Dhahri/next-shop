import { stripe } from "@/lib/stripe";

import Carousel from "@/components/Carousel/Carousel";
import WelcomeSection from "@/components/WelcomSection/WelcomeSection";
import AboutUs from "@/components/AboutUs/AboutUs";

const Home = async () => {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  return (
    <div>
      <WelcomeSection imageFile={products.data[0].images[0]} />
      <section className="py-8 w-full flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/2">
          <Carousel products={products.data} />
        </div>
        <AboutUs />
      </section>
    </div>
  );
};

export default Home;
