import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Send, BookOpen, Cross } from "lucide-react";

const PrayersPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const bibleVerses = [
    {
      verse: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
      reference: "Philippians 4:6",
    },
    {
      verse: "The prayer of a righteous person is powerful and effective.",
      reference: "James 5:16",
    },
    {
      verse: "Call to me and I will answer you and tell you great and unsearchable things you do not know.",
      reference: "Jeremiah 33:3",
    },
  ];

  const recentPrayers = [
    { name: "Mary T.", request: "Healing for my mother recovering from surgery", date: "2 hours ago" },
    { name: "Anonymous", request: "Guidance in making an important career decision", date: "5 hours ago" },
    { name: "John S.", request: "Peace and unity in our family", date: "1 day ago" },
    { name: "Grace M.", request: "Successful completion of my studies", date: "1 day ago" },
    { name: "Peter A.", request: "Strength during difficult financial times", date: "2 days ago" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-navy via-navy to-navy-dark"
        style={{
          backgroundImage: "url('/images/67.jpg')", backgroundSize: "100% auto", backgroundPosition: "center", width: "100%", height: "400px",
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-gold/30 rounded-full" />
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-gold/20 rounded-full" />
        </div>
        <div className="relative container-church px-4 text-center">
          {/* <Heart className="w-16 h-16 mx-auto mb-6 text-gold" /> */}
          {/* <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Prayer <span className="text-gradient-gold">Requests</span>
          </h1> */}
          {/* <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Share your prayer needs with our community. We believe in the power of
            collective prayer and are here to support you.
          </p> */}
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-church px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Prayer Request Form */}
              <div className="lg:col-span-3">
                <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                    Submit Your Prayer Request
                  </h2>

                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
                        <Cross className="w-10 h-10 text-accent" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                        Prayer Request Submitted
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for sharing your prayer request. Our church community
                        will be praying for you.
                      </p>
                      <Button variant="gold" onClick={() => setSubmitted(false)}>
                        Submit Another Request
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Your Name (Optional)</Label>
                          <Input
                            id="name"
                            placeholder="Enter your name"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email (Optional)</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="category">Prayer Category</Label>
                        <select
                          id="category"
                          className="w-full mt-1 h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select a category</option>
                          <option value="healing">Healing & Health</option>
                          <option value="family">Family & Relationships</option>
                          <option value="guidance">Guidance & Direction</option>
                          <option value="financial">Financial Needs</option>
                          <option value="spiritual">Spiritual Growth</option>
                          <option value="thanksgiving">Thanksgiving</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="request">Your Prayer Request *</Label>
                        <Textarea
                          id="request"
                          placeholder="Share your prayer request here..."
                          className="mt-1 min-h-[150px]"
                          required
                        />
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="share"
                          className="mt-1 w-4 h-4 rounded border-border text-gold focus:ring-gold"
                        />
                        <Label htmlFor="share" className="text-sm text-muted-foreground">
                          I consent to share my prayer request (name will be shown as first name only)
                          with the church community for collective prayer
                        </Label>
                      </div>

                      <Button type="submit" variant="gold" size="lg" className="w-full">
                        <Send className="w-5 h-5 mr-2" />
                        Submit Prayer Request
                      </Button>
                    </form>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2 space-y-6">
                {/* Bible Verses */}
                <div className="bg-gradient-to-br from-navy to-navy-dark rounded-2xl p-6 text-primary-foreground">
                  <BookOpen className="w-10 h-10 text-gold mb-4" />
                  <h3 className="font-serif text-xl font-bold mb-6">Encouragement from Scripture</h3>
                  <div className="space-y-6">
                    {bibleVerses.map((item, index) => (
                      <div key={index} className="border-l-2 border-gold/40 pl-4">
                        <p className="text-sm italic text-primary-foreground/90 mb-2">
                          "{item.verse}"
                        </p>
                        <p className="text-xs text-gold-light font-medium">
                          — {item.reference}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Prayer Requests */}
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                    Recent Prayer Requests
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Join us in praying for our community members
                  </p>
                  <div className="space-y-4">
                    {recentPrayers.map((prayer, index) => (
                      <div key={index} className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                        <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                          <Heart className="w-4 h-4 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm text-foreground font-medium">{prayer.name}</p>
                          <p className="text-sm text-muted-foreground">{prayer.request}</p>
                          <p className="text-xs text-muted-foreground mt-1">{prayer.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrayersPage;
