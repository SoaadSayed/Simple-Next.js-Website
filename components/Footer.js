import Link from "next/link";
function Footer() {


    return(

        <>
             <div className = "container" style={{marginTop: "100px"}}>

                <footer className = "fixed-bottom bg-light text-white">

                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">

                        <li className="nav-item">

                            <Link href='/'>

                                <a href="#" className="nav-link px-2 text-muted"> Home </a>

                            </Link>
                        </li>

                        <li className="nav-item">

                            <Link href='/about'>

                                <a href="#" className="nav-link px-2 text-muted"> About </a>

                            </Link>
                        </li>

                    </ul>

                </footer>

            </div>
        </>
    );

}

export default Footer;