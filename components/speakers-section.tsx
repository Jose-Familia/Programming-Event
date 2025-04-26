import { Card, CardContent } from "@/components/ui/card"

export function SpeakersSection() {
  const speakers = [
    {
      name: "Matthew Melendez",
      role: "Software Engineer",
      image: "/Speaker1.png",
      bio: "Matthew is an experienced software engineer passionate about making programming accessible to everyone. With over 10 years in the industry, he specializes in web development and teaching coding fundamentals.",
    },
    {
      name: "Jose Familia",
      role: "Developer Advocate",
      image: "/Speaker2.png",
      bio: "Jose specializes in teaching programming concepts to beginners and building inclusive tech communities. He has helped hundreds of new developers start their journey in technology through workshops and mentoring.",
    },
  ]

  return (
    <section id="speakers" className="py-16 bg-muted/50 w-full">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Meet Our Speakers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {speakers.map((speaker, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg">
              <CardContent className="p-0">
                <img
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-medium mb-1">{speaker.name}</h3>
                  <p className="text-sm text-primary mb-3">{speaker.role}</p>
                  <p className="text-sm text-muted-foreground">{speaker.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

