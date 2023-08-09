import {
	Routes,
	Route,
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";

function App() {
	const router =
		createBrowserRouter(
			[
				//Landing page route
				{
					path: "/",
					element: (
						<LandingPage />
					),
				},
			],
			{
				basename:
					import.meta
						.env
						.BASE_URL,
			}
		);

	return (
		<RouterProvider
			router={
				router
			}
		/>
	);
}

export default App;
