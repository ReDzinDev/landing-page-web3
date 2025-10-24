export function PartnersSection() {
  const partners = ["Ethereum Foundation", "Polygon Labs", "Chainlink", "The Graph", "Uniswap", "Aave"]

  return (
    <section id="partners" className="py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">Partners & Sponsors</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:scale-105"
              >
                <span className="text-lg font-semibold text-muted-foreground">{partner}</span>
              </div>
            ))}
          </div>

          <p className="mt-12 text-muted-foreground">
            Interested in sponsoring?{" "}
            <a href="mailto:sponsors@devconnect-ba.com" className="text-primary hover:underline">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
