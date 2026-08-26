import {
  CalendarDays,
  Store,
  Package,
  IndianRupee,
  Pencil,
  Trash2,
  CheckCircle2,
} from "lucide-react";

import { useState } from "react";

import Card from "../ui/Card";
import Button from "../ui/Button";

function BillPreview({ onSave }) {
  // Temporary mock data.
  // Later this will come from the backend.
  const [billData, setBillData] = useState({
    store: "Blinkit",
    date: "2026-08-25",
    billNumber: "BLK-20260825-1248",

    items: [
      {
        id: 1,
        name: "Milk",
        quantity: 2,
        unit: "L",
        price: 60,
      },
      {
        id: 2,
        name: "Basmati Rice",
        quantity: 1,
        unit: "5 kg",
        price: 250,
      },
      {
        id: 3,
        name: "Bread",
        quantity: 1,
        unit: "pack",
        price: 40,
      },
      {
        id: 4,
        name: "Cooking Oil",
        quantity: 1,
        unit: "1 L",
        price: 180,
      },
    ],
  });

  const [editingItem, setEditingItem] = useState(null);

  const totalAmount = billData.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const updateItem = (id, field, value) => {
    setBillData((previous) => ({
      ...previous,

      items: previous.items.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]:
                field === "quantity" || field === "price"
                  ? Number(value)
                  : value,
            }
          : item
      ),
    }));
  };

  const deleteItem = (id) => {
    setBillData((previous) => ({
      ...previous,

      items: previous.items.filter(
        (item) => item.id !== id
      ),
    }));
  };

  const handleSave = () => {
    if (onSave) {
      onSave(billData);
    }
  };

  return (
    <div className="space-y-6">

      {/* Bill Information */}

      <Card>

        <div className="mb-6 flex items-center justify-between">

          <div>
            <h2 className="text-lg font-semibold text-[#102A43]">
              Extracted Bill Information
            </h2>

            <p className="mt-1 text-sm text-[#64748B]">
              Review the information before saving it.
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#CCFBF1] text-[#0F766E]">
            <CheckCircle2 size={20} />
          </div>

        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

          {/* Store */}

          <div className="rounded-xl border border-[#DCE7E7] bg-[#F0FAFA] p-4">

            <div className="mb-2 flex items-center gap-2 text-[#64748B]">
              <Store size={17} />

              <span className="text-xs font-medium">
                Store
              </span>
            </div>

            <p className="text-sm font-semibold text-[#102A43]">
              {billData.store}
            </p>

          </div>

          {/* Date */}

          <div className="rounded-xl border border-[#DCE7E7] bg-[#F0FAFA] p-4">

            <div className="mb-2 flex items-center gap-2 text-[#64748B]">
              <CalendarDays size={17} />

              <span className="text-xs font-medium">
                Purchase Date
              </span>
            </div>

            <p className="text-sm font-semibold text-[#102A43]">
              {new Date(billData.date).toLocaleDateString(
                "en-IN",
                {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }
              )}
            </p>

          </div>

          {/* Bill Number */}

          <div className="rounded-xl border border-[#DCE7E7] bg-[#F0FAFA] p-4">

            <div className="mb-2 flex items-center gap-2 text-[#64748B]">
              <Package size={17} />

              <span className="text-xs font-medium">
                Bill Number
              </span>
            </div>

            <p className="truncate text-sm font-semibold text-[#102A43]">
              {billData.billNumber}
            </p>

          </div>

        </div>

      </Card>

      {/* Items */}

      <Card>

        <div className="mb-6 flex items-center justify-between">

          <div>
            <h2 className="text-lg font-semibold text-[#102A43]">
              Purchased Items
            </h2>

            <p className="mt-1 text-sm text-[#64748B]">
              {billData.items.length} items found on this bill.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-[#CCFBF1] px-3 py-2">

            <IndianRupee
              size={16}
              className="text-[#0F766E]"
            />

            <span className="text-sm font-bold text-[#0F766E]">
              {totalAmount.toLocaleString("en-IN")}
            </span>

          </div>

        </div>

        {/* Desktop Table */}

        <div className="hidden overflow-x-auto md:block">

          <table className="w-full">

            <thead>
              <tr className="border-b border-[#DCE7E7] text-left text-xs text-[#64748B]">

                <th className="pb-3 font-medium">
                  Product
                </th>

                <th className="pb-3 font-medium">
                  Quantity
                </th>

                <th className="pb-3 font-medium">
                  Unit
                </th>

                <th className="pb-3 font-medium">
                  Price
                </th>

                <th className="pb-3 font-medium">
                  Total
                </th>

                <th className="pb-3 text-right font-medium">
                  Action
                </th>

              </tr>
            </thead>

            <tbody>

              {billData.items.map((item) => (

                <tr
                  key={item.id}
                  className="border-b border-[#EDF4F4] last:border-0"
                >

                  <td className="py-4">

                    {editingItem === item.id ? (

                      <input
                        value={item.name}
                        onChange={(event) =>
                          updateItem(
                            item.id,
                            "name",
                            event.target.value
                          )
                        }
                        className="w-full max-w-[180px] rounded-lg border border-[#DCE7E7] px-3 py-2 text-sm outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#CCFBF1]"
                      />

                    ) : (

                      <span className="text-sm font-medium text-[#102A43]">
                        {item.name}
                      </span>

                    )}

                  </td>

                  <td className="py-4">

                    {editingItem === item.id ? (

                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(event) =>
                          updateItem(
                            item.id,
                            "quantity",
                            event.target.value
                          )
                        }
                        className="w-20 rounded-lg border border-[#DCE7E7] px-3 py-2 text-sm outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#CCFBF1]"
                      />

                    ) : (

                      <span className="text-sm text-[#64748B]">
                        {item.quantity}
                      </span>

                    )}

                  </td>

                  <td className="py-4 text-sm text-[#64748B]">
                    {item.unit}
                  </td>

                  <td className="py-4">

                    {editingItem === item.id ? (

                      <input
                        type="number"
                        min="0"
                        value={item.price}
                        onChange={(event) =>
                          updateItem(
                            item.id,
                            "price",
                            event.target.value
                          )
                        }
                        className="w-24 rounded-lg border border-[#DCE7E7] px-3 py-2 text-sm outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#CCFBF1]"
                      />

                    ) : (

                      <span className="text-sm text-[#64748B]">
                        ₹{item.price}
                      </span>

                    )}

                  </td>

                  <td className="py-4 text-sm font-semibold text-[#102A43]">
                    ₹{item.price * item.quantity}
                  </td>

                  <td className="py-4">

                    <div className="flex justify-end gap-2">

                      <button
                        onClick={() =>
                          setEditingItem(
                            editingItem === item.id
                              ? null
                              : item.id
                          )
                        }
                        className="rounded-lg p-2 text-[#64748B] transition hover:bg-[#CCFBF1] hover:text-[#0F766E]"
                        title="Edit"
                      >
                        <Pencil size={16} />
                      </button>

                      <button
                        onClick={() =>
                          deleteItem(item.id)
                        }
                        className="rounded-lg p-2 text-[#64748B] transition hover:bg-red-50 hover:text-red-500"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Mobile Cards */}

        <div className="space-y-3 md:hidden">

          {billData.items.map((item) => (

            <div
              key={item.id}
              className="rounded-xl border border-[#DCE7E7] bg-[#F0FAFA] p-4"
            >

              <div className="flex items-start justify-between">

                <div>

                  <p className="text-sm font-semibold text-[#102A43]">
                    {item.name}
                  </p>

                  <p className="mt-1 text-xs text-[#64748B]">
                    {item.quantity} × {item.unit}
                  </p>

                </div>

                <p className="text-sm font-bold text-[#102A43]">
                  ₹{item.price * item.quantity}
                </p>

              </div>

              <div className="mt-3 flex justify-end gap-2">

                <button
                  onClick={() =>
                    setEditingItem(
                      editingItem === item.id
                        ? null
                        : item.id
                    )
                  }
                  className="rounded-lg bg-white p-2 text-[#64748B]"
                >
                  <Pencil size={15} />
                </button>

                <button
                  onClick={() =>
                    deleteItem(item.id)
                  }
                  className="rounded-lg bg-white p-2 text-red-500"
                >
                  <Trash2 size={15} />
                </button>

              </div>

            </div>

          ))}

        </div>

        {/* Total */}

        <div className="mt-6 flex items-center justify-between border-t border-[#DCE7E7] pt-5">

          <span className="text-sm font-medium text-[#64748B]">
            Total Bill Amount
          </span>

          <span className="text-2xl font-bold text-[#102A43]">
            ₹{totalAmount.toLocaleString("en-IN")}
          </span>

        </div>

      </Card>

      {/* Save Section */}

      <Card>

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

          <div>

            <h3 className="text-base font-semibold text-[#102A43]">
              Ready to save?
            </h3>

            <p className="mt-1 text-sm text-[#64748B]">
              Make sure the extracted information is correct before saving.
            </p>

          </div>

          <Button onClick={handleSave}>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} />
              Save Purchase
            </span>
          </Button>

        </div>

      </Card>

    </div>
  );
}

export default BillPreview;