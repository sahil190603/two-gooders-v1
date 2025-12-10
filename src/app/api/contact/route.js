// import { google } from "googleapis";
// import nodemailer from "nodemailer";

// function escapeHtml(str = "") {
//   return String(str)
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;")
//     .replace(/'/g, "&#039;");
// }

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { name = "", email = "", phone = "", message = "" } = body;

//     // ==========================
//     // 1. GOOGLE SHEETS SETUP (unchanged)
//     // ==========================
//     const auth = new google.auth.GoogleAuth({
//       keyFile: process.env.SERVICE_ACCOUNT_PATH,
//       scopes: ["https://www.googleapis.com/auth/spreadsheets"],
//     });
//     const sheets = google.sheets({ version: "v4", auth });

//     const timestamp = new Date().toISOString();

//     await sheets.spreadsheets.values.append({
//       spreadsheetId: process.env.SHEET_ID,
//       range: "General Inquiry!A:E",
//       valueInputOption: "USER_ENTERED",
//       requestBody: {
//         values: [[timestamp, name, email, phone, message]],
//       },
//     });

//     // ==========================
//     // 2. SEND EMAILS (NODEMAILER)
//     // ==========================
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT),
//       secure: process.env.SMTP_SECURE === "true",
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     // ---------- ADMIN HTML: filled form layout (matches your screenshot) ----------
//     const adminHtml = `
// <!doctype html>
// <html>
//   <head>
//     <meta charset="utf-8"/>
//     <meta name="viewport" content="width=device-width,initial-scale=1"/>
//     <title>Contact Us Inquiry</title>
//     <style>
//       body { font-family: "Georgia", serif; background:#fdfcf9; margin:0; padding:24px; color:#111827; }
//       .container { max-width:720px; margin:0 auto; }
//       .card { background:#fff; padding:34px 40px; border-radius:4px; box-shadow:0 6px 18px rgba(16,24,40,0.06); }
//       .title { text-align:center; font-size:28px; margin:6px 0 18px; color:#2b2b2b; }
//       .sub { font-family: Georgia, serif; font-size:18px; margin:10px 0 24px; color:#4b4b4b; text-align:left; }
//       .row { display:flex; gap:16px; }
//       .col { flex:1; }
//       .input-like { border:1px solid #e7e5e2; padding:10px 12px; border-radius:2px; background:#fff; font-size:14px; color:#2b2b2b; }
//       .label { display:block; font-size:12px; color:#6b6b6b; margin-bottom:8px; }
//       .textarea-like { border:1px solid #e7e5e2; padding:12px; min-height:120px; border-radius:2px; font-size:14px; color:#2b2b2b; }
//       .meta { margin-top:14px; font-size:12px; color:#6b6b6b; }
//       .sheet-link { text-decoration:none; color:#1f6feb; font-size:13px; }
//       @media (max-width:600px){ .row{flex-direction:column;} }
//     </style>
//   </head>
//   <body>
//     <div class="container">
//       <div class="card">
//         <div class="title">Contact Us</div>
//         <div class="sub">Ask us anything below!</div>

//         <div style="margin-top:8px;">
//           <div class="row" style="margin-bottom:14px;">
//             <div class="col">
//               <div class="label">Name</div>
//               <div class="input-like">${escapeHtml(name || "—")}</div>
//             </div>
//             <div class="col">
//               <div class="label">Email</div>
//               <div class="input-like"><a href="mailto:${escapeHtml(
//                 email
//               )}" style="text-decoration:none;color:inherit;">${escapeHtml(
//       email || "—"
//     )}</a></div>
//             </div>
//           </div>

//           <div style="margin-bottom:14px;">
//             <div class="label">Phone Number</div>
//             <div class="input-like">${escapeHtml(phone || "—")}</div>
//           </div>

//           <div style="margin-bottom:6px;">
//             <div class="label">Message</div>
//             <div class="textarea-like">${escapeHtml(message || "—").replace(
//               /\n/g,
//               "<br/>"
//             )}</div>
//           </div>

//           <div class="meta">
//             <div><strong>Inquiry Type:</strong> ${escapeHtml(inquiryType)}</div>
//             <div><strong>Timestamp:</strong> ${escapeHtml(timestamp)}</div>
//             <div style="margin-top:8px;"><a class="sheet-link" href="https://docs.google.com/spreadsheets/d/${
//               process.env.SHEET_ID
//             }" target="_blank">Open spreadsheet</a></div>
//           </div>
//         </div>

//       </div>
//     </div>
//   </body>
// </html>
// `;

//     const adminText = `New Contact Inquiry
// Name: ${name}
// Email: ${email}
// Phone: ${phone || "N/A"}
// Message:
// ${message}

// Inquiry Type: ${inquiryType}
// Timestamp: ${timestamp}
// Sheet: https://docs.google.com/spreadsheets/d/${process.env.SHEET_ID}
// `;

//     // ---------- USER confirmation (unchanged content) ----------
//     const userHtml = `
// <!doctype html>
// <html>
//   <head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
//   <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial; margin:0; padding:24px; background:#f4f6f8;">
//     <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:680px;margin:0 auto;">
//       <tr>
//         <td style="background:#ffffff;padding:24px;border-radius:8px;">
//           <h2 style="margin:0 0 8px;color:#111827;font-size:18px;">Thank you for contacting Two Gooders</h2>
//           <p style="margin:0 0 12px;color:#6b7280;line-height:1.5;">
//             Thank you for your interest in Two Gooders. Your inquiry will be routed to the appropriate person to answer you. You can expect an answer within <strong>1-2 business days</strong>.
//           </p>
//           <hr style="border:none;border-top:1px solid #eef2f7;margin:12px 0;" />
//           <p style="margin:0;font-size:13px;color:#374151;"><strong>Your submitted message:</strong></p>
//           <p style="margin:8px 0 0;color:#111827;">${escapeHtml(
//             message || "—"
//           )}</p>
//           <div style="margin-top:12px;color:#9ca3af;font-size:12px;">
//             <div><strong>Name:</strong> ${escapeHtml(name)}</div>
//             <div><strong>Email:</strong> ${escapeHtml(email)}</div>
//             <div><strong>Phone:</strong> ${escapeHtml(phone || "N/A")}</div>
//           </div>
//         </td>
//       </tr>
//     </table>
//   </body>
// </html>
// `;

//     const userText = `Thank you for your interest in Two Gooders. Your inquiry will be routed to the appropriate person to answer you. You can expect an answer within 1-2 business days.

// Your message:
// ${message}
// `;

//     // Send user confirmation
//     await transporter.sendMail({
//       from: `"Two Gooders" <${process.env.SMTP_USER}>`,
//       to: email,
//       subject: "Thank from Two gooders",
//       text: userText,
//       html: userHtml,
//     });

//     // Send admin filled-form email (no thank-you message)
//     await transporter.sendMail({
//       from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
//       to: "panchalsahil468@gmail.com",
//       subject: "Contact Us Inquiry",
//       text: adminText,
//       html: adminHtml,
//     });

//     return new Response(
//       JSON.stringify({ success: true, message: "Form submitted successfully" }),
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error in contact form:", error);
//     return new Response(
//       JSON.stringify({ success: false, error: error.message }),
//       { status: 500 }
//     );
//   }
// }
import { google } from "googleapis";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      inquiryType = "general",
      name = "",
      email = "",
      phone = "",
      country = "",
      message = "",
      organization = "",
      url = "",
      contactName = "",
    } = body;

    // --- sanitize phone ---
    const rawPhone = String(phone || "")
      .trim()
      .replace(/\D/g, ""); // digits only
    const rawCountry = String(country || "")
      .trim()
      .replace(/\D/g, ""); // digits only country code

    let phoneWithSpace = rawPhone;

    // if country code exists and phone doesn't already start with it, prepend it
    if (rawCountry && !rawPhone.startsWith(rawCountry)) {
      phoneWithSpace = `+${rawCountry} ${rawPhone}`;
    } else if (rawCountry && rawPhone.startsWith(rawCountry)) {
      phoneWithSpace = `+${rawCountry} ${rawPhone.slice(rawCountry.length)}`;
    } else if (rawCountry) {
      phoneWithSpace = `+${rawCountry} ${rawPhone}`;
    }

    // use this in your sheet & emails
    const partnerSupplierPhone = phoneWithSpace;

    // ==========================
    // 1. GOOGLE SHEETS SETUP
    // ==========================
    const auth = new google.auth.GoogleAuth({
      keyFile: process.env.SERVICE_ACCOUNT_PATH,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheets = google.sheets({ version: "v4", auth });

    const timestamp = new Date().toISOString();

    if (inquiryType === "partner") {
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.SHEET_ID,
        range: "Partner Inquiry!A:F",
        valueInputOption: "RAW",
        requestBody: {
          values: [
            [
              timestamp,
              organization,
              url,
              email,
              contactName,
              partnerSupplierPhone,
            ],
          ],
        },
      });
    } else if (inquiryType === "supplier") {
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.SHEET_ID,
        range: "Supplier Inquiry!A:F",
        valueInputOption: "RAW",
        requestBody: {
          values: [
            [
              timestamp,
              organization,
              url,
              email,
              contactName,
              partnerSupplierPhone,
            ],
          ],
        },
      });
    } else {
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.SHEET_ID,
        range: "General Inquiry!A:E",
        valueInputOption: "RAW",
        requestBody: {
          values: [[timestamp, name, email, phone, message]],
        },
      });
    }

    // ==========================
    // 2. SEND EMAILS
    // ==========================
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ==========================
    // PARTNER INQUIRY
    // ==========================
    if (inquiryType === "partner") {
      const adminText = `
NEW PARTNER LEAD

Organization: ${organization}
URL: ${url}
Contact Email: ${email}
Contact Name: ${contactName}
Phone: ${phone}

Timestamp: ${timestamp}
`;

      const userText = `
Thank you for inquiring to be a Charity Partner with Two Gooders.

We are excited about the possibility of helping you raise more funds to do more good!

A Partner Account Manager (PAM) will contact you in the next 1–2 business days to provide more details and discuss the short approval process.

Once approved, your PAM will schedule a time to begin your onboarding process.
`;

      // User email
      await transporter.sendMail({
        from: `"Two Gooders" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Thank You - Charity Partner Inquiry",
        text: userText,
      });

      // Admin email (UPDATED)
      await transporter.sendMail({
        from: `"Website Partner Form" <${process.env.SMTP_USER}>`,
        to: "panchalsahil468@gmail.com",
        subject: "Partner Lead",
        text: adminText,
      });
    }

    // ==========================
    // SUPPLIER INQUIRY
    // ==========================
    else if (inquiryType === "supplier") {
      const adminText = `
NEW SUPPLIER INQUIRY

Organization: ${organization}
URL: ${url}
Contact Email: ${email}
Contact Name: ${contactName}
Phone: ${phone}

Timestamp: ${timestamp}
`;

      const userText = `
Thank you for your interest in becoming a supplier with Two Gooders.

We have received your inquiry. Our team will review it and reply within 1–2 business days.
`;

      await transporter.sendMail({
        from: `"Two Gooders" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Thank You - Supplier Inquiry",
        text: userText,
      });

      // Admin email (UPDATED)
      await transporter.sendMail({
        from: `"Website Supplier Form" <${process.env.SMTP_USER}>`,
        to: "panchalsahil468@gmail.com",
        subject: "Supplier Inquiry",
        text: adminText,
      });
    }

    // ==========================
    // GENERAL CONTACT INQUIRY
    // ==========================
    else {
      const adminText = `
NEW CONTACT INQUIRY

Name: ${name}
Email: ${email}
Phone: ${phone}
Message:
${message}

Timestamp: ${timestamp}
`;

      const userText = `
Thank you for your interest in Two Gooders.

Your inquiry has been received and will be routed to the appropriate team. You can expect a response within 1–2 business days.
`;

      await transporter.sendMail({
        from: `"Two Gooders" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Thank You - Contact Inquiry",
        text: userText,
      });

      // Admin email (UPDATED)
      await transporter.sendMail({
        from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
        to: "panchalsahil468@gmail.com",
        subject: "Contact Us Inquiry",
        text: adminText,
      });
    }

    return new Response(
      JSON.stringify({ success: true, message: "Form submitted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
