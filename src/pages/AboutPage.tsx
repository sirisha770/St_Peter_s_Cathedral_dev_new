import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, Users, Church, Target, Cross, ArrowRight } from "lucide-react";
import churchHeroImage from "@/assets/church-hero.jpg";
import pastorImage from "@/assets/pastor.jpg";

const AboutPage = () => {
  const values = [
    {
      icon: Cross,
      title: "Faith",
      description: "Rooted in the teachings of Jesus Christ and the traditions of the Church.",
    },
    {
      icon: Heart,
      title: "Love",
      description: "Extending God's love to all, especially the poor and marginalized.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a family of believers united in worship and service.",
    },
    {
      icon: BookOpen,
      title: "Scripture",
      description: "Living by the Word of God as our guide and inspiration.",
    },
  ];

  const timeline = [
    { year: "1892", event: "Church founded by British missionaries" },
    { year: "1920", event: "Bell tower constructed" },
    { year: "1945", event: "First Indian parish priest appointed" },
    { year: "1972", event: "Major renovation completed" },
    { year: "2004", event: "Tsunami relief center established" },
    { year: "2024", event: "Reconstruction project initiated" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/66.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r " />

        <div className="relative z-10 container-church px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
              Our Story
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="text-white">St. Peters Church</span>
            </h1>
            <p className="text-lg text-white max-w-2xl">
              For over 130 years, we have been a beacon of faith, hope, and love
              in Cathedral. Our rich history and vibrant community continue to
              inspire generations.
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section-padding bg-background">
        <div className="container-church px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Church className="w-12 h-12 text-gold mb-4" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
                A Legacy of Faith Since 1892
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  St. Peters Church was established in 1892 by devoted British missionaries
                  who sought to bring the Gospel to the coastal town of Cathedral. What began
                  as a small prayer group has grown into one of the most cherished churches
                  in Tamil Nadu.
                </p>
                <p>
                  The church's distinctive architecture, with its tall bell tower and
                  beautiful stained glass windows, reflects the colonial heritage while
                  embracing local traditions. The building itself is a testament to the
                  dedication of countless faithful who contributed to its construction.
                </p>
                <p>
                  Through world wars, natural disasters, and changing times, St. Peters
                  Church has remained a constant source of spiritual nourishment and
                  community support for the people of Cathedral.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-muted rounded-2xl p-6 md:p-8">
              <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                Our Journey Through Time
              </h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-16">
                      <span className="font-bold text-gold">{item.year}</span>
                    </div>
                    <div className="flex-1 pb-6 border-l-2 border-gold/30 pl-4 relative">
                      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gold" />
                      <p className="text-foreground">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-muted">
        <div className="container-church px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Leadership
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Guided by dedicated servants of God who lead our congregation with wisdom and love.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0">
                <img
                  // src={pastorImage}
                  src="/images/71.jpg"
                  alt="Parish Priest"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-gold/20 text-gold-dark rounded-full text-sm font-medium mb-2">
                  Parish Priest
                </span>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Rev. Fr. John Prakash
                </h3>
                <p className="text-muted-foreground mb-4">
                  Fr. John Prakash has been serving St. Peters Church since 2018. With over 25 years
                  of pastoral experience, he leads our congregation with compassion, wisdom,
                  and a deep commitment to serving the community. Under his leadership, the
                  church has grown both spiritually and in its outreach efforts.
                </p>
                <p className="text-sm text-gold italic">
                  "Together in faith, we can move mountains."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-background">
        <div className="container-church px-4">
          <div className="text-center mb-12">
            <Target className="w-12 h-12 text-gold mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Mission & Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We exist to glorify God, make disciples of Jesus Christ, and serve our
              community with love and compassion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card-church text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy">
        <div className="container-church px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Join Our Family
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're looking for a church home or just visiting,
            you're always welcome at St. Peters Church.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact" className="gap-2">
                Visit Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="navyOutline" size="lg" asChild>
              <Link to="/events">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
