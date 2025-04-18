"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ArrowRight, TrendingUp, BarChart3, Layers, Shield, Vote } from "lucide-react"

export default function APTPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Image src="/aptos-token-logo.png" alt="APT Token" width={40} height={40} className="rounded-full" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">APT Token</h1>
          <p className="mt-4 text-lg text-muted-foreground">The governance and utility token of the Triplex protocol</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Current Price</CardDescription>
              <CardTitle className="flex items-center text-2xl">
                $10
                <span className="ml-2 text-sm text-green-500">+5.2%</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">Updated 5 minutes ago</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Market Cap</CardDescription>
              <CardTitle className="text-2xl">$125M</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">Fully diluted: $250M</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Circulating Supply</CardDescription>
              <CardTitle className="text-2xl">100M APT</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">Total supply: 200M APT</div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="utility">Utility</TabsTrigger>
              <TabsTrigger value="governance">Governance</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>APT Token Overview</CardTitle>
                  <CardDescription>The native token of the Triplex protocol</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    APT is the governance and utility token that powers the Triplex ecosystem. It serves multiple
                    functions within the protocol, including governance voting, fee discounts, and staking rewards.
                  </p>
                  <div className="rounded-lg bg-muted p-4">
                    <h3 className="mb-2 font-medium">Token Distribution</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>Community Treasury</span>
                        <span>40%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Team & Advisors</span>
                        <span>20%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Protocol Incentives</span>
                        <span>25%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Initial Liquidity</span>
                        <span>10%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Strategic Partners</span>
                        <span>5%</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-border p-4">
                    <div className="flex items-center">
                      <BarChart3 className="mr-3 h-8 w-8 text-muted-foreground" />
                      <div>
                        <h3 className="font-medium">Token Performance</h3>
                        <p className="text-sm text-muted-foreground">APT has grown 125% since launch</p>
                      </div>
                    </div>
                    <TrendingUp className="h-6 w-6 text-green-500" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      View on Explorer <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="utility" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Token Utility</CardTitle>
                  <CardDescription>How APT is used within the Triplex ecosystem</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-medium">Protocol Insurance</h3>
                      <p className="text-sm text-muted-foreground">
                        APT tokens can be staked to provide insurance for the protocol, earning a portion of protocol
                        fees in return.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Layers className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-medium">Fee Discounts</h3>
                      <p className="text-sm text-muted-foreground">
                        Users who hold APT tokens receive discounts on borrowing fees and other protocol services.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Vote className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-medium">Governance Voting</h3>
                      <p className="text-sm text-muted-foreground">
                        APT holders can vote on protocol upgrades, parameter changes, and treasury allocations.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-muted p-4">
                    <h3 className="mb-2 font-medium">Staking Rewards</h3>
                    <div className="flex justify-between">
                      <span className="text-sm">Current APY:</span>
                      <span className="text-sm font-medium text-green-500">12.5%</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <Input type="number" placeholder="Enter APT amount" className="mr-2" />
                      <Button>Calculate Rewards</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="governance" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Governance</CardTitle>
                  <CardDescription>Participate in shaping the future of AptosVault</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p>
                    APT token holders have the power to propose and vote on changes to the protocol. Governance
                    decisions include parameter adjustments, new feature implementations, treasury allocations, and
                    more.
                  </p>
                  <div className="rounded-lg bg-muted p-4">
                    <h3 className="mb-2 font-medium">Governance Process</h3>
                    <ol className="list-decimal space-y-2 pl-5 text-sm">
                      <li>
                        <span className="font-medium">Proposal:</span> Any holder of at least 100,000 APT can submit a
                        proposal.
                      </li>
                      <li>
                        <span className="font-medium">Discussion:</span> 3-day period for community discussion and
                        feedback.
                      </li>
                      <li>
                        <span className="font-medium">Voting:</span> 5-day voting period where APT holders cast their
                        votes.
                      </li>
                      <li>
                        <span className="font-medium">Execution:</span> If approved, changes are implemented by the
                        protocol.
                      </li>
                    </ol>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-medium">Active Proposals</h3>
                    <div className="rounded-lg border border-border p-4">
                      <div className="flex justify-between">
                        <h4 className="font-medium">AIP-001: Adjust Liquidation Parameters</h4>
                        <span className="rounded-full bg-yellow-500/10 px-2 py-1 text-xs text-yellow-600 dark:text-yellow-400">
                          Voting
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Proposal to adjust the liquidation threshold from 85% to 80% for all assets.
                      </p>
                      <div className="mt-4 flex justify-between">
                        <span className="text-xs text-muted-foreground">Ends in 3 days</span>
                        <Button size="sm">Vote</Button>
                      </div>
                    </div>
                    <div className="rounded-lg border border-border p-4">
                      <div className="flex justify-between">
                        <h4 className="font-medium">AIP-002: Add New Collateral Assets</h4>
                        <span className="rounded-full bg-green-500/10 px-2 py-1 text-xs text-green-600 dark:text-green-400">
                          Discussion
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Proposal to add USDC and DAI as collateral assets to the protocol.
                      </p>
                      <div className="mt-4 flex justify-between">
                        <span className="text-xs text-muted-foreground">Discussion phase</span>
                        <Button size="sm" variant="outline">
                          View Discussion
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Connect Wallet to Participate</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-8 rounded-lg border border-border bg-card p-6">
          <h2 className="mb-4 text-xl font-semibold">Get APT Tokens</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border p-4">
              <h3 className="mb-2 font-medium">Buy on Exchanges</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                APT is available on major decentralized and centralized exchanges.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  View Exchanges
                </Link>
              </Button>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h3 className="mb-2 font-medium">Earn Through Protocol</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Earn APT by providing liquidity, borrowing, or participating in governance.
              </p>
              <Button asChild className="w-full">
                <Link href="/farm">Explore Farming</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
