import Image from "next/image";
import Link from 'next/link';

function Product({products}) {


    return (

        <>
            <h1> Products </h1>
            <div  className = "container">

                <div className="row">

                               
                    {
                        products.map((p) => {
                            return (

                                <div key = {p.id} className="col-md-4">

                                    <div className = "card" style={{width: "18rem", marginBottom: "5px", marginTop: "30px", display: "grid"}}>

                                        <Image src={`/${p.src}`} width='240' height='240' alt = "..."/>

                                        <div className="card-body">

                                            <p className="card-text">
                                                {p.title}                                              
                                            </p>

                                            <p className="card-text">
                                                {p.price}
                                            </p>

                                        </div>
                                        <Link href={`/product/${p.id}`}>
                                            <a className="btn btn-danger">Details</a>
                                        </Link>
                                    </div>
                                
                                </div>

                            );
                        })

                    }
                </div>

            </div>
        </>
    )

}

export default Product;

export async function getServerSideProps() { 

    const res = await fetch('http://localhost:5000/products');
    const data = await res.json();
    return {

        props: {

            products: data
        }
    }
}