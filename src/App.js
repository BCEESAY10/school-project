import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import AdminDashboard from "./components/AdminDashboard";
import Classes from "./components/Classes"; 

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
        <Route
          path="/admin-dashboard"
          element={
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 }}
            >
              <AdminDashboard />
            </motion.div>
          }
        />
        <Route
          path="/classes" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Classes />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router> {/* Move the Router here */}
      <MainAppContent />
    </Router>
  );
}

function MainAppContent() {
  const location = useLocation();

  const isAuthPage = ["/", "/register"].includes(location.pathname);

  return (
    <div className="flex w-full h-screen">
      <div
        className={`${
          isAuthPage
            ? "w-full flex items-center justify-center lg:w-1/2"
            : "w-full max-w-[90%] lg:max-w-[85%] mx-auto"
        }`}
      >
        <AnimatedRoutes />
      </div>
      {isAuthPage && (
        <div className="hidden relative lg:flex h-full bg-gray-200 w-1/2 items-center justify-center">
          <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce" />
          <div className="w-full h-1/2 absolute bg-white/10 bottom-0 backdrop-blur-lg" />
        </div>
      )}
    </div>
  );
}

export default App;
