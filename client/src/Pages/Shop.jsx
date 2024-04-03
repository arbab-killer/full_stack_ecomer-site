import Card from "../Components/Card";

const Shop = () => {
  const productsdata = [
    {
      id: 1,
      name: "Product 3",
      url: "https://picsum.photos/200/300",
      price: "$300",
      rating: 1,
    },
    {
      id: 2,
      name: "Product 3",
      url: "https://picsum.photos/200/300",
      price: "$300",
      rating: 1.2,
    },
    {
      id: 3,
      name: "Product 4",
      url: "https://picsum.photos/200/300",
      price: "$400",
      rating: 2,
    },
    {
      id: 4,
      name: "Product 4",
      url: "https://picsum.photos/200/300",
      price: "$400",
      rating: 2.5,
    },
    {
      id: 5,
      name: "Product 4",
      url: "https://picsum.photos/200/300",
      price: "$400",
      rating: 3,
    },
    {
      id: 6,
      name: "Product 4",
      url: "https://picsum.photos/200/300",
      price: "$400",
      rating: 3.5,
    },
    {
      id: 7,
      name: "Product 4",
      url: "https://picsum.photos/200/300",
      price: "$400",
      rating: 4,
    },
    {
      id: 8,
      name: "Product 4",
      url: "https://picsum.photos/200/300",
      price: "$400",
      rating: 4.5,
    },
    {
      id: 9,
      name: "Product 4",
      url: "https://picsum.photos/200/300",
      price: "$400",
      rating: 5,
    },
  ];
  return (
    <>
      <div className="flex  justify-center w-full h-full gap-6 flex-col m-auto  items-center">
        <h1 className="font-sans text-5xl">Feature Product</h1>
        <p className="font-sans opacity-60 text-2xl">
          Sammar Collaction New Morden Design{" "}
        </p>
      </div>

      <div className="flex justify-center w-full h-full gap-11 flex-wrap m-auto p-11 items-center">
        {productsdata.map((data) => {
          return (
            <Card
              key={data.id}
              id={data.id}
              productUrl={data.url}
              productName={data.name}
              productPrice={data.price}
              productRating={data.rating}
            />
          );
        })}
      </div>
    </>
  );
};

export default Shop;
