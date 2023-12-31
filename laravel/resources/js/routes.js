import React from 'react';

const Toaster = React.lazy(() => import('./components/src/views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./components/src/views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./components/src/views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./components/src/views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./components/src/views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./components/src/views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./components/src/views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./components/src/views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./components/src/views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./components/src/views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./components/src/views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./components/src/views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./components/src/views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./components/src/views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./components/src/views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./components/src/views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./components/src/views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./components/src/views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./components/src/views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./components/src/views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./components/src/views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./components/src/views/charts/Charts'));
const Dashboard = React.lazy(() => import('./components/src/views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./components/src/views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./components/src/views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./components/src/views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./components/src/views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./components/src/views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./components/src/views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./components/src/views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./components/src/views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./components/src/views/widgets/Widgets'));
const Users = React.lazy(() => import('./components/src/views/users/Users'));
const User = React.lazy(() => import('./components/src/views/users/User'));

const routes = [
  { path: '/admin', exact: true ,name: 'Admin'},
  { path: '/admin/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/admin/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/admin/theme/colors', name: 'Colors', component: Colors },
  { path: '/admin/theme/typography', name: 'Typography', component: Typography },
  { path: '/admin/base', name: 'Base', component: Cards, exact: true },
  { path: '/admin/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/admin/base/cards', name: 'Cards', component: Cards },
  { path: '/admin/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/admin/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/admin/base/forms', name: 'Forms', component: BasicForms },
  { path: '/admin/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/admin/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/admin/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/admin/base/navs', name: 'Navs', component: Navs },
  { path: '/admin/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/admin/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/admin/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/admin/base/switches', name: 'Switches', component: Switches },
  { path: '/admin/base/tables', name: 'Tables', component: Tables },
  { path: '/admin/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/admin/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/admin/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/admin/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/admin/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/admin/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/admin/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/admin/charts', name: 'Charts', component: Charts },
  { path: '/admin/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/admin/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/admin/icons/flags', name: 'Flags', component: Flags },
  { path: '/admin/icons/brands', name: 'Brands', component: Brands },
  { path: '/admin/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/admin/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/admin/notifications/badges', name: 'Badges', component: Badges },
  { path: '/admin/notifications/modals', name: 'Modals', component: Modals },
  { path: '/admin/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/admin/widgets', name: 'Widgets', component: Widgets },
  { path: '/admin/users', exact: true,  name: 'Users', component: Users },
  { path: '/admin/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
