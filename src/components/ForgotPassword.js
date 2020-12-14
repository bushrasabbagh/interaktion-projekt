import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [infoMessage, setinfoMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setinfoMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setinfoMessage(`An E-mail is sent to ${emailRef.current.value}, Check your inbox`)
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Forgot Password</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {infoMessage && <Alert variant="success">{infoMessage}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Reset Your Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Log In</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}
