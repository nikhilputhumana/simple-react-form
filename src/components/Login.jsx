import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [formData, setFormData] = useState({
        email : '',
        password: ''
    })

    function handleChange(event) {
        setFormData(prevData => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
        alert(formData)
    }

    return (
        <section className='main-section'>
            <div className='img-div'> </div>
            <div className='content'>
                <h2 className='heading'>Login Here</h2>

                <form onSubmit={handleSubmit} className="login-form">
                    <input 
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                    /> <br />
                    <input 
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                    /> <br />
                    <button>Login</button>
                </form>
            </div>
        </section>
    )
}

export default Login