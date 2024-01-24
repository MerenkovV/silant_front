import React, {useEffect} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
// import { authRoutes, publicRoutes } from '../routes'
// import { SHOP_ROUTE } from '../utils/consts'
// import { Layout } from 'antd'
// import NavBar from './NavBar'
// import { check } from '../http/userAPI'
import { observer } from 'mobx-react-lite'
import { useStore } from './store/Root'
import Header from './components/Header/Header'


const AppRouter = observer(() => {
  const {users} = useStore()

//   useEffect(()=>{
//     user.setIsFetching(true)
//     check().then((data)=>{
//       if(data){
//         user.setUser(data)
//         user.setIsAuth(true)
//       }
//       user.setIsFetching(false)
//     }).catch((e)=>{
//       console.log(e.response.data.message)
//       user.setIsFetching(false)
//     })
//   }, [])
  
  return (
    // <Layout>
    //   <NavBar/>
    //   <Routes>
    //     {
    //       user.isAuth && authRoutes.map(({path, Component})=>
    //         <Route key={path} path={path} element={<Component/>} />
    //       )
    //     }
    //     {
    //       publicRoutes.map(({path, Component})=>
    //         <Route key={path} path={path} element={<Component/>} />
    //       )
    //     }
    //     <Route path='*' element={<Navigate replace to={SHOP_ROUTE}/>} />
    //   </Routes>
    // </Layout>
    <Header/>
  )
})

export default AppRouter