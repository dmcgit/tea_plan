// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DailySummary from "./views/ManagerDailySummary/ManagerDailySummary.jsx";
import Expense from "./views/ManagerExpenses/ManagerExpenses.jsx";
import UserProfile from "./views/UserProfile/UserProfile.jsx";
import TableList from "./views/TableList/TableList.jsx";
import Typography from "./views/Typography/Typography.jsx";
import SetTarget from "./views/ManagerSetTargets/ManagerSetTargets.jsx";
//import Conductor7Day from "./views/Conductor7Day/Conductor7Day.jsx";
import Maps from "./views/Maps/Maps.jsx";
import NotificationsPage from "./views/Notifications/Notifications.jsx";
import UpgradeToPro from "./views/UpgradeToPro/UpgradeToPro.jsx";
// core components/views for RTL layout
import RTLPage from "./views/RTLPage/RTLPage.jsx";

const dashboardRoutes = [
  {
    path: "/DailySummary",
    name: "Daily Work Summary",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DailySummary,
    layout: "/manager"
  },
//   {
//     path: "/Conductor7Day",
//     name: "Conductor 7 Day",
//     rtlName: "ملف تعريفي للمستخدم",
//     icon: Person,
//     component: Conductor7Day,
//     layout: "/conductor"
//   },
  {
    path: "/ExpensesHandling",
    name: "Expenses Handling",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Expense,
    layout: "/manager"
  },
  {
    path: "/ManagerSetTargets",
    name: "Set Targets",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: SetTarget,
    layout: "/manager"
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   rtlName: "خرائط",
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   rtlName: "التطور للاحترافية",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/admin"
  // },
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "پشتیبانی از راست به چپ",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl"
  // }
];

export default dashboardRoutes;