import { Link } from 'react-router-dom';

export const breadcumbItems = [
   {
      title: <Link to="/">Trang chủ</Link>,
      className: 'breadcrumb-item',
   },
   {
      title: <Link to="/course">Khoá học</Link>,
      className: 'breadcrumb-item',
   },
];

export const filterCourseSelection = [
   {
      value: 'name',
      label: 'Theo tên',
   },
   {
      value: 'price',
      label: 'Theo giá',
   },
   {
      value: 'member',
      label: 'Theo số lượng học viên',
   },
];
