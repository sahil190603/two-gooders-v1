// app/providers.jsx
"use client";

import "@ant-design/v5-patch-for-react-19";

export default function Providers({ children }) {
  // This component runs on the client and guarantees the patch is executed
  // in the browser before any AntD component mounts.
  return <>{children}</>;
}
