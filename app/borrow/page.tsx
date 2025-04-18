"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ArrowRight, Info, AlertTriangle } from "lucide-react"

const collateralTokens = [
  { id: "APT", name: "APT", price: 8.45, logo: "/aptos-abstract-representation.png" },
  { id: "BTC", name: "BTC", price: 62000, logo: "/bitcoin-symbol-gold.png" },
  { id: "ETH", name: "ETH", price: 3200, logo: "/ethereum-crystal.png" },
  { id: "SOL", name: "SOL", price: 140, logo: "/abstract-solana.png" },
]

export default function BorrowPage() {
  const [selectedToken, setSelectedToken] = useState(collateralTokens[0])
  const [collateralAmount, setCollateralAmount] = useState("1")
  const [ltv, setLtv] = useState(50)
  const [borrowTab, setBorrowTab] = useState("new")

  const collateralValue = Number.parseFloat(collateralAmount || "0") * selectedToken.price
  const borrowAmount = (collateralValue * ltv) / 100
  const maxLtv = 75
  const liquidationLtv = 85
  const borrowFee = borrowAmount * 0.005
  const healthFactor = maxLtv / ltv

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Borrow cdpUSD</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Deposit your Aptos assets as collateral and borrow cdpUSD stablecoins.
          </p>
        </div>

        <Tabs defaultValue="new" value={borrowTab} onValueChange={setBorrowTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="new">New Position</TabsTrigger>
            <TabsTrigger value="manage">Manage Positions</TabsTrigger>
          </TabsList>
          <TabsContent value="new">
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Deposit Collateral</CardTitle>
                  <CardDescription>Select an asset to deposit as collateral</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Select
                      value={selectedToken.id}
                      onValueChange={(value) => {
                        const token = collateralTokens.find((t) => t.id === value)
                        if (token) setSelectedToken(token)
                      }}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select token" />
                      </SelectTrigger>
                      <SelectContent>
                        {collateralTokens.map((token) => (
                          <SelectItem key={token.id} value={token.id}>
                            <div className="flex items-center">
                              <Image
                                src={token.logo || "/placeholder.svg"}
                                alt={token.name}
                                width={20}
                                height={20}
                                className="mr-2 rounded-full"
                              />
                              {token.name}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="flex-1">
                      <Input
                        type="number"
                        placeholder="0.0"
                        value={collateralAmount}
                        onChange={(e) => setCollateralAmount(e.target.value)}
                      />
                    </div>
                    <Button variant="outline" size="sm" onClick={() => setCollateralAmount("1")}>
                      Max
                    </Button>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Value:</span>
                    <span>${collateralValue.toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Borrow cdpUSD</CardTitle>
                  <CardDescription>Set your loan-to-value ratio</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Loan-to-Value: {ltv}%</span>
                      <span className="text-sm text-muted-foreground">Max: {maxLtv}%</span>
                    </div>
                    <Slider value={[ltv]} min={10} max={maxLtv} step={1} onValueChange={(value) => setLtv(value[0])} />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Safer</span>
                      <span>Riskier</span>
                    </div>
                  </div>

                  <div className="rounded-lg bg-muted p-4">
                    <div className="mb-2 flex justify-between">
                      <span className="text-sm">Borrow Amount:</span>
                      <span className="font-medium">${borrowAmount.toFixed(2)} cdpUSD</span>
                    </div>
                    <div className="mb-2 flex justify-between">
                      <span className="text-sm">Borrow Fee:</span>
                      <span className="text-sm">${borrowFee.toFixed(2)} cdpUSD (0.5%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Health Factor:</span>
                      <span
                        className={`text-sm font-medium ${
                          healthFactor > 1.5
                            ? "text-green-500"
                            : healthFactor > 1.2
                              ? "text-yellow-500"
                              : "text-red-500"
                        }`}
                      >
                        {healthFactor.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center rounded-lg bg-yellow-500/10 p-3 text-sm text-yellow-600 dark:text-yellow-400">
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    <span>Liquidation occurs if LTV exceeds {liquidationLtv}%. Monitor your position regularly.</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" disabled={collateralValue <= 0 || borrowAmount <= 0}>
                    Borrow cdpUSD <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="manage">
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Your Positions</CardTitle>
                <CardDescription>Manage your existing borrowing positions</CardDescription>
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
                  <Button variant="outline" onClick={() => setBorrowTab("new")}>
                    Create New Position
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 space-y-6 rounded-lg border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">Collateral Assets</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-4 text-left font-medium">Asset</th>
                  <th className="pb-4 text-right font-medium">Price</th>
                  <th className="pb-4 text-right font-medium">Max LTV</th>
                  <th className="pb-4 text-right font-medium">Liquidation LTV</th>
                </tr>
              </thead>
              <tbody>
                {collateralTokens.map((token) => (
                  <tr key={token.id} className="border-b border-border">
                    <td className="py-4">
                      <div className="flex items-center">
                        <Image
                          src={token.logo || "/placeholder.svg"}
                          alt={token.name}
                          width={24}
                          height={24}
                          className="mr-2 rounded-full"
                        />
                        <span>{token.name}</span>
                      </div>
                    </td>
                    <td className="py-4 text-right">${token.price.toFixed(2)}</td>
                    <td className="py-4 text-right">{maxLtv}%</td>
                    <td className="py-4 text-right">{liquidationLtv}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
