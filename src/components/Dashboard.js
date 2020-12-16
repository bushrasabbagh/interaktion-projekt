import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Container } from "react-bootstrap"


export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <><Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}
  >
    <div className="w-100" style={{ maxWidth: "800px" }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Welcome <span style={{color: "blue"}}>{currentUser.displayName}</span></h2>
        <h2 className="text-center mb-4">to SL-Now Web App <span role="img" aria-label="smily">😊</span></h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Link to="/search" className="btn btn-outline-primary w-100 mt-3">
            To search  <span role="img" aria-label="search">🔍</span>
          </Link>
          <Link to="/update-profile" className="btn btn-outline-secondary w-100 mt-3">
            Update Your Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div></div>
      </Container>
    </>
  )
}
