import { Link } from "react-router-dom";
import { Cross, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      {/* Bible Verse Banner */}
      <div className="bg-gradient-to-r from-gold-dark to-gold py-6">
        <div className="container-church px-4 text-center">
          <p className="font-serif text-lg md:text-xl italic text-navy-dark">
            "Unless the Lord builds the house, the builders labor in vain."
          </p>
          <p className="text-sm text-navy-dark/80 mt-1">— Psalm 127:1</p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-church py-12 md:py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Church Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                <Cross className="w-6 h-6 text-navy-dark" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold">St. Peters Church</h3>
                <p className="text-sm text-primary-foreground/70">Cathedral</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              A beacon of faith, hope, and love serving the Cathedral community for over a century.
              Join us in worship and fellowship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-gold-light">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Events", path: "/events" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-gold-light transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-gold-light">Get Involved</h4>
            <ul className="space-y-2">
              {[
                { name: "Support Reconstruction", path: "/reconstruction" },
                { name: "Donate", path: "/donate" },
                { name: "Prayer Requests", path: "/prayers" },
                { name: "Volunteer", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-gold-light transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-gold-light">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-gold-light flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  St Peter's Cathedral,Gnanapuram<br />Visakhapatnam - 530 004, Andhra Pradesh,India.
                </span>


              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-gold-light flex-shrink-0" />
                <a href="tel:+914142123456" className="text-primary-foreground/80 hover:text-gold-light transition-colors">
                  +91 98490 07248
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-gold-light flex-shrink-0" />
                <a href="mailto:info@stpeterschurch.in" className="text-primary-foreground/80 hover:text-gold-light transition-colors">
                  stpeterscathedral22@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Donate CTA */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-primary-foreground/70 text-center md:text-left">
            Your generosity helps us serve the community and rebuild God's house.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/donate">Support Our Mission</Link>
          </Button>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10 py-6">
        <div className="container-church px-4 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} St. Peters Church, Cathedral. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
