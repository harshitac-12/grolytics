import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";

function Placeholder({ title }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-bold text-slate-900">
        {title}
      </h1>

      <p className="mt-2 text-sm text-slate-500">
        This page will be built soon.
      </p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default */}
        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Grolytics Pages */}
        <Route
          path="/upload-bills"
          element={<Placeholder title="Upload Bills" />}
        />

        <Route
          path="/inventory"
          element={<Placeholder title="Inventory" />}
        />

        <Route
          path="/purchase-history"
          element={<Placeholder title="Purchase History" />}
        />

        <Route
          path="/analytics"
          element={<Placeholder title="Analytics" />}
        />

        <Route
          path="/reports"
          element={<Placeholder title="Reports" />}
        />

        <Route
          path="/alerts"
          element={<Placeholder title="Alerts" />}
        />

        <Route
          path="/settings"
          element={<Placeholder title="Settings" />}
        />

        {/* Unknown URL */}
        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;