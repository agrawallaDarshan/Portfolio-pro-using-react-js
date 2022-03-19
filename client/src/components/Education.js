import { List } from "antd";

const Education = () => {
  const data = [
    {
      title: "Institute of Technical Education and Research",
      timePeriod: "2019 - Present",
      course: "Bachelor of Technology (Computer Science) | 9.325 GPA",
    },
    {
      title: "Mother's Public School, Bhubaneswar",
      timePeriod: "2019",
      course: "12th Science | 87.20%",
    },
    {
      title: "Kendriya Vidyalaya, Boudh",
      timePeriod: "2017",
      course: "10th CBSE | 10 CGPA",
    },
  ];

  return (
    <div style={{ fontSize: "1rem" }}>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={
                <div
                  className="d-flex justify-content-between"
                  style={{ fontSize: "1.2rem" }}
                >
                  <div>{item.title}</div>
                  <div>{item.timePeriod}</div>
                </div>
              }
              description={<div className="my-2">{item.course}</div>}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Education;
