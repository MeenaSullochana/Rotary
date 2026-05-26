const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // 🔥 ADD THIS
app.use(cors({
    origin: [
      'http://localhost:5173',   // React local
      'https://your-frontend.onrender.com' // deployed frontend
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }));
  app.use("/uploads", express.static("uploads"));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/roles", require("./routes/roleRoutes"));
app.use("/api/employees", require("./routes/employeeRoutes"));
app.use("/api/companies", require("./routes/companyRoutes"));
app.use("/api/attendance", require("./routes/attendanceRoutes"));
app.use("/api/task", require("./routes/taskRoutes"));
app.use("/api/notification", require("./routes/notificationRoutes"));
app.use("/api/leave", require("./routes/leaveRoutes"));
app.use("/api/payslip", require("./routes/payslipRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/registration", require("./routes/registerRoutes"));
app.use("/api/sliders", require("./routes/sliderRoutes"));
app.use("/api/gallery", require("./routes/galleryRoutes"));
app.use("/api/faq", require("./routes/faqRoutes"));
app.use("/api/siteSetting", require("./routes/siteSettingRoutes"));
app.use("/api/blog", require("./routes/blogRoutes"));
app.use("/api/enquiry", require("./routes/enquiryRoutes"));
app.use("/api/member", require("./routes/memberRoutes"));
app.use("/api/user", require("./routes/userRoutes"));

module.exports = app;


