"use client";

import React, { useState, useMemo } from "react";
import { Table, Input, Button, Space, Card, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import charitiesData from "../Data/two_gooders_charity";
import { AnimatedSection } from "../components/AnimatedSection";

const { Text } = Typography;

const CharitiesPage = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("");

  const filteredCharities = useMemo(() => {
    let filtered = charitiesData;

    // Filter by search text
    if (searchText) {
      filtered = filtered.filter((charity) =>
        charity.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // Filter by selected letter
    if (selectedLetter) {
      filtered = filtered.filter((charity) =>
        charity.name.toUpperCase().startsWith(selectedLetter)
      );
    }

    return filtered;
  }, [searchText, selectedLetter]);

  // Generate A-Z buttons
  const alphabetButtons = useMemo(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return letters.map((letter) => (
      <Button
        key={letter}
        type={selectedLetter === letter ? "primary" : "default"}
        onClick={() =>
          setSelectedLetter(selectedLetter === letter ? "" : letter)
        }
        style={{ margin: "2px", minWidth: "40px", borderRadius: 0 }}
      >
        {letter}
      </Button>
    ));
  }, [selectedLetter]);

  // Table columns
  const columns = [
    {
      title: "Charity Name",
      dataIndex: "name",
      key: "name",
      render: (name) => (
        <Button
          type="link"
          onClick={() => router.push(`/charities/${encodeURIComponent(name)}`)}
          style={{ padding: 0, height: "auto", textAlign: "left" }}
        >
          {name}
        </Button>
      ),
    },
    {
      title: "Affiliate Link to Access the Gift Shop",
      dataIndex: "affiliate_link",
      key: "affiliate_link"
    }
  ];

  return (
    <div style={{ padding: "24px", marginTop: "80px" }}>
      {/* Card + all content animated as a sequence */}
      <AnimatedSection delay={0.1} className="charitiesPageRoot" aria-label="Charities directory">
        {/* --- NEW BAR ABOVE THE CARD --- */}
        <AnimatedSection delay={0.15}>
          <div
            role="note"
            aria-live="polite"
            style={{
              background: "rgb(219, 180, 133)",
              padding: "5px",
              borderRadius: 0,
              marginBottom: "16px",
              lineHeight: 1.4,
              fontSize: 16,
              fontWeight: 600,
              textAlign: "center",
              boxSizing: "border-box"
            }}
          >
            <Text>We will calculate half of the profit from your purchase and send it to that charity.
            </Text>
          </div>
        </AnimatedSection>

        <Card title="Charities Directory" style={{ borderRadius: 0 , backgroundColor: "transparent"}}>
          {/* Search row */}
          <AnimatedSection delay={0.2}>
            <div style={{ marginBottom: "16px" }}>
              <Space.Compact style={{ width: "100%", marginBottom: "16px" }}>
                <Input
                  style={{ borderRadius: 0 }}
                  placeholder="Search charities by name..."
                  allowClear
                  size="large"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onPressEnter={() => {}}
                />
                <Button
                  style={{ borderRadius: 0 }}
                  size="large"
                  icon={<SearchOutlined />}
                  onClick={() => {}}
                />
              </Space.Compact>
            </div>
          </AnimatedSection>

          {/* A-Z Filter Section */}
          <AnimatedSection delay={0.22}>
            <div style={{ marginBottom: "16px" }}>
              <Space wrap>
                <Button
                  type={!selectedLetter ? "primary" : "default"}
                  onClick={() => setSelectedLetter("")}
                  style={{ margin: "2px", borderRadius: 0 }}
                >
                  All
                </Button>
                {alphabetButtons}
              </Space>
            </div>
          </AnimatedSection>

          {/* Results count */}
          <AnimatedSection delay={0.3}>
            <div style={{ marginBottom: "16px", color: "#515151" }}>
              Showing {filteredCharities.length} of {charitiesData.length} charities
              {selectedLetter && ` starting with "${selectedLetter}"`}
              {searchText && ` matching "${searchText}"`}
            </div>
          </AnimatedSection>

          {/* Table (wrap so table fades/enters last) */}
          <AnimatedSection delay={0.34}>
            <Table
              columns={columns}
              dataSource={filteredCharities}
              rowKey="id"
              pagination={{
                pageSize: 10,
                showSizeChanger: true,
                showQuickJumper: true,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
              }}
              locale={{
                emptyText: searchText || selectedLetter
                  ? "No charities found matching your criteria"
                  : "No charities available",
              }}
            />
          </AnimatedSection>
        </Card>
      </AnimatedSection>
    </div>
  );
};

export default CharitiesPage;
