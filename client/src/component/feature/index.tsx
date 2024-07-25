
const features = [
  {
    title: "Premium Quality",
    image: "/images/features/1.png",
  },
  {
    title: "24 Hours Customer Service",
    image: "/images/features/2.png",
  },
  {
    title: "Track Your Order In Real Time",
    image: "/images/features/3.png",
  },
  {
    title: "One Week Delivery All Over Canada",
    image: "/images/features/4.png",
  },
  {
    title: "Budget Friendly",
    image: "/images/features/5.png",
  },
  {
    title: "Secure Payment",
    image: "/images/features/6.png",
  },
]

export default function Feature () {
  return (
    <div className="store-biz-container mt-10 pb-10">
      <p className="text-center text-2xl font-bold">What Makes Us Different Makes Us Great </p>
      <div className="flex justify-between mt-8">
        {features.map((feature, index) => (
          <div key={index} className="w-[16%]">
            <img src={feature.image} alt="feature" className="mx-auto" />
            <p className="text-center font-bold mt-5">{ feature.title }</p>
          </div>
        ))}
      </div>
    </div>
  )
}