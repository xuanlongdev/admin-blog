export default [
  {
    component: 'CNavItem',
    name: 'Thống kê',
    to: '/dashboard',
    icon: 'cil-speedometer',
  },
  {
    component: 'CNavGroup',
    name: 'Danh mục',
    to: '/base',
    icon: 'cil-list',
    items: [
      {
        component: 'CNavItem',
        name: 'Danh sách',
        to: '/base/accordion',
      },
      {
        component: 'CNavItem',
        name: 'Thêm danh mục',
        to: '/base/accordion',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Bài viết',
    to: '/posts',
    icon: 'cil-notes',
    items: [
      {
        component: 'CNavItem',
        name: 'Danh sách',
        to: '/posts',
      },
      {
        component: 'CNavItem',
        name: 'Thêm bài viết',
        to: '/base/accordion',
      },
    ],
  },
  {
    component: 'CNavItem',
    name: 'Bình luận',
    to: '/dashboard',
    icon: 'cil-speech',
  },
  {
    component: 'CNavGroup',
    name: 'Mail đăng ký',
    to: '/base',
    icon: 'cil-envelope-closed',
    items: [
      {
        component: 'CNavItem',
        name: 'Danh sách',
        to: '/base/accordion',
      },
      {
        component: 'CNavItem',
        name: 'Thêm mail',
        to: '/base/accordion',
      },
    ],
  },
  {
    component: 'CNavItem',
    name: 'Tài khoản',
    to: '/dashboard',
    icon: 'cil-user',
  },
  {
    component: 'CNavItem',
    name: 'Cài đặt',
    to: '/dashboard',
    icon: 'cil-settings',
  },
]
