import { JSX } from "react";
import { FaUser, FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdDateRange } from "react-icons/md";
import { Button, Form, Input, DatePicker, Card } from "antd";
import type { FormProps } from "antd";

type FieldType = {
  name?: string;
  number?: string;
  email?: string;
  destination?: string;
  city?: string;
  date?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const HolidayForm: React.FC = (): JSX.Element => {
  return (
    <Card className="z-10 justify-center items-center lg:w-2/6 w-3/4 bg-white px-10">
      <div className="flex justify-center items-center text-buttons font-bold mb-5 text-[1.25rem] font-quicksand">
        Request A Travel Plan
      </div>
      <Form
        name="travel_plan"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {/* Name */}
        <Form.Item<FieldType>
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input
            prefix={<FaUser className="text-buttons mr-5" />}
            placeholder="Your Name *"
          />
        </Form.Item>

        {/* Contact Number */}
        <Form.Item<FieldType>
          name="number"
          rules={[
            {
              required: true,
              message: "Please input your contact number!",
            },
          ]}
        >
          <Input
            prefix={<FaPhone className="text-buttons mr-5" />}
            placeholder="Contact Number *"
          />
        </Form.Item>

        {/* Email */}
        <Form.Item<FieldType>
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your contact number!",
            },
          ]}
        >
          <Input
            prefix={<MdEmail className="text-buttons mr-5" />}
            placeholder="Email Id *"
          />
        </Form.Item>

        {/* Destination */}
        <Form.Item<FieldType>
          name="destination"
          rules={[
            { required: true, message: "Please input your destination!" },
          ]}
        >
          <Input
            prefix={<FaLocationDot className="text-buttons mr-5" />}
            placeholder="Travel Destination *"
          />
        </Form.Item>

        {/* City */}
        <Form.Item<FieldType>
          name="city"
          rules={[
            { required: true, message: "Please input your current city!" },
          ]}
        >
          <Input
            prefix={<FaLocationDot className="text-buttons mr-5" />}
            placeholder="Travel Destination *"
          />
        </Form.Item>

        {/* Date */}
        <Form.Item<FieldType>
          name="date"
          rules={[{ required: true, message: "Please select a travel date!" }]}
        >
          <DatePicker
            prefix={<MdDateRange className="text-buttons mr-5" />}
            className="w-full"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            className="!bg-buttons w-full pulse !text-white hover:!text-[#4096ff] hover:!border-4 hover:!bg-transparent active:!text-[#4096ff] active:!border-4 active:!bg-transparent"
            htmlType="submit"
            ghost
          >
            Plan My Holidays
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default HolidayForm;
