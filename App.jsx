import React, { useState } from "react";
import BookHome from "./BookHome";
import Exploreindia from "./Explorindia";
import Tripplanner from "./Tripplanner";
import Propertistype from "./Propertistype";
import Footersect from "./Footersect";
import Emailsection from "./Emailsection";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const App = () =>{
  const btnlist = [
    {btntext : "Register"},
    {btntext : "Sign In"},
  ]

  const formlist = [
    {imgsrc : "https://img.freepik.com/premium-photo/escape-tropical-paradise-with-summer-beach-scene-featuring-airplane-suitcase-flamingo_674594-1192.jpg", heading : "Register or create an account"},
    {imgsrc : "https://img.freepik.com/premium-photo/awesome-collage-travel-concept-with-suitcase-airplane-traveler-accessories-3d-rendering_741910-15595.jpg", heading : "Sign in or create an account"},
  ]

  const [formcal , setformcal] = useState("")

  const openthefrom = (index) =>{
    setformcal(index)
  }

  return(
    <>
      <div className="blue">
        <div className="container">
            <header>
              <div className="headertop row">
                <div className="heading col-6">
                  <h1>Booking.com</h1>
                </div>
                <div className="navbtnbox">
                  <button id="hambarbtn">
                      <i className="fa-solid fa-bars" id="hambaricon"></i>
                  </button>
                </div>
                <div className="headinglogin col-6">
                  <ul>
                    <li className="thelist"><a href="#">INR</a></li>
                    <li className="thelist"><a href="#"><img src="https://t-cf.bstatic.com/design-assets/assets/v3.85.0/images-flags/In@3x.png"/></a></li>
                    <li className="linage thelist"><a href="#"><span><i className="fa-solid fa-question"></i></span></a></li>
                    <li className="thelist"><a href="#">List your property</a></li>
                    {btnlist.map((ele, index) =>{
                      return(<li key={index} onClick={ () => openthefrom(index)}><a href="#"><button>{ele.btntext}</button></a></li>)
                    })}
                  </ul>
                    {formlist.map((ele , index) =>{
                      return(
                        <article key = {index} className={formcal === index ? "active" : ""}>
                          <div className="formboxcontainer">
                            <div className="formimgbox">
                              <img src={ele.imgsrc}/>
                            </div>
                            <form action="#">
                                <div className="closbtnbox">
                                  <button className="fromclosbtn" onClick={ () => openthefrom("")}><i className="fa-solid fa-xmark"></i></button>
                                </div>
                                <h2>{ele.heading}</h2>
                                <div className="formbox">
                                  <div className="box">
                                    <label >Email address</label>
                                    <input type="email" placeholder="Enter your email address" />
                                  </div>
                                  <div className="box">
                                    <label >Password</label>
                                    <input type="password" placeholder="Enter your password" />
                                  </div>
                                  <div className="box">
                                    <button>Conntinue with email</button>
                                  </div>
                                </div>
                                <div className="formbox2">
                                  <p>or use one of these options</p>
                                  <div className="optoncont">
                                      <div className="options">
                                        <img src = "https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg" />
                                      </div>
                                      <div className="options">
                                        <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" />
                                      </div>
                                      <div className="options">
                                        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPgmlkI-AefWOQuXXbnajIegyQ4NdLkxMTVefHJYmjyBe7RFzR8HIRrPVYe71SQtiRJXM&usqp=CAU" />
                                      </div>
                                  </div>
                                  <p>By signing in or creating an account, you agree with our <a href="#">Terms & conditions</a> and <a href="#">Privacy statement</a></p>
                                </div>
                            </form>
                          </div>
                        </article>
                      )
                    })}
                </div>
              </div>
              <nav>
                <ul>
                  <li><a href="#"><span className="fcd9eec8fb bfe53e640d c2cc050fb8" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path id="thenavimg" d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z"></path></svg></span> Stays</a></li>
                  <li><a href="#"><span className="fcd9eec8fb bfe53e640d c2cc050fb8" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" id="thenavimg" viewBox="0 0 24 24"><path d="M20.505 7.5l-15.266.022.672.415-1.1-2.2a.75.75 0 0 0-.638-.414l-2.293-.1C.82 5.228-.003 6.06.003 7.083c.002.243.051.484.146.709l2.072 4.68a2.947 2.947 0 0 0 2.701 1.778h4.043l-.676-1.075-2.484 5.168A1.831 1.831 0 0 0 7.449 21h2.099a1.85 1.85 0 0 0 1.419-.664l5.165-6.363-.582.277h4.956c1.82.09 3.399-1.341 3.49-3.198l.004-.134a3.426 3.426 0 0 0-3.44-3.419l-.074.001zm.02 1.5h.042a1.924 1.924 0 0 1 1.933 1.914l-.002.065a1.866 1.866 0 0 1-1.955 1.772l-4.993-.001a.75.75 0 0 0-.582.277l-5.16 6.355a.346.346 0 0 1-.26.118h-2.1a.336.336 0 0 1-.3-.49l2.493-5.185a.75.75 0 0 0-.676-1.075H4.924a1.45 1.45 0 0 1-1.328-.878l-2.07-4.676a.35.35 0 0 1 .326-.474l2.255.1-.638-.415 1.1 2.2a.75.75 0 0 0 .672.415L20.507 9zM16.323 7.76l-2.992-4.02A1.851 1.851 0 0 0 11.85 3H9.783a1.85 1.85 0 0 0-1.654 2.672l1.439 2.91a.75.75 0 0 0 1.344-.664L9.472 5.007a.351.351 0 0 1 .312-.507h2.066a.35.35 0 0 1 .279.14l2.99 4.017a.75.75 0 1 0 1.203-.896z"></path></svg></span>Filght</a></li>
                  <li><a href="#"><span className="fcd9eec8fb bfe53e640d c2cc050fb8" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" id="thenavimg" viewBox="0 0 24 24" data-rtl-flip="true"><path d="M6.306 17.25a8.25 8.25 0 1 1 11.69-7.502.75.75 0 1 0 1.5 0A9.75 9.75 0 0 0 13.812.889C8.917-1.356 3.13.791.884 5.685-1.36 10.58.786 16.367 5.68 18.613a.75.75 0 0 0 .626-1.364zM3.756 3.5l5.28 2a.75.75 0 0 1 .475.851l-.313 1.57a.75.75 0 0 1-.554.58l-2.08.518a.75.75 0 0 0-.514.45l-1.154 2.884a2.242 2.242 0 0 1-.84 1.037l-1.84 1.263a.75.75 0 1 0 .85 1.236l1.83-1.257a3.731 3.731 0 0 0 1.393-1.722l1.153-2.884-.514.449 2.079-.52a2.25 2.25 0 0 0 1.661-1.74l.314-1.57a2.25 2.25 0 0 0-1.417-2.548l-5.277-2a.75.75 0 1 0-.532 1.403zm11.565-.57l-1.467 2.926a2.25 2.25 0 0 0-.122 1.718l.557 1.663a.75.75 0 1 0 1.422-.476L15.154 7.1a.75.75 0 0 1 .041-.572l1.466-2.924a.75.75 0 1 0-1.34-.672zm7.175 16.192v2.625a.75.75 0 0 1-.75.75h-10.5a.75.75 0 0 1-.75-.75v-5.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v2.625zm1.5 0v-2.625a2.25 2.25 0 0 0-2.25-2.25h-10.5a2.25 2.25 0 0 0-2.25 2.25v5.25a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-2.625zm-12-4.125v8.25a.75.75 0 0 0 1.5 0v-8.25a.75.75 0 0 0-1.5 0zm7.5 0v8.25a.75.75 0 0 0 1.5 0v-8.25a.75.75 0 0 0-1.5 0zm-4.5.002v-.75a1.5 1.5 0 0 1 3 0V15a.75.75 0 0 0 1.5 0v-.75a3 3 0 1 0-6 0V15a.75.75 0 0 0 1.5 0z"></path></svg></span> Filght + Hotel</a></li>
                  <li><a href="#"><span className="fcd9eec8fb bfe53e640d c2cc050fb8" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" id="thenavimg" viewBox="0 0 24 24"><path d="M21.684 9.443l-1.7-3.79c-.42-1.128-1.542-1.905-2.794-1.903H6.809a2.999 2.999 0 0 0-2.811 1.947L2.316 9.443a.75.75 0 1 0 1.368.614l1.7-3.79c.238-.63.798-1.018 1.424-1.017h10.383a1.5 1.5 0 0 1 1.407.973l1.718 3.834a.75.75 0 1 0 1.368-.614zM.75 16.468V18a2.25 2.25 0 0 0 4.5 0v-1.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 1-1.5 0v-1.532a.75.75 0 0 0-1.5 0zm21 0V18a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 0-1.5 0V18a2.25 2.25 0 0 0 4.5 0v-1.532a.75.75 0 0 0-1.5 0zM19.875 13.5a.375.375 0 0 1-.375-.375.75.75 0 0 0 1.5 0c0-.621-.504-1.125-1.125-1.125a.75.75 0 0 0 0 1.5zm.375-.375a.375.375 0 0 1-.375.375.75.75 0 0 0 0-1.5c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 0 1.5 0zm-.375-.375c.207 0 .375.168.375.375a.75.75 0 0 0-1.5 0c0 .621.504 1.125 1.125 1.125a.75.75 0 0 0 0-1.5zm-.375.375c0-.207.168-.375.375-.375a.75.75 0 0 0 0 1.5c.621 0 1.125-.504 1.125-1.125a.75.75 0 0 0-1.5 0zM4.125 12C3.504 12 3 12.504 3 13.125a.75.75 0 0 0 1.5 0 .375.375 0 0 1-.375.375.75.75 0 0 0 0-1.5zm1.125 1.125c0-.621-.504-1.125-1.125-1.125a.75.75 0 0 0 0 1.5.375.375 0 0 1-.375-.375.75.75 0 0 0 1.5 0zM4.125 14.25c.621 0 1.125-.504 1.125-1.125a.75.75 0 0 0-1.5 0c0-.207.168-.375.375-.375a.75.75 0 0 0 0 1.5zM3 13.125c0 .621.504 1.125 1.125 1.125a.75.75 0 0 0 0-1.5c.207 0 .375.168.375.375a.75.75 0 0 0-1.5 0zM2.75 10.5h18.5c.69 0 1.25.56 1.25 1.25v3.75a.25.25 0 0 1-.25.25H1.75a.25.25 0 0 1-.25-.25v-3.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 11.75v3.75c0 .966.784 1.75 1.75 1.75h20.5A1.75 1.75 0 0 0 24 15.5v-3.75A2.75 2.75 0 0 0 21.25 9H2.75z"></path></svg></span> Car Rentals</a></li>
                  <li><a href="#"><span className="fcd9eec8fb bfe53e640d c2cc050fb8" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" id="thenavimg" viewBox="0 0 24 24"><path d="M13.5 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM15 3a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zM6 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zM21 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm-9-3.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zM6 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm10.066 1.277a7.5 7.5 0 0 1-3.077 2.05.75.75 0 0 0 .498 1.415 9 9 0 0 0 3.693-2.46.75.75 0 1 0-1.114-1.005zm1.798-6.466c.177.922.183 1.869.015 2.792a.75.75 0 1 0 1.476.268c.2-1.106.194-2.24-.019-3.344a.75.75 0 1 0-1.472.284zm-5.337-5.784a7.5 7.5 0 0 1 3.54 2.196.75.75 0 0 0 1.113-1.004 9.002 9.002 0 0 0-4.247-2.636.75.75 0 1 0-.406 1.444zM6.434 6.223a7.5 7.5 0 0 1 3.539-2.196.75.75 0 1 0-.406-1.444A9.001 9.001 0 0 0 5.32 5.219a.75.75 0 0 0 1.114 1.004zM4.636 12.69a7.602 7.602 0 0 1 0-2.878.75.75 0 1 0-1.472-.284 9.102 9.102 0 0 0 0 3.446.75.75 0 0 0 1.472-.284zm4.876 5.639a7.517 7.517 0 0 1-3.035-2.005.75.75 0 0 0-1.106 1.014 9.017 9.017 0 0 0 3.641 2.405.75.75 0 1 0 .5-1.414zM7.31 21.872A1.5 1.5 0 0 0 8.672 24h6.656a1.5 1.5 0 0 0 1.362-2.128l-3.314-8.217c-.361-.785-1.252-1.114-2.005-.767a1.5 1.5 0 0 0-.733.734l-3.343 8.283zm1.377.595l3.328-8.25-.015.033 3.313 8.217.015.033H8.672z"></path></svg></span> Attraction</a></li>
                  <li><a href="#"><span className="fcd9eec8fb bfe53e640d c2cc050fb8" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" id="thenavimg" viewBox="0 0 24 24"><path d="M21.75 15.5V8a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zm-16.5 0V8a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zM3 8.75h3a.75.75 0 0 0 0-1.5H3a.75.75 0 0 0 0 1.5zm6.75 6.75v-6a.75.75 0 0 1 1.5 0v6a.75.75 0 0 0 1.5 0v-6a2.25 2.25 0 0 0-4.5 0v6a.75.75 0 0 0 1.5 0zM9 13.25h3a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5zm5.304-4.971l3 7.5a.75.75 0 0 0 1.392-.557l-3-7.5a.75.75 0 0 0-1.392.557zm3-.558l-3 7.5a.75.75 0 0 0 1.392.557l3-7.5a.75.75 0 0 0-1.392-.557zM.75 5h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zm0 15h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5z"></path></svg></span>Airport taxis</a></li>
                </ul>
              </nav>
            </header>
            <div>
            <BookHome></BookHome>
            <Exploreindia></Exploreindia>
            <Tripplanner></Tripplanner>
            <Propertistype></Propertistype>
            <Footersect></Footersect>
            </div>
        </div>
        <Emailsection></Emailsection>
        <div className="creatername">
        <p>Created By <span> Mr. yuvi dew... </span> | All Right Reserved!</p>
        </div>
      </div>
    </>
  )
}

export default App