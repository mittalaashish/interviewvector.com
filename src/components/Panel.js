import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const Panel = () => {
    return (
        <div className="panel_parent">
        <Container >
            <Grid container   >
            <Grid item xs={12} sm={12} >
        <h1 className="heading2 panel">OUR INTERVIEWING PANEL</h1>
        <div className="div-block-2 small" />
        </Grid>
        <Grid item xs={12} sm={4} item       className="panel_child" >
         
         
            <div className="panel_card">
                <div>
            <img  
                  src="desc1.png"
                  loading="lazy"
                  alt="hii"
                 
                />
             </div>
           
            <div>
            <hr className="panel-line"></hr>
            </div>
            <div>
              <h6 className="desc_head">Experts from multiple <br/>technology  domains</h6>
            </div>
</div>
          
         
         </Grid>
         <Grid item xs={12} sm={4} item style={{padding:"30px"}} className="panel_child" >
         
         
         <div className="panel_card">
             <div>
         <img  
               src="aero1.png"
               loading="lazy"
               alt="hii"
              
             />
          </div>
        
         <div>
         <hr className="panel-line"></hr>
         </div>
         <div style={{marginTop:"5px"}} >
         <h6 className="desc_head" >Hailing from FAANG Companies <br/>& unicorn startups</h6>
         </div>
</div>
       
      
      </Grid>
      <Grid item xs={12} sm={4} i className="panel_child" >
         
         
         <div className="panel_card">
             <div>
         <img  
               src="brief.png"
               loading="lazy"
               alt="hii"
              
             />
          </div>
        
         <div>
         <hr className="panel-line"></hr>
         </div>
         <div>
         <h6 className="desc_head">Professional <br/>Interviewers</h6>
         </div>
</div>
       
      
      </Grid>
         
            {/* <div className="text-block-10 ">
            <img  style={{marginTop:"5px"}}
                  src="aero1.png"
                  loading="lazy"
                  alt="hii"
                 
                />
             
            </div>
            <div className="line_parent">
            <hr className="panel-line"></hr>
            </div>
            <div>
              
              <h6 className="desc_head" >Hailing from FAANG Companies <br/>& unicorn startups</h6>
            </div>
            
           
         
         <div className="text-block-10 ">
         <img  style={{marginLeft:"-35px"}}
               src="brief.png"
               loading="lazy"
               alt="hii"
              
             />
          
         </div>
         <div>
         <hr className="panel-line"></hr>
         </div>
         <div>
         <h6 className="desc_head">Professional <br/>Interviewers</h6>
         </div>
         */}
         
        
        <Grid item xs={12} sm={7} item  className="panel_child"  >
         
         
         <div className="panel_card1">
             <div>
         <img  
               src="use.png"
               loading="lazy"
               alt="hii"
              
             />
          </div>
        
         <div>
         <hr className="panel-line"></hr>
         </div>
         <div>
         <h6 className="desc_head">Constantly accessed for quality <br/>and communication skills</h6>
         </div>
</div>
       
      
      </Grid>
      <Grid item xs={12} sm={4} item   className="panel_child" >
         
         
         <div className="panel_card2">
             <div>
         <img  
               src="medal.png"
               loading="lazy"
               alt="hii"
              
             />
          </div>
        
         <div>
         <hr className="panel-line"></hr>
         </div>
         <div>
         <h6 className="desc_head">Capable of making wholesome <br/>trustworthy evaluations</h6>
         </div>
</div>
       
      
      </Grid>
      
      
        
         
      
            </Grid>
            </Container>
            </div>
    )
}
export default Panel