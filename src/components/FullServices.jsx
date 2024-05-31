function FullServices() {
  const services = [
    {
      image: "icon-delivery.png",
      name: "FREE AND FAST DELIVERY",
      detail: "Free delivery for all orders over $140",
      alt: "delivery icon",
    },
    {
      image: "Icon-Customer-service.png",
      name: "24/7 CUSTOMER SERVICE",
      detail: "Friendly 24/7 customer support",
      alt: "customer service icon",
    },
    {
      image: "Icon-secure.png",
      name: "MONEY BACK GUARANTEE",
      detail: "We reurn money within 30 days",
      alt: "securty icon",
    },
  ];
  return (
    <div className="flex justify-around gap-4 items-center mb-[140px]">
      {services.map((service, index) => (
        <div className="flex flex-col items-center " key={index}>
          <img
            className="bg-black p-2 rounded-full border-[11px] border-solid border-gray-300 mb-6"
            src={service.image}
            alt={service.alt}
          />
          <p className="mb-2 text-xl font-semibold">{service.name}</p>
          <p className="text-sm">{service.detail}</p>
        </div>
      ))}
    </div>
  );
}
export default FullServices;
