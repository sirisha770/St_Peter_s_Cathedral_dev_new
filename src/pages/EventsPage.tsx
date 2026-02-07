import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventsPage = () => {
  const events = [
    {
      category: "Weekly Service",
      date: "Every Sunday",
      time: "9:00 AM - 11:00 AM",
      title: "Sunday Holy Mass",
      description: "Join us for our weekly celebration of the Eucharist with hymns, readings, and communion.",
      location: "Main Sanctuary",
      isRecurring: true,
    },
    {
      category: "Prayer",
      date: "Every Wednesday",
      time: "6:30 PM - 8:00 PM",
      title: "Midweek Prayer Meeting",
      description: "Come together for an evening of prayer, worship, and fellowship.",
      location: "Chapel Hall",
      isRecurring: true,
    },
    {
      category: "Youth",
      date: "Every Saturday",
      time: "5:00 PM - 7:00 PM",
      title: "Youth Fellowship",
      description: "A time for young people to connect, learn, and grow in faith together.",
      location: "Youth Center",
      isRecurring: true,
    },
    {
      category: "Special Event",
      date: "February 15, 2026",
      time: "10:00 AM - 6:00 PM",
      title: "Annual Church Festival",
      description: "Celebrate our patron saint with special mass, procession, and community feast.",
      location: "Church Grounds",
      isRecurring: false,
    },
    {
      category: "Community",
      date: "February 28, 2026",
      time: "9:00 AM - 1:00 PM",
      title: "Community Outreach Program",
      description: "Join us in serving the less fortunate with food distribution and medical camp.",
      location: "Community Hall",
      isRecurring: false,
    },
    {
      category: "Worship",
      date: "March 5, 2026",
      time: "6:00 PM - 8:00 PM",
      title: "Lenten Evening Prayer",
      description: "Special evening of reflection and prayer during the Lenten season.",
      location: "Main Sanctuary",
      isRecurring: false,
    },
    {
      category: "Children",
      date: "March 15, 2026",
      time: "3:00 PM - 5:00 PM",
      title: "Sunday School Graduation",
      description: "Celebrate our children's achievements in Sunday School.",
      location: "Parish Hall",
      isRecurring: false,
    },
    {
      category: "Special Event",
      date: "April 12, 2026",
      time: "5:00 AM - 8:00 AM",
      title: "Easter Sunrise Service",
      description: "Celebrate the resurrection of Christ with an early morning service.",
      location: "Church Garden",
      isRecurring: false,
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Weekly Service": return "bg-gold/20 text-gold-dark";
      case "Prayer": return "bg-blue-100 text-blue-700";
      case "Youth": return "bg-green-100 text-green-700";
      case "Special Event": return "bg-red-100 text-red-700";
      case "Community": return "bg-purple-100 text-purple-700";
      case "Worship": return "bg-amber-100 text-amber-700";
      case "Children": return "bg-pink-100 text-pink-700";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-navy via-navy to-navy-dark">
        <div className="container-church px-4 text-center">
          <Calendar className="w-16 h-16 mx-auto mb-6 text-gold" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Church <span className="text-gradient-gold">Events</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Join us for worship services, prayer meetings, and community gatherings. 
            There's always a place for you at St. Peters Church.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="section-padding bg-background">
        <div className="container-church px-4">
          <div className="max-w-4xl mx-auto">
            {/* Recurring Events */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-gold rounded"></span>
                Weekly Services
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {events.filter(e => e.isRecurring).map((event, index) => (
                  <div key={index} className="card-church">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {event.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4 text-gold" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4 text-gold" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-gold" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-gold rounded"></span>
                Upcoming Events
              </h2>
              <div className="space-y-4">
                {events.filter(e => !e.isRecurring).map((event, index) => (
                  <div key={index} className="card-church flex flex-col md:flex-row md:items-center gap-4">
                    {/* Date Badge */}
                    <div className="w-20 h-20 rounded-xl bg-gold/10 flex flex-col items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-gold">
                        {event.date.split(" ")[1]?.replace(",", "")}
                      </span>
                      <span className="text-xs text-muted-foreground uppercase">
                        {event.date.split(" ")[0]}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                          {event.category}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-gold" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-gold" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>

                    <Button variant="goldOutline" size="default" className="md:self-center">
                      Learn More
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container-church px-4 text-center">
          <Users className="w-12 h-12 mx-auto mb-4 text-gold" />
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
            Want to Get Involved?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            We're always looking for volunteers to help with events, outreach programs, 
            and church activities. Join our community of service.
          </p>
          <Button variant="gold" size="lg">
            Volunteer With Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
