import React from 'react'
import { useState } from 'react'

const Signup = () => {
    const [formData, setFormData] = useState({
        email : '',
        password: '',
        repeatpass: ''
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
        if (formData.password === formData.repeatpass) {
            alert('Account created succesfully')
        }
    }

    return (
        <section className='main-section'>
            
            <div className='content'>
                <h2 className='heading'>Signup Here</h2>

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
                    <input 
                        type="password"
                        placeholder="Re-enter password"
                        name="repeatpass"
                        onChange={handleChange}
                        value={formData.repeatpass}
                    /> <br />
                    <button>Login</button>
                </form>
            </div>
            
            <div className='img-div-2'>
                {/* <img src="/book.jpg" alt="book image" /> */}
            </div>
        </section>
    )
}

export default Signup