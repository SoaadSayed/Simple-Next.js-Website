import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

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

      <section className = {styles.category}>

        <h1>Categories</h1>

        <div  className = "container">

          <div className="row">

            {
                ['1', '2', '3', '4', '5', '6'].map((path) => {
                    return (

                        <div key = {path} className="col-md-4">

                            <div className = "card" style={{width: "18rem", marginBottom: "5px", marginTop: "30px", display: "grid"}}>

                                <Image src={`/${path}.jpg`} width='240' height='240' alt = "..."/>

                                <div className="card-body">

                                    <p className="card-text">
                                      Category.
                                    </p>

                                    <p className="card-text" style={{color: "crimson" }}>
                                      EGP 500
                                    </p>

                                </div>
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
