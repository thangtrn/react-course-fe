import { Checkbox } from 'antd';
import React from 'react';

const CheckboxField = ({ children, value, imageUrl }) => {
   return (
      <div className="d-flex align-items-center justify-content-between">
         <Checkbox value={value}>{children}</Checkbox>
         {imageUrl && <img style={{ width: '35px' }} src={imageUrl} alt="" />}
      </div>
   );
};

export default CheckboxField;
