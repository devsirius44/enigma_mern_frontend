import { useRoutes, Routes, Route } from "react-router-dom";
import AllEmployees from "../views/employees/all-employees";
import Holidays from "../views/employees/holidays";
import Departments from "../views/employees/departments";
import Designations from "../views/employees/designations";
import Schedule from "../views/employees/schedule";
import Shift from "../views/employees/shift";
import AttendanceAdmin from "../views/employees/attendance-admin";
import Overtime from "../views/employees/overtime";
import AttendanceEmployee from "../views/employees/attendance-employee";
import Timesheet from "../views/employees/timesheet";
import Sales from "../views/sales";
import AltModifier from "../views/menu/alt-modifier";
import Ingredient from "../views/menu/ingredient";
import Promotion from "../views/promotions";
import OverView from "../views/reports/overview";
import DailySales from "../views/reports/daily-sales";
import ShiftReport from "../views/reports/shift";
import EmployeeShift from "../views/reports/employee-shift";
import HoursPL from "../views/reports/hours-pl";
import EmployeeOnclock from "../views/reports/employee-onclock";
import EmployeeTimecard from "../views/reports/employee-timecard";
import Customers from "../views/customers";
import DashboardOverview1 from "../views/dashboard-overview-1/Main";
import Categories from "../views/menu/categories";
import MenuProducts from "../views/menu/products";
import AddProduct from "../views/menu/add-product";
import EditProduct from "../views/menu/edit-product";
import Login from "../views/login/Main";
import ErrorPage from "../views/error-page/Main";
import Reservations from "../views/reservations";
import ForgotPassword from "../views/forgot-password/Main";
import ResetPassword from "../views/reset-password/Main";
import { AuthRoute } from "./AuthRoute";
import { ProtectedRoute } from "./ProtectedRoute";
import { HomeRoute } from "./HomeRoute";
import DepartmentSales from "../views/reports/department-sales";
import ReceiptSettings from "../views/settings/receipt-settings";
import GlobalSettings from "../views/settings/global-settings";
import PrintersPage from "../views/settings/printers-page";
import Hardware from "../views/settings/hardware";
import Dashboard from "../views/loyalty/dashboard/dashboard";
import Campaigns from "../views/loyalty/campaigns";
import EmailPage from "../views/loyalty/e-mails";
import SmsPage from "../views/loyalty/sms";
import NotificationPage from "../views/loyalty/push-notification";
import Fundraising from "../views/fundraising";
import ProfileOverView1 from "../views/profile-overview-1/Main";
import Provider from "../views/delivery-provider";
import OnlineOrderingPage from "../views/settings/online-ordering-page";

function Router() {
  return (
    <Routes>
      <Route element={<AuthRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>

      {/* <Route element={<ProtectedRoute />}> */}
        <Route path="/dashboard" element={<DashboardOverview1 />} />

        <Route path="employees">
          <Route index element={<AllEmployees />} />
          <Route path="all-employees" element={<AllEmployees />} />
          <Route path="holidays" element={<Holidays />} />
          <Route path="attendance-admin" element={<AttendanceAdmin />} />
          <Route path="attendance-employee" element={<AttendanceEmployee />} />
          <Route path="departments" element={<Departments />} />
          <Route path="designations" element={<Designations />} />
          <Route path="timesheet" element={<Timesheet />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="shift" element={<Shift />} />
          <Route path="overtime" element={<Overtime />} />
        </Route>

        <Route path="menu">
          <Route index element={<Categories />} />
          <Route path="categories" element={<Categories />} />
          <Route path="products" element={<MenuProducts />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="edit-product" element={<EditProduct />} />
          <Route path="alt-modifier" element={<AltModifier />} />
          <Route path="ingredient" element={<Ingredient />} />
        </Route>

        <Route path="provider" element={<Provider />} />
        
        <Route path="sales" element={<Sales />} />

        <Route path="customers" element={<Customers />} />

        <Route path="reports">
          <Route index element={<OverView />} />
          <Route path="overview" element={<OverView />} />
          <Route path="daily-sales" element={<DailySales />} />
          <Route path="shift" element={<ShiftReport />} />
          <Route path="employee-shift" element={<EmployeeShift />} />
          <Route path="hours-pl" element={<HoursPL />} />
          <Route path="employee-onclock" element={<EmployeeOnclock />} />
          <Route path="employee-timecard" element={<EmployeeTimecard />} />
          <Route path="department-sales" element={<DepartmentSales />} />
        </Route>

        <Route path="promotions" element={<Promotion />} />

        <Route path="reservations" element={<Reservations />} />

        <Route path="fundraising" element={<Fundraising />} />

        <Route path="settings">
          <Route index element={<GlobalSettings />} />
          <Route path="global-settings" element={<GlobalSettings />} />
          <Route path="receipt-settings" element={<ReceiptSettings />} />
          <Route path="printers-page" element={<PrintersPage />} />
          <Route path="hardware-page" element={<Hardware />} />
          <Route path="online-ordering-page" element={<OnlineOrderingPage />} />
        </Route>

        <Route path="loyalty">
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="campaigns" element={<Campaigns />} />
          <Route path="emails" element={<EmailPage />} />
          <Route path="sms" element={<SmsPage />} />
          <Route path="push-notification" element={<NotificationPage />} />
        </Route>

        <Route path="profile" element={<ProfileOverView1 />}></Route>
      {/* </Route> */}

      <Route path="/" element={<HomeRoute />} />
      <Route path="/error-page" element={<ErrorPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Router;
