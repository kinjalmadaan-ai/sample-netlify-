//main entry point of the app

import React from "react";
import { AuthProvider , useAuth} from "./context/AuthContext";
import AuthForm from "./components /authForm";
import Dashboard from "./components /Dashboard";

function MainContent(){
  const {currentUser}=useAuth();
  return(
    <main>
      {currentUser ? <Dashboard />: <AuthForm />}
    </main>

  );
}

export default function App(){
  return(
    <AuthProvider>
      <MainContent/>
    </AuthProvider>
  )
}
