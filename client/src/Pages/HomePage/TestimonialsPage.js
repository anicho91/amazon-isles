// import React from "react";
// import { MDBContainer, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBTestimonial,  MDBRow, MDBCol, MDBCard, MDBCardUp, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";

// const TestimonialsPage1 = () => {
//   return (
//     <MDBContainer>
//       <section className="text-center my-5">
//           <h2 className="h1-responsive font-weight-bold my-5">
//             Testimonials
//           </h2>

//           <MDBCarousel
//             activeItem={1}
//             length={3}
//             testimonial
//             interval={false}
//             showIndicators={false}
//             className="no-flex"
//           >
//             <MDBCarouselInner>
//               <MDBCarouselItem itemId="1">
//                 <MDBTestimonial>
//                   <MDBAvatar className="mx-auto mb-4">
//                     <img
//                       src="https://images.unsplash.com/photo-1542292402-a2a622869b18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
//                       className="rounded-circle img-fluid"
//                       alt=""
//                     />
//                   </MDBAvatar>
//                   <p>
//                     <MDBIcon icon="quote-left" />The service from AmazonIsles was first class from start to finish: friendly, personal and attentive.
//                    There was no pressure to pick a particular style or material, just helpful advice and information. 
//                     Thoroughly recommended. I couldnt be more pleased!
//                   </p>
//                   <h4 className="font-weight-bold">Anna Deynah</h4>
//                   <h6 className="font-weight-bold my-3">
//                     Atlanta, GA 
//                   </h6>
//                   <MDBIcon icon="star" className="blue-text" />
//                   <MDBIcon icon="star" className="blue-text" />
//                   <MDBIcon icon="star" className="blue-text" />
//                   <MDBIcon icon="star" className="blue-text" />
//                   <MDBIcon icon="star-half-full" className="blue-text" />
//                 </MDBTestimonial>
//               </MDBCarouselItem>
//               <MDBCarouselItem itemId="2">
//                 <MDBTestimonial>
//                   <MDBAvatar className="mx-auto mb-4">
//                     <img
//                       src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
//                       className="rounded-circle img-fluid"
//                       alt=""
//                     />
//                   </MDBAvatar>
//                   <p>
//                     <MDBIcon icon="quote-left" /> I can honestly say I've never had so many compliments on my dress sense before... 
//                     strangers were literally stopping me to say how great they thought it looked, 
//                     and the guys who I was a guest of loved it!.
//                   </p>
//                   <h4 className="font-weight-bold">Maria Kate</h4>
//                   <h6 className="font-weight-bold my-3">
//                     Los Angeles, CA 
//                   </h6>
//                   <MDBIcon icon="star" className="blue-text" />
//                   <MDBIcon icon="star" className="blue-text" />
//                   <MDBIcon icon="star" className="blue-text" />
//                   <MDBIcon icon="star" className="blue-text" />
//                   <MDBIcon icon="star" className="blue-text" />
//                 </MDBTestimonial>
//               </MDBCarouselItem>
//               <MDBCarouselItem itemId="3">
//                 <MDBTestimonial>
//                   <MDBAvatar className="mx-auto mb-4">
//                     <img
//                       src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
//                       className="rounded-circle img-fluid"
//                       alt=""
//                     />
//                   </MDBAvatar>
//                   <p>
//                     <MDBIcon icon="quote-left" /> The service I received from AmazonIsles was superb. 
//                     Their choice of fabrics and patterns was extensive and the quality excellent.
//                      I was expertly guided through the whole process and nothing was too much trouble. 
//                      When my items arrived everything fit perfectly. 
//                      On the big day the suits looked great and we had many positive comments.
//                       I would certainly use AmazonIsles again in the future.
//                   </p>
//                   <h4 className="font-weight-bold">John Tate</h4>
//                   <h6 className="font-weight-bold my-3">
//                     New York, NY 
//                   </h6>
//                   <MDBIcon icon="star" className="blue-text" />
//                   <MDBIcon icon="star" className="blue-text" />
//                   <MDBIcon icon="star" className="blue-text" />
//                   <MDBIcon icon="star" className="blue-text" />
//                   <MDBIcon icon="star-o" className="blue-text" />
//                 </MDBTestimonial>
//               </MDBCarouselItem>
//             </MDBCarouselInner>
//           </MDBCarousel>
//         </section>
//     </MDBContainer>
//   );
// }

// export default TestimonialsPage1;