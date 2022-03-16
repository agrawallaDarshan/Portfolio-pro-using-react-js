import {
  InstagramOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const Contact = () => {
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h3 className="text-center">Contact me</h3>
          <div className="d-flex justify-content-between">
            <div>
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
            <div>
              <a href="#">Source code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
