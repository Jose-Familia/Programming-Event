import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/banner.jpg" 
          alt="Event Banner" 
          fill 
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>
      <div className="w-full px-4 relative z-20 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Programming for Everyone</h1>
        <p className="text-xl text-white md:text-2xl text-muted-foreground max-w-2xl mb-8">
          Join us for a day of learning, collaboration, and fun as we make programming accessible to everyone.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#register">Register Now</a>
          </Button>
          <Button size="lg" variant="outline" className="text-black" asChild>
            <a href="#about">Learn More</a>
          </Button>
        </div>
        <div className="flex flex-wrap gap-6 mt-12 justify-center">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <span>March 8, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <span>12:00 PM - 3:00 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Santo Domingo Salón de Eventos Sambil</span>
          </div>
        </div>
      </div>
    </section>
  )
}

