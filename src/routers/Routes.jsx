import { useRoutes } from 'react-router-dom'

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: "" },
      { path: "", element: "" },
    ],
  },
];

export const AppRoutes = () => {
  return useRoutes(routes);
};