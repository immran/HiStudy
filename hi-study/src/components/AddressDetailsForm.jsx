import React, { useState } from "react";
import { Form, Input, Button, Card, Modal } from "antd";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Zod Schema Validation
const schema = z.object({
  address: z.string().min(2, "Address must be at least 2 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  state: z.string().min(2, "State must be at least 2 characters"),
  country: z.string().min(2, "Country must be at least 2 characters"),
});

const AddressDetailsForm = ({ onSubmit }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  const onFormSubmit = (data) => {
    console.log("Form data submitted:", data);
    onSubmit(data);
    setIsModalVisible(true);
  };

  // Handle modal close
  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Card className="shadow-lg rounded-xl p-6">
        <Form layout="vertical" onFinish={handleSubmit(onFormSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            {/* Address Field */}
            <Form.Item
              label="Address"
              validateStatus={errors.address ? "error" : ""}
              help={errors.address?.message}
            >
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <Input placeholder="Enter your address" {...field} />
                )}
              />
            </Form.Item>

            {/* City Field */}
            <Form.Item
              label="City"
              validateStatus={errors.city ? "error" : ""}
              help={errors.city?.message}
            >
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <Input placeholder="Enter your city" {...field} />
                )}
              />
            </Form.Item>

            {/* State Field */}
            <Form.Item
              label="State"
              validateStatus={errors.state ? "error" : ""}
              help={errors.state?.message}
            >
              <Controller
                name="state"
                control={control}
                render={({ field }) => (
                  <Input placeholder="Enter your state" {...field} />
                )}
              />
            </Form.Item>

            {/* Country Field */}
            <Form.Item
              label="Country"
              validateStatus={errors.country ? "error" : ""}
              help={errors.country?.message}
            >
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <Input placeholder="Enter your country" {...field} />
                )}
              />
            </Form.Item>
          </div>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Modal
        title="Enrollment Successful"
        visible={isModalVisible}
        onOk={handleModalClose}
        onCancel={handleModalClose}
        footer={[
          <Button key="ok" type="primary" onClick={handleModalClose}>
            OK
          </Button>,
        ]}
      >
        <p>Your enrollment has been successfully completed!</p>
      </Modal>
    </>
  );
};

export default AddressDetailsForm;
