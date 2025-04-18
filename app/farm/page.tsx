"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Info, TrendingUp } from "lucide-react"

const farms = [
  {
    id: "apt-usda",
    name: "APT-tpxUSD LP",
    logo1: "/aptos-abstract-representation.png",
    logo2: "/golden-eagle-dollar.png",
    apy: 85.2,
    tvl: 12500000,
    rewards: "APT",
    multiplier: "40x",
    userStaked: 0,
    userRewards: 0,
    isHot: true,
  },
  {
    id: "apt-btc",
    name: "APT-BTC LP",
    logo1: "/aptos-abstract-representation.png",
    logo2: "/bitcoin-symbol-gold.png",
    apy: 65.8,
    tvl: 8500000,
    rewards: "APT",
    multiplier: "30x",
    userStaked: 0,
    userRewards: 0,
    isHot: true,
  },
  {
    id: "apt-eth",
    name: "APT-ETH LP",
    logo1: "/aptos-abstract-representation.png",
    logo2: "/ethereum-crystal.png",
    apy: 52.3,
    tvl: 6200000,
    rewards: "APT",
    multiplier: "25x",
    userStaked: 0,
    userRewards: 0,
    isHot: false,
  },
  {
    id: "usda-single",
    name: "tpxUSD",
    logo1: "/golden-eagle-dollar.png",
    logo2: null,
    apy: 42.1,
    tvl: 15800000,
    rewards: "APT",
    multiplier: "20x",
    userStaked: 0,
    userRewards: 0,
    isHot: false,
  },
]

export default function FarmPage() {
  const [selectedFarm, setSelectedFarm] = useState(farms[0])
  const [stakeAmount, setStakeAmount] = useState("")
  const [activeTab, setActiveTab] = useState("stake")

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Yield Farming</h1>
          <p className="mt-4 text-lg text-muted-foreground">Stake your LP tokens and earn APT rewards</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-xl font-semibold">Available Farms</h2>
            <div className="space-y-4">
              {farms.map((farm) => (
                <Card
                  key={farm.id}
                  className={`cursor-pointer transition-colors hover:bg-muted/50 ${
                    selectedFarm.id === farm.id ? "border-primary" : ""
                  }`}
                  onClick={() => setSelectedFarm(farm)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="relative mr-3 h-10 w-10">
                          <Image
                            src={farm.logo1 || "/placeholder.svg"}
                            alt={farm.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                          {farm.logo2 && (
                            <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full border-2 border-background">
                              <Image
                                src={farm.logo2 || "/placeholder.svg"}
                                alt=""
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-medium">{farm.name}</h3>
                            {farm.isHot && <Badge className="ml-2 bg-red-500 hover:bg-red-600">Hot</Badge>}
                          </div>
                          <p className="text-xs text-muted-foreground">Multiplier: {farm.multiplier}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-sm font-medium text-green-500">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          {farm.apy}% APR
                        </div>
                        <p className="text-xs text-muted-foreground">TVL: ${(farm.tvl / 1000000).toFixed(1)}M</p>
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
                  <div className="relative h-10 w-10">
                    <Image
                      src={selectedFarm.logo1 || "/placeholder.svg"}
                      alt={selectedFarm.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    {selectedFarm.logo2 && (
                      <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full border-2 border-background">
                        <Image
                          src={selectedFarm.logo2 || "/placeholder.svg"}
                          alt=""
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                      </div>
                    )}
                  </div>
                  <div>
                    <CardTitle>{selectedFarm.name} Farm</CardTitle>
                    <CardDescription>
                      Earn {selectedFarm.rewards} • {selectedFarm.apy}% APR
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="stake" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="stake">Stake</TabsTrigger>
                    <TabsTrigger value="unstake">Unstake</TabsTrigger>
                  </TabsList>
                  <TabsContent value="stake" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <label htmlFor="stake-amount" className="text-sm font-medium">
                          Amount to Stake
                        </label>
                        <span className="text-xs text-muted-foreground">Balance: 0 {selectedFarm.name}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Input
                          id="stake-amount"
                          type="number"
                          placeholder="0.0"
                          value={stakeAmount}
                          onChange={(e) => setStakeAmount(e.target.value)}
                        />
                        <Button variant="outline" size="sm" onClick={() => setStakeAmount("0")} disabled>
                          Max
                        </Button>
                      </div>
                    </div>

                    <div className="rounded-lg bg-muted p-4">
                      <div className="mb-2 flex justify-between">
                        <span className="text-sm">Estimated APR:</span>
                        <span className="font-medium text-green-500">{selectedFarm.apy}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Estimated Daily Earnings:</span>
                        <span className="text-sm">
                          {((Number.parseFloat(stakeAmount || "0") * selectedFarm.apy) / 365 / 100).toFixed(6)}{" "}
                          {selectedFarm.rewards}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center rounded-lg bg-muted p-4 text-sm">
                      <Info className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>
                        You need to provide liquidity to get{" "}
                        {selectedFarm.name.includes("USDA")
                          ? selectedFarm.name.replace("USDA", "tpxUSD")
                          : selectedFarm.name}{" "}
                        LP tokens first.
                      </span>
                    </div>
                  </TabsContent>
                  <TabsContent value="unstake" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <label htmlFor="unstake-amount" className="text-sm font-medium">
                          Amount to Unstake
                        </label>
                        <span className="text-xs text-muted-foreground">Staked: 0 {selectedFarm.name}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Input
                          id="unstake-amount"
                          type="number"
                          placeholder="0.0"
                          value={stakeAmount}
                          onChange={(e) => setStakeAmount(e.target.value)}
                        />
                        <Button variant="outline" size="sm" onClick={() => setStakeAmount("0")} disabled>
                          Max
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center rounded-lg bg-muted p-4 text-sm">
                      <Info className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>You don't have any staked tokens in this farm yet.</span>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter>
                <Button className="w-full" disabled={!stakeAmount || Number.parseFloat(stakeAmount) <= 0}>
                  {activeTab === "stake" ? "Stake" : "Unstake"} {selectedFarm.name}{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Your Farming Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="mb-4 rounded-full bg-muted p-4">
                      <Info className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <h3 className="mb-2 text-lg font-medium">No Active Farms</h3>
                    <p className="text-sm text-muted-foreground">You don't have any active farming positions yet.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 space-y-6 rounded-lg border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">How Farming Works</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border p-4 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="mb-2 font-medium">Provide Liquidity</h3>
              <p className="text-sm text-muted-foreground">
                Add liquidity to one of our supported pools to receive LP tokens.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="mb-2 font-medium">Stake LP Tokens</h3>
              <p className="text-sm text-muted-foreground">
                Stake your LP tokens in the corresponding farm to start earning rewards.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="mb-2 font-medium">Harvest Rewards</h3>
              <p className="text-sm text-muted-foreground">
                Claim your APT rewards anytime or compound them for even higher returns.
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-lg bg-muted p-4 text-sm">
            <p className="font-medium">Important Notes:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Farms have different reward multipliers based on their importance to the protocol.</li>
              <li>APR is variable and depends on the total amount staked in each farm.</li>
              <li>There is a 0.5% withdrawal fee if you unstake within 72 hours of staking.</li>
              <li>Rewards are distributed continuously and can be harvested at any time.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
