import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, TrendingUp, Target, Zap, Shield, CheckCircle } from "lucide-react";
import heroProfile from "@/assets/hero-profile.jpg";
import promiseProfile from "@/assets/promise-profile.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Jonathan
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              I'm not saying that I'm better than all other Meta ads.
            </h1>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold">
                I'm just <span className="text-accent">different.</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                And maybe you will get exactly what you need.
              </p>
            </div>
            
            {/* Stats Card */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-center gap-4">
                <img 
                  src={heroProfile} 
                  alt="Jonathan Profile" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Jonathan R.</p>
                  <p className="text-xs text-muted-foreground">Google Partner</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-accent">$27k</div>
                  <p className="text-xs text-muted-foreground">Avg. Client ROI</p>
                </div>
              </div>
            </Card>

            <Button variant="hero" size="lg" className="text-base">
              Schedule a Call Now
            </Button>
          </div>
          
          <div className="relative animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <img 
              src={heroProfile} 
              alt="Jonathan Profile" 
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square"
            />
          </div>
        </div>
      </section>

      {/* What Makes Me Different */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            What Makes Me <span className="text-accent">Different</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />
          
          <div className="space-y-8">
            <div className="flex gap-4 items-start animate-fade-in">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">+12% TOF not just with 'crazy' ads</h3>
                <p className="text-muted-foreground">
                  Anyway – you can find on Upwork? a fancy or 'funny' or even 'stupid' ad, but I use my years of experience and data-driven insights to consistently improve your campaign performance with strategic, proven methods.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start animate-fade-in">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  No A/B test. No CRO. No "magic" headlines. No black & white Ads.
                </h3>
                <p className="text-muted-foreground">
                  I've learned so many times that what works, just works, because we did our tasks carefully in the beginning. Solid strategy beats flashy tactics every time.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start animate-fade-in">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  If few carousel images will fit, I will do a few carousel images. Not 50.
                </h3>
                <p className="text-muted-foreground">
                  I hate this kind of work. This is an editor's job, or a PM's. This isn't a job for someone trying to 3x your business.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start animate-fade-in">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  I do transparently managing your given budget.
                </h3>
                <p className="text-muted-foreground">
                  You know exactly where every dollar goes. No hidden fees, no surprise charges, just clear communication and honest reporting.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start animate-fade-in">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  I do not fall back on lazy black & white ads with just words in.
                </h3>
                <p className="text-muted-foreground">
                  This isn't different. This is an archive of 8 out of every 10 ads I see.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              Let's Work Together
            </Button>
          </div>
        </div>
      </section>

      {/* What It's Like Working With Me */}
      <section className="container mx-auto px-4 py-20 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What It's Like Working With Me
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="relative group animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <Card className="relative p-8 h-full bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center">
                  <Target className="w-12 h-12 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Strategic Planning</h3>
              </Card>
            </div>
            
            <div className="relative group animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <Card className="relative p-8 h-full bg-card/80 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all">
                <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg mb-4 flex items-center justify-center">
                  <TrendingUp className="w-12 h-12 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Continuous Optimization</h3>
              </Card>
            </div>
            
            <div className="relative group animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <Card className="relative p-8 h-full bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center">
                  <Shield className="w-12 h-12 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Transparent Reporting</h3>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Recent Projects
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent mx-auto mb-16 rounded-full" />
          
          <div className="space-y-16">
            {/* Project 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 animate-fade-in">
                <h3 className="text-3xl font-bold">E-Commerce Case Study #1</h3>
                <div className="flex items-center gap-4 text-sm">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-semibold">
                    GOOGLE
                  </span>
                  <span className="text-muted-foreground">January - April 2025</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 bg-card/50 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-primary">+487%</div>
                    <div className="text-sm text-muted-foreground">ROAS Increase</div>
                  </Card>
                  <Card className="p-4 bg-card/50 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-accent">$142k</div>
                    <div className="text-sm text-muted-foreground">Revenue Generated</div>
                  </Card>
                </div>
              </div>
              <div className="relative group animate-fade-in-up">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all" />
                <img 
                  src={project1} 
                  alt="Project 1" 
                  className="relative rounded-2xl shadow-2xl w-full border border-border/50"
                />
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative group order-2 md:order-1 animate-fade-in-up">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all" />
                <img 
                  src={project2} 
                  alt="Project 2" 
                  className="relative rounded-2xl shadow-2xl w-full border border-border/50"
                />
              </div>
              <div className="space-y-4 order-1 md:order-2 animate-fade-in">
                <h3 className="text-3xl font-bold">E-Commerce Case Study #2</h3>
                <div className="flex items-center gap-4 text-sm">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-semibold">
                    GOOGLE
                  </span>
                  <span className="text-muted-foreground">August 2023</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 bg-card/50 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-primary">+312%</div>
                    <div className="text-sm text-muted-foreground">Conversion Rate</div>
                  </Card>
                  <Card className="p-4 bg-card/50 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-accent">$89k</div>
                    <div className="text-sm text-muted-foreground">Revenue Generated</div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 animate-fade-in">
                <h3 className="text-3xl font-bold">E-Commerce Case Study #3</h3>
                <div className="flex items-center gap-4 text-sm">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-semibold">
                    GOOGLE
                  </span>
                  <span className="text-muted-foreground">January - August 2023</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 bg-card/50 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-primary">+271%</div>
                    <div className="text-sm text-muted-foreground">Revenue Growth</div>
                  </Card>
                  <Card className="p-4 bg-card/50 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-accent">$274k</div>
                    <div className="text-sm text-muted-foreground">Total Revenue</div>
                  </Card>
                </div>
              </div>
              <div className="relative group animate-fade-in-up">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all" />
                <img 
                  src={project3} 
                  alt="Project 3" 
                  className="relative rounded-2xl shadow-2xl w-full border border-border/50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            People Who Trusted Me
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent mx-auto mb-16 rounded-full" />
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                role: "E-commerce Owner",
                content: "Working with Jonathan was a game-changer for our business. His strategic approach and transparent communication made all the difference. Our ROAS increased by 400% in just 3 months!",
                avatar: "SJ"
              },
              {
                name: "Michael Chen",
                role: "Marketing Director",
                content: "Finally, a Google Ads expert who actually understands our business goals. Jonathan's data-driven strategies and honest approach helped us scale profitably without wasting budget.",
                avatar: "MC"
              },
              {
                name: "Emma Rodriguez",
                role: "Founder & CEO",
                content: "Jonathan doesn't just run ads – he partners with you for growth. His unique approach and commitment to results has transformed how we think about paid advertising.",
                avatar: "ER"
              }
            ].map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              Join Them Today
            </Button>
          </div>
        </div>
      </section>

      {/* What I Can Promise */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <img 
                src={promiseProfile} 
                alt="Jonathan Promise" 
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
            
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  I won't sell you the moon and the stars.
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                What I <span className="text-accent">Can Promise</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Even if I'm <span className="text-foreground font-semibold">
                    the fanciest of every ads</span>, I can{" "}
                  <span className="text-foreground font-semibold">
                    only promise one thing</span>: I'll do <span className="text-foreground font-semibold">
                    a thorough diagnosis</span> up front, then execute{" "}
                  <span className="text-foreground font-semibold">only</span> and{" "}
                  <span className="text-foreground font-semibold">aggressively</span>. But always,{" "}
                  <span className="text-foreground font-semibold">
                    always thoughtfully</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 bg-card/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Are Your Meta Ads In The Wrong Hands?
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
            <p className="text-xl text-muted-foreground">
              Schedule a call with me
            </p>
          </div>

          <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  When can you squeeze time to give me a call?
                </label>
                <Input 
                  type="text" 
                  placeholder="e.g., Tomorrow at 3 PM" 
                  className="bg-background/50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <Input 
                  type="email" 
                  placeholder="your.email@example.com" 
                  className="bg-background/50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Tell me about your business
                </label>
                <Textarea 
                  placeholder="What are you selling? What are your goals?" 
                  className="bg-background/50 min-h-32"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full text-lg">
                Let's Talk
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-border/50">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">
            Jonathan <span className="text-accent">👋</span>
          </h3>
          <p className="text-muted-foreground">
            Google Ads Freelancer | Partner
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            © 2025 All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
