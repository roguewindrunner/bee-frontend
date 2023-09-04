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
import S1Finish from "./pages/session1/S1Finish";

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
				path: "/session1/finish",
				element: <S1Finish />,
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
