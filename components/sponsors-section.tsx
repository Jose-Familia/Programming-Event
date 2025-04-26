import { Card, CardContent } from "@/components/ui/card"

export function SponsorsSection() {
  return (
    <section className="py-16 bg-white w-full">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Our Sponsors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-3xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardContent className="flex flex-col items-center justify-center p-8">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/180px-GitHub_Invertocat_Logo.svg.png"
                alt="GitHub"
                className="h-24 object-contain mb-6"
              />
              <h3 className="text-xl font-medium text-center">GitHub</h3>
              <p className="text-center text-muted-foreground mt-2">
                Empowering developers to build and collaborate on code
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="flex flex-col items-center justify-center p-8">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaNykh3wElJa45IKErk7N9aSqQLHVvFt2IRA&s"
                alt="Microsoft"
                className="h-24 object-contain mb-6"
              />
              <h3 className="text-xl font-medium text-center">Microsoft</h3>
              <p className="text-center text-muted-foreground mt-2">
                Enabling digital transformation for the era of an intelligent cloud
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

