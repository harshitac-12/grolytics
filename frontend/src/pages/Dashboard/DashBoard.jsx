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
          <p className="mb-1 text-sm font-medium text-blue-600">
            Wednesday, 26 August 2026
          </p>

          <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Good Morning, Harshita 👋
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Here's an overview of your grocery activity.
          </p>
        </div>

        <button className="flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700">
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
              <h2 className="text-lg font-semibold text-slate-900">
                Monthly Spending
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Grocery spending over the last six months
              </p>
            </div>

            <select className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 outline-none focus:border-blue-500">
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
                  <div className="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 rounded-lg bg-slate-900 px-2 py-1 text-xs text-white group-hover:block">
                    ₹{item.amount.toLocaleString("en-IN")}
                  </div>

                  <div
                    className="w-full rounded-t-lg bg-blue-500 transition hover:bg-blue-600"
                    style={{
                      height: `${item.height}%`,
                    }}
                  />
                </div>

                <span className="text-xs text-slate-500">
                  {item.month}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Spending Summary */}
        <Card>
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-slate-900">
              Spending Summary
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              August 2026
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <div className="mb-2 flex justify-between">
                <span className="text-sm text-slate-600">
                  Dairy
                </span>

                <span className="text-sm font-medium text-slate-800">
                  ₹1,555
                </span>
              </div>

              <div className="h-2 rounded-full bg-slate-100">
                <div className="h-2 w-[72%] rounded-full bg-blue-500" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between">
                <span className="text-sm text-slate-600">
                  Staples
                </span>

                <span className="text-sm font-medium text-slate-800">
                  ₹875
                </span>
              </div>

              <div className="h-2 rounded-full bg-slate-100">
                <div className="h-2 w-[45%] rounded-full bg-teal-500" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between">
                <span className="text-sm text-slate-600">
                  Vegetables
                </span>

                <span className="text-sm font-medium text-slate-800">
                  ₹1,118
                </span>
              </div>

              <div className="h-2 rounded-full bg-slate-100">
                <div className="h-2 w-[58%] rounded-full bg-amber-500" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between">
                <span className="text-sm text-slate-600">
                  Snacks
                </span>

                <span className="text-sm font-medium text-slate-800">
                  ₹729
                </span>
              </div>

              <div className="h-2 rounded-full bg-slate-100">
                <div className="h-2 w-[35%] rounded-full bg-purple-500" />
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-slate-100 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Total spending
              </span>

              <span className="text-lg font-bold text-slate-900">
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
              <h2 className="text-lg font-semibold text-slate-900">
                Recent Purchases
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Your latest grocery purchases
              </p>
            </div>

            <button className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">
              View all
              <ArrowUpRight size={15} />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px]">
              <thead>
                <tr className="border-b border-slate-100 text-left text-xs text-slate-500">
                  <th className="pb-3 font-medium">Product</th>
                  <th className="pb-3 font-medium">Category</th>
                  <th className="pb-3 font-medium">Store</th>
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 text-right font-medium">
                    Amount
                  </th>
                </tr>
              </thead>

              <tbody>
                {recentPurchases.map((purchase) => (
                  <tr
                    key={purchase.id}
                    className="border-b border-slate-50 last:border-0"
                  >
                    <td className="py-4 text-sm font-medium text-slate-800">
                      {purchase.product}
                    </td>

                    <td className="py-4">
                      <Badge variant="info">
                        {purchase.category}
                      </Badge>
                    </td>

                    <td className="py-4 text-sm text-slate-600">
                      {purchase.store}
                    </td>

                    <td className="py-4 text-sm text-slate-500">
                      {purchase.date}
                    </td>

                    <td className="py-4 text-right text-sm font-semibold text-slate-800">
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
            <h2 className="text-lg font-semibold text-slate-900">
              Most Purchased
            </h2>

            <p className="mt-1 text-xs text-slate-500">
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
                    <span className="text-sm font-medium text-slate-700">
                      {index + 1}. {product.name}
                    </span>

                    <span className="text-xs text-slate-500">
                      {product.purchases} purchases
                    </span>
                  </div>

                  <div className="h-2 rounded-full bg-slate-100">
                    <div
                      className="h-2 rounded-full bg-teal-500"
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