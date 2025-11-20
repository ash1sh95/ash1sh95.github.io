# 📝 Portfolio Content Update Guide

This guide explains how to easily update your portfolio content without touching any React code or styling.

## 🎯 Quick Start

**All content is managed in ONE file:**
```
/src/data/content.ts
```

Simply open this file and edit the data arrays. The website will automatically update!

---

## 📂 What You Can Update

### 1. **Personal Information**
```typescript
export const personalInfo = {
    name: "Your Name",
    title: "Your Job Title",
    tagline: "Your Tagline",
    subtitle: "Your Subtitle",
    bio: "Your Bio",
    social: {
        linkedin: "https://linkedin.com/in/yourprofile",
        github: "https://github.com/yourusername",
        email: "mailto:your.email@example.com",
        resume: "/resume.pdf"
    }
};
```

### 2. **Projects** (Lines 142-164)
Add, edit, or remove projects:
```typescript
export const projects = [
    {
        title: "Project Name",
        description: "Brief description of your project",
        tech: ["Technology1", "Technology2", "Technology3"],
        link: "https://github.com/yourusername/project",
        metrics: "Status or metric"
    },
    // Add more projects here...
];
```

### 3. **Certifications** (Lines 193-214)
Update your certifications:
```typescript
export const certifications = [
    {
        name: "Certification Name",
        issuer: "Issuing Organization",
        validity: "Valid through YEAR"
    },
    // Add more certifications here...
];
```

### 4. **Education** (Lines 68-85)
Update your education:
```typescript
export const education = [
    {
        school: "University Name",
        degree: "Degree Name",
        date: "Start Date - End Date",
        grade: "GPA or Grade",
        description: "Description",
        logo: logoVariable // Import logo at top of file
    },
    // Add more education entries...
];
```

### 5. **Experience** (Lines 87-140)
Update your work experience:
```typescript
export const experience = [
    {
        company: "Company Name",
        role: "Your Role",
        date: "Start Date – End Date",
        logo: "https://logo.clearbit.com/company.com",
        description: [
            "Achievement or responsibility 1",
            "Achievement or responsibility 2",
            "Achievement or responsibility 3"
        ]
    },
    // Add more experience entries...
];
```

### 6. **Skills** (Lines 166-191)
Update your skills by category:
```typescript
export const skills = [
    {
        category: "Category Name",
        items: ["Skill1", "Skill2", "Skill3"]
    },
    // Add more skill categories...
];
```

### 7. **Tech Stack** (Lines 19-31)
Update the technologies carousel:
```typescript
export const techStack = [
    { 
        name: 'Technology Name', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tech/tech-original.svg' 
    },
    // Add more technologies...
];
```

---

## 🔄 How to Update

1. **Open the file**: `/src/data/content.ts`
2. **Find the section** you want to update (use the line numbers above)
3. **Edit the data** - just change the text, add items, or remove items
4. **Save the file** - that's it! The website updates automatically

---

## 🖼️ Adding Images

### For Education Logos:
1. Add your logo image to `/src/assets/img/education/`
2. Import it at the top of `content.ts`:
   ```typescript
   import mySchoolLogo from '../assets/img/education/myschool.jpg';
   ```
3. Use it in the education array:
   ```typescript
   logo: mySchoolLogo
   ```

### For Company Logos:
Use Clearbit's logo API (automatic):
```typescript
logo: "https://logo.clearbit.com/companywebsite.com"
```

---

## ✅ Best Practices

- **Keep descriptions concise** - 1-2 sentences work best
- **Use consistent formatting** - Follow the existing pattern
- **Test after changes** - Run `npm run dev` to preview
- **Commit regularly** - Use git to track your changes

---

## 🚀 Deploying Changes

After updating content:
```bash
# 1. Save your changes
git add .
git commit -m "Updated portfolio content"

# 2. Push to GitHub
git push origin main

# 3. Your site will auto-deploy to GitHub Pages!
```

---

## 🔒 Email Security

Your email is protected with a "reveal on click" feature:
- Email is **hidden by default** from spam bots
- Visitors must **click to reveal** your email
- Prevents automated email scraping
- Maintains premium user experience

---

## 💡 Need Help?

If you need to make more complex changes (styling, layout, new sections), those require editing React components. But for 95% of updates, this single file is all you need!

**Happy updating! 🎉**
