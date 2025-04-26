import Link from "next/link"
import { Button } from "@/components/ui/button"

export function EventHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="font-bold text-primary">Programming for Everyone</div>
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="#schedule" className="text-sm font-medium hover:text-primary">
            Schedule
          </Link>
          <Link href="#speakers" className="text-sm font-medium hover:text-primary">
            Speakers
          </Link>
          <Link href="#sponsors" className="text-sm font-medium hover:text-primary">
            Sponsors
          </Link>
          <Link href="#register" className="text-sm font-medium hover:text-primary">
            Register
          </Link>
        </nav>
        <Button>Register Now</Button>
      </div>
    </header>
  )
}

