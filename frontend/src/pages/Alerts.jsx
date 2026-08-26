import {
  Bell,
  AlertTriangle,
  CalendarX,
  Package,
  CheckCircle2,
  Clock,
  X,
} from "lucide-react";

import { useState } from "react";

import DashboardLayout from "../components/layout/DashboardLayout";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";

function Alerts() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "expiry",
      title: "Milk expires tomorrow",
      description:
        "Milk purchased on 25 Aug 2026 has an expiry date of 27 Aug 2026.",
      item: "Milk",
      date: "27 Aug 2026",
      priority: "High",
      read: false,
    },
    {
      id: 2,
      type: "low",
      title: "Cooking Oil marked as low",
      description:
        "Cooking Oil has been manually marked as running low in your inventory.",
      item: "Cooking Oil",
      date: "26 Aug 2026",
      priority: "Medium",
      read: false,
    },
    {
      id: 3,
      type: "expiry",
      title: "Bread expires soon",
      description:
        "Bread purchased on 24 Aug 2026 has an expiry date of 28 Aug 2026.",
      item: "Bread",
      date: "28 Aug 2026",
      priority: "Medium",
      read: false,
    },
    {
      id: 4,
      type: "low",
      title: "Eggs marked as low",
      description:
        "Eggs have been manually marked as running low in your inventory.",
      item: "Eggs",
      date: "26 Aug 2026",
      priority: "Medium",
      read: true,
    },
    {
      id: 5,
      type: "expiry",
      title: "Curd expires today",
      description:
        "Curd purchased on 25 Aug 2026 has an expiry date of 26 Aug 2026.",
      item: "Curd",
      date: "26 Aug 2026",
      priority: "High",
      read: true,
    },
  ]);

  const [filter, setFilter] = useState("All");

  const unreadCount = alerts.filter(
    (alert) => !alert.read
  ).length;

  const filteredAlerts = alerts.filter((alert) => {
    if (filter === "All") return true;

    if (filter === "Unread") {
      return !alert.read;
    }

    if (filter === "Expiry") {
      return alert.type === "expiry";
    }

    if (filter === "Low Stock") {
      return alert.type === "low";
    }

    return true;
  });

  const markAsRead = (id) => {
    setAlerts((previous) =>
      previous.map((alert) =>
        alert.id === id
          ? {
              ...alert,
              read: true,
            }
          : alert
      )
    );
  };

  const dismissAlert = (id) => {
    setAlerts((previous) =>
      previous.filter(
        (alert) => alert.id !== id
      )
    );
  };

  const markAllAsRead = () => {
    setAlerts((previous) =>
      previous.map((alert) => ({
        ...alert,
        read: true,
      }))
    );
  };

  const getIcon = (type) => {
    if (type === "expiry") {
      return (
        <CalendarX
          size={20}
          className="text-red-500"
        />
      );
    }

    return (
      <Package
        size={20}
        className="text-[#B77900]"
      />
    );
  };

  return (
    <DashboardLayout>

      {/* Header */}

      <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">

        <div>

          <div className="flex items-center gap-3">

            <h1 className="text-2xl font-bold text-[#102A43] md:text-3xl">
              Alerts
            </h1>

            {unreadCount > 0 && (
              <span className="rounded-full bg-[#0F766E] px-2.5 py-1 text-xs font-semibold text-white">
                {unreadCount} new
              </span>
            )}

          </div>

          <p className="mt-1 text-sm text-[#64748B]">
            Important updates based on your grocery records.
          </p>

        </div>

        {unreadCount > 0 && (

          <button
            onClick={markAllAsRead}
            className="flex w-fit items-center gap-2 rounded-xl border border-[#DCE7E7] bg-white px-4 py-2.5 text-sm font-medium text-[#64748B] transition hover:border-[#0F766E] hover:text-[#0F766E]"
          >
            <CheckCircle2 size={17} />
            Mark all as read
          </button>

        )}

      </div>

      {/* Summary */}

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

        <Card>

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-[#64748B]">
                Total Alerts
              </p>

              <p className="mt-2 text-2xl font-bold text-[#102A43]">
                {alerts.length}
              </p>

            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#CCFBF1] text-[#0F766E]">
              <Bell size={20} />
            </div>

          </div>

        </Card>

        <Card>

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-[#64748B]">
                Unread
              </p>

              <p className="mt-2 text-2xl font-bold text-[#102A43]">
                {unreadCount}
              </p>

            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF4D6] text-[#B77900]">
              <AlertTriangle size={20} />
            </div>

          </div>

        </Card>

        <Card>

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-[#64748B]">
                Expiry Alerts
              </p>

              <p className="mt-2 text-2xl font-bold text-[#102A43]">
                {
                  alerts.filter(
                    (alert) =>
                      alert.type === "expiry"
                  ).length
                }
              </p>

            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500">
              <CalendarX size={20} />
            </div>

          </div>

        </Card>

      </div>

      {/* Filters */}

      <Card className="mb-6">

        <div className="flex flex-wrap gap-2">

          {[
            "All",
            "Unread",
            "Expiry",
            "Low Stock",
          ].map((option) => (

            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                filter === option
                  ? "bg-[#0F766E] text-white"
                  : "bg-[#F0FAFA] text-[#64748B] hover:text-[#0F766E]"
              }`}
            >
              {option}
            </button>

          ))}

        </div>

      </Card>

      {/* Alerts */}

      <Card>

        <div className="mb-6">

          <h2 className="text-lg font-semibold text-[#102A43]">
            Notifications
          </h2>

          <p className="mt-1 text-sm text-[#64748B]">
            Alerts generated from dates and inventory information you recorded.
          </p>

        </div>

        {filteredAlerts.length > 0 ? (

          <div className="space-y-3">

            {filteredAlerts.map((alert) => (

              <div
                key={alert.id}
                className={`rounded-xl border p-4 transition ${
                  alert.read
                    ? "border-[#E2E8F0] bg-white"
                    : "border-[#CCFBF1] bg-[#F0FAFA]"
                }`}
              >

                <div className="flex items-start gap-4">

                  {/* Icon */}

                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      alert.type === "expiry"
                        ? "bg-red-50"
                        : "bg-[#FFF4D6]"
                    }`}
                  >
                    {getIcon(alert.type)}
                  </div>

                  {/* Content */}

                  <div className="min-w-0 flex-1">

                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                      <div className="flex items-center gap-2">

                        <h3
                          className={`text-sm ${
                            alert.read
                              ? "font-medium"
                              : "font-semibold"
                          } text-[#102A43]`}
                        >
                          {alert.title}
                        </h3>

                        {!alert.read && (
                          <span className="h-2 w-2 rounded-full bg-[#0F766E]" />
                        )}

                      </div>

                      <Badge
                        variant={
                          alert.priority === "High"
                            ? "danger"
                            : "warning"
                        }
                      >
                        {alert.priority}
                      </Badge>

                    </div>

                    <p className="mt-2 text-sm leading-5 text-[#64748B]">
                      {alert.description}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-[#94A3B8]">

                      <span className="flex items-center gap-1.5">
                        <Package size={14} />
                        {alert.item}
                      </span>

                      <span className="flex items-center gap-1.5">
                        <Clock size={14} />
                        {alert.date}
                      </span>

                    </div>

                  </div>

                  {/* Actions */}

                  <div className="flex shrink-0 gap-1">

                    {!alert.read && (

                      <button
                        onClick={() =>
                          markAsRead(alert.id)
                        }
                        className="rounded-lg p-2 text-[#64748B] transition hover:bg-[#CCFBF1] hover:text-[#0F766E]"
                        title="Mark as read"
                      >
                        <CheckCircle2 size={17} />
                      </button>

                    )}

                    <button
                      onClick={() =>
                        dismissAlert(alert.id)
                      }
                      className="rounded-lg p-2 text-[#94A3B8] transition hover:bg-red-50 hover:text-red-500"
                      title="Dismiss"
                    >
                      <X size={17} />
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="py-14 text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#CCFBF1] text-[#0F766E]">

              <CheckCircle2 size={26} />

            </div>

            <h3 className="mt-4 text-sm font-semibold text-[#102A43]">
              No alerts here
            </h3>

            <p className="mt-1 text-xs text-[#64748B]">
              There are no alerts matching this filter.
            </p>

          </div>

        )}

      </Card>

      {/* Explanation */}

      <div className="mt-6 rounded-xl border border-[#DCE7E7] bg-[#F0FAFA] p-5">

        <div className="flex gap-3">

          <AlertTriangle
            size={19}
            className="mt-0.5 shrink-0 text-[#B77900]"
          />

          <div>

            <p className="text-sm font-semibold text-[#102A43]">
              How alerts work
            </p>

            <p className="mt-2 text-sm leading-6 text-[#64748B]">
              Grolytics only uses information you have recorded,
              such as expiry dates and manually updated inventory
              status. It does not predict what you should buy or
              make purchasing decisions for you.
            </p>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Alerts;