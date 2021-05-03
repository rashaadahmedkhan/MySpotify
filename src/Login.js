import React from 'react'
import {Container} from 'react-bootstrap'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=fe62e8250dd14c9490c14d1b82ac9cbc&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
    return (
        <Container className = "d-flex justify-content-center align-items-center" style = {{minHeight: '100vh'}}>
            <br />
            <a className = "btn btn-success btn-lg" href = {AUTH_URL}>Login</a>
        </Container>
    )
}