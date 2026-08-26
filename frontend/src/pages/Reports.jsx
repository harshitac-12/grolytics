import {
  FileText,
  CalendarDays,
  IndianRupee,
  ShoppingBag,
  Download,
  TrendingUp,
  Package,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useState } from "react";

import DashboardLayout from "../components/layout/DashboardLayout";
import Card from "../components/ui/Card";

function Reports() {
  const [reportType, setReportType] = useState("Monthly");

  const reportData = {
    Weekly: {
      totalSpend: 1240,
      purchases: 12,
      items: 28,
      average: 103,
      chart: [
        { period: "Mon", spending: 180 },
        { period: "Tue", spending: 120 },
        { period: "Wed", spending: 250 },
        { period: "Thu", spending: 90 },
        { period: "Fri", spending: 210 },
        { period: "Sat", spending: 240 },
        { period: "Sun", spending: 150 },
      ],
    },

    Monthly: {
      totalSpend: 5120,
      purchases: 22,
      items: 64,
      average: 233,
      chart: [
        { period: "Week 1", spending: 1180 },
        { period: "Week 2", spending: 950 },
        { period: "Week 3", spending: 1420 },
        { period: "Week 4", spending: 1570 },
      ],
    },

    Yearly: {
      totalSpend: 58450,
      purchases: 248,
      items: 486,
      average: 236,
      chart: [
        { period: "Jan", spending: 4200 },
        { period: "Feb", spending: 3950 },
        { period: "Mar", spending: 4380 },
        { period: "Apr", spending: 4250 },
        { period: "May", spending: 4520 },
        { period: "Jun", spending: 4380 },
        { period: "Jul", spending: 4860 },
        { period: "Aug", spending: 5120 },
        { period: "Sep", spending: 4750 },
        { period: "Oct", spending: 4980 },
        { period: "Nov", spending: 4620 },
        { period: "Dec", spending: 4440 },
      ],
    },
  };

  const currentReport = reportData[reportType];

  const topItems = [
    {
      name: "Milk",
      purchases: 18,
      spending: 1080,
    },
    {
      name: "Eggs",
      purchases: 15,
      spending: 1200,
    },
    {
      name: "Bread",
      purchases: 16,
      spending: 640,
    },
    {
      name: "Rice",
      purchases: 10,
      spending: 2500,
    },
    {
      name: "Banana",
      purchases: 12,
      spending: 720,
    },
  ];

  const handleDownload = () => {
    const report = `
GROLYTICS - ${reportType.toUpperCase()} REPORT

Total Spending: ₹${currentReport.totalSpend}
Total Purchases: ${currentReport.purchases}
Total Items: ${currentReport.items}
Average Purchase: ₹${currentReport.average}

TOP PURCHASED ITEMS

${topItems
  .map(
    (item) =>
      `${item.name} - ${item.purchases} purchases - ₹${item.spending}`
  )
  .join("\n")}
`;

    const blob = new Blob([report], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = `grolytics-${reportType.toLowerCase()}-report.txt`;

    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <DashboardLayout>

      {/* Header */}

      <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">

        <div>
          <h1 className="text-2xl font-bold text-[#102A43] md:text-3xl">
            Reports
          </h1>

          <p className="mt-1 text-sm text-[#64748B]">
            Review your grocery spending and purchase history by period.
          </p>
        </div>

        <button
          onClick={handleDownload}
          className="flex w-fit items-center gap-2 rounded-xl bg-[#0F766E] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#115E59]"
        >
          <Download size={17} />
          Export Report
        </button>

      </div>

      {/* Report Period */}

      <Card className="mb-6">

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>

            <div className="flex items-center gap-2">

              <FileText
                size={19}
                className="text-[#0F766E]"
              />

              <h2 className="text-lg font-semibold text-[#102A43]">
                Report Period
              </h2>

            </div>

            <p className="mt-1 text-sm text-[#64748B]">
              Choose how you want to view your grocery records.
            </p>

          </div>

          <div className="flex rounded-xl border border-[#DCE7E7] bg-[#F0FAFA] p-1">

            {["Weekly", "Monthly", "Yearly"].map(
              (type) => (

                <button
                  key={type}
                  onClick={() =>
                    setReportType(type)
                  }
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                    reportType === type
                      ? "bg-[#0F766E] text-white shadow-sm"
                      : "text-[#64748B] hover:text-[#0F766E]"
                  }`}
                >
                  {type}
                </button>

              )
            )}

          </div>

        </div>

      </Card>

      {/* Summary Cards */}

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <Card>

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-[#64748B]">
                Total Spending
              </p>

              <p className="mt-2 text-2xl font-bold text-[#102A43]">
                ₹
                {currentReport.totalSpend.toLocaleString(
                  "en-IN"
                )}
              </p>

            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#CCFBF1] text-[#0F766E]">
              <IndianRupee size={20} />
            </div>

          </div>

        </Card>

        <Card>

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-[#64748B]">
                Purchases
              </p>

              <p className="mt-2 text-2xl font-bold text-[#102A43]">
                {currentReport.purchases}
              </p>

            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6F6F4] text-[#0F766E]">
              <ShoppingBag size={20} />
            </div>

          </div>

        </Card>

        <Card>

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-[#64748B]">
                Items Purchased
              </p>

              <p className="mt-2 text-2xl font-bold text-[#102A43]">
                {currentReport.items}
              </p>

            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF4D6] text-[#B77900]">
              <Package size={20} />
            </div>

          </div>

        </Card>

        <Card>

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-[#64748B]">
                Average Purchase
              </p>

              <p className="mt-2 text-2xl font-bold text-[#102A43]">
                ₹
                {currentReport.average.toLocaleString(
                  "en-IN"
                )}
              </p>

            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#6366F1]">
              <TrendingUp size={20} />
            </div>

          </div>

        </Card>

      </div>

      {/* Spending Chart */}

      <Card className="mb-6">

        <div className="mb-6">

          <div className="flex items-center gap-2">

            <CalendarDays
              size={19}
              className="text-[#0F766E]"
            />

            <h2 className="text-lg font-semibold text-[#102A43]">
              {reportType} Spending
            </h2>

          </div>

          <p className="mt-1 text-sm text-[#64748B]">
            Spending recorded during this period.
          </p>

        </div>

        <div className="h-[330px]">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <BarChart
              data={currentReport.chart}
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
                dataKey="period"
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

      {/* Top Items */}

      <Card className="mb-6">

        <div className="mb-6">

          <h2 className="text-lg font-semibold text-[#102A43]">
            Frequently Purchased Items
          </h2>

          <p className="mt-1 text-sm text-[#64748B]">
            Products appearing most frequently in your recorded purchases.
          </p>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full min-w-[600px]">

            <thead>

              <tr className="border-b border-[#DCE7E7] text-left text-xs text-[#64748B]">

                <th className="pb-3 font-medium">
                  Rank
                </th>

                <th className="pb-3 font-medium">
                  Product
                </th>

                <th className="pb-3 font-medium">
                  Purchases
                </th>

                <th className="pb-3 text-right font-medium">
                  Total Spending
                </th>

              </tr>

            </thead>

            <tbody>

              {topItems.map((item, index) => (

                <tr
                  key={item.name}
                  className="border-b border-[#EDF4F4] last:border-0"
                >

                  <td className="py-4">

                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#CCFBF1] text-xs font-bold text-[#0F766E]">
                      {index + 1}
                    </span>

                  </td>

                  <td className="py-4">

                    <span className="text-sm font-medium text-[#102A43]">
                      {item.name}
                    </span>

                  </td>

                  <td className="py-4 text-sm text-[#64748B]">
                    {item.purchases}
                  </td>

                  <td className="py-4 text-right text-sm font-semibold text-[#102A43]">
                    ₹
                    {item.spending.toLocaleString(
                      "en-IN"
                    )}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </Card>

      {/* Report Information */}

      <div className="rounded-xl border border-[#DCE7E7] bg-[#F0FAFA] p-5">

        <p className="text-sm font-semibold text-[#102A43]">
          About these reports
        </p>

        <p className="mt-2 text-sm leading-6 text-[#64748B]">
          Reports summarize the grocery purchases that you
          have recorded in Grolytics. Weekly, monthly and
          yearly views help you compare your actual spending
          and purchasing activity over different periods.
        </p>

      </div>

    </DashboardLayout>
  );
}

export default Reports;