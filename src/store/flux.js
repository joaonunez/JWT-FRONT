const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {
        user: null,
        token: null,
      },
      actions: {
        signup: async (email, password) => {
          const resp = await fetch("http://localhost:3001/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });
          const data = await resp.json();
          setStore({ token: data.token });
          localStorage.setItem("token", data.token);
        },
        login: async (email, password) => {
            try {
              const resp = await fetch("http://localhost:3001/login", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
              });
          
              // Verificar si la respuesta es correcta
              if (!resp.ok) {
                const errorData = await resp.json();
                return { success: false, message: errorData.msg || "Login failed" };
              }
          
              // Si la respuesta es exitosa
              const data = await resp.json();
              setStore({ token: data.token });
              localStorage.setItem("token", data.token);
              return { success: true };
            } catch (error) {
              console.error("Login error:", error);
              return { success: false, message: "An error occurred while logging in." };
            }
          },
        logout: () => {
          setStore({ token: null });
          localStorage.removeItem("token");
        },
        loadUserFromStorage: () => {
          const token = localStorage.getItem("token");
          if (token) {
            setStore({ token });
          }
        },
      },
    };
  };
  
  export default getState;
  