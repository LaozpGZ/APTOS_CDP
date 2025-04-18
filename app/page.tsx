import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Lock, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-aptos-dark py-20 dark:bg-background md:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/Interlocking Dimensions.png')] bg-cover bg-center opacity-10"></div>
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-br from-aptos-primary/20 to-aptos-secondary/20"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">Unlock the Value of</span>
                <span className="block text-aptos-primary">Your Aptos Assets</span>
              </h1>
              <p className="mt-6 max-w-xl text-xl text-gray-300">
                APTOS_CDP is a decentralized lending protocol that allows you to borrow against your Aptos assets while
                maintaining your long position.
              </p>
              <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button asChild size="lg" className="bg-aptos-primary text-aptos-dark hover:bg-aptos-primary/90">
                  <Link href="/borrow">Start Borrowing</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-aptos-primary text-aptos-primary hover:bg-aptos-primary/10"
                >
                  <Link href="/earn">Explore Earning</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-[400px] animate-float">
                <Image
                  src="/secure-aptos-vault.png"
                  alt="AptosVault 3D Illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">The Next Generation of DeFi on Aptos</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              APTOS_CDP provides a suite of tools to maximize your capital efficiency on the Aptos blockchain.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Capital Efficiency</h3>
              <p className="text-muted-foreground">
                Maintain your long position while accessing liquidity through over-collateralized loans.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Secure Protocol</h3>
              <p className="text-muted-foreground">
                Built on Aptos with rigorous security measures and audited smart contracts.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">High Performance</h3>
              <p className="text-muted-foreground">
                Leverage Aptos's high throughput and low latency for a seamless borrowing experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-muted py-16 dark:bg-muted/20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How APTOS_CDP Works</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A simple three-step process to borrow against your Aptos assets.
            </p>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="relative text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="mb-2 text-xl font-semibold">Deposit Collateral</h3>
                <p className="text-muted-foreground">Deposit your Aptos assets as collateral in the protocol.</p>
                <div className="absolute right-0 top-8 hidden h-0.5 w-full -translate-y-1/2 bg-primary/30 md:block md:w-1/2"></div>
              </div>
              <div className="relative text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="mb-2 text-xl font-semibold">Borrow cdpUSD</h3>
                <p className="text-muted-foreground">
                  Borrow cdpUSD stablecoins against your collateral at your preferred loan-to-value ratio.
                </p>
                <div className="absolute right-0 top-8 hidden h-0.5 w-1/2 -translate-y-1/2 bg-primary/30 md:block"></div>
                <div className="absolute left-0 top-8 hidden h-0.5 w-1/2 -translate-y-1/2 bg-primary/30 md:block"></div>
              </div>
              <div className="relative text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="mb-2 text-xl font-semibold">Utilize or Repay</h3>
                <p className="text-muted-foreground">
                  Use your borrowed cdpUSD in the DeFi ecosystem or repay your loan to retrieve your collateral.
                </p>
                <div className="absolute left-0 top-8 hidden h-0.5 w-1/2 -translate-y-1/2 bg-primary/30 md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Protocol Statistics</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              APTOS_CDP is growing rapidly with strong community support.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-border bg-card p-6 text-center">
              <p className="text-3xl font-bold text-primary">$120M+</p>
              <p className="mt-2 text-sm text-muted-foreground">Total Value Locked</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 text-center">
              <p className="text-3xl font-bold text-primary">45K+</p>
              <p className="mt-2 text-sm text-muted-foreground">Active Users</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 text-center">
              <p className="text-3xl font-bold text-primary">$80M+</p>
              <p className="mt-2 text-sm text-muted-foreground">cdpUSD in Circulation</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 text-center">
              <p className="text-3xl font-bold text-primary">12%</p>
              <p className="mt-2 text-sm text-muted-foreground">Average APY for Lenders</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-aptos-dark py-16 dark:bg-background md:py-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/Interlocking Dimensions.png')] bg-cover bg-center opacity-10"></div>
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-br from-aptos-primary/20 to-aptos-secondary/20"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Get Started?</h2>
            <p className="mt-4 text-lg text-gray-300">
              Join thousands of users already leveraging their Aptos assets with APTOS_CDP.
            </p>
            <div className="mt-8 flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg" className="bg-aptos-primary text-aptos-dark hover:bg-aptos-primary/90">
                <Link href="/borrow">
                  Start Borrowing <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-aptos-primary text-aptos-primary hover:bg-aptos-primary/10"
              >
                <Link href="/docs">Read Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
