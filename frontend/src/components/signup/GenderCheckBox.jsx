import React from "react";

export default function GenderCheckBox({onClickCheckBox,selectedGender}) {
  return (
    <div className="flex gap-3">
      <div className="form-control">
        <label className={`label cursor-pointer gap-2 ${selectedGender==="male"?"selected":""}`}>
          <span className="text-base label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox size-5 border-gray-600"
            checked={selectedGender==="male"}
            onChange={()=>onClickCheckBox("male")}
          />
        </label>
      </div>

      <div className="form-control">
      <label className={`label cursor-pointer gap-2 ${selectedGender==="female"?"selected":""}`}>
      <span className="text-base label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox  size-5  border-gray-600"
            checked={selectedGender==="female"}
            onChange={()=>onClickCheckBox("female")}
          />
        </label>
      </div>
    </div>
  );
}
