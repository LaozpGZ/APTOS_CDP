"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ArrowRight, TrendingUp, Info } from "lucide-react"

const pools = [
  {
    id: "usda",
    name: "tpxUSD",
    logo: "/golden-eagle-dollar.png",
    apy: 8.5,
    tvl: 45000000,
    walletBalance: 1000,
  },
  {
    id: "apt",
    name: "APT",
    logo: "/aptos-abstract-representation.png",
    apy: 4.2,
    tvl: 25000000,
    walletBalance: 50,
  },
  {
    id: "btc",
    name: "BTC",
    logo: "/bitcoin-symbol-gold.png",
    apy: 2.8,
    tvl: 15000000,
    walletBalance: 0.05,
  },
  {
    id: "eth",
    name: "ETH",
    logo: "/ethereum-crystal.png",
    apy: 3.5,
    tvl: 20000000,
    walletBalance: 0.5,
  },
]

export default function EarnPage() {
  const [activeTab, setActiveTab] = useState("deposit")
  const [selectedPool, setSelectedPool] = useState(pools[0])
  const [amount, setAmount] = useState("")

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Earn Yield</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Deposit assets into Triplex's lending pools and earn interest.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-xl font-semibold">Available Pools</h2>
            <div className="space-y-4">
              {pools.map((pool) => (
                <Card
                  key={pool.id}
                  className={`cursor-pointer transition-colors hover:bg-muted/50 ${
                    selectedPool.id === pool.id ? "border-primary" : ""
                  }`}
                  onClick={() => setSelectedPool(pool)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Image
                          src={pool.logo || "/placeholder.svg"}
                          alt={pool.name}
                          width={32}
                          height={32}
                          className="mr-3 rounded-full"
                        />
                        <div>
                          <h3 className="font-medium">{pool.name}</h3>
                          <p className="text-xs text-muted-foreground">
                            Balance: {pool.walletBalance} {pool.name}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-sm font-medium text-green-500">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          {pool.apy}% APY
                        </div>
                        <p className="text-xs text-muted-foreground">TVL: ${(pool.tvl / 1000000).toFixed(1)}M</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Image
                    src={selectedPool.logo || "/placeholder.svg"}
                    alt={selectedPool.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle>{selectedPool.name} Pool</CardTitle>
                    <CardDescription>Current APY: {selectedPool.apy}%</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="deposit" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="deposit">Deposit</TabsTrigger>
                    <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
                  </TabsList>
                  <TabsContent value="deposit" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <label htmlFor="deposit-amount" className="text-sm font-medium">
                          Amount to Deposit
                        </label>
                        <span className="text-xs text-muted-foreground">
                          Balance: {selectedPool.walletBalance} {selectedPool.name}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <Input
                          id="deposit-amount"
                          type="number"
                          placeholder="0.0"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setAmount(selectedPool.walletBalance.toString())}
                        >
                          Max
                        </Button>
                      </div>
                    </div>

                    <div className="rounded-lg bg-muted p-4">
                      <div className="mb-2 flex justify-between">
                        <span className="text-sm">Estimated APY:</span>
                        <span className="font-medium text-green-500">{selectedPool.apy}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Estimated Daily Earnings:</span>
                        <span className="text-sm">
                          {((Number.parseFloat(amount || "0") * selectedPool.apy) / 365 / 100).toFixed(6)}{" "}
                          {selectedPool.name}
                        </span>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="withdraw" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <label htmlFor="withdraw-amount" className="text-sm font-medium">
                          Amount to Withdraw
                        </label>
                        <span className="text-xs text-muted-foreground">Deposited: 0 {selectedPool.name}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Input
                          id="withdraw-amount"
                          type="number"
                          placeholder="0.0"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                        />
                        <Button variant="outline" size="sm" onClick={() => setAmount("0")} disabled>
                          Max
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center rounded-lg bg-muted p-4 text-sm">
                      <Info className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>You don't have any deposits in this pool yet.</span>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter>
                <Button className="w-full" disabled={!amount || Number.parseFloat(amount) <= 0}>
                  {activeTab === "deposit" ? "Deposit" : "Withdraw"} {selectedPool.name}{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Your Deposits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="mb-4 rounded-full bg-muted p-4">
                    <Info className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="mb-2 text-lg font-medium">No Active Deposits</h3>
                  <p className="text-sm text-muted-foreground">You don't have any active deposits yet.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
