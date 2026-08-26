import {
  BarChart3,
  TrendingUp,
  ShoppingBag,
  IndianRupee,
  Package,
  CalendarDays,
} from "lucide-react";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import DashboardLayout from "../components/layout/DashboardLayout";
import Card from "../components/ui/Card";

import { useState } from "react";

function Analytics() {
  const [period, setPeriod] = useState("6 Months");

  /*
    Mock historical data.

    Later this data will come from the backend
    through an API.
  */

  const monthlySpending = [
    {
      month: "Mar",
      spending: 3980,
      purchases: 18,
    },
    {
      month: "Apr",
      spending: 4250,
      purchases: 21,
    },
    {
      month: "May",
      spending: 4520,
      purchases: 23,
    },
    {
      month: "Jun",
      spending: 4380,
      purchases: 20,
    },
    {
      month: "Jul",
      spending: 4860,
      purchases: 24,
    },
    {
      month: "Aug",
      spending: 5120,
      purchases: 22,
    },
  ];

  const categorySpending = [
    {
      name: "Dairy",
      value: 1555,
    },
    {
      name: "Staples",
      value: 875,
    },
    {
      name: "Vegetables",
      value: 1118,
    },
    {
      name: "Snacks",
      value: 729,
    },
    {
      name: "Fruits",
      value: 543,
    },
  ];

  const topProducts = [
    {
      name: "Milk",
      purchases: 18,
      spending: 1080,
    },
    {
      name: "Bread",
      purchases: 16,
      spending: 640,
    },
    {
      name: "Eggs",
      purchases: 15,
      spending: 1200,
    },
    {
      name: "Banana",
      purchases: 12,
      spending: 720,
    },
    {
      name: "Rice",
      purchases: 10,
      spending: 2500,
    },
  ];

  const purchaseTimeline = [
    {
      month: "Mar",
      purchases: 18,
    },
    {
      month: "Apr",
      purchases: 21,
    },
    {
      month: "May",
      purchases: 23,
    },
    {
      month: "Jun",
      purchases: 20,
    },
    {
      month: "Jul",
      purchases: 24,
    },
    {
      month: "Aug",
      purchases: 22,
    },
  ];

  const totalSpending = monthlySpending.reduce(
    (total, month) => total + month.spending,
    0
  );

  const totalPurchases = monthlySpending.reduce(
    (total, month) => total + month.purchases,
    0
  );

  const averageMonthlySpend =
    totalSpending / monthlySpending.length;

  const averagePurchaseSpend =
    totalSpending / totalPurchases;

  const highestSpendingMonth =
    monthlySpending.reduce((highest, current) =>
      current.spending > highest.spending
        ? current
        : highest
    );

  /*
    Chart colors.

    These are intentionally limited to the
    Grolytics design palette.
  */

  const pieColors = [
    "#0F766E",
    "#14B8A6",
    "#2DD4BF",
    "#F59E0B",
    "#64748B",
  ];

  return (
    <DashboardLayout>

      {/* Header */}

      <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">

        <div>

          <h1 className="text-2xl font-bold text-[#102A43] md:text-3xl">
            Analytics
          </h1>

          <p className="mt-1 text-sm text-[#64748B]">
            Understand your grocery spending and purchase patterns.
          </p>

        </div>

        <select
          value={period}
          onChange={(event) =>
            setPeriod(event.target.value)
          }
          className="w-fit rounded-xl border border-[#DCE7E7] bg-white px-4 py-2.5 text-sm font-medium text-[#102A43] outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#CCFBF1]"
        >
          <option>6 Months</option>
          <option>3 Months</option>
          <option>1 Year</option>
        </select>

      </div>

      {/* Summary Cards */}

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {/* Total Spending */}

        <Card>

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-[#64748B]">
                Total Spending
              </p>

              <p className="mt-2 text-2xl font-bold text-[#102A43]">
                ₹{totalSpending.toLocaleString("en-IN")}
              </p>

              <p className="mt-1 text-xs text-[#64748B]">
                Last 6 months
              </p>

            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#CCFBF1] text-[#0F766E]">
              <IndianRupee size={20} />
            </div>

          </div>

        </Card>

        {/* Purchases */}

        <Card>

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-[#64748B]">
                Total Purchases
              </p>

              <p className="mt-2 text-2xl font-bold text-[#102A43]">
                {totalPurchases}
              </p>

              <p className="mt-1 text-xs text-[#64748B]">
                Recorded purchases
              </p>

            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6F6F4] text-[#0F766E]">
              <ShoppingBag size={20} />
            </div>

          </div>

        </Card>

        {/* Average Monthly */}

        <Card>

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-[#64748B]">
                Average Monthly
              </p>

              <p className="mt-2 text-2xl font-bold text-[#102A43]">
                ₹
                {Math.round(
                  averageMonthlySpend
                ).toLocaleString("en-IN")}
              </p>

              <p className="mt-1 text-xs text-[#64748B]">
                Monthly average
              </p>

            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF4D6] text-[#B77900]">
              <TrendingUp size={20} />
            </div>

          </div>

        </Card>

        {/* Average Purchase */}

        <Card>

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-[#64748B]">
                Average Purchase
              </p>

              <p className="mt-2 text-2xl font-bold text-[#102A43]">
                ₹
                {Math.round(
                  averagePurchaseSpend
                ).toLocaleString("en-IN")}
              </p>

              <p className="mt-1 text-xs text-[#64748B]">
                Per purchase
              </p>

            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#6366F1]">
              <BarChart3 size={20} />
            </div>

          </div>

        </Card>

      </div>

      {/* Spending Chart + Category Chart */}

      <div className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* Monthly Spending */}

        <Card className="xl:col-span-2">

          <div className="mb-6">

            <h2 className="text-lg font-semibold text-[#102A43]">
              Monthly Spending
            </h2>

            <p className="mt-1 text-sm text-[#64748B]">
              Grocery spending over time.
            </p>

          </div>

          <div className="h-[320px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <BarChart
                data={monthlySpending}
                margin={{
                  top: 10,
                  right: 10,
                  left: 0,
                  bottom: 0,
                }}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E2E8F0"
                />

                <XAxis
                  dataKey="month"
                  tick={{
                    fill: "#64748B",
                    fontSize: 12,
                  }}
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  tick={{
                    fill: "#64748B",
                    fontSize: 12,
                  }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) =>
                    `₹${value / 1000}k`
                  }
                />

                <Tooltip
                  formatter={(value) => [
                    `₹${value.toLocaleString("en-IN")}`,
                    "Spending",
                  ]}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid #DCE7E7",
                  }}
                />

                <Bar
                  dataKey="spending"
                  fill="#0F766E"
                  radius={[8, 8, 0, 0]}
                  barSize={42}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </Card>

        {/* Category Spending */}

        <Card>

          <div className="mb-4">

            <h2 className="text-lg font-semibold text-[#102A43]">
              Spending by Category
            </h2>

            <p className="mt-1 text-sm text-[#64748B]">
              Where your grocery spending goes.
            </p>

          </div>

          <div className="h-[250px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <PieChart>

                <Pie
                  data={categorySpending}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={90}
                  paddingAngle={3}
                >

                  {categorySpending.map(
                    (entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          pieColors[
                            index %
                              pieColors.length
                          ]
                        }
                      />
                    )
                  )}

                </Pie>

                <Tooltip
                  formatter={(value) =>
                    `₹${value.toLocaleString("en-IN")}`
                  }
                />

              </PieChart>

            </ResponsiveContainer>

          </div>

          {/* Category List */}

          <div className="space-y-3">

            {categorySpending.map(
              (category, index) => (

                <div
                  key={category.name}
                  className="flex items-center justify-between"
                >

                  <div className="flex items-center gap-2">

                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{
                        backgroundColor:
                          pieColors[
                            index %
                              pieColors.length
                          ],
                      }}
                    />

                    <span className="text-sm text-[#64748B]">
                      {category.name}
                    </span>

                  </div>

                  <span className="text-sm font-semibold text-[#102A43]">
                    ₹
                    {category.value.toLocaleString(
                      "en-IN"
                    )}
                  </span>

                </div>

              )
            )}

          </div>

        </Card>

      </div>

      {/* Purchase Timeline */}

      <div className="mb-6">

        <Card>

          <div className="mb-6 flex items-start gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#CCFBF1] text-[#0F766E]">
              <CalendarDays size={20} />
            </div>

            <div>

              <h2 className="text-lg font-semibold text-[#102A43]">
                Purchase Timeline
              </h2>

              <p className="mt-1 text-sm text-[#64748B]">
                Number of recorded purchases each month.
              </p>

            </div>

          </div>

          <div className="h-[300px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <LineChart
                data={purchaseTimeline}
                margin={{
                  top: 10,
                  right: 10,
                  left: 0,
                  bottom: 0,
                }}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E2E8F0"
                />

                <XAxis
                  dataKey="month"
                  tick={{
                    fill: "#64748B",
                    fontSize: 12,
                  }}
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  allowDecimals={false}
                  tick={{
                    fill: "#64748B",
                    fontSize: 12,
                  }}
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip
                  formatter={(value) => [
                    value,
                    "Purchases",
                  ]}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid #DCE7E7",
                  }}
                />

                <Line
                  type="monotone"
                  dataKey="purchases"
                  stroke="#0F766E"
                  strokeWidth={3}
                  dot={{
                    r: 5,
                    fill: "#0F766E",
                  }}
                  activeDot={{
                    r: 7,
                  }}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </Card>

      </div>

      {/* Top Products */}

      <Card>

        <div className="mb-6">

          <h2 className="text-lg font-semibold text-[#102A43]">
            Frequently Purchased Products
          </h2>

          <p className="mt-1 text-sm text-[#64748B]">
            Products that appear most often in your purchase history.
          </p>

        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">

          {topProducts.map((product, index) => (

            <div
              key={product.name}
              className="rounded-xl border border-[#DCE7E7] bg-[#F8FCFC] p-4"
            >

              <div className="mb-4 flex items-center justify-between">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#CCFBF1] text-[#0F766E]">
                  <Package size={17} />
                </div>

                <span className="text-xs font-semibold text-[#94A3B8]">
                  #{index + 1}
                </span>

              </div>

              <p className="text-sm font-semibold text-[#102A43]">
                {product.name}
              </p>

              <p className="mt-2 text-xs text-[#64748B]">
                {product.purchases} purchases
              </p>

              <p className="mt-1 text-sm font-bold text-[#0F766E]">
                ₹
                {product.spending.toLocaleString(
                  "en-IN"
                )}
              </p>

            </div>

          ))}

        </div>

      </Card>

      {/* Data note */}

      <div className="mt-6 rounded-xl border border-[#DCE7E7] bg-[#F0FAFA] p-4">

        <p className="text-xs leading-5 text-[#64748B]">

          <span className="font-semibold text-[#102A43]">
            About your analytics:
          </span>{" "}
          These charts are based on your recorded purchase
          history. Grolytics organizes your data so you can
          understand your own spending and purchasing patterns.

        </p>

      </div>

    </DashboardLayout>
  );
}

export default Analytics;