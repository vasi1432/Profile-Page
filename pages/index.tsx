import Avatar from "../stories/avatar";
import { Button } from "../stories/Button";
import Input from "../stories/input";

export default function Home() {
  return (
    // parent container
    <div className=" ml-4 mt-4">
      {/* Profile Sec Starts Here */}
      <div className="   flex flex-col gap-4 mb-12">
        <h1 className="font-semibold	 text-3xl">My Profile</h1>

        {/* avatar and <button></button> */}
        <div className="flex gap-4 items-center">
          <Avatar src="https://v1.tailwindcss.com/_next/static/media/erin-lindford.4804b52007ca82ebe9999d19c717b44d.jpg"></Avatar>
          <div className="flex flex-col  gap-1">
            <Button label="Change photo" type="primary"></Button>
            <Button label="Remove photo" type="secondary"></Button>
          </div>
        </div>

        <div className="text-sm text-gray-500 font-normal		">
          Upload a photo, this will be visible to everyone in the workspace
        </div>
      </div>
      {/* Profile Sec Ends Here */}

      <div className="max-w-2xl pr-6">
        {/* Personal Info sec start Here */}
        <div className="flex flex-col gap-4 mb-14 ">
          <h2 className="text-xl  ml-1 font-medium">Personal info</h2>

          {/* input group 1 */}
          <div className="flex gap-2  flex-col  md:flex-row">
            <div className=" md:flex-1 ">
              <Input
                label="First name"
                placeholder="Enter first name"
                type="text"
                onChange={() => {
                  true;
                }}
                onBlur={() => {
                  true;
                }}
              ></Input>
            </div>
            <div className="  md:flex-1 ">
              <Input
                label="Last name"
                placeholder="Enter last name"
                type="text"
                onChange={() => {
                  true;
                }}
                onBlur={() => {
                  true;
                }}
              ></Input>
            </div>
          </div>
          {/* input group 2 */}
          <div className=" ">
            <div className=" w-full md:w-1/2 md:pr-1">
              <Input
                label="Email"
                placeholder="Enter Email"
                type="text"
                onChange={() => {
                  true;
                }}
                onBlur={() => {
                  true;
                }}
              ></Input>
            </div>
          </div>
          {/* input group 3 */}
          <div className="flex gap-2  flex-col  md:flex-row">
            <div className=" md:flex-1 ">
              <Input
                label="Username"
                placeholder="Enter UserName"
                type="text"
                onChange={() => {
                  true;
                }}
                onBlur={() => {
                  true;
                }}
              ></Input>
            </div>
            <div className=" md:flex-1 ">
              <Input
                label="Display name"
                placeholder="Enter Display name"
                type="text"
                onChange={() => {
                  true;
                }}
                onBlur={() => {
                  true;
                }}
              ></Input>
            </div>
          </div>
          {/* input group 4 */}
          <div className="">
            <div className="h-28">
              <Input
                label="Bio"
                placeholder="add bio here"
                type="text"
                onChange={() => {
                  true;
                }}
                onBlur={() => {
                  true;
                }}
              ></Input>
            </div>
          </div>
          {/* input group 5 */}
          <div className="flex gap-2  flex-col  md:flex-row">
            <div className=" md:flex-1 ">
              <Input
                label="Job title"
                placeholder="Enter Job Title"
                type="text"
                onChange={() => {
                  true;
                }}
                onBlur={() => {
                  true;
                }}
              ></Input>
            </div>
            <div className="md:flex-1 ">
              <Input
                label="Time zone"
                placeholder="Enter Time Zone"
                type="text"
                onChange={() => {
                  true;
                }}
                onBlur={() => {
                  true;
                }}
              ></Input>
            </div>
          </div>
        </div>
        {/* Personal Info sec ends Here */}

        {/* social sec start Here */}
        <div className="flex flex-col mb-4 gap-4">
          <h2 className="text-xl ml-1 font-medium	">Social profiles</h2>

          <div className="">
            <Input
              label="LinkedIn"
              placeholder="LinkedIn URL"
              type="text"
              onChange={() => {
                true;
              }}
              onBlur={() => {
                true;
              }}
            ></Input>
          </div>

          <div className="  ">
            <Input
              label="Twitter"
              placeholder="Twitter URL"
              type="text"
              onChange={() => {
                true;
              }}
              onBlur={() => {
                true;
              }}
            ></Input>
          </div>

          <div className=" ">
            <Input
              label="Facebook"
              placeholder="Facebook URL"
              type="text"
              onChange={() => {
                true;
              }}
              onBlur={() => {
                true;
              }}
            ></Input>
          </div>
        </div>
        {/* social sec ends Here */}
      </div>
    </div>
  );
}
