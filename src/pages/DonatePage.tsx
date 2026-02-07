import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, CreditCard, Smartphone, Building, CheckCircle, Cross } from "lucide-react";

const DonatePage = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(5000);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("upi");

  const suggestedAmounts = [500, 1000, 2500, 5000, 10000, 25000];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const currentAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-navy via-navy to-navy-dark overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 container-church px-4 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-gold">
            <Heart className="w-8 h-8 text-navy-dark" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Support <span className="text-gradient-gold">God's Work</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Your generosity helps us rebuild St. Peters Church and continue serving 
            our community. Every contribution makes a difference.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section-padding bg-background">
        <div className="container-church px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Donation Options */}
              <div className="lg:col-span-3">
                <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card">
                  {/* Amount Selection */}
                  <div className="mb-8">
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                      Choose Amount
                    </h2>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {suggestedAmounts.map((amount) => (
                        <button
                          key={amount}
                          onClick={() => handleAmountSelect(amount)}
                          className={`p-4 rounded-xl border-2 font-semibold transition-all ${
                            selectedAmount === amount
                              ? "border-gold bg-gold/10 text-gold"
                              : "border-border bg-background text-foreground hover:border-gold/50"
                          }`}
                        >
                          ₹{amount.toLocaleString()}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">₹</span>
                      <Input
                        type="number"
                        placeholder="Enter custom amount"
                        value={customAmount}
                        onChange={(e) => handleCustomAmountChange(e.target.value)}
                        className="pl-8 h-12"
                      />
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="mb-8">
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                      Payment Method
                    </h2>
                    <div className="space-y-3">
                      {[
                        { id: "upi", icon: Smartphone, label: "UPI Payment", description: "Google Pay, PhonePe, Paytm" },
                        { id: "bank", icon: Building, label: "Bank Transfer", description: "Direct bank transfer" },
                        { id: "card", icon: CreditCard, label: "Card Payment", description: "Credit or Debit card" },
                      ].map(({ id, icon: Icon, label, description }) => (
                        <button
                          key={id}
                          onClick={() => setPaymentMethod(id)}
                          className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                            paymentMethod === id
                              ? "border-gold bg-gold/5"
                              : "border-border bg-background hover:border-gold/50"
                          }`}
                        >
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            paymentMethod === id ? "bg-gold" : "bg-muted"
                          }`}>
                            <Icon className={`w-6 h-6 ${paymentMethod === id ? "text-navy-dark" : "text-muted-foreground"}`} />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-foreground">{label}</p>
                            <p className="text-sm text-muted-foreground">{description}</p>
                          </div>
                          {paymentMethod === id && (
                            <CheckCircle className="w-6 h-6 text-gold" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Payment Details */}
                  {paymentMethod === "upi" && (
                    <div className="bg-muted rounded-xl p-6 mb-6">
                      <h3 className="font-semibold text-foreground mb-4">UPI Details</h3>
                      <div className="bg-background rounded-lg p-4 text-center mb-4">
                        <p className="text-lg font-mono font-semibold text-gold">stpeterschurch@okaxis</p>
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        Scan or copy the UPI ID to make your donation
                      </p>
                    </div>
                  )}

                  {paymentMethod === "bank" && (
                    <div className="bg-muted rounded-xl p-6 mb-6">
                      <h3 className="font-semibold text-foreground mb-4">Bank Account Details</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Account Name:</span>
                          <span className="font-medium text-foreground">St. Peters Church Cuddalore</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Account Number:</span>
                          <span className="font-medium text-foreground">1234567890123456</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">IFSC Code:</span>
                          <span className="font-medium text-foreground">HDFC0001234</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Bank:</span>
                          <span className="font-medium text-foreground">HDFC Bank, Cuddalore Branch</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "card" && (
                    <div className="space-y-4 mb-6">
                      <div>
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input id="cardName" placeholder="Enter name on card" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-1" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" type="password" className="mt-1" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Donor Info */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-foreground mb-4">Your Information (Optional)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Your name" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" placeholder="+91 98765 43210" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="pan">PAN (for 80G receipt)</Label>
                        <Input id="pan" placeholder="ABCDE1234F" className="mt-1" />
                      </div>
                    </div>
                  </div>

                  <Button variant="gold" size="xl" className="w-full">
                    <Heart className="w-5 h-5 mr-2" />
                    Donate {currentAmount ? `₹${currentAmount.toLocaleString()}` : ""}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Your donation is eligible for tax exemption under Section 80G
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2">
                {/* Impact Card */}
                <div className="bg-gradient-to-br from-navy to-navy-dark rounded-2xl p-6 text-primary-foreground mb-6">
                  <Cross className="w-10 h-10 text-gold mb-4" />
                  <h3 className="font-serif text-xl font-bold mb-4">Your Impact</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>Help restore a 130-year-old heritage church</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>Preserve sacred spaces for future generations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>Support community outreach programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>Receive tax benefits under 80G</span>
                    </li>
                  </ul>
                </div>

                {/* Progress */}
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                    Fundraising Progress
                  </h3>
                  <div className="text-center mb-4">
                    <p className="text-3xl font-bold text-gold">₹45,00,000</p>
                    <p className="text-sm text-muted-foreground">raised of ₹1,00,00,000</p>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden mb-2">
                    <div 
                      className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full"
                      style={{ width: "45%" }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    1,250+ generous donors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;
