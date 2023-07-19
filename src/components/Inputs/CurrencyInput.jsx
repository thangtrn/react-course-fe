import React from 'react';
import MaskedInput from 'react-text-mask';
import { createNumberMask } from 'text-mask-addons';

const defaultMaskOptions = {
   prefix: '',
   suffix: ' VND',
   includeThousandsSeparator: true,
   thousandsSeparatorSymbol: ',',
   allowDecimal: true,
   decimalSymbol: '.',
   allowNegative: false,
   allowLeadingZeroes: false,
};

const CurrencyInput = ({ id, label, maskOptions, ...inputProps }) => {
   const currencyMask = createNumberMask({
      ...defaultMaskOptions,
      ...maskOptions,
   });

   return (
      <div className="input-price mb-1">
         <label htmlFor={id} className="">
            {label}
         </label>
         <MaskedInput
            className="form-control"
            mask={currencyMask}
            {...inputProps}
            style={{ padding: '4px 11px', fontSize: '14px' }}
         />
      </div>
   );
};
CurrencyInput.defaultProps = {
   inputMode: 'numeric',
   maskOptions: {},
};

export default CurrencyInput;
