import { RouterProvider } from "react-router-dom";
import { router } from "./lib/router";
import { Provider } from "react-redux";
import { store } from "./store";
import { Toaster } from "sonner";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster duration={3000} richColors position="bottom-center" />
    </Provider>
  );
}

export default App;
