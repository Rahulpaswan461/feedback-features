import React, { useState } from 'react'
import './Feedback.css'

function Feedback(){
   const [userInput ,setUserInput] = useState('')
   const [feedbackIcon, setToggleFeedbackIcon] = useState(true)
   const [container,setContainer] =useState(false)
   const feedbackToggleIconHandler=()=>{
         setToggleFeedbackIcon(!feedbackIcon)
   }
   const setContainerHandlr = ()=>{
         setContainer(!container)
   }
      return (
         <div className="main__container">
             <div className="navbar__Design">
                 <div className="heading">
                    <h3>THE <span>PRODUCT</span> PLATFORM</h3>
                 </div>
                 <div className="logo__section">
                      <ul>
                        <li>Learn <i class="fa-solid fa-angle-down"></i></li>
                        <li>Practice <i class="fa-solid fa-angle-down"></i></li>
                      </ul>
                      <div className="logo">
                        <img src="https://images.unsplash.com/photo-1709120421484-0105a333e306?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                      </div>
                 </div>
             </div>

             <div className="query__option">
                <div className="icon">
                    <i class="fa-solid fa-arrow-left"></i>
                </div><p>Back to Questions</p>
             </div>

             <div className="feedback__content">
                  <div className="upper__feedback">
                       <div className="upper__content">
                          <div className="buttons">
                               <button>Design</button>
                               <button>Technology</button>
                          </div>
                          <div className="logo__design">
                          <i class="fa-solid fa-rocket"></i>
                              <span>Startup</span>
                          </div>
                       </div>
                       <div className="content">
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, veritatis!
                           Maiores, quisquam? Ex ut aliquid, repudiandae impedit aut cum quaerat.</p>
                           <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora consectetur placeat maxime cum porro laboriosam quas aspernatur, possimus obcaecati pariatur illum enim ab sequi vero at odit fugit autem maiores!
                           Veniam aspernatur minus commodi. See More.</span>
                       </div>
                       <div className="bottom__view">
                         <div className="left__view">
                            <i class="fa-regular fa-eye"></i> <span>1000 Views</span>
                         </div>
                         <div className="right__view">
                            <i class="fa-regular fa-circle-question"></i> <span>How should you word your answer</span>
                         </div>
                       </div>
                  </div>
                  <div className="middle__feedback">
                        <div className="left__answer">
                            <h3>Answers(23)</h3>
                        </div>
                        <div className="show__result">
                            <span>Sort By : </span>
                            <select className="select__choice">
                                <option>Popular</option>
                                <option>Trending</option>
                                <option>Latest</option>
                            </select>
                        </div>
                  </div>
                  <div className="lower__feedback">
                           <div className="user__information">
                                <div className="left__side">
                                     <div className="profile">
                                        <img src="https://images.unsplash.com/photo-1709120421484-0105a333e306?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                     </div>
                                     <div className="text">
                                          <span><b>Neha Bhatt</b> (You)</span>
                                          <span>Jun 27,2023</span>
                                     </div>
                                </div>
                                <div className="right__side">
                                <i class="fa-solid fa-pen"></i> Edit
                                </div>
                           </div>
                           <div className="user__feedback">
                              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore neque cumque veniam officiis dolor sapiente at. Aliquam ut nam autem asperiores voluptatem placeat nostrum, dolorum repudiandae commodi cumque tenetur voluptatum! Aliquam ut nam autem asperiores voluptatem placeat nostrum, dolorum repudiandae commodi cumque tenetur voluptatum! See more</span>
                         </div>
                         <div className="user__response">
                            <div className="icons">
                            <i class="fa-solid fa-thumbs-up"></i> Like 
                            <i class="fa-regular fa-comment-dots"></i>
                            </div>
                            <div className="input__element">
                                <input type="text" placeholder="Search" value={userInput} onChange={e=>setUserInput(e.target.value)} />
                            </div>
                            <button>Post</button>
                         </div>
                  </div>
{/* The Feedback section is started from here ------------------------------- */}
                    <div className="feedback__icon">
                           <div className="container">
                              {
                                 !feedbackIcon ? 
                                 <div className={!feedbackIcon ? "":"toggle__container"}>
                                 <div className="mini__container">
                                   <div className="text__content">
                                     <span>Report an issue</span>
                                   </div>
                                   <div className="icon__container">
                                      <i class="fa-solid fa-flag"></i>
                                   </div>
                              </div>

                                <div className="mini__container">
                                   <div className="text__content">
                                     <span>Share Feedback </span>
                                   </div>
                                   <div className="icon__container">
                                      <i class="fa-solid fa-thumbs-up"></i> 
                                   </div>
                              </div>

                              <div className="mini__container">
                                   <div className="text__content">
                                     <span>Give Suggestions</span>
                                   </div>
                                   <div className="icon__container">
                                      <i class="fa-solid fa-file-pen"></i>
                                   </div>
                              </div>

                              <div className="mini__container feedback__position">
                                   <div className="text__content">
                                     <span>Contact us</span>
                                   </div>
                                   <div className="icon__container">
                                     <i class="fa-solid fa-message"></i>
                                   </div>
                              </div>
                                 </div>
                                 :null
                              }
 
                                <div className={feedbackIcon ? "feedback__container":"adjust__container"}>
                                   <div className="icon__container" onClick={feedbackToggleIconHandler}>
                                    {
                                       feedbackIcon ? <i class="fa-solid fa-book"></i> :  <i class="fa-solid fa-xmark"></i>
                                    }
                                   </div>
                                </div>
                           </div>
                    </div>
             </div>
              
             
         </div>
      )
}
export default Feedback