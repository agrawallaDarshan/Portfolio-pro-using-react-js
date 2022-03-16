import {
  InstagramOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

import { Avatar } from "antd";

import Typical from "react-typical";

const ProfileHome = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="row">
            <div className="col-md-4">
              <div style={{ width: "10rem", display: "block", margin: "auto" }}>
                <Avatar
                  src="https://joeschmoe.io/api/v1/random"
                  shape="circle"
                ></Avatar>
              </div>
            </div>
            <div className="col-md-8">
            <div className="text-center">
                <a href="#">
                  <InstagramOutlined />
                </a>
                <a href="#">
                  <FacebookOutlined />
                </a>
                <a href="#">
                  <LinkedinOutlined />
                </a>
              </div>
              <h3 className="text-center">Hello I am Darshan</h3>
              <div className="text-center h4">
                <Typical
                  steps={["Hello", 1000, "Hello world!", 500]}
                  loop={Infinity}
                  wrapper="p"
                />
              </div>
              <div className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit ipsum tempora laudantium beatae tenetur illum
                nostrum, nobis quidem quae maxime?
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-primary mx-3 my-2">Button1</button>
                <button className="btn btn-primary mx-3 my-2">Button2</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHome;
