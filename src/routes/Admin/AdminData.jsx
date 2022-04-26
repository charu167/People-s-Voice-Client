const sideBarData = [
  {
    title: "Dashboard",
    path: `/admin`,
    icon: <i class="bx bxl-sketch"></i>,
  },
  {
    title: "User Details",
    path: `/admin/userdetail`,
    icon: <i class="bx bxs-user-detail"></i>,
  },
  {
    title: "Reports",
    path: `/admin/reports`,
    icon: <i class="bx bxs-report"></i>,
  },
];

const submenuData = [
  { title: "Registeration", path: "/admin/gsreg" },
  { title: "List", path: "/admin/gslist" },
];

export { sideBarData, submenuData };
