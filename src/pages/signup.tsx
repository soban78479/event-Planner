import router from 'next/router'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '../../context/authContext'

const Signup = () => {
  const { user, signup } = useAuth()
  console.log(user)
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleSignup = async (e: any) => {
    e.preventDefault()

    try {
      await signup(data.email, data.password)
      router.push('/login')
    } catch (err) {
      console.log(err)
    }

    console.log(data)
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
      <h1 className="text-center my-3 ">Signup</h1>
      <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
          />
        </Form.Group>

        <Button type="submit" style={{ backgroundColor: "black", borderRadius:'30%', borderColor:'none'}}>
          Signup
        </Button>
      </Form>
    </div>
  )
}

export default Signup