import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      {/* Use key={location.pathname} to ensure smooth transitions */}
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <LoginForm />
            </motion.div>
          }
        />
        <Route
          path="/register"
          element={
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <RegisterForm />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    
      <Router>
        <div className="flex w-full h-screen">
          <div className="w-full flex items-center justify-center lg:w-1/2">
            <AnimatedRoutes />
          </div>
          <div className="hidden relative lg:flex h-full bg-gray-200 w-1/2 items-center justify-center">
            <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce" />
            <div className="w-full h-1/2 absolute bg-white/10 bottom-0 backdrop-blur-lg" />
          </div>
        </div>
      </Router>
  );
}

export default App;
