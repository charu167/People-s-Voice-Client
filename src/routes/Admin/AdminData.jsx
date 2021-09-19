const sideBarData = [
    {
      title: "Dashboard",
      path: `/admin`,
      icon: <i class="bx bxl-sketch"></i>,
    },
    {
      title: "Complaint",
      path: `/admin/complainreg`,
      icon: <i class="bx bx-qr"></i>,
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
  