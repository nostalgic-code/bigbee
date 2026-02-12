import Link from "next/link";

export default function TechnologySection() {
  return (
    <section className="bg-[#fedb5b] py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 font-mono text-xs tracking-wider text-dark mb-12">
          <span className="text-base">+</span>
          <span>OUR TECHNOLOGY</span>
        </div>

        {/* Headline with inline icons */}
        <h2 className="text-dark text-3xl md:text-4xl lg:text-5xl font-sans font-normal leading-[1.3] mb-12">
          Our Ai- Driven{" "}
          <span className="inline-flex items-center align-middle mx-2">
            <span
              className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: `url('https://framerusercontent.com/images/ZHqjUB0xVhxl0vTlth6rCo3PUo.jpg?scale-down-to=512&width=6000&height=4000')`,
              }}
            />
          </span>{" "}
          logistics fuels
          <br />
          <span className="inline-flex items-center align-middle mx-2">
            <span
              className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=200&auto=format&fit=crop')`,
              }}
            />
          </span>{" "}
          agile global supply chains.
        </h2>

        {/* CTA Button */}
        <Link
          href="#platform"
          className="inline-flex items-center justify-center px-6 py-3 bg-dark text-white font-sans text-sm hover:bg-dark/90 transition-all"
        >
          Explore Platform
        </Link>
      </div>
    </section>
  );
}
