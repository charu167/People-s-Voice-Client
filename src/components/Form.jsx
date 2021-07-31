import React from "react"



const Form = () =>{
    return(
        <div className="container">
        <input type="checkbox"  id="flip"/>
       <div className="cover"></div>
        <form action="#">
            <div className= "form-content">
                <div className="login-form">
                    <div className="title">Login</div>
                    <div className="input-boxes">
                        <div className="input-box">
                            <i className="fas fa-envelop"></i>
                            <input type="email" placeholder="Enter your email id" required/>
        
                        </div>
                        <div className="input-box">
                            <i className="fas fa-envelop"></i>
                            <input type="password" placeholder="Enter your password" required/>
                        </div>
                        <div className="button input-box">
                            <i className="fas fa-envelop"></i>
                            <input type="submit" value="Submit"/>
                        </div>
                        <div className="text">Don't have an account ? <label for="flip">Sign Up now</label> </div>
                    </div>
                </div>
                <div className="Signup-form">
                    <div className="title">Register</div>
                    <div className="input-boxes">
                        <div className="input-box">
                            <i className="fas fa-envelop"></i>
                            <input type="text" placeholder="Enter your Username" required/>    
                        </div>
                        <div className="input-box">
                            <i className="fas fa-envelop"></i>
                            <input type="email" placeholder="Enter your email id" required/>    
                        </div>
                        <div className="input-box">
                            <i className="fas fa-envelop"></i>
                            <input type="password" placeholder="Enter your password" required/>
                        </div>
                        <div className="input-box">
                            <i className="fas fa-envelop"></i>
                            <input type="text" placeholder="Enter your Address" required/>    
                        </div>
                        <div className="input-box">
                            <i className="fas fa-envelop"></i>
                            <input type="text" placeholder="Enter your Phone No." required/>    
                        </div>
                        <div className="button input-box">
                            <i className="fas fa-envelop"></i>
                            <input type="submit" value="Submit"/>
                        </div>
                        <div className="text">Already have an account? <label for="flip">Login now</label></div>
                    </div>
                </div>
            </div>
           
        </form>
    </div>

    )
}

export default Form