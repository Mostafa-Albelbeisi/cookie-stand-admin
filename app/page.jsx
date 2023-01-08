'use client';

import { Inter } from '@next/font/google'
import Form from './components/Form'
import LoginForm from './components/LoginForm';
import { useContext } from "react"
import { AuthContext } from './contexts/auth';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {tokens} = useContext(AuthContext)
  return (
    <>
      {/* <LoginForm/> */}
      {/* <Form /> */}
      {tokens ? <><Form/></> : <LoginForm/>}
    </>
  )
}
