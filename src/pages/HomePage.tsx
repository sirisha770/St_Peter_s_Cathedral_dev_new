import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Heart, Users, ArrowRight, Cross, Church } from "lucide-react";
import churchHeroImage from "@/assets/church-hero.jpg";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${churchHeroImage})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/90" />
        
        {/* Content */}
        <div className="relative z-10 container-church px-4 text-center text-primary-foreground">
          <div className="max-w-4xl mx-auto animate-slide-up">
            {/* Cross Icon */}
            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-gold animate-float">
              <Cross className="w-8 h-8 md:w-10 md:h-10 text-navy-dark" />
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Rebuilding <span className="text-gradient-gold">St. Peters Church</span>, Cuddalore
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-4 max-w-2xl mx-auto">
              Be Part of God's Work
            </p>
            
            <p className="text-base md:text-lg text-primary-foreground/70 mb-10 max-w-xl mx-auto">
              Join us in restoring this historic place of worship. Together, we can rebuild 
              a sanctuary for generations to come.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/donate" className="gap-2">
                  <Heart className="w-5 h-5" />
                  Donate Now
                </Link>
              </Button>
              <Button variant="navyOutline" size="xl" asChild>
                <Link to="/events" className="gap-2">
                  <Calendar className="w-5 h-5" />
                  View Events
                </Link>
              </Button>
              <Button variant="navyOutline" size="xl" asChild>
                <Link to="/prayers" className="gap-2">
                  Prayer Requests
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-gold rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="container-church px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="divider-ornament">
              <Cross className="w-6 h-6 text-gold" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Legacy of Faith Since 1892
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              For over 130 years, St. Peters Church has been a spiritual home for the people of 
              Cuddalore. Our historic church stands as a testament to the enduring faith of 
              generations who have worshipped within its walls.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Church,
                title: "Historic Heritage",
                description: "A cherished landmark in Cuddalore with rich architectural and spiritual heritage dating back to the British colonial era.",
              },
              {
                icon: Users,
                title: "Vibrant Community",
                description: "Home to a loving congregation that comes together every week for worship, fellowship, and community service.",
              },
              {
                icon: Heart,
                title: "Mission of Love",
                description: "Committed to spreading God's love through charitable works, youth programs, and supporting those in need.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="card-church text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reconstruction CTA */}
      <section className="section-padding bg-muted">
        <div className="container-church px-4">
          <div className="bg-gradient-to-br from-navy via-navy to-navy-dark rounded-2xl p-8 md:p-12 text-primary-foreground relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Help Us Rebuild <span className="text-gradient-gold">God's House</span>
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                Our beloved church needs urgent restoration. With your generous support, 
                we can preserve this sacred space for future generations. Every contribution, 
                big or small, brings us closer to our goal.
              </p>

              {/* Progress Bar */}
              <div className="max-w-md mx-auto mb-8">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gold-light">₹45,00,000 raised</span>
                  <span className="text-primary-foreground/60">Goal: ₹1,00,00,000</span>
                </div>
                <div className="h-3 bg-primary-foreground/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-1000"
                    style={{ width: "45%" }}
                  />
                </div>
                <p className="text-sm text-primary-foreground/60 mt-2">45% of our goal reached</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="gold" size="lg" asChild>
                  <Link to="/donate" className="gap-2">
                    <Heart className="w-5 h-5" />
                    Donate Now
                  </Link>
                </Button>
                <Button variant="navyOutline" size="lg" asChild>
                  <Link to="/reconstruction" className="gap-2">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="section-padding bg-background">
        <div className="container-church px-4">
          <div className="text-center mb-12">
            <div className="divider-ornament">
              <Calendar className="w-6 h-6 text-gold" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Join us for worship services, prayer meetings, and community gatherings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                date: "Every Sunday",
                time: "9:00 AM",
                title: "Sunday Holy Mass",
                description: "Join us for our weekly celebration of the Eucharist.",
              },
              {
                date: "Wednesdays",
                time: "6:30 PM",
                title: "Prayer Meeting",
                description: "Come together in prayer and fellowship.",
              },
              {
                date: "Feb 15, 2026",
                time: "10:00 AM",
                title: "Annual Church Festival",
                description: "Celebrate our patron saint with the community.",
              },
            ].map((event, index) => (
              <div key={index} className="card-church">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex flex-col items-center justify-center">
                    <span className="text-xs text-gold font-semibold">{event.date.split(" ")[0]}</span>
                    <span className="text-xs text-muted-foreground">{event.date.split(" ")[1]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{event.date}</p>
                    <p className="text-xs text-muted-foreground">{event.time}</p>
                  </div>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="goldOutline" size="lg" asChild>
              <Link to="/events" className="gap-2">
                View All Events
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
