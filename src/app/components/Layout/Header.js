"use client";

import React, { useState, useEffect } from "react";
import "antd/dist/reset.css";
import { Layout, Menu, Button, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../Styles/Header.module.css";

const { Header: AntHeader } = Layout;

const TopHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideBanner, setHideBanner] = useState(false);

  const pathname = usePathname() || "/";

  // primary nav items (use keys that match routes for easy active matching)
  const navItems = [
    { key: "shop", label: <Link href="/shop">Shop Here</Link> },
    { key: "about", label: <Link href="/about">About Us</Link> },
    { key: "charities", label: <Link href="/charities">Charities</Link> },
    { key: "fundraising-program", label: <Link href="/fundraising-program">Fundraising Program</Link> },
    { key: "contact", label: <Link href="/contact">Contact Us</Link> },
  ];

  // determine active key from pathname (pick first matching nav item)
  const getActiveKey = () => {
    if (!pathname) return "";
    if (pathname === "/" || pathname === "") return ""; // no active for home (logo)
    const found = navItems.find((item) => pathname.startsWith(`/${item.key}`));
    return found ? found.key : "";
  };
  const activeKey = getActiveKey();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
      setHideBanner(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const BANNER_HEIGHT = 24;

  return (
    <>
      {/* Promo Banner */}
      <div
        className={`${styles.promoBanner} ${hideBanner ? styles.hideBanner : ""}`}
        style={{ height: `${BANNER_HEIGHT}px` }}
      >
        YOUR GO-TO FOR GIFTS FOR ANY REASON
      </div>

      {/* Fixed Header */}
      <AntHeader
        className={styles.antHeaderWrapper}
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          zIndex: 1001,
          top: hideBanner ? "10px" : `${BANNER_HEIGHT + 10}px`,
          padding: "0 10px",
          background: "transparent",
          height: "auto",
          lineHeight: "normal",
          transition: "top 0.3s ease",
        }}
      >
        <div className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`} style={{ margin: "0 auto" }}>
          <div className={styles.inner}>
            {/* LEFT: logo */}
            <div className={styles.left}>
              <Link href="/" className={styles.logoLink}>
                <span className={styles.logo}>Two gooders</span>
              </Link>
            </div>

            {/* CENTER: menu */}
            <div className={styles.center}>
              <Menu
                mode="horizontal"
                items={navItems}
                className={styles.menu}
                selectable={true}
                selectedKeys={activeKey ? [activeKey] : []}
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              />
            </div>

            {/* RIGHT: user icon */}
            <div className={styles.right}>
              <Space size="middle" align="center">
                <Button
                  type="text"
                  icon={<UserOutlined style={{ fontSize: 16 }} />}
                />
              </Space>
            </div>
          </div>
        </div>
      </AntHeader>
    </>
  );
};

export default TopHeader;
