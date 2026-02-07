import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, CheckCircle, ArrowRight, Target, Users, Shield, Hammer } from "lucide-react";
import reconstructionImage from "@/assets/reconstruction.jpg";

const ReconstructionPage = () => {
  const fundingBreakdown = [
    { label: "Structural Repairs", amount: "₹35,00,000", percentage: 35 },
    { label: "Roof Restoration", amount: "₹25,00,000", percentage: 25 },
    { label: "Interior Renovation", amount: "₹20,00,000", percentage: 20 },
    { label: "Bell Tower Restoration", amount: "₹10,00,000", percentage: 10 },
    { label: "Electrical & Plumbing", amount: "₹10,00,000", percentage: 10 },
  ];

  const milestones = [
    { phase: "Phase 1", title: "Foundation & Structural", status: "completed", description: "Strengthening the foundation and main pillars" },
    { phase: "Phase 2", title: "Roof Restoration", status: "in-progress", description: "Replacing damaged roof sections and waterproofing" },
    { phase: "Phase 3", title: "Interior Work", status: "upcoming", description: "Renovating altar, pews, and flooring" },
    { phase: "Phase 4", title: "Final Touches", status: "upcoming", description: "Painting, electrical work, and beautification" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${reconstructionImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 to-navy/80" />
        
        <div className="relative z-10 container-church px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold-light rounded-full text-sm font-medium mb-6">
              Reconstruction Project
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Restoring Our <span className="text-gradient-gold">Sacred Heritage</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl">
              After years of weathering and natural wear, our beloved St. Peters Church needs 
              urgent restoration to preserve this sacred space for generations to come.
            </p>
            <Button variant="gold" size="xl" asChild>
              <Link to="/donate" className="gap-2">
                <Heart className="w-5 h-5" />
                Support the Restoration
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-church px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Why We Need Your Help
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Built in 1892, St. Peters Church has stood as a beacon of faith in Cuddalore for 
                over 130 years. This historic structure has witnessed countless baptisms, weddings, 
                and funeral services, serving as the spiritual home for generations of faithful Christians.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Over the decades, the building has suffered significant damage from monsoons, 
                cyclones, and the passage of time. The roof leaks during heavy rains, the 
                walls show concerning cracks, and the electrical systems are dangerously outdated.
              </p>
              <p className="text-lg leading-relaxed">
                Without immediate intervention, we risk losing this irreplaceable piece of our 
                community's heritage. Your generous donations will help us restore the church 
                to its former glory while making it safe and accessible for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="section-padding bg-muted">
        <div className="container-church px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fundraising Progress
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Thanks to our generous donors, we're making steady progress toward our goal.
            </p>
          </div>

          {/* Main Progress */}
          <div className="max-w-2xl mx-auto bg-card rounded-2xl p-8 shadow-card mb-12">
            <div className="text-center mb-6">
              <p className="text-4xl font-bold text-gold mb-2">₹45,00,000</p>
              <p className="text-muted-foreground">raised of ₹1,00,00,000 goal</p>
            </div>
            <div className="h-4 bg-muted rounded-full overflow-hidden mb-4">
              <div 
                className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full"
                style={{ width: "45%" }}
              />
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>1,250+ donors</span>
              <span>45% complete</span>
            </div>
          </div>

          {/* Milestones */}
          <div className="max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
              Project Milestones
            </h3>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-xl border ${
                    milestone.status === "completed" 
                      ? "bg-green-50 border-green-200" 
                      : milestone.status === "in-progress"
                      ? "bg-gold/5 border-gold/30"
                      : "bg-card border-border"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    milestone.status === "completed"
                      ? "bg-green-500"
                      : milestone.status === "in-progress"
                      ? "bg-gold"
                      : "bg-muted"
                  }`}>
                    {milestone.status === "completed" ? (
                      <CheckCircle className="w-6 h-6 text-white" />
                    ) : milestone.status === "in-progress" ? (
                      <Hammer className="w-6 h-6 text-navy-dark" />
                    ) : (
                      <Target className="w-6 h-6 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-muted-foreground uppercase">{milestone.phase}</p>
                    <h4 className="font-semibold text-foreground">{milestone.title}</h4>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    milestone.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : milestone.status === "in-progress"
                      ? "bg-gold/20 text-gold-dark"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {milestone.status === "completed" ? "Completed" : milestone.status === "in-progress" ? "In Progress" : "Upcoming"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use of Funds */}
      <section className="section-padding bg-background">
        <div className="container-church px-4">
          <div className="text-center mb-12">
            <Shield className="w-12 h-12 text-gold mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Transparent Use of Funds
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We believe in complete transparency. Here's how your donations will be used.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {fundingBreakdown.map((item, index) => (
                <div key={index} className="bg-card rounded-xl p-4 border border-border">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground">{item.label}</span>
                    <span className="font-semibold text-gold">{item.amount}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{item.percentage}% of total budget</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy">
        <div className="container-church px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Users className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Join 1,250+ Donors
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Your contribution, no matter the size, brings us closer to restoring this 
              sacred space. Be part of this historic endeavor.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gold" size="xl" asChild>
                <Link to="/donate" className="gap-2">
                  <Heart className="w-5 h-5" />
                  Donate Now
                </Link>
              </Button>
              <Button variant="navyOutline" size="xl" asChild>
                <Link to="/contact" className="gap-2">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReconstructionPage;
