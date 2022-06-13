import Image from 'next/image'
import styles from '../styles/About.module.css'

function About() {

    return(

        <>

            <div className = {styles.slider}>

                <div className = 'row'>

                <div className='col-8 mt-5'>

                <h1 className= {styles.header}> Welcome to our website </h1>
                <p>Do you want some sweet cakes ?</p>
                    

                </div>
                <div className='col-4 mt-4'>

                    
                    <Image src = "/s.png" width={500} height={350} alt='...'/>  
                    
                </div>
                
                </div>

            </div>

            <section style={{marginBottom: "80px"}}>

                <h1 className = {styles.header}>ABOUT US</h1>
                <p className = {styles.text}>LOREM IPSUM DOLOR SIT AMET, CONSECTETURADIPISCING ELIT. DONEC AT LIGULA IN LIGULA ULTRICESVULPUTATE AT AC SAPIEN. IN JUSTO NEQUE, MALESUADAA LIBERO ET, LOREM IPSUM DOLOR SIT AMET,CONSECTETUR ADIPISCING ELIT</p>

            </section>

            <section style={{backgroundColor: "#f1f1f1"}}>

                <h1 className = {styles.header}>All Products</h1>
                <div  className = "container">

                    <div className="row">

                        {
                            ['1', '2', '3', '4'].map((path) => {
                                    return (

                                        <div key = {path} className="col-md-3">

                                            <div style={{width: '90px',marginBottom: "5px", marginLeft: "100px"}}>

                                                <Image src={`/${path}.png`} width='50' height='50' alt = "..."/>

                                                    <p className="card-text" style={{marginRight: "40px"}}>
                                                        cakes
                                                    </p>                                                  
                                            
                                            </div>
                                        
                                        </div>

                                    );
                            })

                        } 
                        
                    </div>
                </div>
            </section>
    

        </>
    )

}

export default About;