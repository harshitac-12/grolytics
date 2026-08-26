import {
  Package,
  Search,
  Filter,
  Plus,
  CalendarDays,
  MoreVertical,
} from "lucide-react";

import DashboardLayout from "../components/layout/DashboardLayout";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";

import { useState } from "react";

function Inventory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const inventoryItems = [
    {
      id: 1,
      name: "Basmati Rice",
      category: "Staples",
      quantity: "3 kg",
      boughtDate: "23 Aug 2026",
      lastBought: "23 Aug 2026",
      status: "Available",
    },
    {
      id: 2,
      name: "Milk",
      category: "Dairy",
      quantity: "1 L",
      boughtDate: "25 Aug 2026",
      lastBought: "25 Aug 2026",
      status: "Available",
    },
    {
      id: 3,
      name: "Cooking Oil",
      category: "Staples",
      quantity: "750 ml",
      boughtDate: "19 Aug 2026",
      lastBought: "19 Aug 2026",
      status: "Low",
    },
    {
      id: 4,
      name: "Bread",
      category: "Bakery",
      quantity: "1 pack",
      boughtDate: "21 Aug 2026",
      lastBought: "21 Aug 2026",
      status: "Available",
    },
    {
      id: 5,
      name: "Eggs",
      category: "Dairy",
      quantity: "6 pcs",
      boughtDate: "18 Aug 2026",
      lastBought: "18 Aug 2026",
      status: "Low",
    },
    {
      id: 6,
      name: "Toor Dal",
      category: "Staples",
      quantity: "1 kg",
      boughtDate: "15 Aug 2026",
      lastBought: "15 Aug 2026",
      status: "Available",
    },
    {
      id: 7,
      name: "Banana",
      category: "Fruits",
      quantity: "6 pcs",
      boughtDate: "24 Aug 2026",
      lastBought: "24 Aug 2026",
      status: "Available",
    },
    {
      id: 8,
      name: "Shampoo",
      category: "Personal Care",
      quantity: "1 bottle",
      boughtDate: "10 Aug 2026",
      lastBought: "10 Aug 2026",
      status: "Available",
    },
  ];

  const categories = [
    "All",
    "Staples",
    "Dairy",
    "Bakery",
    "Fruits",
    "Personal Care",
  ];

  const filteredItems = inventoryItems.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "All" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <DashboardLayout>

      {/* Header */}

      <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">

        <div>
          <h1 className="text-2xl font-bold text-[#102A43] md:text-3xl">
            Inventory
          </h1>

          <p className="mt-1 text-sm text-[#64748B]">
            Keep track of the groceries you currently have.
          </p>
        </div>

        <button className="flex w-fit items-center gap-2 rounded-xl bg-[#0F766E] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#115E59]">
          <Plus size={18} />
          Add Item
        </button>

      </div>

      {/* Summary Cards */}

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <Card>
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-[#64748B]">
                Total Items
              </p>

              <p className="mt-2 text-2xl font-bold text-[#102A43]">
                47
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#CCFBF1] text-[#0F766E]">
              <Package size={20} />
            </div>

          </div>
        </Card>

        <Card>
          <div>
            <p className="text-sm text-[#64748B]">
              Available
            </p>

            <p className="mt-2 text-2xl font-bold text-[#16A34A]">
              39
            </p>

            <p className="mt-1 text-xs text-[#64748B]">
              Currently available
            </p>
          </div>
        </Card>

        <Card>
          <div>
            <p className="text-sm text-[#64748B]">
              Running Low
            </p>

            <p className="mt-2 text-2xl font-bold text-[#B77900]">
              8
            </p>

            <p className="mt-1 text-xs text-[#64748B]">
              Manually marked low
            </p>
          </div>
        </Card>

        <Card>
          <div>
            <p className="text-sm text-[#64748B]">
              Categories
            </p>

            <p className="mt-2 text-2xl font-bold text-[#102A43]">
              5
            </p>

            <p className="mt-1 text-xs text-[#64748B]">
              Different categories
            </p>
          </div>
        </Card>

      </div>

      {/* Filters */}

      <Card className="mb-6">

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          {/* Search */}

          <div className="relative w-full lg:max-w-md">

            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              placeholder="Search inventory..."
              className="w-full rounded-xl border border-[#DCE7E7] bg-white py-2.5 pl-10 pr-4 text-sm text-[#102A43] outline-none transition placeholder:text-[#94A3B8] focus:border-[#0F766E] focus:ring-2 focus:ring-[#CCFBF1]"
            />

          </div>

          {/* Category Filter */}

          <div className="flex items-center gap-3">

            <Filter
              size={18}
              className="text-[#64748B]"
            />

            <select
              value={category}
              onChange={(event) =>
                setCategory(event.target.value)
              }
              className="rounded-xl border border-[#DCE7E7] bg-white px-4 py-2.5 text-sm text-[#102A43] outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#CCFBF1]"
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

          </div>

        </div>

      </Card>

      {/* Inventory Table */}

      <Card>

        <div className="mb-5">

          <h2 className="text-lg font-semibold text-[#102A43]">
            Grocery Inventory
          </h2>

          <p className="mt-1 text-sm text-[#64748B]">
            {filteredItems.length} items displayed
          </p>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full min-w-[800px]">

            <thead>

              <tr className="border-b border-[#DCE7E7] text-left text-xs text-[#64748B]">

                <th className="pb-3 font-medium">
                  Product
                </th>

                <th className="pb-3 font-medium">
                  Category
                </th>

                <th className="pb-3 font-medium">
                  Quantity
                </th>

                <th className="pb-3 font-medium">
                  Bought Date
                </th>

                <th className="pb-3 font-medium">
                  Last Purchased
                </th>

                <th className="pb-3 font-medium">
                  Status
                </th>

                <th className="pb-3 text-right font-medium">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredItems.length > 0 ? (

                filteredItems.map((item) => (

                  <tr
                    key={item.id}
                    className="border-b border-[#EDF4F4] last:border-0 hover:bg-[#F8FCFC]"
                  >

                    {/* Product */}

                    <td className="py-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#CCFBF1] text-[#0F766E]">
                          <Package size={17} />
                        </div>

                        <span className="text-sm font-medium text-[#102A43]">
                          {item.name}
                        </span>

                      </div>

                    </td>

                    {/* Category */}

                    <td className="py-4">

                      <Badge variant="neutral">
                        {item.category}
                      </Badge>

                    </td>

                    {/* Quantity */}

                    <td className="py-4 text-sm text-[#64748B]">
                      {item.quantity}
                    </td>

                    {/* Bought Date */}

                    <td className="py-4">

                      <div className="flex items-center gap-2 text-sm text-[#64748B]">

                        <CalendarDays size={15} />

                        {item.boughtDate}

                      </div>

                    </td>

                    {/* Last Purchased */}

                    <td className="py-4 text-sm text-[#64748B]">
                      {item.lastBought}
                    </td>

                    {/* Status */}

                    <td className="py-4">

                      <Badge
                        variant={
                          item.status === "Available"
                            ? "success"
                            : "warning"
                        }
                      >
                        {item.status}
                      </Badge>

                    </td>

                    {/* Actions */}

                    <td className="py-4 text-right">

                      <button
                        className="rounded-lg p-2 text-[#64748B] transition hover:bg-[#CCFBF1] hover:text-[#0F766E]"
                        title="More options"
                      >
                        <MoreVertical size={18} />
                      </button>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="7"
                    className="py-12 text-center"
                  >

                    <Package
                      size={32}
                      className="mx-auto text-[#94A3B8]"
                    />

                    <p className="mt-3 text-sm font-medium text-[#102A43]">
                      No items found
                    </p>

                    <p className="mt-1 text-xs text-[#64748B]">
                      Try changing your search or category filter.
                    </p>

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </Card>

    </DashboardLayout>
  );
}

export default Inventory;