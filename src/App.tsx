import {
	Routes,
	Route,
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import Session1 from "./layouts/Session1";
import session1 from "./data/session1";
import LandingPage from "./pages/LandingPage";
import NotFoundPage from "./pages/NotFound";

function App() {
	const router = createBrowserRouter(
		[
			//Landing page route
			{
				path: "/",
				element: <LandingPage />,
			},
			//Session 1 routes
			{
				path: "/session1",
				element: <Session1 />,
				children: [
					{
						index: true,
						element: (
							<Navigate to="./page1" replace />
						),
					},
					...session1.map((x) => ({
						path: `page${x.page}`,
						element: x.element,
					})),
				],
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
		{
			basename: import.meta.env.BASE_URL,
		}
	);

	return <RouterProvider router={router} />;
}

export default App;
