import { RoutesComponent } from "./routes.js";
import { useState } from "react";
import { api } from "./api/api.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  console.log(user);

  const navigate = useNavigate();

  const userLogin = async (formData, setLoading) => {
    console.log(formData);
    try {
      setLoading(true);
      const response = await api.post("/sessions", formData);
      console.log(response.data.user);
      navigate("/dashboard");
      setUser(response.data.user);
      console.log(user);
    } catch (error) {
      console.log(error);
      toast.error("Email ou senha invalidos");
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (formData, setLoading) => {
    try {
      setLoading(true);
      const response = await api.post("/users", formData);
      console.log(response);
      toast.success("usuario cadastrado com sucesso!");
    } catch (error) {
      toast.error("Não foi possivel cadastrar o usuario");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="App">
        <RoutesComponent
          userRegister={userRegister}
          userLogin={userLogin}
          user={user}
        />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
