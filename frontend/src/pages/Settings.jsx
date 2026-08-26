import {
  User,
  Bell,
  Palette,
  Database,
  ShieldCheck,
  Save,
  CheckCircle2,
} from "lucide-react";

import { useState } from "react";

import DashboardLayout from "../components/layout/DashboardLayout";
import Card from "../components/ui/Card";

function Settings() {
  const [settings, setSettings] = useState({
    name: "Grolytics User",
    email: "user@example.com",
    currency: "INR",
    dateFormat: "DD MMM YYYY",
    expiryAlerts: true,
    lowStockAlerts: true,
    monthlyReports: true,
  });

  const [saved, setSaved] = useState(false);

  const updateSetting = (field, value) => {
    setSettings((previous) => ({
      ...previous,
      [field]: value,
    }));

    setSaved(false);
  };

  const handleSave = () => {
    console.log("Settings:", settings);

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <DashboardLayout>

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-2xl font-bold text-[#102A43] md:text-3xl">
          Settings
        </h1>

        <p className="mt-1 text-sm text-[#64748B]">
          Manage your Grolytics preferences.
        </p>

      </div>

      {/* Saved Message */}

      {saved && (

        <div className="mb-6 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">

          <CheckCircle2
            size={19}
            className="text-emerald-600"
          />

          <div>

            <p className="text-sm font-semibold text-emerald-800">
              Settings saved
            </p>

            <p className="mt-1 text-xs text-emerald-700">
              Your preferences have been updated.
            </p>

          </div>

        </div>

      )}

      <div className="space-y-6">

        {/* Profile */}

        <Card>

          <div className="mb-6 flex items-start gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#CCFBF1] text-[#0F766E]">
              <User size={20} />
            </div>

            <div>

              <h2 className="text-lg font-semibold text-[#102A43]">
                Profile
              </h2>

              <p className="mt-1 text-sm text-[#64748B]">
                Basic information associated with your account.
              </p>

            </div>

          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            {/* Name */}

            <div>

              <label className="mb-2 block text-sm font-medium text-[#102A43]">
                Name
              </label>

              <input
                type="text"
                value={settings.name}
                onChange={(event) =>
                  updateSetting(
                    "name",
                    event.target.value
                  )
                }
                className="w-full rounded-xl border border-[#DCE7E7] bg-white px-4 py-2.5 text-sm text-[#102A43] outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#CCFBF1]"
              />

            </div>

            {/* Email */}

            <div>

              <label className="mb-2 block text-sm font-medium text-[#102A43]">
                Email
              </label>

              <input
                type="email"
                value={settings.email}
                onChange={(event) =>
                  updateSetting(
                    "email",
                    event.target.value
                  )
                }
                className="w-full rounded-xl border border-[#DCE7E7] bg-white px-4 py-2.5 text-sm text-[#102A43] outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#CCFBF1]"
              />

            </div>

          </div>

        </Card>

        {/* Preferences */}

        <Card>

          <div className="mb-6 flex items-start gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6F6F4] text-[#0F766E]">
              <Palette size={20} />
            </div>

            <div>

              <h2 className="text-lg font-semibold text-[#102A43]">
                Preferences
              </h2>

              <p className="mt-1 text-sm text-[#64748B]">
                Choose how information is displayed.
              </p>

            </div>

          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            {/* Currency */}

            <div>

              <label className="mb-2 block text-sm font-medium text-[#102A43]">
                Currency
              </label>

              <select
                value={settings.currency}
                onChange={(event) =>
                  updateSetting(
                    "currency",
                    event.target.value
                  )
                }
                className="w-full rounded-xl border border-[#DCE7E7] bg-white px-4 py-2.5 text-sm text-[#102A43] outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#CCFBF1]"
              >
                <option value="INR">
                  Indian Rupee (₹)
                </option>

                <option value="USD">
                  US Dollar ($)
                </option>

                <option value="EUR">
                  Euro (€)
                </option>

              </select>

            </div>

            {/* Date Format */}

            <div>

              <label className="mb-2 block text-sm font-medium text-[#102A43]">
                Date Format
              </label>

              <select
                value={settings.dateFormat}
                onChange={(event) =>
                  updateSetting(
                    "dateFormat",
                    event.target.value
                  )
                }
                className="w-full rounded-xl border border-[#DCE7E7] bg-white px-4 py-2.5 text-sm text-[#102A43] outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#CCFBF1]"
              >
                <option>
                  DD MMM YYYY
                </option>

                <option>
                  DD/MM/YYYY
                </option>

                <option>
                  MM/DD/YYYY
                </option>

              </select>

            </div>

          </div>

        </Card>

        {/* Notifications */}

        <Card>

          <div className="mb-6 flex items-start gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF4D6] text-[#B77900]">
              <Bell size={20} />
            </div>

            <div>

              <h2 className="text-lg font-semibold text-[#102A43]">
                Notifications
              </h2>

              <p className="mt-1 text-sm text-[#64748B]">
                Control which reminders you want to receive.
              </p>

            </div>

          </div>

          <div className="space-y-4">

            {/* Expiry */}

            <label className="flex cursor-pointer items-center justify-between rounded-xl border border-[#DCE7E7] p-4 hover:bg-[#F8FCFC]">

              <div>

                <p className="text-sm font-semibold text-[#102A43]">
                  Expiry reminders
                </p>

                <p className="mt-1 text-xs text-[#64748B]">
                  Show alerts for products with recorded expiry dates.
                </p>

              </div>

              <input
                type="checkbox"
                checked={settings.expiryAlerts}
                onChange={(event) =>
                  updateSetting(
                    "expiryAlerts",
                    event.target.checked
                  )
                }
                className="h-5 w-5 accent-[#0F766E]"
              />

            </label>

            {/* Low Stock */}

            <label className="flex cursor-pointer items-center justify-between rounded-xl border border-[#DCE7E7] p-4 hover:bg-[#F8FCFC]">

              <div>

                <p className="text-sm font-semibold text-[#102A43]">
                  Low inventory alerts
                </p>

                <p className="mt-1 text-xs text-[#64748B]">
                  Show items that you have manually marked as low.
                </p>

              </div>

              <input
                type="checkbox"
                checked={settings.lowStockAlerts}
                onChange={(event) =>
                  updateSetting(
                    "lowStockAlerts",
                    event.target.checked
                  )
                }
                className="h-5 w-5 accent-[#0F766E]"
              />

            </label>

            {/* Reports */}

            <label className="flex cursor-pointer items-center justify-between rounded-xl border border-[#DCE7E7] p-4 hover:bg-[#F8FCFC]">

              <div>

                <p className="text-sm font-semibold text-[#102A43]">
                  Monthly reports
                </p>

                <p className="mt-1 text-xs text-[#64748B]">
                  Receive a summary of your recorded grocery activity.
                </p>

              </div>

              <input
                type="checkbox"
                checked={settings.monthlyReports}
                onChange={(event) =>
                  updateSetting(
                    "monthlyReports",
                    event.target.checked
                  )
                }
                className="h-5 w-5 accent-[#0F766E]"
              />

            </label>

          </div>

        </Card>

        {/* Data */}

        <Card>

          <div className="mb-6 flex items-start gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#6366F1]">
              <Database size={20} />
            </div>

            <div>

              <h2 className="text-lg font-semibold text-[#102A43]">
                Data Management
              </h2>

              <p className="mt-1 text-sm text-[#64748B]">
                Manage your grocery records and account data.
              </p>

            </div>

          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            <button className="rounded-xl border border-[#DCE7E7] p-4 text-left transition hover:border-[#0F766E] hover:bg-[#F0FAFA]">

              <p className="text-sm font-semibold text-[#102A43]">
                Export my data
              </p>

              <p className="mt-1 text-xs leading-5 text-[#64748B]">
                Download your recorded purchases and inventory data.
              </p>

            </button>

            <button className="rounded-xl border border-red-100 p-4 text-left transition hover:bg-red-50">

              <p className="text-sm font-semibold text-red-600">
                Clear local data
              </p>

              <p className="mt-1 text-xs leading-5 text-[#64748B]">
                Remove locally stored application data from this device.
              </p>

            </button>

          </div>

        </Card>

        {/* Privacy */}

        <Card>

          <div className="flex items-start gap-3">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E6F6F4] text-[#0F766E]">
              <ShieldCheck size={20} />
            </div>

            <div>

              <h2 className="text-lg font-semibold text-[#102A43]">
                Data & Privacy
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#64748B]">
                Grolytics is designed to organize your grocery
                purchase information. Your records are used to
                display inventory, purchase history, analytics,
                reports and alerts.
              </p>

              <p className="mt-2 text-sm leading-6 text-[#64748B]">
                Grolytics does not make purchasing decisions
                on your behalf or use AI to predict what you
                should purchase.
              </p>

            </div>

          </div>

        </Card>

      </div>

      {/* Save Button */}

      <div className="mt-6 flex justify-end">

        <button
          onClick={handleSave}
          className="flex items-center gap-2 rounded-xl bg-[#0F766E] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#115E59]"
        >
          <Save size={17} />
          Save Changes
        </button>

      </div>

    </DashboardLayout>
  );
}

export default Settings;