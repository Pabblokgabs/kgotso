import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ScrollFocusProvider } from "./context/ScrollFocusContext.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ScrollFocusProvider>
			<App />
		</ScrollFocusProvider>
	</StrictMode>
);
