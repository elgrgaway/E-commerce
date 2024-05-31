import React from "react";

function EditProfile() {
  return (
    <div className="w-[870px] h-[630px] bg-white rounded-md p-10">
      <h1 className="text-red-600 font-medium text-2xl leading-[28px] mb-10">
        Edit Your Profile
      </h1>

      <div className="flex gap-12 mb-8">
        <div className="flex flex-col gap-2">
          <label className="font-normal text-lg leading-[24px] text-black">
            First Name
          </label>
          <div className="w-[330px] h-[50px] bg-gray-200 rounded-md px-4 py-3 flex items-center">
            <span className="text-black font-normal text-lg leading-[24px]">
              Md
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-normal text-lg leading-[24px] text-black">
            Last Name
          </label>
          <div className="w-[330px] h-[50px] bg-gray-200 rounded-md px-4 py-3 flex items-center">
            <span className="text-black font-normal text-lg leading-[24px]">
              Rimel
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-12 mb-8">
        <div className="flex flex-col gap-2">
          <label className="font-normal text-lg leading-[24px] text-black">
            Email
          </label>
          <div className="w-[330px] h-[50px] bg-gray-200 rounded-md px-4 py-3 flex items-center">
            <span className="text-black font-normal text-lg leading-[24px]">
              rimel111@gmail.com
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-normal text-lg leading-[24px] text-black">
            Address
          </label>
          <div className="w-[330px] h-[50px] bg-gray-200 rounded-md px-4 py-3 flex items-center">
            <span className="text-black font-normal text-lg leading-[24px]">
              Kingston, 5236, United State
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-8">
        <div className="flex flex-col gap-2">
          <label className="font-normal text-lg leading-[24px] text-black">
            Password Changes
          </label>
          <div className="w-[710px] h-[50px] bg-gray-200 rounded-md px-4 py-3 flex items-center">
            <span className="text-black font-normal text-lg leading-[24px]">
              Current Password
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-[710px] h-[50px] bg-gray-200 rounded-md px-4 py-3 flex items-center">
            <span className="text-black font-normal text-lg leading-[24px]">
              New Password
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-[710px] h-[50px] bg-gray-200 rounded-md px-4 py-3 flex items-center">
            <span className="text-black font-normal text-lg leading-[24px]">
              Confirm New Password
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-8">
        <button className="text-black font-normal text-lg leading-[24px]">
          Cancel
        </button>
        <button className="bg-red-600 text-white font-medium text-lg leading-[24px] py-4 px-12 rounded-md">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default EditProfile;
