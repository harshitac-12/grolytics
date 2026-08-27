import {
  IndianRupee,
  ReceiptText,
  ShoppingBag,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Package,
  CalendarDays,
  Activity,
} from "lucide-react";

import { useEffect, useState } from "react";
import axios from "axios";

import DashboardLayout from "../../components/layout/DashboardLayout";
import Card from "../../components/ui/Card";

function Dashboard() {
  // -----------------------------
  // Dashboard data
  // -----------------------------

  const [dashboardData, setDashboardData] = useState({
    totalBills: 0,
    monthlySpend: 0,
    topProduct: "Loading...",
    averageSpend: 0,
  });

  const [backendStatus, setBackendStatus] =
    useState("Checking backend...");

  const [loading, setLoading] = useState(true);

  // -----------------------------
  // Get data from backend
  // -----------------------------

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Check backend
        const healthResponse = await axios.get(
          "http://localhost:5000/api/health"
        );

        setBackendStatus(
          healthResponse.data.message
        );

        // Get dashboard data
        const dashboardResponse = await axios.get(
          "http://localhost:5000/api/dashboard"
        );

        setDashboardData(
          dashboardResponse.data
        );
      } catch (error) {
        console.error(
          "Dashboard API error:",
          error
        );

        setBackendStatus(
          "Backend unavailable"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // -----------------------------
  // Chart mock data
  // -----------------------------

  const monthlyData = [
    {
      month: "Mar",
      amount: 3980,
    },
    {
      month: "Apr",
      amount: 4250,
    },
    {
      month: "May",
      amount: 4520,
    },
    {
      month: "Jun",
      amount: 4380,
    },
    {
      month: "Jul",
      amount: 4860,
    },
    {
      month: "Aug",
      amount: 5120,
    },
  ];

  const categoryData = [
    {
      category: "Dairy",
      amount: 1555,
      percentage: 30,
    },
    {
      category: "Staples",
      amount: 875,
      percentage: 17,
    },
    {
      category: "Vegetables",
      amount: 1118,
      percentage: 22,
    },
    {
      category: "Snacks",
      amount: 729,
      percentage: 14,
    },
    {
      category: "Fruits",
      amount: 543,
      percentage: 11,
    },
  ];

  const recentPurchases = [
    {
      product: "Milk",
      store: "Blinkit",
      date: "25 Aug 2026",
      amount: 120,
    },
    {
      product: "Basmati Rice",
      store: "Zepto",
      date: "23 Aug 2026",
      amount: 250,
    },
    {
      product: "Bread",
      store: "Instamart",
      date: "21 Aug 2026",
      amount: 40,
    },
    {
      product: "Cooking Oil",
      store: "BigBasket",
      date: "19 Aug 2026",
      amount: 180,
    },
    {
      product: "Eggs",
      store: "Blinkit",
      date: "18 Aug 2026",
      amount: 96,
    },
  ];

  // -----------------------------
  // Find highest monthly spending
  // -----------------------------

  const highestMonth = monthlyData.reduce(
    (highest, current) =>
      current.amount > highest.amount
        ? current
        : highest
  );

  // -----------------------------
  // UI
  // -----------------------------

  return (
    <DashboardLayout>

      {/* ================================= */}
      {/* HEADER */}
      {/* ================================= */}

      <div className="mb-8">

        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

          <div>

            <h1 className="text-2xl font-bold text-[#102A43] md:text-3xl">
              Dashboard
            </h1>

            <p className="mt-1 text-sm text-[#64748B]">
              Here's an overview of your grocery activity.
            </p>

          </div>

          {/* Backend status */}

          <div className="flex items-center gap-3 rounded-xl border border-[#DCE7E7] bg-white px-4 py-3">

            <span
              className={`h-2.5 w-2.5 rounded-full ${
                backendStatus ===
                "Backend unavailable"
                  ? "bg-red-500"
                  : backendStatus ===
                    "Checking backend..."
                  ? "bg-yellow-400"
                  : "bg-emerald-500"
              }`}
            />

            <div>

              <p className="text-xs font-semibold text-[#102A43]">
                Backend
              </p>

              <p className="text-xs text-[#64748B]">
                {backendStatus}
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* ================================= */}
      {/* SUMMARY CARDS */}
      {/* ================================= */}

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {/* Total Bills */}

        <Card>

          <div className="flex items-start justify-between">

            <div>

              <p className="text-sm text-[#64748B]">
                Total Bills
              </p>

              <p className="mt-2 text-2xl font-bold text-[#102A43]">

                {loading
                  ? "..."
                  : dashboardData.totalBills}

              </p>

              <div className="mt-2 flex items-center gap-1 text-xs text-emerald-600">

                <ArrowUpRight size={14} />

                <span>
                  Recorded purchases
                </span>

              </div>

            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#CCFBF1] text-[#0F766E]">

              <ReceiptText size={21} />

            </div>

          </div>

        </Card>

        {/* Monthly Spend */}

        <Card>

          <div className="flex items-start justify-between">

            <div>

              <p className="text-sm text-[#64748B]">
                Monthly Spend
              </p>

              <p className="mt-2 text-2xl font-bold text-[#102A43]">

                ₹
                {loading
                  ? "..."
                  : dashboardData.monthlySpend.toLocaleString(
                      "en-IN"
                    )}

              </p>

              <div className="mt-2 flex items-center gap-1 text-xs text-emerald-600">

                <ArrowUpRight size={14} />

                <span>
                  Current month
                </span>

              </div>

            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E6F6F4] text-[#0F766E]">

              <IndianRupee size={21} />

            </div>

          </div>

        </Card>

        {/* Top Product */}

        <Card>

          <div className="flex items-start justify-between">

            <div className="min-w-0">

              <p className="text-sm text-[#64748B]">
                Top Product
              </p>

              <p className="mt-2 truncate text-2xl font-bold text-[#102A43]">

                {loading
                  ? "..."
                  : dashboardData.topProduct}

              </p>

              <div className="mt-2 flex items-center gap-1 text-xs text-[#64748B]">

                <Package size={14} />

                <span>
                  Most purchased
                </span>

              </div>

            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF4D6] text-[#B77900]">

              <ShoppingBag size={21} />

            </div>

          </div>

        </Card>

        {/* Average Spend */}

        <Card>

          <div className="flex items-start justify-between">

            <div>

              <p className="text-sm text-[#64748B]">
                Average Spend
              </p>

              <p className="mt-2 text-2xl font-bold text-[#102A43]">

                ₹
                {loading
                  ? "..."
                  : dashboardData.averageSpend.toLocaleString(
                      "en-IN"
                    )}

              </p>

              <div className="mt-2 flex items-center gap-1 text-xs text-[#64748B]">

                <Activity size={14} />

                <span>
                  Per purchase
                </span>

              </div>

            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#6366F1]">

              <TrendingUp size={21} />

            </div>

          </div>

        </Card>

      </div>

      {/* ================================= */}
      {/* CHART + CATEGORY */}
      {/* ================================= */}

      <div className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* Monthly Spending */}

        <Card className="xl:col-span-2">

          <div className="mb-6 flex items-start justify-between">

            <div>

              <h2 className="text-lg font-semibold text-[#102A43]">
                Monthly Spending
              </h2>

              <p className="mt-1 text-sm text-[#64748B]">
                Your grocery spending over the last 6 months.
              </p>

            </div>

            <div className="flex items-center gap-1 rounded-lg bg-[#F0FAFA] px-3 py-1.5 text-xs font-medium text-[#0F766E]">

              <TrendingUp size={14} />

              6 Months

            </div>

          </div>

          {/* Simple bar chart */}

          <div className="flex h-[280px] items-end gap-3 sm:gap-5">

            {monthlyData.map((item) => {

              const height =
                (item.amount /
                  highestMonth.amount) *
                100;

              return (

                <div
                  key={item.month}
                  className="flex h-full flex-1 flex-col items-center justify-end"
                >

                  <div className="mb-2 text-xs font-medium text-[#64748B]">

                    ₹
                    {(
                      item.amount / 1000
                    ).toFixed(1)}
                    k

                  </div>

                  <div
                    className="w-full max-w-[55px] rounded-t-xl bg-[#0F766E] transition hover:bg-[#115E59]"
                    style={{
                      height: `${height}%`,
                    }}
                    title={`₹${item.amount.toLocaleString(
                      "en-IN"
                    )}`}
                  />

                  <p className="mt-3 text-xs font-medium text-[#64748B]">
                    {item.month}
                  </p>

                </div>

              );
            })}

          </div>

        </Card>

        {/* Category Spending */}

        <Card>

          <div className="mb-6">

            <h2 className="text-lg font-semibold text-[#102A43]">
              Spending by Category
            </h2>

            <p className="mt-1 text-sm text-[#64748B]">
              Distribution of this month's spending.
            </p>

          </div>

          <div className="space-y-5">

            {categoryData.map((item) => (

              <div key={item.category}>

                <div className="mb-2 flex items-center justify-between">

                  <span className="text-sm font-medium text-[#102A43]">
                    {item.category}
                  </span>

                  <span className="text-sm text-[#64748B]">
                    ₹
                    {item.amount.toLocaleString(
                      "en-IN"
                    )}
                  </span>

                </div>

                <div className="h-2 overflow-hidden rounded-full bg-[#E6F1F1]">

                  <div
                    className="h-full rounded-full bg-[#0F766E]"
                    style={{
                      width: `${item.percentage}%`,
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </Card>

      </div>

      {/* ================================= */}
      {/* RECENT PURCHASES + ACTIVITY */}
      {/* ================================= */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* Recent Purchases */}

        <Card className="xl:col-span-2">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <h2 className="text-lg font-semibold text-[#102A43]">
                Recent Purchases
              </h2>

              <p className="mt-1 text-sm text-[#64748B]">
                Your latest grocery purchases.
              </p>

            </div>

            <button className="flex items-center gap-1 text-sm font-medium text-[#0F766E] hover:text-[#115E59]">

              View all

              <ArrowUpRight size={15} />

            </button>

          </div>

          <div className="space-y-1">

            {recentPurchases.map(
              (purchase, index) => (

                <div
                  key={index}
                  className="flex items-center justify-between rounded-xl p-3 transition hover:bg-[#F8FCFC]"
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#CCFBF1] text-[#0F766E]">

                      <ShoppingBag size={18} />

                    </div>

                    <div>

                      <p className="text-sm font-medium text-[#102A43]">
                        {purchase.product}
                      </p>

                      <p className="mt-1 text-xs text-[#64748B]">
                        {purchase.store}
                      </p>

                    </div>

                  </div>

                  <div className="text-right">

                    <p className="text-sm font-semibold text-[#102A43]">
                      ₹
                      {purchase.amount.toLocaleString(
                        "en-IN"
                      )}
                    </p>

                    <p className="mt-1 flex items-center justify-end gap-1 text-xs text-[#94A3B8]">

                      <CalendarDays size={12} />

                      {purchase.date}

                    </p>

                  </div>

                </div>

              )
            )}

          </div>

        </Card>

        {/* Quick Summary */}

        <Card>

          <div className="mb-6">

            <h2 className="text-lg font-semibold text-[#102A43]">
              Quick Summary
            </h2>

            <p className="mt-1 text-sm text-[#64748B]">
              A quick look at your activity.
            </p>

          </div>

          <div className="space-y-4">

            <div className="rounded-xl bg-[#F0FAFA] p-4">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#CCFBF1] text-[#0F766E]">

                  <ReceiptText size={17} />

                </div>

                <div>

                  <p className="text-xs text-[#64748B]">
                    Highest monthly spending
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#102A43]">
                    {highestMonth.month}
                  </p>

                </div>

              </div>

              <p className="mt-3 text-lg font-bold text-[#0F766E]">
                ₹
                {highestMonth.amount.toLocaleString(
                  "en-IN"
                )}
              </p>

            </div>

            <div className="rounded-xl bg-[#FFF9E8] p-4">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF4D6] text-[#B77900]">

                  <Package size={17} />

                </div>

                <div>

                  <p className="text-xs text-[#64748B]">
                    Top category
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#102A43]">
                    Dairy
                  </p>

                </div>

              </div>

              <p className="mt-3 text-lg font-bold text-[#B77900]">
                ₹1,555
              </p>

            </div>

            <div className="rounded-xl bg-[#EEF2FF] p-4">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E0E7FF] text-[#6366F1]">

                  <TrendingUp size={17} />

                </div>

                <div>

                  <p className="text-xs text-[#64748B]">
                    Average purchase
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#102A43]">
                    ₹
                    {dashboardData.averageSpend.toLocaleString(
                      "en-IN"
                    )}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </Card>

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;