# 📄 Project Change Log: GateNexus

## 🚀 Version History

---

### v1.1.0 — Platform Stabilization
*Release Date: February 2026*

#### 🎯 Major Changes
- **Cloud Deployment**: Production environment established on **Vercel** with custom Vite build configurations
- **Database**: Backend connected to custom-managed **Supabase** instance
- **Security**: API keys secured via **Environment Variable** injection; `.gitignore` updated
- **Authentication**: **Google OAuth 2.0** configured through Google Cloud Console

#### 🐛 Bug Fixes
- Removed legacy donation components causing runtime errors
- Fixed build-time syntax errors in `Navbar.tsx` — resolved empty conditional rendering

---

### v1.0.0 — Initial Release
*Release Date: January 2026*

#### 🏗️ Core Architecture
- **Framework**: **React 18** + **Vite** for frontend rendering
- **UI Components**: **Framer Motion** animations; **Phosphor Icons**
- **Routing**: `react-router-dom` v6 for dashboard navigation
- **Styling**: Tailwind CSS

#### 📦 Initial Features
- User dashboard layout
- Course material structure
- Navigation framework