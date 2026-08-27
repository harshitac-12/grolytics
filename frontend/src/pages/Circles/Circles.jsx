import {
  Users,
  Plus,
  UserPlus,
  ShoppingBag,
  IndianRupee,
  Crown,
  MoreVertical,
  Copy,
  Check,
  X,
} from "lucide-react";

import { useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import Card from "../../components/ui/Card";

function Circles() {
  const [showCreateModal, setShowCreateModal] =
    useState(false);

  const [showJoinModal, setShowJoinModal] =
    useState(false);

  const [circleName, setCircleName] =
    useState("");

  const [inviteCode, setInviteCode] =
    useState("");

  const [copied, setCopied] =
    useState(false);

  const [circle, setCircle] = useState({
    name: "Flat 302",
    members: 4,
    monthlySpend: 8420,
    purchases: 42,
  });

  const [members] = useState([
    {
      id: 1,
      name: "Harshita",
      role: "Admin",
      purchases: 18,
      spending: 2420,
      avatar: "H",
    },
    {
      id: 2,
      name: "Ananya",
      role: "Member",
      purchases: 12,
      spending: 1980,
      avatar: "A",
    },
    {
      id: 3,
      name: "Riya",
      role: "Member",
      purchases: 7,
      spending: 2150,
      avatar: "R",
    },
    {
      id: 4,
      name: "Rahul",
      role: "Member",
      purchases: 5,
      spending: 1870,
      avatar: "R",
    },
  ]);

  const contributions = [
    {
      product: "Milk",
      member: "Harshita",
      store: "Blinkit",
      amount: 120,
      date: "25 Aug 2026",
    },
    {
      product: "Basmati Rice",
      member: "Ananya",
      store: "Zepto",
      amount: 250,
      date: "23 Aug 2026",
    },
    {
      product: "Vegetables",
      member: "Riya",
      store: "BigBasket",
      amount: 380,
      date: "22 Aug 2026",
    },
    {
      product: "Cooking Oil",
      member: "Rahul",
      store: "Instamart",
      amount: 180,
      date: "20 Aug 2026",
    },
  ];

  const handleCreateCircle = () => {
    if (!circleName.trim()) return;

    setCircle({
      ...circle,
      name: circleName,
      members: 1,
      monthlySpend: 0,
      purchases: 0,
    });

    setShowCreateModal(false);
    setCircleName("");
  };

  const handleJoinCircle = () => {
    if (!inviteCode.trim()) return;

    setShowJoinModal(false);
    setInviteCode("");
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(
      "GROLYTICS-7K4P"
    );

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <DashboardLayout>

      {/* ================================= */}
      {/* HEADER */}
      {/* ================================= */}

      <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">

        <div>

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#CCFBF1] text-[#0F766E]">
              <Users size={22} />
            </div>

            <div>

              <h1 className="text-2xl font-bold text-[#102A43] md:text-3xl">
                Circles
              </h1>

              <p className="mt-1 text-sm text-[#64748B]">
                Manage groceries shared with your household.
              </p>

            </div>

          </div>

        </div>

        <div className="flex flex-wrap gap-2">

          <button
            onClick={() =>
              setShowJoinModal(true)
            }
            className="flex items-center gap-2 rounded-xl border border-[#DCE7E7] bg-white px-4 py-2.5 text-sm font-medium text-[#64748B] transition hover:border-[#0F766E] hover:text-[#0F766E]"
          >
            <UserPlus size={17} />
            Join Circle
          </button>

          <button
            onClick={() =>
              setShowCreateModal(true)
            }
            className="flex items-center gap-2 rounded-xl bg-[#0F766E] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#115E59]"
          >
            <Plus size={17} />
            Create Circle
          </button>

        </div>

      </div>

      {/* ================================= */}
      {/* CIRCLE SUMMARY */}
      {/* ================================= */}

      <Card className="mb-6">

        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

          <div className="flex items-center gap-4">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E6F6F4] text-2xl">
              🏠
            </div>

            <div>

              <div className="flex items-center gap-2">

                <h2 className="text-xl font-bold text-[#102A43]">
                  {circle.name}
                </h2>

                <span className="rounded-full bg-[#CCFBF1] px-2.5 py-1 text-xs font-medium text-[#0F766E]">
                  Active
                </span>

              </div>

              <p className="mt-1 text-sm text-[#64748B]">
                {circle.members} members · {circle.purchases} purchases
              </p>

            </div>

          </div>

          <div className="flex flex-wrap gap-3">

            <div className="rounded-xl bg-[#F0FAFA] px-5 py-3">

              <p className="text-xs text-[#64748B]">
                This month
              </p>

              <p className="mt-1 text-lg font-bold text-[#102A43]">
                ₹
                {circle.monthlySpend.toLocaleString(
                  "en-IN"
                )}
              </p>

            </div>

            <div className="rounded-xl bg-[#F0FAFA] px-5 py-3">

              <p className="text-xs text-[#64748B]">
                Members
              </p>

              <p className="mt-1 text-lg font-bold text-[#102A43]">
                {circle.members}
              </p>

            </div>

          </div>

        </div>

      </Card>

      {/* ================================= */}
      {/* MAIN GRID */}
      {/* ================================= */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* ================================= */}
        {/* MEMBERS */}
        {/* ================================= */}

        <Card className="xl:col-span-1">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <h2 className="text-lg font-semibold text-[#102A43]">
                Members
              </h2>

              <p className="mt-1 text-sm text-[#64748B]">
                People in this Circle.
              </p>

            </div>

            <button
              onClick={() =>
                setShowJoinModal(true)
              }
              className="rounded-lg p-2 text-[#64748B] hover:bg-[#F0FAFA] hover:text-[#0F766E]"
            >
              <UserPlus size={18} />
            </button>

          </div>

          <div className="space-y-3">

            {members.map((member) => (

              <div
                key={member.id}
                className="flex items-center justify-between rounded-xl border border-[#EDF4F4] p-3"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#CCFBF1] font-semibold text-[#0F766E]">
                    {member.avatar}
                  </div>

                  <div>

                    <div className="flex items-center gap-1.5">

                      <p className="text-sm font-semibold text-[#102A43]">
                        {member.name}
                      </p>

                      {member.role === "Admin" && (
                        <Crown
                          size={13}
                          className="text-[#B77900]"
                        />
                      )}

                    </div>

                    <p className="mt-1 text-xs text-[#64748B]">
                      {member.purchases} purchases
                    </p>

                  </div>

                </div>

                <p className="text-sm font-semibold text-[#102A43]">
                  ₹
                  {member.spending.toLocaleString(
                    "en-IN"
                  )}
                </p>

              </div>

            ))}

          </div>

        </Card>

        {/* ================================= */}
        {/* CONTRIBUTIONS */}
        {/* ================================= */}

        <Card className="xl:col-span-2">

          <div className="mb-6">

            <h2 className="text-lg font-semibold text-[#102A43]">
              Recent Contributions
            </h2>

            <p className="mt-1 text-sm text-[#64748B]">
              Groceries recently added by Circle members.
            </p>

          </div>

          <div className="space-y-2">

            {contributions.map(
              (item, index) => (

                <div
                  key={index}
                  className="flex flex-col gap-3 rounded-xl p-3 transition hover:bg-[#F8FCFC] sm:flex-row sm:items-center sm:justify-between"
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#CCFBF1] text-[#0F766E]">
                      <ShoppingBag size={18} />
                    </div>

                    <div>

                      <p className="text-sm font-semibold text-[#102A43]">
                        {item.product}
                      </p>

                      <p className="mt-1 text-xs text-[#64748B]">
                        Bought by {item.member} · {item.store}
                      </p>

                    </div>

                  </div>

                  <div className="text-left sm:text-right">

                    <p className="text-sm font-semibold text-[#102A43]">
                      ₹
                      {item.amount.toLocaleString(
                        "en-IN"
                      )}
                    </p>

                    <p className="mt-1 text-xs text-[#94A3B8]">
                      {item.date}
                    </p>

                  </div>

                </div>

              )
            )}

          </div>

        </Card>

      </div>

      {/* ================================= */}
      {/* SPENDING */}
      {/* ================================= */}

      <Card className="mt-6">

        <div className="mb-6">

          <h2 className="text-lg font-semibold text-[#102A43]">
            Member Spending
          </h2>

          <p className="mt-1 text-sm text-[#64748B]">
            Actual grocery spending recorded by each member.
          </p>

        </div>

        <div className="space-y-5">

          {members.map((member) => {

            const percentage =
              circle.monthlySpend > 0
                ? (member.spending /
                    circle.monthlySpend) *
                  100
                : 0;

            return (

              <div key={member.id}>

                <div className="mb-2 flex items-center justify-between">

                  <div className="flex items-center gap-2">

                    <span className="text-sm font-medium text-[#102A43]">
                      {member.name}
                    </span>

                    {member.role === "Admin" && (
                      <span className="text-xs text-[#B77900]">
                        Admin
                      </span>
                    )}

                  </div>

                  <span className="text-sm font-semibold text-[#102A43]">
                    ₹
                    {member.spending.toLocaleString(
                      "en-IN"
                    )}
                  </span>

                </div>

                <div className="h-2 overflow-hidden rounded-full bg-[#E6F1F1]">

                  <div
                    className="h-full rounded-full bg-[#0F766E]"
                    style={{
                      width: `${Math.min(
                        percentage,
                        100
                      )}%`,
                    }}
                  />

                </div>

              </div>

            );
          })}

        </div>

      </Card>

      {/* ================================= */}
      {/* INVITE CODE */}
      {/* ================================= */}

      <Card className="mt-6">

        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

          <div>

            <h2 className="text-lg font-semibold text-[#102A43]">
              Invite Members
            </h2>

            <p className="mt-1 text-sm text-[#64748B]">
              Share this code with people you want to add to the Circle.
            </p>

          </div>

          <div className="flex items-center gap-2">

            <div className="rounded-xl border border-[#DCE7E7] bg-[#F8FCFC] px-4 py-2.5">

              <span className="font-mono text-sm font-semibold tracking-wide text-[#102A43]">
                GROLYTICS-7K4P
              </span>

            </div>

            <button
              onClick={handleCopyCode}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F766E] text-white hover:bg-[#115E59]"
              title="Copy invite code"
            >
              {copied ? (
                <Check size={17} />
              ) : (
                <Copy size={17} />
              )}
            </button>

          </div>

        </div>

      </Card>

      {/* ================================= */}
      {/* INFO */}
      {/* ================================= */}

      <div className="mt-6 rounded-xl border border-[#DCE7E7] bg-[#F0FAFA] p-5">

        <div className="flex gap-3">

          <Users
            size={19}
            className="mt-0.5 shrink-0 text-[#0F766E]"
          />

          <div>

            <p className="text-sm font-semibold text-[#102A43]">
              Shared grocery management
            </p>

            <p className="mt-2 text-sm leading-6 text-[#64748B]">
              Circles allow roommates, flatmates, family members,
              or other household members to maintain their grocery
              records in one shared place. Grolytics records who
              added each purchase so everyone can see the same
              household grocery activity.
            </p>

          </div>

        </div>

      </div>

      {/* ================================= */}
      {/* CREATE MODAL */}
      {/* ================================= */}

      {showCreateModal && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">

          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

            <div className="mb-6 flex items-center justify-between">

              <div>

                <h2 className="text-lg font-bold text-[#102A43]">
                  Create Circle
                </h2>

                <p className="mt-1 text-sm text-[#64748B]">
                  Create a shared grocery space.
                </p>

              </div>

              <button
                onClick={() =>
                  setShowCreateModal(false)
                }
                className="rounded-lg p-2 text-[#64748B] hover:bg-[#F0FAFA]"
              >
                <X size={18} />
              </button>

            </div>

            <label className="mb-2 block text-sm font-medium text-[#102A43]">
              Circle Name
            </label>

            <input
              type="text"
              value={circleName}
              onChange={(event) =>
                setCircleName(event.target.value)
              }
              placeholder="e.g. Flat 302"
              className="mb-5 w-full rounded-xl border border-[#DCE7E7] px-4 py-3 text-sm text-[#102A43] outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#CCFBF1]"
            />

            <button
              onClick={handleCreateCircle}
              className="w-full rounded-xl bg-[#0F766E] py-3 text-sm font-medium text-white hover:bg-[#115E59]"
            >
              Create Circle
            </button>

          </div>

        </div>

      )}

      {/* ================================= */}
      {/* JOIN MODAL */}
      {/* ================================= */}

      {showJoinModal && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">

          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

            <div className="mb-6 flex items-center justify-between">

              <div>

                <h2 className="text-lg font-bold text-[#102A43]">
                  Join Circle
                </h2>

                <p className="mt-1 text-sm text-[#64748B]">
                  Enter the invite code shared with you.
                </p>

              </div>

              <button
                onClick={() =>
                  setShowJoinModal(false)
                }
                className="rounded-lg p-2 text-[#64748B] hover:bg-[#F0FAFA]"
              >
                <X size={18} />
              </button>

            </div>

            <label className="mb-2 block text-sm font-medium text-[#102A43]">
              Invite Code
            </label>

            <input
              type="text"
              value={inviteCode}
              onChange={(event) =>
                setInviteCode(
                  event.target.value.toUpperCase()
                )
              }
              placeholder="GROLYTICS-7K4P"
              className="mb-5 w-full rounded-xl border border-[#DCE7E7] px-4 py-3 font-mono text-sm text-[#102A43] outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#CCFBF1]"
            />

            <button
              onClick={handleJoinCircle}
              className="w-full rounded-xl bg-[#0F766E] py-3 text-sm font-medium text-white hover:bg-[#115E59]"
            >
              Join Circle
            </button>

          </div>

        </div>

      )}

    </DashboardLayout>
  );
}

export default Circles;