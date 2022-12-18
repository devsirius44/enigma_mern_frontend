import { atom } from "recoil";

const sideMenu = atom({
  key: "sideMenu",
  default: {
    menu: [
      {
        icon: "Home",
        pathname: "/dashboard",
        title: "Dashboard",
      },
      {
        icon: "User",
        title: "Employees",
        subMenu: [
          {
            icon: "",
            pathname: "/employees/all-employees",
            title: "All Employees",
          },
          {
            icon: "",
            pathname: "/employees/holidays",
            title: "Holidays",
          },
          {
            icon: "",
            pathname: "/employees/attendance-admin",
            title: "Attendance (Admin)",
          },
          {
            icon: "",
            pathname: "/employees/attendance-employee",
            title: "Attendance (Employee)",
          },
          {
            icon: "",
            pathname: "/employees/departments",
            title: "Departments",
          },
          {
            icon: "",
            pathname: "/employees/designations",
            title: "Designations",
          },
          {
            icon: "",
            pathname: "/employees/timesheet",
            title: "Timesheet",
          },
          {
            icon: "",
            pathname: "/employees/schedule",
            title: "Schedule",
          },
          {
            icon: "",
            pathname: "/employees/shift",
            title: "Shift",
          },
          {
            icon: "",
            pathname: "/employees/overtime",
            title: "Overtime",
          },
        ],
      },
      {
        icon: "ShoppingBag",
        pathname: "/sales",
        title: "Sales",
      },
      {
        icon: "BookOpen",
        title: "Menu",
        subMenu: [
          {
            icon: "",
            pathname: "/menu/categories",
            title: "Categories",
          },
          {
            icon: "",
            pathname: "/menu/products",
            title: "Menu Items",
          },
          {
            icon: "",
            pathname: "/menu/alt-modifier",
            title: "Alt Modifiers",
          },
          {
            icon: "",
            pathname: "/menu/ingredient",
            title: "Ingredients",
          },
        ],
      },
      {
        icon: "Truck",
        pathname: "/provider",
        title: "Delivery Provider",
      },
      {
        icon: "Users",
        pathname: "/customers",
        title: "Customers",
      },
      {
        icon: "Calendar",
        title: "Reports",
        subMenu: [
          {
            icon: "",
            pathname: "/reports/overview",
            title: "Overview",
          },
          {
            icon: "",
            pathname: "/reports/daily-sales",
            title: "Daily Sales",
          },
          {
            icon: "",
            pathname: "/reports/shift",
            title: "Shift",
          },
          {
            icon: "",
            pathname: "/reports/employee-shift",
            title: "Employee Shift",
          },
          {
            icon: "",
            pathname: "/reports/hours-pl",
            title: "Hours P/L",
          },
          {
            icon: "",
            pathname: "/reports/employee-onclock",
            title: "Employee OnClock",
          },
          {
            icon: "",
            pathname: "/reports/employee-timecard",
            title: "Employee TimeCard",
          },
          {
            icon: "",
            pathname: "/reports/department-sales",
            title: "Department Sales",
          },
        ],
      },
      {
        icon: "Gift",
        pathname: "/promotions",
        title: "Promotions",
      },
      {
        icon: "Book",
        pathname: "/reservations",
        title: "Reservations",
      },
      {
        icon: "CreditCard",
        pathname: "/fundraising",
        title: "Fundraising",
      },
      {
        icon: "Settings",
        title: "Settings",
        subMenu: [
          {
            icon: "",
            pathname: "/settings/global-settings",
            title: "Global settings",
          },

          {
            icon: "",
            pathname: "/settings/receipt-settings",
            title: "Receipt settings",
          },
          {
            icon: "Printer",
            pathname: "/settings/printers-page",
            title: "Printers Page",
          },
          {
            icon: "Hardware",
            pathname: "/settings/hardware-page",
            title: "Hardware",
          },
          {
            icon: "Online",
            pathname: "/settings/online-ordering-page",
            title: "Online Ordering Setup",
          },
        ],
      },
      {
        icon: "Gift",
        title: "Loyalty",
        subMenu: [
          {
            icon: "",
            pathname: "/loyalty/dashboard",
            title: "Dashboard",
          },

          {
            icon: "",
            pathname: "/loyalty/campaigns",
            title: "Campaigns",
          },
          {
            icon: "",
            pathname: "/loyalty/emails",
            title: "E-Mails",
          },
          {
            icon: "",
            pathname: "/loyalty/sms",
            title: "SMS",
          },
          {
            icon: "",
            pathname: "/loyalty/push-notification",
            title: "Push Notifications",
          },
        ],
      },

      // "devider",
      // {
      //   icon: "Box",
      //   title: "Menu Layout",
      //   subMenu: [
      //     {
      //       icon: "",
      //       pathname: "/",
      //       title: "Side Menu",
      //       ignore: true,
      //     },
      //     {
      //       icon: "",
      //       pathname: "/simple-menu/dashboard-overview-1",
      //       title: "Simple Menu",
      //       ignore: true,
      //     },
      //     {
      //       icon: "",
      //       pathname: "/top-menu/dashboard-overview-1",
      //       title: "Top Menu",
      //       ignore: true,
      //     },
      //   ],
      // },
      // {
      //   icon: "ShoppingBag",
      //   title: "E-Commerce",
      //   subMenu: [
      //     {
      //       icon: "",
      //       pathname: "/categories",
      //       title: "Categories",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/add-product",
      //       title: "Add Product",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/products",
      //       title: "Products",
      //       subMenu: [
      //         {
      //           icon: "",
      //           pathname: "/product-list",
      //           title: "Product List",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/product-grid",
      //           title: "Product Grid",
      //         },
      //       ],
      //     },
      //     {
      //       icon: "",
      //       pathname: "/transactions",
      //       title: "Transactions",
      //       subMenu: [
      //         {
      //           icon: "",
      //           pathname: "/transaction-list",
      //           title: "Transaction List",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/transaction-detail",
      //           title: "Transaction Detail",
      //         },
      //       ],
      //     },
      //     {
      //       icon: "",
      //       pathname: "/sellers",
      //       title: "Sellers",
      //       subMenu: [
      //         {
      //           icon: "",
      //           pathname: "/seller-list",
      //           title: "Seller List",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/seller-detail",
      //           title: "Seller Detail",
      //         },
      //       ],
      //     },
      //     {
      //       icon: "",
      //       pathname: "/reviews",
      //       title: "Reviews",
      //     },
      //   ],
      // },
      // {
      //   icon: "Users",
      //   title: "Clients",
      //   subMenu: [
      //     {
      //       icon: "",
      //       pathname: "/users-layout-1",
      //       title: "Layout 1",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/users-layout-2",
      //       title: "Layout 2",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/users-layout-3",
      //       title: "Layout 3",
      //     },
      //   ],
      // },
      // {
      //   icon: "Inbox",
      //   pathname: "/inbox",
      //   title: "Inbox",
      // },
      // {
      //   icon: "HardDrive",
      //   pathname: "/file-manager",
      //   title: "File Manager",
      // },
      // {
      //   icon: "CreditCard",
      //   pathname: "/point-of-sale",
      //   title: "Point of Sale",
      // },
      // {
      //   icon: "MessageSquare",
      //   pathname: "/chat",
      //   title: "Chat",
      // },
      // {
      //   icon: "FileText",
      //   pathname: "/post",
      //   title: "Post",
      // },
      // {
      //   icon: "Calendar",
      //   pathname: "/calendar",
      //   title: "Calendar",
      // },
      // "devider",
      // {
      //   icon: "Edit",
      //   title: "Crud",
      //   subMenu: [
      //     {
      //       icon: "",
      //       pathname: "/crud-data-list",
      //       title: "Data List",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/crud-form",
      //       title: "Form",
      //     },
      //   ],
      // },
      // {
      //   icon: "Trello",
      //   title: "Profile",
      //   subMenu: [
      //     {
      //       icon: "",
      //       pathname: "/profile-overview-1",
      //       title: "Overview 1",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/profile-overview-2",
      //       title: "Overview 2",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/profile-overview-3",
      //       title: "Overview 3",
      //     },
      //   ],
      // },
      // {
      //   icon: "Layout",
      //   title: "Pages",
      //   subMenu: [
      //     {
      //       icon: "",
      //       title: "Wizards",
      //       subMenu: [
      //         {
      //           icon: "",
      //           pathname: "/wizard-layout-1",
      //           title: "Layout 1",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/wizard-layout-2",
      //           title: "Layout 2",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/wizard-layout-3",
      //           title: "Layout 3",
      //         },
      //       ],
      //     },
      //     {
      //       icon: "",
      //       title: "Blog",
      //       subMenu: [
      //         {
      //           icon: "",
      //           pathname: "/blog-layout-1",
      //           title: "Layout 1",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/blog-layout-2",
      //           title: "Layout 2",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/blog-layout-3",
      //           title: "Layout 3",
      //         },
      //       ],
      //     },
      //     {
      //       icon: "",
      //       title: "Pricing",
      //       subMenu: [
      //         {
      //           icon: "",
      //           pathname: "/pricing-layout-1",
      //           title: "Layout 1",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/pricing-layout-2",
      //           title: "Layout 2",
      //         },
      //       ],
      //     },
      //     {
      //       icon: "",
      //       title: "Invoice",
      //       subMenu: [
      //         {
      //           icon: "",
      //           pathname: "/invoice-layout-1",
      //           title: "Layout 1",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/invoice-layout-2",
      //           title: "Layout 2",
      //         },
      //       ],
      //     },
      //     {
      //       icon: "",
      //       title: "FAQ",
      //       subMenu: [
      //         {
      //           icon: "",
      //           pathname: "/faq-layout-1",
      //           title: "Layout 1",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/faq-layout-2",
      //           title: "Layout 2",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/faq-layout-3",
      //           title: "Layout 3",
      //         },
      //       ],
      //     },
      //     {
      //       icon: "",
      //       pathname: "login",
      //       title: "Login",
      //     },
      //     {
      //       icon: "",
      //       pathname: "register",
      //       title: "Register",
      //     },
      //     {
      //       icon: "",
      //       pathname: "error-page",
      //       title: "Error Page",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/update-profile",
      //       title: "Update profile",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/change-password",
      //       title: "Change Password",
      //     },
      //   ],
      // },
      // "devider",
      // {
      //   icon: "Inbox",
      //   title: "Components",
      //   subMenu: [
      //     {
      //       icon: "",
      //       title: "Table",
      //       subMenu: [
      //         {
      //           icon: "",
      //           pathname: "/regular-table",
      //           title: "Regular Table",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/tabulator",
      //           title: "Tabulator",
      //         },
      //       ],
      //     },
      //     {
      //       icon: "",
      //       title: "Overlay",
      //       subMenu: [
      //         {
      //           icon: "",
      //           pathname: "/modal",
      //           title: "Modal",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/slide-over",
      //           title: "Slide Over",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/notification",
      //           title: "Notification",
      //         },
      //       ],
      //     },
      //     {
      //       icon: "",
      //       pathname: "/tab",
      //       title: "Tab",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/accordion",
      //       title: "Accordion",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/button",
      //       title: "Button",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/alert",
      //       title: "Alert",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/progress-bar",
      //       title: "Progress Bar",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/tooltip",
      //       title: "Tooltip",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/dropdown",
      //       title: "Dropdown",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/typography",
      //       title: "Typography",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/icon",
      //       title: "Icon",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/loading-icon",
      //       title: "Loading Icon",
      //     },
      //   ],
      // },
      // {
      //   icon: "Sidebar",
      //   title: "Forms",
      //   subMenu: [
      //     {
      //       icon: "",
      //       pathname: "/regular-form",
      //       title: "Regular Form",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/datepicker",
      //       title: "Datepicker",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/tom-select",
      //       title: "Tom Select",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/file-upload",
      //       title: "File Upload",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/wysiwyg-editor",
      //       title: "Wysiwyg Editor",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/validation",
      //       title: "Validation",
      //     },
      //   ],
      // },
      // {
      //   icon: "HardDrive",
      //   title: "Widgets",
      //   subMenu: [
      //     {
      //       icon: "",
      //       pathname: "/chart",
      //       title: "Chart",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/slider",
      //       title: "Slider",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/image-zoom",
      //       title: "Image Zoom",
      //     },
      //   ],
      // },
    ],
  },
});

export { sideMenu };
