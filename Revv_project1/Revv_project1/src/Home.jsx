
function Home(){
    return(
        <div>
             <div className="Header">
            <img style={{height:"50px", padding:'10px' , marginLeft:'40px'}}src="https://www.revv.co.in/grapheneImages/newopen/Logo@2x.png" alt="" />
            <div className="secHeader">
            <h3 style={{padding:'10px', marginRight:'30px'}}>FAQs</h3>
            <img style={{padding:'5px'}} src="https://www.revv.co.in/grapheneImages/newopen/ic-web-profile-login.svg" alt="" />
            <label style={{margin:'10px'}}htmlFor="">Login or Signup</label>
            <br/>
            {/* <label htmlFor="">Signup</label> */}
            </div>
           
           </div>
                <div className="sideBar">
                    <div className="Subscription">
                        <div className="Rentals">
                            <h3 className="htag" style={{marginTop:'5px'}} >Rentals
                            <p style={{marginTop:'5px', fontSize:'15px', fontWeight:'lighter', marginBottom:'60px'}}>For hours & days</p>
                            </h3>
                           
                        </div>
                            <h3 className="htag" style={{paddingLeft:'60px', marginTop:'25px', color:'white'}}>Subscriptions
                            <p style={{ paddingBottom:'80px', marginBottom:'60px', marginTop:'5px', fontWeight:'lighter', fontSize:'15px'}}>For more than 1 month</p>
                            </h3>
                           
                         </div>
                       <img style={{paddingTop:'30px'}}src="https://www.revv.co.in/imgs/logo-rentals.svg" alt="" />  
                        <p style={{paddingBottom:'40px', fontSize:'18px'}}>Self drive car rentals in India</p>
                <div>
                    <div className="searchDiv">
                    <table>
                           <tr>
                            <td>
                            <img style={{marginLeft:'5px', paddingRight:'20rem'}}src="https://www.revv.co.in/assets/RentalImages/HomeScreen/locationRental.svg" alt="" />
                            </td>
                            <td style={{marginLeft:'200px', paddingLeft:'50px'}}><h3  >Kolkata</h3></td>
                           </tr>
                             <tr>
                            <td>
                            <input type="text" placeholder="Start time"/>
                            <input type="text" placeholder="End Time"/>
                            </td>
                         </tr>
                                    
                           
                                </table>
                                    
                                    
                            
                             
                            {/* </div> */}
                            
                    </div>
                    
                    <button style={{width:'70%', height:'35px', marginTop:'10px', boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px', marginBottom:'70px'}}>Search</button>
                </div>
                </div>
       
        </div>
       
    )

   
}


export default Home