import { useEffect, useState } from "react"
import Avatar from "./avatar"
import Todo from "./todo"
import Footer from "./footer"
import "../home/css/style.css"
import image from "../home/img/jk.png"


const Nav = () => {
    const [serchData, setSearchData] = useState('');
    const [Btn, SetBtn] = useState(false)


    const control = () => {


        if (serchData.length > 0) {
            SetBtn(true)
        }
        else {
            SetBtn(false)
        }
    }

    useEffect(() => {
        control()
    }, [serchData])
    return (
        <>

            <div>
                <div>
                    <nav className="nav">
                        <div className="logo-h2">
                            <img src={image} alt="img" className="img" ></img>
                            <h2 className="title" >NOTER</h2>
                        </div>

                        <div>
                            <div className="serch-mainDiv">
                                <input type="search"
                                    onChange={(event) => (setSearchData(event.target.value))}
                                    // ref={sdata}
                                    class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search Todo and then clickEmpty " aria-label="Search" aria-describedby="button-addon2"></input>
                                {/* <button onClick={() => { click() }} class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                    </svg>
                                </button> */}
                            </div>
                        </div>
                    </nav>
                </div>
            </div >
            <Avatar />
            <Todo serchData={serchData} Btn={Btn} />
            <Footer />


        </>
    )

}

export default Nav
