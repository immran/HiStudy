import React from "react";
import { Form, Input, Button, Card } from "antd";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Zod Schema Validation
const schema = z.object({
  education: z.string().min(2, "Education must be at least 2 characters"),
  occupation: z.string().min(2, "Occupation must be at least 2 characters"),
});

const OtherDetailsForm = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      education: "",
      occupation: "",
    },
  });

  return (
    <Card className="shadow-lg rounded-xl p-6">
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          {/* Education Field */}
          <Form.Item
            label="Education"
            validateStatus={errors.education ? "error" : ""}
            help={errors.education?.message}
          >
            <Controller
              name="education"
              control={control}
              render={({ field }) => (
                <Input placeholder="Enter your education" {...field} />
              )}
            />
          </Form.Item>

          {/* Occupation Field */}
          <Form.Item
            label="Occupation"
            validateStatus={errors.occupation ? "error" : ""}
            help={errors.occupation?.message}
          >
            <Controller
              name="occupation"
              control={control}
              render={({ field }) => (
                <Input placeholder="Enter your occupation" {...field} />
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

export default OtherDetailsForm;
