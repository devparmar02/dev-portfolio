# Troubleshooting Guide

## If Browser Shows Nothing

### Step 1: Check Dev Server is Running
- Look at your terminal/command prompt
- You should see: `Local: http://localhost:5173/`
- If not, run: `npm run dev`

### Step 2: Check Browser Console
1. Press `F12` in your browser
2. Click the "Console" tab
3. Look for red error messages
4. Common errors:
   - "Cannot find module 'react-icons'" → Run `npm install`
   - "Failed to load resource" → Check file paths
   - "Uncaught SyntaxError" → Check for typos in code

### Step 3: Check Network Tab
1. Press `F12` → Click "Network" tab
2. Refresh the page (F5)
3. Look for failed requests (red items)
4. Check if `main.jsx` and `index.css` are loading

### Step 4: Verify URL
- Make sure you're going to: `http://localhost:5173`
- NOT `http://localhost:3000` or other ports
- Check the terminal for the exact URL

### Step 5: Clear Browser Cache
- Press `Ctrl + Shift + R` (hard refresh)
- Or `Ctrl + F5`

## Common Issues

### Issue: Blank White Page
**Solution:** Check browser console for JavaScript errors

### Issue: Styles Not Loading
**Solution:** 
1. Check if Tailwind is installed: `npm list tailwindcss`
2. Verify `src/index.css` has `@tailwind` directives

### Issue: Icons Not Showing
**Solution:**
1. Make sure react-icons is installed: `npm list react-icons`
2. If missing: `npm install react-icons`

### Issue: Image Not Showing
**Solution:**
1. Add your image to `public/hero-photo.png`
2. Or update the path in `Hero.jsx`

## Quick Test

To test if React is working, temporarily replace `App.jsx` content with:

```jsx
function App() {
  return <h1 style={{color: 'white', padding: '20px'}}>React is Working!</h1>;
}
```

If you see "React is Working!" then React is fine, and the issue is in components.

