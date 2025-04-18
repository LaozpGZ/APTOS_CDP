import Link from "next/link"
import { Logo } from "@/components/logo"
import { Github, Twitter, DiscIcon as Discord } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="h-8 w-8" />
              <span className="text-xl font-bold">APTOS_CDP</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Borrow, earn, and leverage your assets on the Aptos blockchain with APTOS_CDP.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider">Protocol</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/borrow" className="text-sm text-muted-foreground hover:text-foreground">
                    Borrow
                  </Link>
                </li>
                <li>
                  <Link href="/earn" className="text-sm text-muted-foreground hover:text-foreground">
                    Earn
                  </Link>
                </li>
                <li>
                  <Link href="/farm" className="text-sm text-muted-foreground hover:text-foreground">
                    Farm
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/apt" className="text-sm text-muted-foreground hover:text-foreground">
                    APT Token
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Whitepaper
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} APTOS_CDP Protocol. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Discord</span>
                <Discord className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
