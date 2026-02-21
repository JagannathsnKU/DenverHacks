# 🚀 DenverHacks - Local Setup Guide

> **Complete guide to run this project on your local machine**  
> Perfect for hackathon demos and development!

---

## ⚡ Quick Start (3 Steps)

```bash
# 1. Navigate to the frontend
cd DenverHacks/frontend

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

**Open your browser:** http://localhost:3001 🎉

---

## 📋 Prerequisites

### Required Software

1. **Node.js** (v18 or higher)
   - Download: https://nodejs.org/
   - Verify: `node --version`

2. **npm** (comes with Node.js)
   - Verify: `npm --version`

3. **Git**
   - Download: https://git-scm.com/
   - Verify: `git --version`

### System Requirements
- **RAM**: 4GB minimum (8GB recommended)
- **Storage**: 2GB free space
- **OS**: Windows 10+, macOS 10.15+, or Linux

---

## 🏃 Step-by-Step Setup

### Method 1: Main Frontend (Recommended)

This is the easiest and fastest way to see the project running!

**Step 1: Clone the repository** (if you haven't already)
```bash
git clone https://github.com/JagannathsnKU/DenverHacks.git
cd DenverHacks
```

**Step 2: Navigate to the frontend directory**
```bash
cd DenverHacks/frontend
```

**Step 3: Install dependencies**
```bash
npm install
```
⏱️ *This may take 2-5 minutes depending on your internet speed*

**Step 4: Start the development server**
```bash
npm run dev
```

**Step 5: Open in browser**
```
http://localhost:3001
```

✅ **Success!** You should see the DenverHacks application running.

---

### Method 2: JAG Variant

For the agent-focused variant:

```bash
cd DenverHacks-jag
npm install
npm run dev
```

Opens on: http://localhost:3000

---

### Method 3: Full Stack (Frontend + Backend)

To run both frontend and backend services:

**Terminal 1 - Backend:**
```bash
cd DenverHacks
npm install
npm run dev
```
Backend runs on: http://localhost:3000

**Terminal 2 - Frontend:**
```bash
cd DenverHacks/frontend
npm install
npm run dev
```
Frontend runs on: http://localhost:3001

---

## 🎯 What You'll See

### Agent Marketplace
- Browse AI agents with interactive cards
- View agent details, skills, and pricing
- 3D visualizations and animations

### Key Features You Can Demo
1. **Agent Selection** - Click on any agent card
2. **Interactive UI** - Smooth animations and transitions
3. **Responsive Design** - Works on desktop and mobile
4. **3D Elements** - WebGL-based visualizations

---

## 🐛 Common Issues & Solutions

### Issue: Port 3001 already in use

**Solution 1: Kill the process**
```bash
# Windows
netstat -ano | findstr :3001
taskkill /PID <PID_NUMBER> /F

# Mac/Linux
lsof -ti:3001 | xargs kill -9
```

**Solution 2: Use a different port**
```bash
npm run dev -- --port 3002
```

---

### Issue: "Module not found" errors

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

Or on Windows:
```bash
rmdir /s /q node_modules
del package-lock.json
npm install
```

---

### Issue: npm install fails

**Solution 1: Clear npm cache**
```bash
npm cache clean --force
npm install
```

**Solution 2: Use npm's legacy peer deps**
```bash
npm install --legacy-peer-deps
```

---

### Issue: TypeScript errors

**Solution: Skip TypeScript checks during development**
```bash
# Edit package.json and change dev script to:
"dev": "next dev --port 3001 --turbo"
```

---

### Issue: Slow performance

**Solutions:**
1. Close other applications
2. Disable browser extensions
3. Use Chrome/Edge for best performance
4. Restart your computer

---

## 📦 Project Commands

### Frontend Commands (DenverHacks/frontend)
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Run production build
npm run lint     # Check code quality
```

### Backend Commands (DenverHacks)
```bash
npm run dev              # Start backend with hot reload
npm run build            # Compile TypeScript
npm test                # Run tests
npm run contracts:build  # Compile smart contracts
```

---

## 🌟 Demo Tips for Hackathon

### What to Show Judges:

1. **Quick Setup**
   - Show how easy it is to run: `npm install && npm run dev`

2. **Agent Marketplace**
   - Navigate through different agents
   - Show the interactive UI

3. **Technology Stack**
   - Next.js 16 with TypeScript
   - Blockchain integration
   - Modern UI/UX

4. **Code Quality**
   - Well-organized structure
   - Type-safe TypeScript
   - Reusable components

### Talking Points:
- ✅ Accessibility: Easy to run locally
- ✅ User Experience: Smooth animations
- ✅ Scalability: Modular architecture
- ✅ Innovation: AI + Blockchain integration

---

## 📸 Expected Output

When running successfully, you should see in terminal:
```
▲ Next.js 16.1.6 (Turbopack)
- Local:        http://localhost:3001
- Network:      http://192.168.x.x:3001

✓ Ready in 2.3s
```

In your browser:
- Homepage with agent cards
- Interactive navigation
- Smooth animations
- Responsive layout

---

## 🆘 Still Having Issues?

### Check These:

1. **Node.js version**
   ```bash
   node --version  # Should show v18.x.x or higher
   ```

2. **npm version**
   ```bash
   npm --version  # Should show v8.x.x or higher
   ```

3. **Current directory**
   ```bash
   pwd  # Should be in DenverHacks/frontend
   ```

4. **Dependencies installed**
   ```bash
   ls node_modules  # Should list many folders
   ```

### Fresh Start:
```bash
# Complete reset
cd DenverHacks/frontend
rm -rf node_modules package-lock.json .next
npm install
npm run dev
```

---

## 🎓 Learning Resources

- **Next.js Documentation**: https://nextjs.org/docs
- **React Documentation**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

---

## 📞 Support

If you encounter any issues not covered here:
1. Check the error message carefully
2. Search for the error on Google/Stack Overflow
3. Check the project's GitHub Issues

---

**Happy Hacking! 🚀**

*Last Updated: February 21, 2026*
