import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '../../context/authContext'

const Login = () => {
  const router = useRouter()
  const { user, login } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleLogin = async (e: any) => {
    e.preventDefault()

    console.log(user)
    try {
      await login(data.email, data.password)
      if (data.email === "ammarmalik78479@gmail.com" && data.password === "12345678") {
     
       router.push('/home')
      } else {
        router.push('/')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div
      style={{
        width: '80%',
        height:'400px',
        margin: 'auto',
        // border:'2px solid black',
        // boxShadow: '20px 20px 50px 10px pink inset',
        boxShadow: '20px 20px 50px grey',
        padding:'10px',
        textShadow: '5px 5px 10px gray',
      }}
    >
      <h1 className="text-center my-3 ">Login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
            required
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
            required
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button  type="submit" style={{ backgroundColor: "black", borderRadius:'30%', borderColor:'none'}}>
          Login
        </Button>
      </Form>
    </div>
  )
}

export default Login