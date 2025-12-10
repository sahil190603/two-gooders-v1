"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { Card, Button, Descriptions, Space } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import charitiesData from "../../Data/two_gooders_charity";
import { AnimatedSection } from "../../components/AnimatedSection";

const CharityDetailPage = () => {
  const router = useRouter();
  const params = useParams();
  const charityName = params.name;

  // Find the charity by name (URL decoded)
  const charity = charitiesData.find(
    (c) => c.name === decodeURIComponent(charityName || "")
  );

  if (!charity) {
    return (
      <div style={{ padding: "24px" }}>
        <AnimatedSection delay={0.08}>
          <Card>
            <div style={{ textAlign: "center", padding: "40px" }}>
              <h2>Charity not found</h2>
              <p>The charity you're looking for doesn't exist.</p>
              <Button type="primary" onClick={() => router.push("/charities")}>
                Back to Charities
              </Button>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    );
  }

  return (
    <div style={{ padding: "24px", marginTop: "80px" }}>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {/* Back button */}
        <AnimatedSection delay={0.12}>
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => router.push("/charities")}
            style={{ borderRadius: 0 }}
          >
            Back to Charities
          </Button>
        </AnimatedSection>

        {/* Charity details (card itself enters next) */}
        <AnimatedSection delay={0.16}>
          <Card
            style={{ borderRadius: 0 , backgroundColor: "transparent" , border: "none"}}
            title={charity.name}
            extra={
              <Button
                type="primary"
                onClick={() => router.push("/charities")}
                style={{ borderRadius: 0 }}
              >
                Browse All Charities
              </Button>
            }
          >
            <AnimatedSection delay={0.18}>
              <Descriptions
                style={{ borderRadius: 0 }}
                column={1}
                bordered
              >
                <Descriptions.Item label="Charity Name">
                  {charity.name}
                </Descriptions.Item>
                <Descriptions.Item label="Description">
                  {charity.description}
                </Descriptions.Item>
                <Descriptions.Item label="Charity ID">
                  {charity.id}
                </Descriptions.Item>
              </Descriptions>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div
                style={{
                  marginTop: "24px",
                  padding: "16px",
                }}
              >
                <h4>About this Charity</h4>
                <p style={{ margin: 0, lineHeight: "1.6" }}>
                  {charity.description}
                </p>
              </div>
            </AnimatedSection>
          </Card>
        </AnimatedSection>
      </Space>
    </div>
  );
};

export default CharityDetailPage;
