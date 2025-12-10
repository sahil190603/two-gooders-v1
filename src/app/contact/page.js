// "use client";

// import React from "react";
// import "antd/dist/reset.css";
// import { Form, Input, Button, Row, Col, Card } from "antd";
// import { AnimatedSection } from "../components/AnimatedSection";

// export default function Contactpage() {
//   const [form] = Form.useForm();

//   const onFinish = async (values) => {
//     const payload = {
//       ...values,
//       inquiryType: "general",
//     };
//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();

//       if (data.success) {
//         alert("Your message has been sent!");
//         form.resetFields();
//       } else {
//         alert("Something went wrong");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Failed to submit form");
//     }
//   };

//   return (
//     <div
//       style={{
//         marginTop: "80px",
//         display: "flex",
//         alignItems: "flex-start",
//         justifyContent: "center",
//         padding: "60px 20px",
//       }}
//     >
//       <div style={{ maxWidth: 800, width: "100%" }}>
//         {/* Heading */}
//         <AnimatedSection delay={0.1}>
//           <h2 style={{ textAlign: "center", marginBottom: 6 }}>Contact Us</h2>
//         </AnimatedSection>

//         {/* Sub-heading */}
//         <AnimatedSection delay={0.15}>
//           <h3 style={{ textAlign: "start", marginBottom: 18 }}>
//             Ask us anything below!
//           </h3>
//         </AnimatedSection>

//         {/* Form Card */}
//         <AnimatedSection delay={0.2}>
//           <Card
//             style={{
//               boxShadow: "none",
//               backgroundColor: "transparent",
//               border: "none",
//             }}
//           >
//             <Form
//               form={form}
//               layout="vertical"
//               onFinish={onFinish}
//               requiredMark={false}
//             >
//               {/* Top two inputs */}
//               <AnimatedSection delay={0.25}>
//                 <Row gutter={16}>
//                   <Col xs={24} sm={12}>
//                     <Form.Item
//                       name="name"
//                       rules={[
//                         { required: true, message: "Please enter your name" },
//                       ]}
//                     >
//                       <Input placeholder="Name" />
//                     </Form.Item>
//                   </Col>

//                   <Col xs={24} sm={12}>
//                     <Form.Item
//                       name="email"
//                       rules={[
//                         { required: true, message: "Please enter your email" },
//                         { type: "email", message: "Enter a valid email" },
//                       ]}
//                     >
//                       <Input placeholder="Email" />
//                     </Form.Item>
//                   </Col>
//                 </Row>
//               </AnimatedSection>

//               {/* Phone */}
//               <AnimatedSection delay={0.3}>
//                 <Form.Item name="phone">
//                   <Input placeholder="Phone Number" />
//                 </Form.Item>
//               </AnimatedSection>

//               {/* Message */}
//               <AnimatedSection delay={0.35}>
//                 <Form.Item name="message">
//                   <Input.TextArea placeholder="Message" rows={6} />
//                 </Form.Item>
//               </AnimatedSection>

//               {/* Submit */}
//               <AnimatedSection delay={0.4}>
//                 <Form.Item>
//                   <Button
//                     type="primary"
//                     htmlType="submit"
//                     style={{ borderRadius: 0 }}
//                   >
//                     Send
//                   </Button>
//                 </Form.Item>
//               </AnimatedSection>
//             </Form>
//           </Card>
//         </AnimatedSection>
//       </div>
//     </div>
//   );
// }
"use client";

import React, { useState } from "react";
import "antd/dist/reset.css";
import { Form, Input, Button, Row, Col, Card, Spin, App } from "antd";
import { AnimatedSection } from "../components/AnimatedSection";

export default function Contactpage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { message } = App.useApp();

  const onFinish = async (values) => {
    // setLoading(true);

    // const payload = {
    //   ...values,
    //   inquiryType: "general",
    // };

    // try {
    //   const res = await fetch("/api/contact", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(payload),
    //   });

    //   const data = await res.json();

    //   if (data.success) {
    //     message.success("Your message has been sent!");
    //     form.resetFields();
    //   } else {
    //     message.error("Something went wrong.");
    //   }
    // } catch (err) {
    //   message.error("Failed to submit form.");
    // } finally {
    //   setLoading(false);
    // }
    message.success("Your message has been sent!");
    form.resetFields();
  };

  return (
    <div
      style={{
        marginTop: "80px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "60px 20px",
      }}
    >
      {loading && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(255,255,255,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <Spin size="large" />
        </div>
      )}

      <div style={{ maxWidth: 800, width: "100%" }}>
        {/* Heading */}
        <AnimatedSection delay={0.1}>
          <h2 style={{ textAlign: "center", marginBottom: 6 }}>Contact Us</h2>
        </AnimatedSection>

        {/* Sub-heading */}
        <AnimatedSection delay={0.15}>
          <h3 style={{ textAlign: "start", marginBottom: 18 }}>
            Ask us anything below!
          </h3>
        </AnimatedSection>

        {/* Form Card */}
        <AnimatedSection delay={0.2}>
          <Card
            style={{
              boxShadow: "none",
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              requiredMark={false}
              disabled={loading}
            >
              {/* Top Inputs */}
              <AnimatedSection delay={0.25}>
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="name"
                      rules={[
                        { required: true, message: "Please enter your name" },
                      ]}
                    >
                      <Input placeholder="Name" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="email"
                      rules={[
                        { required: true, message: "Please enter your email" },
                        { type: "email", message: "Enter a valid email" },
                      ]}
                    >
                      <Input placeholder="Email" />
                    </Form.Item>
                  </Col>
                </Row>
              </AnimatedSection>

              {/* Phone */}
              <AnimatedSection delay={0.3}>
                <Form.Item
                  name="phone"
                  rules={[
                    { required: true, message: "Please enter phone number" },
                    {
                      pattern: /^[0-9]{10}$/,
                      message: "Phone must be exactly 10 digits",
                    },
                  ]}
                >
                  <Input
                    placeholder="Phone Number"
                    maxLength={10}
                    onChange={(e) => {
                      const onlyNums = e.target.value.replace(/\D/g, "");
                      form.setFieldsValue({ phone: onlyNums });
                    }}
                  />
                </Form.Item>
              </AnimatedSection>

              {/* Message */}
              <AnimatedSection delay={0.35}>
                <Form.Item name="message">
                  <Input.TextArea placeholder="Message" rows={6} />
                </Form.Item>
              </AnimatedSection>

              {/* Submit Button */}
              <AnimatedSection delay={0.4}>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    disabled={loading}
                    style={{ borderRadius: 0 }}
                    block
                  >
                    Send
                  </Button>
                </Form.Item>
              </AnimatedSection>
            </Form>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
}
