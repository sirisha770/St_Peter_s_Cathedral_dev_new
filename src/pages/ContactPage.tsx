import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      lines: ["St Peter's Cathedral", " Gnanapuram ", " Visakhapatnam ", " Andhra Pradesh ", "India - 530 004"],
    },
    {
      icon: Phone,
      title: "Phone",
      lines: ["+91 98490 07248 ", "+91 91213 17496"],
    },
    {
      icon: Mail,
      title: "Email",
      lines: ["stpeterscathedral22@gmail.com"],
    },
    {
      icon: Clock,
      title: "Service Times",
      lines: ["Sunday: 6:30 AM, 8:30 AM, 6:00 PM (Telugu), 8:30 AM (English)", "Weekdays: 6:15 AM, 6:30 PM", "Every Friday: Fasting Prayer Service from 10 AM at Rakshanagiri "],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-navy via-navy to-navy-dark"

        style={{
          backgroundImage: "url('/images/66.jpg')", backgroundSize: "100% auto", backgroundPosition: "center", width: "100%", height: "450px",
        }}

      >
        <div className="container-church px-4 text-center">
          {/* <MapPin className="w-16 h-16 mx-auto mb-6 text-gold" /> */}
          {/* <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Contact <span className="text-gradient-gold">Us</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with any questions, prayer requests,
            or just to say hello.
          </p> */}
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-church px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>

                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-accent" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. We'll get back to you as soon as possible.
                      </p>
                      <Button variant="gold" onClick={() => setSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            className="mt-1"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            className="mt-1"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            placeholder="Your number"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="subject">Subject *</Label>
                          <Input
                            id="subject"
                            placeholder="How can we help?"
                            className="mt-1"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Write your message here..."
                          className="mt-1 min-h-[150px]"
                          required
                        />
                      </div>

                      <Button type="submit" variant="gold" size="lg" className="w-full">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </div>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-card rounded-xl p-6 border border-border">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                        {info.lines.map((line, i) => (
                          <p key={i} className="text-sm text-muted-foreground">{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="mt-12">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
                Find Us
              </h2>
              <div className="bg-muted rounded-2xl overflow-hidden h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.3751040877564!2d79.7564!3d11.7480!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDQ0JzUyLjgiTiA3OcKwNDUnMjMuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Church Location"
                />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                St. Peter's Cathedral,  Gnanapuram ,  Visakhapatnam ,  Andhra Pradesh , India - 530 004.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
