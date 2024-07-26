import React from "react";

export default function GenderCheckBox() {
  return (
    <div className="flex gap-3">
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="text-base label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox size-5 border-gray-600"
          />
        </label>
      </div>

      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="text-base label-text">Female</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox  size-5  border-gray-600"
          />
        </label>
      </div>
    </div>
  );
}
