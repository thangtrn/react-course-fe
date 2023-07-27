import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import coursesApi from '../axios/coursesApi';
import ButtonComp from '../components/Button/ButtonComp';
import AdvantageCard from '../components/AdvantageCard';
import { BsStarFill } from 'react-icons/bs';
import { HOME_DATA } from '../data';
import Carousel from '../components/Carousel/Carousel';
import CourseCard from '../components/CourseCard';
import MentorCard from '../components/MentorCard';
import LogoCarousel from '../components/Carousel/LogoCarousel';

const Home = () => {
   const [homeData, setHomeData] = useState(HOME_DATA);
   const [loading, setLoading] = useState(false);

   // useEffect(() => {
   //    (async function () {
   //       try {
   //          setLoading(true);
   //          const response = await coursesApi.fetchHome();
   //          console.log(response.data);
   //          setHomeData(response.data);
   //          setLoading(false);
   //       } catch (error) {
   //          console.log(error);
   //          setLoading(false);
   //       }
   //    })();
   // }, []);

   if (loading) {
      return <Loading />;
   }
   return (
      <div className="home">
         {/* --- Banner --- */}
         <section
            className="banner-home"
            style={{ backgroundImage: `url(${homeData?.banner?.image})` }}
         >
            <div className="container">
               <div className="banner-content">
                  <h4>{homeData?.banner?.title}</h4>
                  <h2>{homeData?.banner?.caption}</h2>
                  <p className="mb-3 mb-md-5">
                     {homeData?.banner?.description}
                  </p>
                  <div>
                     <ButtonComp style={{ padding: '12px 22px' }}>
                        Xem khoá học
                     </ButtonComp>
                  </div>
               </div>
            </div>
         </section>

         {/* --- About --- */}
         <section
            className="about-section"
            style={{ backgroundImage: `url(${homeData?.about?.overlayImage})` }}
         >
            <div className="container">
               <div className="about-content py-5">
                  <h2 className="section-header">{homeData?.about?.title}</h2>
                  <div className="row">
                     <div className="col-md-6 mb-4 mb-md-0">
                        <p
                           className="text-justify"
                           style={{ fontWeight: 'bold' }}
                        >
                           {homeData?.about?.description}
                        </p>
                        <div className="d-flex justify-content-center">
                           <ButtonComp
                              to={homeData?.about?.linkCourse}
                              className="mx-1"
                           >
                              Xem khoá học
                           </ButtonComp>
                           <ButtonComp
                              to={homeData?.about?.linkFb}
                              className="mx-1"
                           >
                              Hỗ trợ tư vấn
                           </ButtonComp>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="about-img">
                           <img src={homeData?.about?.aboutImage} alt="" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* --- Advantages --- */}
         <section className="advantages">
            <div className="container py-3">
               <h2 className="section-header">{homeData?.advantages.title}</h2>
               <div className="row">
                  {homeData?.advantages?.items.map((item, index) => (
                     <AdvantageCard
                        key={index}
                        title={item.title}
                        content={item.content}
                        icon={<BsStarFill size={20} />}
                     />
                  ))}
               </div>
            </div>
         </section>

         {/* --- Learning --- */}
         <section className="learning">
            <div className="row mx-0" style={{ width: '100%' }}>
               <div
                  className="learning-image learning-left col-md-6"
                  style={{
                     backgroundImage: `url(${homeData?.learning?.left?.image})`,
                  }}
               >
                  <div className="learning-content">
                     <h4>{homeData?.learning?.left?.title}</h4>
                     <p>{homeData?.learning?.left?.subTitle}</p>
                  </div>
               </div>
               <div
                  className="learning-image learning-right col-md-6"
                  style={{
                     backgroundImage: `url(${homeData?.learning?.right?.image})`,
                  }}
               >
                  <div className="learning-content">
                     <h4>{homeData?.learning?.right?.title}</h4>
                     <p>{homeData?.learning?.right?.subTitle}</p>
                  </div>
               </div>
            </div>
         </section>

         {/* --- Course --- */}
         {homeData?.courses?.map((course, index) => (
            <section className="courses-section" key={index}>
               <div className="container py-4">
                  <h2 className="section-header">{course?.title}</h2>
                  <Carousel>
                     {course?.items?.map((item, idx) => (
                        <div className="card-wrapper-item" key={idx}>
                           <CourseCard courseData={item} />
                        </div>
                     ))}
                  </Carousel>
               </div>
            </section>
         ))}

         {/* --- Mentor --- */}
         <section className="courses-section pb-4">
            <div className="container py-4">
               <h2 className="section-header">{homeData?.mentors?.title}</h2>
               <Carousel>
                  {homeData?.mentors?.items.map((item, index) => (
                     <MentorCard key={index} mentorData={item} />
                  ))}
               </Carousel>
            </div>
         </section>

         {/* --- Mentor --- */}
         <section
            className="advantages-2"
            style={{ backgroundImage: `url(${homeData?.advantages2?.image})` }}
         >
            <div className="container">
               <div className="advantages-2-content">
                  <h4 className="text-center mb-3">
                     {homeData?.advantages2?.title}
                  </h4>
                  <h2 className="text-center mb-4">
                     {homeData?.advantages2?.caption}
                  </h2>
                  <div className="d-flex justify-content-center align-items-center">
                     <ButtonComp className="mx-2 px-3 py-2">
                        Danh sách khoá học
                     </ButtonComp>
                     <ButtonComp className="mx-2 px-3 py-2">
                        Tư vấn lộ trình
                     </ButtonComp>
                  </div>
               </div>
            </div>
         </section>

         {/* --- Mentor --- */}
         <section
            className="courses-section pb-4"
            style={{ backgroundColor: '#f5f7fc' }}
         >
            <div className="container py-4">
               <h2 className="section-header">{homeData?.logos?.title}</h2>
               <LogoCarousel>
                  {homeData?.logos?.items.map((item, index) => (
                     <div className="logo-wrapper" key={index}>
                        <img src={item} alt="" />
                     </div>
                  ))}
               </LogoCarousel>
            </div>
         </section>
      </div>
   );
};

export default Home;
