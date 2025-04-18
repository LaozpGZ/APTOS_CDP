"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, TrendingDown, AlertTriangle, Shield, Info } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Dashboard</h1>
        <p className="mt-2 text-lg text-muted-foreground">Manage your positions and monitor your portfolio</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Collateral</CardDescription>
            <CardTitle className="text-2xl">$0.00</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">Across all positions</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Borrowed</CardDescription>
            <CardTitle className="text-2xl">$0.00</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">Current tpxUSD debt</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Net APY</CardDescription>
            <CardTitle className="flex items-center text-2xl">
              0.00%
              <TrendingUp className="ml-2 h-4 w-4 text-green-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">Earning vs borrowing rates</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Health Factor</CardDescription>
            <CardTitle className="text-2xl">N/A</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">No active positions</div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Tabs defaultValue="positions">
          <TabsList className="grid w-full grid-cols-3 md:w-auto">
            <TabsTrigger value="positions">Positions</TabsTrigger>
            <TabsTrigger value="deposits">Deposits</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          <TabsContent value="positions" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Borrowing Positions</CardTitle>
                <CardDescription>Manage your collateral and borrowed assets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 rounded-full bg-muted p-4">
                    <Info className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="mb-2 text-lg font-medium">No Active Positions</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    You don't have any active borrowing positions yet.
                  </p>
                  <Button asChild>
                    <Link href="/borrow">Create Position</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="deposits" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Deposits</CardTitle>
                <CardDescription>Assets you've deposited to earn yield</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 rounded-full bg-muted p-4">
                    <Info className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="mb-2 text-lg font-medium">No Active Deposits</h3>
                  <p className="mb-4 text-sm text-muted-foreground">You don't have any active deposits yet.</p>
                  <Button asChild>
                    <Link href="/earn">Start Earning</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="history" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>Your recent activity on AptosVault</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 rounded-full bg-muted p-4">
                    <Info className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="mb-2 text-lg font-medium">No Transaction History</h3>
                  <p className="text-sm text-muted-foreground">Your transaction history will appear here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Risk Assessment</CardTitle>
            <CardDescription>Monitor your position health and risk factors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between rounded-lg border border-border p-4">
                <div className="flex items-center">
                  <Shield className="mr-3 h-8 w-8 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">Health Factor</h3>
                    <p className="text-sm text-muted-foreground">
                      Measures the safety of your position against liquidation
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-medium">N/A</span>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-border p-4">
                <div className="flex items-center">
                  <TrendingDown className="mr-3 h-8 w-8 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">Liquidation Threshold</h3>
                    <p className="text-sm text-muted-foreground">
                      The point at which your position becomes eligible for liquidation
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-medium">85%</span>
                </div>
              </div>

              <div className="flex items-center rounded-lg bg-yellow-500/10 p-4 text-sm text-yellow-600 dark:text-yellow-400">
                <AlertTriangle className="mr-2 h-5 w-5" />
                <span>No active positions. Create a position to see your risk assessment.</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Market Overview</CardTitle>
            <CardDescription>Current rates and market conditions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="pb-2 text-left font-medium">Asset</th>
                      <th className="pb-2 text-right font-medium">Borrow APR</th>
                      <th className="pb-2 text-right font-medium">Supply APY</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3">
                        <div className="flex items-center">
                          <Image
                            src="/golden-eagle-dollar.png"
                            alt="tpxUSD"
                            width={20}
                            height={20}
                            className="mr-2 rounded-full"
                          />
                          <span>tpxUSD</span>
                        </div>
                      </td>
                      <td className="py-3 text-right">1.2%</td>
                      <td className="py-3 text-right text-green-500">8.5%</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3">
                        <div className="flex items-center">
                          <Image
                            src="/aptos-abstract-representation.png"
                            alt="APT"
                            width={20}
                            height={20}
                            className="mr-2 rounded-full"
                          />
                          <span>APT</span>
                        </div>
                      </td>
                      <td className="py-3 text-right">2.5%</td>
                      <td className="py-3 text-right text-green-500">4.2%</td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <div className="flex items-center">
                          <Image
                            src="/bitcoin-symbol-gold.png"
                            alt="BTC"
                            width={20}
                            height={20}
                            className="mr-2 rounded-full"
                          />
                          <span>BTC</span>
                        </div>
                      </td>
                      <td className="py-3 text-right">1.8%</td>
                      <td className="py-3 text-right text-green-500">2.8%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-muted p-3 text-sm">
                <span className="text-muted-foreground">Protocol Health:</span>
                <span className="font-medium text-green-500">Excellent</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
