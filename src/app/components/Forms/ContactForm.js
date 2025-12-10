"use client";

import React, { useState } from "react";
import styles from "../../Styles/ContactForm.module.css";
import {
  Form,
  Input,
  Button,
  Select,
  Typography,
  App,
  Spin,
  Space,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import { countries } from "../../Data/CountryCodes";
import { AnimatedSection } from "@/app/components/AnimatedSection";
import { usePathname } from "next/navigation";

const { Text } = Typography;
const { Option } = Select;

function getFlagUrl(code, size = "24x18") {
  return `https://flagcdn.com/${size}/${code.toLowerCase()}.png`;
}

export default function ContactForm() {
  const [form] = Form.useForm();
  // default prefix
  const [countryPrefix, setCountryPrefix] = useState("+972");
  const [loading, setLoading] = useState(false);
  const { message } = App.useApp();

  const pathname = usePathname() || "";
  const isScheduleCall = pathname
    .toLowerCase()
    .includes("/fundraising-program/schedule-a-call");

  const onFinish = async (values) => {
    // setLoading(true);
    // try {
    //   const prefix = values.country || countryPrefix;
    //   const fullPhone = `${prefix} ${values.phone || ""}`.trim();

    //   const payload = {
    //     ...values,
    //     phone: fullPhone,
    //     inquiryType: isScheduleCall ? "partner" : "supplier",
    //     contactName: values.contactName,
    //   };

    //   const response = await fetch("/api/contact", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(payload),
    //   });

    //   const result = await response.json();

    //   if (result.success) {
    //     message.success("Form submitted successfully!");
    //     form.resetFields();
    //     setCountryPrefix("+972");
    //   } else {
    //     message.error("Submission failed. Please try again.");
    //   }
    // } catch (error) {
    //   message.error("Submission failed. Please try again.");
    // } finally {
    //   setLoading(false);
    // }
    message.success("Form submitted successfully!");
    form.resetFields();
  };

  return (
    <>
      {loading && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(255,255,255,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <Spin size="large" />
        </div>
      )}

      <AnimatedSection delay={0.05} className={styles.page}>
        <div className={styles.centerBox}>
          <Form
            form={form}
            name="schedule_call"
            layout="vertical"
            onFinish={onFinish}
            className={styles.form}
            initialValues={{ country: countryPrefix }}
            disabled={loading}
          >
            <AnimatedSection delay={0.1}>
              <Form.Item
                name="organization"
                rules={[
                  { required: true, message: "Please enter organization name" },
                ]}
              >
                <Input placeholder="Name of Organization" />
              </Form.Item>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <Form.Item
                name="url"
                rules={[{ required: true, message: "Please enter url" }]}
              >
                <Input placeholder="URL" />
              </Form.Item>
            </AnimatedSection>

            <AnimatedSection delay={0.14}>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please enter email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input placeholder="Contact Email" />
              </Form.Item>
            </AnimatedSection>

            <AnimatedSection delay={0.16}>
              <Form.Item
                name="contactName"
                rules={[
                  { required: true, message: "Please enter contact name" },
                ]}
              >
                <Input placeholder="Contact Name" />
              </Form.Item>
            </AnimatedSection>

            <AnimatedSection delay={0.18}>
              <div
                className={styles.phoneRow}
                style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
              >
                {/* Country select + Phone input (updated) */}
                <Space.Compact style={{ width: "100%" }}>
                  {/* Country select */}
                  <Form.Item name="country" style={{ margin: 0 }}>
                    <Select
                      optionLabelProp="label"
                      suffixIcon={<DownOutlined />}
                      onChange={(val) => setCountryPrefix(val)}
                      showSearch
                      filterOption={(input, option) =>
                        (option?.children ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      style={{ width: 110, textAlign: "center" }}
                    >
                      {countries.map((c) => (
                        <Option
                          key={c.code}
                          value={c.dial_code}
                          label={
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <img
                                src={getFlagUrl(c.code, "24x18")}
                                alt={`${c.code} flag`}
                                style={{
                                  width: 20,
                                  height: 15,
                                  objectFit: "cover",
                                  borderRadius: 2,
                                }}
                                onError={(e) =>
                                  (e.currentTarget.style.display = "none")
                                }
                              />
                            </span>
                          }
                        >
                          {`${c.name}`}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>

                  {/* Phone input — not noStyle so errors show */}
                  <Form.Item
                    name="phone"
                    style={{ margin: 0, flex: 1 }}
                    rules={[
                      { required: true, message: "Please enter phone number" },
                      {
                        pattern: /^[0-9]{10}$/,
                        message: "Phone must be exactly 10 digits",
                      },
                    ]}
                    normalize={(value) => {
                      // strip non-digits and limit to 10 digits
                      if (!value) return value;
                      return value.toString().replace(/\D/g, "").slice(0, 10);
                    }}
                    validateTrigger={["onChange", "onBlur"]}
                  >
                    <Input
                      placeholder="Contact Phone"
                      maxLength={10}
                      inputMode="numeric"
                      // show selected country prefix inside input visually
                      prefix={
                        <span
                          style={{
                            minWidth: 44,
                            display: "inline-block",
                            textAlign: "center",
                          }}
                        >
                          {countryPrefix}
                        </span>
                      }
                      // keep onChange simple — do NOT call form.setFieldsValue here anymore
                      onChange={(e) => {
                        // optional: do nothing because normalize will run and keep digits
                        // but you can still do client-side only UI handling here if needed
                      }}
                    />
                  </Form.Item>
                </Space.Compact>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Form.Item style={{ marginTop: 16 }}>
                <Button
                  htmlType="submit"
                  block
                  className={styles.submitBtn}
                  loading={loading}
                  disabled={loading}
                >
                  Submit
                </Button>
              </Form.Item>
            </AnimatedSection>

            <AnimatedSection delay={0.22}>
              <div className={styles.disclaimer} style={{ marginTop: 8 }}>
                <Text style={{ fontSize: 13 }}>
                  By signing up, you agree to receive marketing messages at the
                  phone number or email provided. Msg and data rates may apply.
                  View our privacy policy and terms of service for more info.
                </Text>
              </div>
            </AnimatedSection>
          </Form>
        </div>
      </AnimatedSection>
    </>
  );
}
