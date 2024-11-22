import { Avatar, Button, Card, Space, Typography } from "antd";
import { useAuth } from "../../Context/useContext";
import { UserOutlined } from "@ant-design/icons";

import Footer from "../../Components/LandingPage/Footer";
import NewNavbar from "../../Components/NewNavbar";

const UserPage = () => {
  const { userData, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="  items-center justify-center min-h-screen bg-gray-100 p-4">
      <div>
        <NewNavbar/>
      </div>
      <div className="">
        <Card
          className="w-full flex justify-center text-center items-center max-w-sm p-6 shadow-lg rounded-lg mt-10 bg-white "
          bordered={false}
          style={{
            borderRadius: "12px",
          }}
        >
          <Space
            direction="vertical"
            className="w-full text-center"
            size="large"
          >
            <Avatar
              size={100}
              icon={<UserOutlined />}
              className="bg-gray-200"
              style={{ fontSize: "48px" }}
            />
            <Typography.Title level={3} className="text-gray-800">
              {userData?.userName}
            </Typography.Title>
            <Typography.Text type="secondary" strong className="text-gray-500">
              Email: {userData?.email}
            </Typography.Text>
            <Typography.Text className="text-gray-500">
              Role: {userData?.role}
            </Typography.Text>
            <Button
              size="large"
              type="primary"
              onClick={handleLogout}
              className="mt-4 w-full rounded-lg"
            >
              Logout
            </Button>
          </Space>
        </Card>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default UserPage;
