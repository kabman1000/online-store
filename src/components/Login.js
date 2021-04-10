import React from 'react'
import toops from '../assets/toops.png'

export class Login extends React.Component{
    state = {
        username:'',
        pwd:''
    }
    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
        

    }
    handleSubmit = (e) =>{
        
        e.preventDefault()
        this.props.isLogin(true)

    }
    render(){
        return (
            <div className='base-container'>
                <div className='header'>Login</div>
                <div className='content'>
                    <div className='image'>
                        <img src={toops} alt='/' />

                    </div>
                    <form onSubmit = {this.handleSubmit}>
                        <div className='form-group'>
                            <label>Username:</label>
                            <br />
                            <input type='text' name='username' placeholder='username' required onChange={this.handleChange} />
                            <label>Password:</label>
                            <br />
                            <input type='password' name='pwd' placeholder='password' required onChange={this.handleChange} />
                        </div>
                        <div className='footerr'>
                            <button onSubmit={this.handleSubmit} className='btn' >Login</button>
                            <br />
                            <button onSubmit={this.handleSubmit} className='btn' >Continue As Guest</button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}
