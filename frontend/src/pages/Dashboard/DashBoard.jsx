import {
  ShoppingCart,
  IndianRupee,
  Package,
  TrendingUp,
  Upload,
  ArrowUpRight,
} from "lucide-react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import Card from "../../components/ui/Card";
import StatCard from "../../components/ui/StatCard";
import Badge from "../../components/ui/Badge";

function Dashboard() {
  const recentPurchases = [
    {
      id: 1,
      product: "Milk",
      category: "Dairy",
      store: "Blinkit",
      date: "25 Aug 2026",
      amount: "₹60",
    },
    {
      id: 2,
      product: "Basmati Rice",
      category: "Staples",
      store: "Zepto",
      date: "23 Aug 2026",
      amount: "₹250",
    },
    {
      id: 3,
      product: "Bread",
      category: "Bakery",
      store: "Instamart",
      date: "21 Aug 2026",
      amount: "₹80",
    },
    {
      id: 4,
      product: "Cooking Oil",
      category: "Staples",
      store: "BigBasket",
      date: "19 Aug 2026",
      amount: "₹180",
    },
    {
      id: 5,
      product: "Eggs",
      category: "Dairy",
      store: "Blinkit",
      date: "18 Aug 2026",
      amount: "₹72",
    },
  ];

  const topProducts = [
    { name: "Milk", purchases: 18 },
    { name: "Bread", purchases: 14 },
    { name: "Eggs", purchases: 12 },
    { name: "Banana", purchases: 10 },
    { name: "Rice", purchases: 8 },
  ];

  const monthlySpending = [
    { month: "Mar", amount: 3200, height: 55 },
    { month: "Apr", amount: 4100, height: 68 },
    { month: "May", amount: 3600, height: 60 },
    { month: "Jun", amount: 4700, height: 78 },
    { month: "Jul", amount: 4200, height: 70 },
    { month: "Aug", amount: 4860, height: 85 },
  ];

  return (
    <DashboardLayout>

      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">

        <div>
          <p className="mb-1 text-sm font-medium text-[#0F766E]">
            Wednesday, 26 August 2026
          </p>

          <h1 className="text-2xl font-bold text-[#102A43] md:text-3xl">
            Good Morning, Harshita 👋
          </h1>

          <p className="mt-1 text-sm text-[#64748B]">
            Here's an overview of your grocery activity.
          </p>
        </div>

        <button className="flex w-fit items-center gap-2 rounded-xl bg-[#0F766E] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#115E59]">
          <Upload size={18} />
          Upload Bill
        </button>

      </div>

      {/* Statistics */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Total Purchases"
          value="128"
          subtitle="This year"
          icon={<ShoppingCart size={20} />}
        />

        <StatCard
          title="Monthly Spend"
          value="₹4,860"
          subtitle="August 2026"
          icon={<IndianRupee size={20} />}
        />

        <StatCard
          title="Unique Products"
          value="47"
          subtitle="Across all purchases"
          icon={<Package size={20} />}
        />

        <StatCard
          title="Average Spend"
          value="₹742"
          subtitle="Per purchase"
          icon={<TrendingUp size={20} />}
        />

      </div>

      {/* Charts */}
      <div className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* Monthly Spending */}
        <Card className="xl:col-span-2">

          <div className="mb-6 flex items-center justify-between">

            <div>
              <h2 className="text-lg font-semibold text-[#102A43]">
                Monthly Spending
              </h2>

              <p className="mt-1 text-xs text-[#64748B]">
                Grocery spending over the last six months
              </p>
            </div>

            <select className="rounded-lg border border-[#DCE7E7] bg-white px-3 py-2 text-xs text-[#64748B] outline-none focus:border-[#0F766E]">
              <option>6 Months</option>
              <option>This Year</option>
            </select>

          </div>

          <div className="flex h-64 items-end gap-3 sm:gap-6">

            {monthlySpending.map((item) => (
              <div
                key={item.month}
                className="flex h-full flex-1 flex-col items-center justify-end gap-2"
              >

                <div className="group relative flex h-52 w-full items-end">

                  <div className="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 rounded-lg bg-[#102A43] px-2 py-1 text-xs text-white group-hover:block">
                    ₹{item.amount.toLocaleString("en-IN")}
                  </div>

                  <div
                    className="w-full rounded-t-lg bg-[#0F766E] transition hover:bg-[#115E59]"
                    style={{
                      height: `${item.height}%`,
                    }}
                  />

                </div>

                <span className="text-xs text-[#64748B]">
                  {item.month}
                </span>

              </div>
            ))}

          </div>

        </Card>

        {/* Spending Summary */}
        <Card>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-[#102A43]">
              Spending Summary
            </h2>

            <p className="mt-1 text-xs text-[#64748B]">
              August 2026
            </p>
          </div>

          <div className="space-y-5">

            {/* Dairy */}
            <div>
              <div className="mb-2 flex justify-between">
                <span className="text-sm text-[#64748B]">
                  Dairy
                </span>

                <span className="text-sm font-medium text-[#102A43]">
                  ₹1,555
                </span>
              </div>

              <div className="h-2 rounded-full bg-[#E6F0F0]">
                <div className="h-2 w-[72%] rounded-full bg-[#0F766E]" />
              </div>
            </div>

            {/* Staples */}
            <div>
              <div className="mb-2 flex justify-between">
                <span className="text-sm text-[#64748B]">
                  Staples
                </span>

                <span className="text-sm font-medium text-[#102A43]">
                  ₹875
                </span>
              </div>

              <div className="h-2 rounded-full bg-[#E6F0F0]">
                <div className="h-2 w-[45%] rounded-full bg-[#2A9D8F]" />
              </div>
            </div>

            {/* Vegetables */}
            <div>
              <div className="mb-2 flex justify-between">
                <span className="text-sm text-[#64748B]">
                  Vegetables
                </span>

                <span className="text-sm font-medium text-[#102A43]">
                  ₹1,118
                </span>
              </div>

              <div className="h-2 rounded-full bg-[#E6F0F0]">
                <div className="h-2 w-[58%] rounded-full bg-[#F4B942]" />
              </div>
            </div>

            {/* Snacks */}
            <div>
              <div className="mb-2 flex justify-between">
                <span className="text-sm text-[#64748B]">
                  Snacks
                </span>

                <span className="text-sm font-medium text-[#102A43]">
                  ₹729
                </span>
              </div>

              <div className="h-2 rounded-full bg-[#E6F0F0]">
                <div className="h-2 w-[35%] rounded-full bg-[#8B5CF6]" />
              </div>
            </div>

          </div>

          <div className="mt-6 border-t border-[#DCE7E7] pt-4">

            <div className="flex items-center justify-between">

              <span className="text-sm text-[#64748B]">
                Total spending
              </span>

              <span className="text-lg font-bold text-[#102A43]">
                ₹4,860
              </span>

            </div>

          </div>

        </Card>

      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* Recent Purchases */}
        <Card className="xl:col-span-2">

          <div className="mb-5 flex items-center justify-between">

            <div>
              <h2 className="text-lg font-semibold text-[#102A43]">
                Recent Purchases
              </h2>

              <p className="mt-1 text-xs text-[#64748B]">
                Your latest grocery purchases
              </p>
            </div>

            <button className="flex items-center gap-1 text-sm font-medium text-[#0F766E] hover:text-[#115E59]">
              View all
              <ArrowUpRight size={15} />
            </button>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[650px]">

              <thead>
                <tr className="border-b border-[#DCE7E7] text-left text-xs text-[#64748B]">
                  <th className="pb-3 font-medium">
                    Product
                  </th>

                  <th className="pb-3 font-medium">
                    Category
                  </th>

                  <th className="pb-3 font-medium">
                    Store
                  </th>

                  <th className="pb-3 font-medium">
                    Date
                  </th>

                  <th className="pb-3 text-right font-medium">
                    Amount
                  </th>
                </tr>
              </thead>

              <tbody>

                {recentPurchases.map((purchase) => (
                  <tr
                    key={purchase.id}
                    className="border-b border-[#EDF4F4] last:border-0"
                  >

                    <td className="py-4 text-sm font-medium text-[#102A43]">
                      {purchase.product}
                    </td>

                    <td className="py-4">
                      <Badge variant="info">
                        {purchase.category}
                      </Badge>
                    </td>

                    <td className="py-4 text-sm text-[#64748B]">
                      {purchase.store}
                    </td>

                    <td className="py-4 text-sm text-[#64748B]">
                      {purchase.date}
                    </td>

                    <td className="py-4 text-right text-sm font-semibold text-[#102A43]">
                      {purchase.amount}
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </Card>

        {/* Most Purchased */}
        <Card>

          <div className="mb-5">

            <h2 className="text-lg font-semibold text-[#102A43]">
              Most Purchased
            </h2>

            <p className="mt-1 text-xs text-[#64748B]">
              Based on your purchase history
            </p>

          </div>

          <div className="space-y-5">

            {topProducts.map((product, index) => {

              const percentage =
                (product.purchases / topProducts[0].purchases) * 100;

              return (
                <div key={product.name}>

                  <div className="mb-2 flex items-center justify-between">

                    <span className="text-sm font-medium text-[#102A43]">
                      {index + 1}. {product.name}
                    </span>

                    <span className="text-xs text-[#64748B]">
                      {product.purchases} purchases
                    </span>

                  </div>

                  <div className="h-2 rounded-full bg-[#E6F0F0]">

                    <div
                      className="h-2 rounded-full bg-[#0F766E]"
                      style={{
                        width: `${percentage}%`,
                      }}
                    />

                  </div>

                </div>
              );
            })}

          </div>

        </Card>

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;