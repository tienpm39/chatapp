import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import ChatRoom from './components/ChatRoom'
import AuthProvider from './context/AuthProvider'
import AppProvider from './context/AppProvider'
import AddRoomModal from './components/Modal/AddRoomModal'
import InviteMemberModal from './components/Modal/InviteMemberModal'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Switch>
            <Route component={Login} path="/login" />
            <Route component={ChatRoom} path="/" />
          </Switch>
          <AddRoomModal />
          <InviteMemberModal />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;