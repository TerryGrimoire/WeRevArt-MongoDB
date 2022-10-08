import React, { useContext } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExportContextUser from "./context/UserContext";
import Home from "./pages/Home";
import ProjectAds from "./pages/ProjectAds";
import Artists from "./pages/Artists";
import Creations from "./pages/Creations";
import Help from "./pages/Help";
import Register from "./pages/Register";
import MyProfile from "./pages/MyProfile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyProjectAds from "./pages/MyProjectAds";
import ContactUs from "./pages/ContactUs";
import PostAnAd from "./pages/PostAnAd";
import ProtectedRoute from "./components/Protected/ProtectedRoute";
import MyAccount from "./pages/MyAccount";
import "./App.css";
import PersonalInformation from "./components/MyProfile/Personal/PersonalInformation";
import PersonalForm from "./components/MyProfile/Personal/PersonalForm";
import BillingInformation from "./components/MyProfile/Billing/Billinginformation";
import BillingForm from "./components/MyProfile/Billing/BillingForm";
import NotificationsInformation from "./components/MyProfile/Notifications/NotificationsInformation";
import NotificationsForm from "./components/MyProfile/Notifications/NotificationsForm";
import MyProfileInformation from "./components/MyProfile/Account/MyProfileInformation";
import MyProfileForm from "./components/MyProfile/Account/MyProfileForm";

function App() {
  const { user } = useContext(ExportContextUser.UserContext);
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project_Ads" element={<ProjectAds />} />
          <Route path="/Artists" element={<Artists />} />
          <Route path="/Creations" element={<Creations />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Contact_us" element={<ContactUs />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Post_An_Ad" element={<PostAnAd />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/MyAccount" element={<MyAccount />} />
          <Route path="/profile/personal" element={<PersonalInformation />} />
          <Route path="/profile/personalForm" element={<PersonalForm />} />
          <Route path="/profile/billing" element={<BillingInformation />} />
          <Route path="/profile/billingForm" element={<BillingForm />} />
          <Route
            path="/profile/description"
            element={<MyProfileInformation />}
          />
          <Route path="/profile/profileForm" element={<MyProfileForm />} />
          <Route
            path="/profile/notifications"
            element={<NotificationsInformation />}
          />
          <Route
            path="/profile/notificationsForm"
            element={<NotificationsForm />}
          />
          <Route
            path="/My_Project_Ads"
            element={
              <ProtectedRoute user={user}>
                <MyProjectAds />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
