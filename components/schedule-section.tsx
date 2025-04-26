import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ScheduleSection() {
  return (
    <section id="schedule" className="py-16 w-full">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Event Schedule</h2>
        <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="all">All Sessions</TabsTrigger>
            <TabsTrigger value="workshops">Workshops</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg shadow-sm">
                <div className="md:w-1/5 flex flex-col">
                  <span className="text-primary font-medium">12:00 PM</span>
                  <span className="text-sm text-muted-foreground">30 min</span>
                </div>
                <div className="md:w-4/5">
                  <h3 className="text-xl font-medium mb-1">Welcome and Introduction</h3>
                  <p className="text-muted-foreground mb-2">Main Hall</p>
                  <p>Opening remarks and overview of the event by Matthew Melendez.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg shadow-sm">
                <div className="md:w-1/5 flex flex-col">
                  <span className="text-primary font-medium">12:30 PM</span>
                  <span className="text-sm text-muted-foreground">1 hour</span>
                </div>
                <div className="md:w-4/5">
                  <h3 className="text-xl font-medium mb-1">Coding Fundamentals Workshop</h3>
                  <p className="text-muted-foreground mb-2">Main Hall</p>
                  <p>An interactive session on programming basics led by Jose Familia.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg shadow-sm">
                <div className="md:w-1/5 flex flex-col">
                  <span className="text-primary font-medium">1:30 PM</span>
                  <span className="text-sm text-muted-foreground">30 min</span>
                </div>
                <div className="md:w-4/5">
                  <h3 className="text-xl font-medium mb-1">Coffee Break & Networking</h3>
                  <p className="text-muted-foreground mb-2">Lounge Area</p>
                  <p>Refreshments provided by our sponsors while you connect with other attendees.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg shadow-sm">
                <div className="md:w-1/5 flex flex-col">
                  <span className="text-primary font-medium">2:00 PM</span>
                  <span className="text-sm text-muted-foreground">45 min</span>
                </div>
                <div className="md:w-4/5">
                  <h3 className="text-xl font-medium mb-1">Building Your First Web App</h3>
                  <p className="text-muted-foreground mb-2">Main Hall</p>
                  <p>Hands-on workshop where you'll create a simple web application from scratch.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg shadow-sm">
                <div className="md:w-1/5 flex flex-col">
                  <span className="text-primary font-medium">2:45 PM</span>
                  <span className="text-sm text-muted-foreground">15 min</span>
                </div>
                <div className="md:w-4/5">
                  <h3 className="text-xl font-medium mb-1">Closing Remarks & Resources</h3>
                  <p className="text-muted-foreground mb-2">Main Hall</p>
                  <p>Summary of the day and information on how to continue your programming journey.</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="workshops" className="mt-6">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg shadow-sm">
                <div className="md:w-1/5 flex flex-col">
                  <span className="text-primary font-medium">12:30 PM</span>
                  <span className="text-sm text-muted-foreground">1 hour</span>
                </div>
                <div className="md:w-4/5">
                  <h3 className="text-xl font-medium mb-1">Coding Fundamentals Workshop</h3>
                  <p className="text-muted-foreground mb-2">Main Hall</p>
                  <p>An interactive session on programming basics led by Jose Familia.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg shadow-sm">
                <div className="md:w-1/5 flex flex-col">
                  <span className="text-primary font-medium">2:00 PM</span>
                  <span className="text-sm text-muted-foreground">45 min</span>
                </div>
                <div className="md:w-4/5">
                  <h3 className="text-xl font-medium mb-1">Building Your First Web App</h3>
                  <p className="text-muted-foreground mb-2">Main Hall</p>
                  <p>Hands-on workshop where you'll create a simple web application from scratch.</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

