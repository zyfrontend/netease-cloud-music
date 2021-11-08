import React, { Suspense } from "react"
import { renderRoutes } from "react-router-config"
import { BrowserRouter as Router } from "react-router-dom"
// redux
import { Provider } from "react-redux"
import store from "@/store"
// 路由配置
import routes from "@/router"
// 导航栏
import NavBar from "@/components/Navbar"
import Footer from "@/components/Footer"
import PlayerBar from "@/components/PlayerBar"
export default function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <Router>
          <NavBar />
          <Suspense fallback={<div>loading</div>}>
            {renderRoutes(routes)}
          </Suspense>
          <Footer />
          <PlayerBar />
        </Router>
      </Provider>
    </div>
  )
}
