import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Carousel from "@/components/Carousel/Carousel";

const Home = async () => {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  return (
    <div>
      <section className="rounded bg-neutral-100 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {" "}
              Welcome to My E-commerce
            </h2>
            <p className="text-neutral-600">
              Discover the latest products at the best prices.
            </p>
            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white h-[50px]">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full px-6 py-3">
                <span className="p-4">All Products</span>
              </Link>
            </Button>
          </div>
          <Image
            alt="Banner Image"
            width={450}
            height={450}
            src={products.data[0].images[0]}
            className="rounded"
          />
        </div>
      </section>
      <section className="py-8 w-full flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/2">
          <Carousel products={products.data} />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col space-y-4 items-center justify-center px-4 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Power Up Your Tech Game!
          </h1>
          <p className="text-base md:text-xl lg:text-2xl font-light">
            Discover the latest in laptops, gaming consoles, and accessories.
          </p>
          <p className="text-base md:text-xl lg:text-2xl font-light">
            Unbeatable prices. Trusted brands. Fast delivery.
          </p>
          <Button
            variant="default"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white cursor-pointer text-base h-[50px]">
            <span className="p-4">Shop Now</span>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
