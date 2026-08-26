import {
  Search,
  Filter,
  ReceiptText,
  IndianRupee,
  ShoppingBag,
  Store,
  CalendarDays,
  Eye,
  X,
} from "lucide-react";

import { useState } from "react";

import DashboardLayout from "../components/layout/DashboardLayout";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";

function PurchaseHistory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [storeFilter, setStoreFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [selectedPurchase, setSelectedPurchase] = useState(null);

  const purchases = [
    {
      id: "GR-1024",
      product: "Milk",
      category: "Dairy",
      store: "Blinkit",
      date: "25 Aug 2026",
      quantity: "2 L",
      amount: 120,
      status: "Completed",
    },
    {
      id: "GR-1023",
      product: "Basmati Rice",
      category: "Staples",
      store: "Zepto",
      date: "23 Aug 2026",
      quantity: "5 kg",
      amount: 250,
      status: "Completed",
    },
    {
      id: "GR-1022",
      product: "Bread",
      category: "Bakery",
      store: "Instamart",
      date: "21 Aug 2026",
      quantity: "1 pack",
      amount: 40,
      status: "Completed",
    },
    {
      id: "GR-1021",
      product: "Cooking Oil",
      category: "Staples",
      store: "BigBasket",
      date: "19 Aug 2026",
      quantity: "1 L",
      amount: 180,
      status: "Completed",
    },
    {
      id: "GR-1020",
      product: "Eggs",
      category: "Dairy",
      store: "Blinkit",
      date: "18 Aug 2026",
      quantity: "12 pcs",
      amount: 96,
      status: "Completed",
    },
    {
      id: "GR-1019",
      product: "Banana",
      category: "Fruits",
      store: "Zepto",
      date: "17 Aug 2026",
      quantity: "1 dozen",
      amount: 60,
      status: "Completed",
    },
    {
      id: "GR-1018",
      product: "Toor Dal",
      category: "Staples",
      store: "BigBasket",
      date: "15 Aug 2026",
      quantity: "1 kg",
      amount: 145,
      status: "Completed",
    },
    {
      id: "GR-1017",
      product: "Shampoo",
      category: "Personal Care",
      store: "Amazon Fresh",
      date: "10 Aug 2026",
      quantity: "1 bottle",
      amount: 299,
      status: "Completed",
    },
    {
      id: "GR-1016",
      product: "Tomatoes",
      category: "Vegetables",
      store: "Blinkit",
      date: "08 Aug 2026",
      quantity: "1 kg",
      amount: 55,
      status: "Completed",
    },
    {
      id: "GR-1015",
      product: "Biscuits",
      category: "Snacks",
      store: "Instamart",
      date: "05 Aug 2026",
      quantity: "3 packs",
      amount: 90,
      status: "Completed",
    },
  ];

  const stores = [
    "All",
    "Blinkit",
    "Zepto",
    "Instamart",
    "BigBasket",
    "Amazon Fresh",
  ];

  const categories = [
    "All",
    "Dairy",
    "Staples",
    "Bakery",
    "Fruits",
    "Vegetables",
    "Personal Care",
    "Snacks",
  ];

  const filteredPurchases = purchases.filter((purchase) => {
    const matchesSearch =
      purchase.product
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      purchase.id
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesStore =
      storeFilter === "All" ||
      purchase.store === storeFilter;

    const matchesCategory =
      categoryFilter === "All" ||
      purchase.category === categoryFilter;

    return (
      matchesSearch &&
      matchesStore &&
      matchesCategory
    );
  });

  const totalAmount = filteredPurchases.reduce(
    (total, purchase) => total + purchase.amount,
    0
  );

  return (
    <DashboardLayout>

      {/* Header */}

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#102A43] md:text-3xl">
          Purchase History
        </h1>

        <p className="mt-1 text-sm text-[#64748B]">
          View and organize all your grocery purchases in one place.
        </p>
      </div>

      {/* Summary */}

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#64748B]">
                Total Purchases
              </p>

              <p className="mt-2 text-2xl font-bold text-[#102A43]">
                {purchases.length}
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#CCFBF1] text-[#0F766E]">
              <ReceiptText size={20} />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#64748B]">
                Total Spending
              </p>

              <p className="mt-2 text-2xl font-bold text-[#102A43]">
                ₹
                {purchases
                  .reduce(
                    (total, purchase) =>
                      total + purchase.amount,
                    0
                  )
                  .toLocaleString("en-IN")}
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF4D6] text-[#B77900]">
              <IndianRupee size={20} />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#64748B]">
                Products
              </p>

              <p className="mt-2 text-2xl font-bold text-[#102A43]">
                {new Set(
                  purchases.map(
                    (purchase) => purchase.product
                  )
                ).size}
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
                Stores
              </p>

              <p className="mt-2 text-2xl font-bold text-[#102A43]">
                {new Set(
                  purchases.map(
                    (purchase) => purchase.store
                  )
                ).size}
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#6366F1]">
              <Store size={20} />
            </div>
          </div>
        </Card>

      </div>

      {/* Filters */}

      <Card className="mb-6">

        <div className="flex flex-col gap-4">

          <div className="flex items-center gap-2">
            <Filter
              size={18}
              className="text-[#0F766E]"
            />

            <h2 className="text-sm font-semibold text-[#102A43]">
              Filter Purchases
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">

            {/* Search */}

            <div className="relative">

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
                placeholder="Search product or bill ID..."
                className="w-full rounded-xl border border-[#DCE7E7] bg-white py-2.5 pl-10 pr-4 text-sm text-[#102A43] outline-none placeholder:text-[#94A3B8] focus:border-[#0F766E] focus:ring-2 focus:ring-[#CCFBF1]"
              />

            </div>

            {/* Store */}

            <select
              value={storeFilter}
              onChange={(event) =>
                setStoreFilter(event.target.value)
              }
              className="rounded-xl border border-[#DCE7E7] bg-white px-4 py-2.5 text-sm text-[#102A43] outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#CCFBF1]"
            >
              {stores.map((store) => (
                <option key={store} value={store}>
                  {store === "All"
                    ? "All Stores"
                    : store}
                </option>
              ))}
            </select>

            {/* Category */}

            <select
              value={categoryFilter}
              onChange={(event) =>
                setCategoryFilter(event.target.value)
              }
              className="rounded-xl border border-[#DCE7E7] bg-white px-4 py-2.5 text-sm text-[#102A43] outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#CCFBF1]"
            >
              {categories.map((category) => (
                <option
                  key={category}
                  value={category}
                >
                  {category === "All"
                    ? "All Categories"
                    : category}
                </option>
              ))}
            </select>

          </div>

        </div>

      </Card>

      {/* Purchase Table */}

      <Card>

        <div className="mb-5 flex items-center justify-between">

          <div>
            <h2 className="text-lg font-semibold text-[#102A43]">
              All Purchases
            </h2>

            <p className="mt-1 text-sm text-[#64748B]">
              {filteredPurchases.length} purchase
              {filteredPurchases.length !== 1
                ? "s"
                : ""}{" "}
              found
            </p>
          </div>

          <div className="text-right">

            <p className="text-xs text-[#64748B]">
              Filtered spending
            </p>

            <p className="text-lg font-bold text-[#0F766E]">
              ₹{totalAmount.toLocaleString("en-IN")}
            </p>

          </div>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full min-w-[850px]">

            <thead>

              <tr className="border-b border-[#DCE7E7] text-left text-xs text-[#64748B]">

                <th className="pb-3 font-medium">
                  Bill ID
                </th>

                <th className="pb-3 font-medium">
                  Product
                </th>

                <th className="pb-3 font-medium">
                  Store
                </th>

                <th className="pb-3 font-medium">
                  Category
                </th>

                <th className="pb-3 font-medium">
                  Quantity
                </th>

                <th className="pb-3 font-medium">
                  Date
                </th>

                <th className="pb-3 font-medium">
                  Amount
                </th>

                <th className="pb-3 text-right font-medium">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredPurchases.length > 0 ? (

                filteredPurchases.map((purchase) => (

                  <tr
                    key={purchase.id}
                    className="border-b border-[#EDF4F4] last:border-0 hover:bg-[#F8FCFC]"
                  >

                    <td className="py-4 text-xs font-medium text-[#64748B]">
                      {purchase.id}
                    </td>

                    <td className="py-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#CCFBF1] text-[#0F766E]">
                          <ShoppingBag size={16} />
                        </div>

                        <span className="text-sm font-medium text-[#102A43]">
                          {purchase.product}
                        </span>

                      </div>

                    </td>

                    <td className="py-4">

                      <div className="flex items-center gap-2 text-sm text-[#64748B]">
                        <Store size={15} />
                        {purchase.store}
                      </div>

                    </td>

                    <td className="py-4">
                      <Badge variant="neutral">
                        {purchase.category}
                      </Badge>
                    </td>

                    <td className="py-4 text-sm text-[#64748B]">
                      {purchase.quantity}
                    </td>

                    <td className="py-4">

                      <div className="flex items-center gap-2 text-sm text-[#64748B]">
                        <CalendarDays size={15} />
                        {purchase.date}
                      </div>

                    </td>

                    <td className="py-4 text-sm font-semibold text-[#102A43]">
                      ₹{purchase.amount.toLocaleString("en-IN")}
                    </td>

                    <td className="py-4 text-right">

                      <button
                        onClick={() =>
                          setSelectedPurchase(purchase)
                        }
                        className="rounded-lg p-2 text-[#64748B] transition hover:bg-[#CCFBF1] hover:text-[#0F766E]"
                        title="View purchase"
                      >
                        <Eye size={17} />
                      </button>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="8"
                    className="py-12 text-center"
                  >

                    <ReceiptText
                      size={34}
                      className="mx-auto text-[#94A3B8]"
                    />

                    <p className="mt-3 text-sm font-medium text-[#102A43]">
                      No purchases found
                    </p>

                    <p className="mt-1 text-xs text-[#64748B]">
                      Try changing your search or filters.
                    </p>

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </Card>

      {/* Purchase Details Modal */}

      {selectedPurchase && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#102A43]/40 p-4">

          <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">

            {/* Modal Header */}

            <div className="flex items-center justify-between border-b border-[#DCE7E7] p-6">

              <div>

                <h2 className="text-lg font-bold text-[#102A43]">
                  Purchase Details
                </h2>

                <p className="mt-1 text-xs text-[#64748B]">
                  {selectedPurchase.id}
                </p>

              </div>

              <button
                onClick={() =>
                  setSelectedPurchase(null)
                }
                className="rounded-lg p-2 text-[#64748B] hover:bg-[#F0FAFA]"
              >
                <X size={18} />
              </button>

            </div>

            {/* Modal Content */}

            <div className="space-y-4 p-6">

              <div className="rounded-xl bg-[#F0FAFA] p-4">

                <p className="text-xs text-[#64748B]">
                  Product
                </p>

                <p className="mt-1 text-base font-semibold text-[#102A43]">
                  {selectedPurchase.product}
                </p>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div>
                  <p className="text-xs text-[#64748B]">
                    Store
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#102A43]">
                    {selectedPurchase.store}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-[#64748B]">
                    Category
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#102A43]">
                    {selectedPurchase.category}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-[#64748B]">
                    Quantity
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#102A43]">
                    {selectedPurchase.quantity}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-[#64748B]">
                    Purchase Date
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#102A43]">
                    {selectedPurchase.date}
                  </p>
                </div>

              </div>

              <div className="border-t border-[#DCE7E7] pt-4">

                <div className="flex items-center justify-between">

                  <span className="text-sm text-[#64748B]">
                    Amount
                  </span>

                  <span className="text-xl font-bold text-[#0F766E]">
                    ₹
                    {selectedPurchase.amount.toLocaleString(
                      "en-IN"
                    )}
                  </span>

                </div>

              </div>

              <div>
                <Badge variant="success">
                  {selectedPurchase.status}
                </Badge>
              </div>

            </div>

          </div>

        </div>

      )}

    </DashboardLayout>
  );
}

export default PurchaseHistory;