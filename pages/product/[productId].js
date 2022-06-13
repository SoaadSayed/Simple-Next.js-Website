import { useRouter } from 'next/router';
import Image from "next/image";
import styles from '../../styles/ProductId.module.css';
import Comments from '../comments/index';

function ProductId({product}) {

    const router = useRouter();
    const {productId} = router.query;


    return (

        <>

            <div className="container">

                <div className="row">

                    <div className="col-6">

                        <div className={styles.imageContainer}>

                            <Image src={`/${product.src}`} width='240' height='240' alt = "..."/>

                        </div>

                    </div>

                    <div className='col-2'>

                        <div className={styles.imageContainer}>

                            <p className={styles.parag}> {product.title} </p>
                            <p> {product.price} </p>

                            <span>
                                <button className="btn btn-outline-danger"> - </button>
                                <span className = {styles.spanmargin}>1</span>
                                <button className="btn btn-outline-danger"> + </button>
                            </span>

                            <p> {product.availability} </p>

                            <button className="btn btn-danger"> Add to Bag </button>

                        </div>

                    </div>
                    
                </div>

                <div className={styles.imageContainer}>

                    <Comments/> 

                </div>        
                
            </div>
                    
            

            

        </>
    );

}

export default ProductId;

export async function getServerSideProps(context) {

    const {params} = context;
    const res = await fetch(`http://localhost:5000/products/${params.productId}`);
    const data = await res.json();

    return {

        props: {

            product: data
        }
    }
}