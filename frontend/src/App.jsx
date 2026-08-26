import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import UploadBills from "./pages/UploadBills/UploadBills";
import Inventory from "./pages/Inventory";
import PurchaseHistory from "./pages/PurchaseHistory";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import Alerts from "./pages/Alerts";
import Settings from "./pages/Settings";
function Placeholder({ title }) {
  return (
    <div className="rounded-2xl border border-[#DCE7E7] bg-white p-8 shadow-sm">

      <h1 className="text-2xl font-bold text-[#102A43]">
        {title}
      </h1>

      <p className="mt-2 text-sm text-[#64748B]">
        This page will be built soon.
      </p>

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/upload-bills"
          element={<UploadBills />}
        />

       <Route
  path="/inventory"
  element={<Inventory />}
/>

     
<Route
  path="/purchase-history"
  element={<PurchaseHistory />}
/>
   <Route
  path="/analytics"
  element={<Analytics />}
/>
        <Route
  path="/reports"
  element={<Reports />}
/>

   <Route
  path="/alerts"
  element={<Alerts />}
/>

       <Route
  path="/settings"
  element={<Settings />}
/> 

        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;