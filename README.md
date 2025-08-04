# **AuthFlow**

AuthFlow is a clean, simple, and responsive **static authentication web app** designed to showcase the basic flow of user registration, login, password recovery, and dashboard navigation.

This project focuses on **UI and user flow only**, no real backend or database, making it perfect for demonstrating the design and structure of authentication systems.

## **Features**

* **Registration** – Create a new account with input validation.
* **Login** – Sign in using your registered details.
* **Forgot Password** – Simulated flow for recovering your account.
* **Change Password** – Update your password after login.
* **Dashboard** – Welcome screen accessible after a successful (fake) login.

## **Pages**

1. **/register** – Sign-up form for new users.
2. **/login** – Login form for existing users.
3. **/forgot-password** – Reset password flow.
4. **/dashboard/change-password** – Change password after login.
5. **/dashboard** – Main page after logging in.

## **Getting Started**

### **1. Clone the repository**

```bash
git clone https://github.com/Rahimeen-Altaf/StaticAuthApp.git
cd StaticAuthApp
```

### **2. Install dependencies**

```bash
npm install
```

### **3. Start the development server**

```bash
npm run dev
```

### **4. Open in your browser**

```
http://localhost:port
```

## **Note**

* This is a **static project** for demonstration purposes only.
* No actual authentication, database, or session storage is implemented.
* All login and password reset flows are **simulated**.
