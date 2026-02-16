

const AutorizationForm = ({formData ,handleChange, handleSubmit}) => {
  return (
    <div style={{border:"4px solid orange"}}>
        <form onSubmit={handleSubmit} style={{border:"2px solid cornflowerblue",padding:"5px",margin:"5px"}}>
            <div>
                  <label>Name: </label>
                <input 
                type="text" 
                value={formData.userName || ""}
                onChange={(e) => handleChange("userName",e.target.value)}
                style={{border:"2px solid black" , padding:"2px",marginLeft:"5px" , marginBottom:"3px"}}
                />
           
            </div>
             <div>
                <label >Email</label>
                    <input 
                    type="email" 
                    value={formData.email || ""}
                    onChange={(e) => handleChange("email",e.target.value)}
                    style={{border:"2px solid black" , padding:"2px",marginLeft:"5px" , marginBottom:"3px"}}/>
                
            </div>
            <div >
                <label>Password</label>
                    <input 
                    type="password" 
                    value={formData.password || ""}
                    onChange={(e) => handleChange("password",e.target.value)} 
                    style={{border:"2px solid black" , padding:"2px",marginLeft:"5px"}}
                    />
                
            </div>
          <button type="submit">Авторизоватся</button>
        </form>
    </div>
  )
}

export default AutorizationForm