import React from "react";
import { Form, Input, Radio, Button, Card } from "antd";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Zod Schema Validation
const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  mobile: z.string().regex(/^[0-9]{10}$/, "Mobile must be a 10-digit number"),
  gender: z.enum(["male", "female"], { message: "Gender is required" }),
});

const PrimaryDetailsForm = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      gender: "",
    },
  });

  return (
    <Card className="shadow-lg rounded-xl p-6">
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          {/* Name Field */}
          <Form.Item
            label="Name"
            validateStatus={errors.name ? "error" : ""}
            help={errors.name?.message}
          >
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input placeholder="Enter the name" {...field} />
              )}
            />
          </Form.Item>

          {/* Email Field */}
          <Form.Item
            label="Email"
            validateStatus={errors.email ? "error" : ""}
            help={errors.email?.message}
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input placeholder="Enter the email" {...field} />
              )}
            />
          </Form.Item>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Mobile Field */}
          <Form.Item
            label="Mobile"
            validateStatus={errors.mobile ? "error" : ""}
            help={errors.mobile?.message}
          >
            <Controller
              name="mobile"
              control={control}
              render={({ field }) => (
                <Input placeholder="Enter the mobile number" {...field} />
              )}
            />
          </Form.Item>

          {/* Gender Field */}
          <Form.Item
            label="Gender"
            validateStatus={errors.gender ? "error" : ""}
            help={errors.gender?.message}
          >
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <Radio.Group {...field}>
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Female</Radio>
                </Radio.Group>
              )}
            />
          </Form.Item>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Next
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default PrimaryDetailsForm;
