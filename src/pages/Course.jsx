import { Breadcrumb, Button, Form, Pagination, Select } from 'antd';
import React, { useMemo, useState } from 'react';
import FilterBox from '../components/FilterBox';
import CheckboxField from '../components/Inputs/CheckboxField';
import { COURSES_DATA, breadcumbItems, filterCourseSelection } from '../data';
import CourseCard from '../components/CourseCard';
import CurrencyInput from '../components/Inputs/CurrencyInput';

const Course = () => {
   const [error, setError] = useState(null);
   const [checkBox, setCheckBox] = useState({ type: [], level: [], area: [] });
   const [total, setTotal] = useState(COURSES_DATA.length);

   const [formData, setFormData] = useState({
      fromPrice: NaN,
      toPrice: NaN,
      type: [],
      level: [],
      area: [],
   });

   const [priceValues, setPrivesValues] = useState({
      fromPrice: NaN,
      toPrice: NaN,
   });

   const [pagination, setPagination] = useState(1);
   const [sortBy, setSortBy] = useState('');

   const handlePaginationChange = (page) => {
      setPagination(page);
   };

   const handleChangePrice = (e) => {
      let value = e.target.value.split(' ')[0];
      var number = Number(value.replace(/[^0-9.-]+/g, ''));

      setPrivesValues({ ...priceValues, [e.target.name]: number });
   };

   // kiem tra phan tu cua array1 co chua trong array2
   const isContaint = (arr1 = [], arr2 = []) => {
      for (let i = 0; i < arr1.length; i++) {
         for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
               return true;
            }
         }
      }
      return false;
   };

   const letFilter = useMemo(() => {
      let courses = Array.of(...COURSES_DATA);
      //filter range price
      if (
         !Number.isNaN(formData.fromPrice) &&
         !Number.isNaN(formData.toPrice)
      ) {
         courses = courses.filter(
            (item) =>
               item.price >= formData.fromPrice &&
               item.price <= formData.toPrice,
         );
      }

      //filter type study
      if (formData.type.length > 0) {
         courses = courses.filter(
            (item) =>
               item.type === formData.type[0] || item.type === formData.type[1],
         );
      }

      //filter level
      if (formData.level.length > 0) {
         courses = courses.filter((item) =>
            formData.level.includes(item.level),
         );
      }

      //filter area
      if (formData.area.length > 0) {
         courses = courses.filter((item) =>
            isContaint(formData.area, item.area),
         );
      }

      // sort
      if (sortBy !== null) {
         if (sortBy === 'name') {
            courses.sort((a, b) => a.name.localeCompare(b.name));
            console.log('name');
         } else if (sortBy === 'price') {
            courses.sort((a, b) => (a.price - b.price <= 0 ? 1 : -1));
         } else if (sortBy === 'member') {
            courses.sort((a, b) => (a.students - b.students <= 0 ? 1 : -1));
         }
      }
      setTotal(courses.length);
      const filterCourses = courses.slice((pagination - 1) * 6, pagination * 6);
      return filterCourses;
   }, [pagination, sortBy, formData]);

   const handleFocus = (e) => {
      setError('');
   };

   const handleChangeCheckBox = (typeGroup) => {
      return (value) => {
         if (typeGroup === 'type') {
            setCheckBox({ ...checkBox, type: value });
         } else if (typeGroup === 'level') {
            setCheckBox({ ...checkBox, level: value });
         } else if (typeGroup === 'area') {
            setCheckBox({ ...checkBox, area: value });
         }
      };
   };

   const handleFinish = () => {
      const { fromPrice, toPrice } = priceValues;
      if (
         !Number.isNaN(fromPrice) &&
         !Number.isNaN(toPrice) &&
         fromPrice > toPrice
      ) {
         setError('Giá từ không được lớn hơn giá đến');
         return;
      }

      setFormData({
         fromPrice: priceValues.fromPrice,
         toPrice: priceValues.toPrice,
         type: checkBox.type,
         level: checkBox.level,
         area: checkBox.area,
      });
   };

   return (
      <>
         <div className="banner-container">
            <div className="banner">
               <img src="images/banner-2.jpg" alt="" />
            </div>
            <div className="content d-flex flex-column align-items-center">
               <h2 className="text-center">Danh sách khoá học</h2>
               <Breadcrumb separator=">" items={breadcumbItems} />
            </div>
         </div>

         <div className="container py-5">
            <div className="row">
               {/* -------- Sidebar -------- */}
               <Form className="col-12 col-md-3 mb-5" onFinish={handleFinish}>
                  <FilterBox title="Khoảng giá">
                     <CurrencyInput
                        id="fromPrice"
                        label="Từ giá"
                        type="text"
                        placeholder="0 VND"
                        name="fromPrice"
                        onChange={handleChangePrice}
                        onFocus={handleFocus}
                     />
                     <CurrencyInput
                        id="toPrice"
                        label="Đến giá"
                        type="text"
                        placeholder="0 VND"
                        name="toPrice"
                        onChange={handleChangePrice}
                        onFocus={handleFocus}
                     />
                     <div className="error-label">{error}</div>
                  </FilterBox>
                  <FilterBox
                     title="Hình thức học"
                     isCheckboxGroup
                     onChange={handleChangeCheckBox('type')}
                  >
                     <CheckboxField value="online">Online</CheckboxField>
                     <CheckboxField value="offline">Offline</CheckboxField>
                  </FilterBox>
                  <FilterBox
                     title="Trình độ"
                     isCheckboxGroup
                     onChange={handleChangeCheckBox('level')}
                  >
                     <CheckboxField
                        value="easy"
                        imageUrl="images/icon-title-course.png"
                     >
                        Dễ
                     </CheckboxField>
                     <CheckboxField
                        value="medium"
                        imageUrl="images/icon-title-course-2.png"
                     >
                        Trung bình
                     </CheckboxField>
                     <CheckboxField
                        value="hard"
                        imageUrl="images/icon-title-course-3.png"
                     >
                        Khó
                     </CheckboxField>
                     <CheckboxField
                        value="expert"
                        imageUrl="images/icon-title-course-4.png"
                     >
                        Cực khó
                     </CheckboxField>
                  </FilterBox>
                  <FilterBox
                     title="Lĩnh vực"
                     isCheckboxGroup
                     onChange={handleChangeCheckBox('area')}
                  >
                     <CheckboxField value="frontend">Front-End</CheckboxField>
                     <CheckboxField value="backend">Back-End</CheckboxField>
                     <CheckboxField value="database">Database</CheckboxField>
                     <CheckboxField value="faster">Cấp tốc</CheckboxField>
                     <CheckboxField value="other">Other</CheckboxField>
                     <CheckboxField value="stem">STEM</CheckboxField>
                  </FilterBox>

                  <Button
                     htmlType="submit"
                     type="primary"
                     block
                     style={{ background: '#ff630e' }}
                  >
                     Tìm kiếm
                  </Button>
               </Form>

               {/* -------- Content -------- */}
               <div className="col-12 col-md-9">
                  <div className="d-flex justify-content-between mb-3">
                     <div className="font-weight-bold">{total} Khoá học</div>
                     <Select
                        onChange={(value) => setSortBy(value)}
                        style={{ width: 200 }}
                        placeholder="Sắp xếp các khoá học"
                        options={filterCourseSelection}
                     />
                  </div>

                  <div className="row" style={{ margin: '0 -8px' }}>
                     {letFilter.map((item, index) => (
                        <div
                           className="col-12 col-md-6 col-lg-4 px-2"
                           style={{ marginBottom: '16px' }}
                        >
                           <div style={{ height: '100%' }}>
                              <CourseCard key={index} courseData={item} />
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="d-flex justify-content-center mt-2">
                     {total > 0 && (
                        <Pagination
                           className="pagination-course"
                           total={total}
                           defaultCurrent={1}
                           defaultPageSize={6}
                           onChange={handlePaginationChange}
                        />
                     )}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Course;
