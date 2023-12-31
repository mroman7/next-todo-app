import { AxiosInstance } from "@/config/axios";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import toast from "react-hot-toast";

const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);


  // ********* API Calls
  let getTodos = async () => {
    let response = await AxiosInstance({
      method: "GET",
      url: "/todos",
    });
    if (response.status == 200) {
      setTodos(response?.data?.todos);
    }
  };

  // Create Todo
  const createNewTodo = async (data) => {
    let response = await AxiosInstance({
      method: "POST",
      url: "/todos/create",
      data: { title: data }
    });
    if (response?.data?.status == 200) {
      toast.success(response.data.message);
      getTodos();
    } else if (response?.data?.status !== 200) {
      toast.error(response.data.message);
    }
  }

  // Update Todo Title 
  const handleUpdateTodo = async (title, _id) => {
    let response = await AxiosInstance({
      method: "POST",
      url: "/todos/update",
      data: { title: title, _id: _id }
    });
    if (response?.data?.status == 200) {
      toast.success(response.data.message);
      getTodos();
    } else {
      toast.error(response.data.message);
    }
  }

  // Update Todo Status 
  const handleUpdateTodoStatus = async (status, _id) => {
    let response = await AxiosInstance({
      method: "POST",
      url: "/todos/update-status",
      data: { status: status, _id: _id }
    });
    if (response?.data?.status == 200) {
      toast.success(response.data.message);
      getTodos();
    } else {
      toast.error(response.data.message);
    }
  }

  // Update Todo Status 
  const handleDeleteTodo = async (_id) => {
    let response = await AxiosInstance({
      method: "DELETE",
      url: "/todos/delete",
      data: { _id: _id }
    });
    if (response?.data?.status == 200) {
      toast.success(response.data.message);
      getTodos();
    } else {
      toast.error(response.data.message);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <AppContext.Provider
      value={{
        todos,
        createNewTodo,
        handleUpdateTodo,
        handleUpdateTodoStatus,
        handleDeleteTodo
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
export default AppContextProvider;
