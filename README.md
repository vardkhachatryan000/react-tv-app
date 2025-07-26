# 🎬 Movies App

A modern movies web application built with **React** and **Vite**, following the **Clean Architecture** (MVVM pattern). The app provides a scalable, maintainable codebase with a responsive and elegant UI using **TailwindCSS**, **Ant Design**, and **React Slick** for carousels.

---

## 🧠 Architecture

This project uses **Clean Architecture** with the **MVVM (Model-View-ViewModel)** pattern to ensure separation of concerns and maintainability.

### Folder Structure

src/
├── assets/ # Static assets (images, icons, etc.)
├── data/ # Data sources (e.g. repositories, API)
├── domain/ # Use cases and business logic
├── mock/ # Mock data (fake data)
├── presentation/ # ViewModels and UI components
├── routes/ # Navigation routes

---

## 🚀 Tech Stack

| Tech            | Description                                     |
|-----------------|-------------------------------------------------|
| **React**       | UI library for building components              |
| **Vite**        | Fast development bundler                        |
| **TailwindCSS** | Utility-first CSS for rapid UI development      |
| **Ant Design**  | UI component library with styled components     |
| **React Slick** | Carousel/slider component for showcasing content |
| **MVVM**        | Design pattern separating UI & logic            |

---

## 📦 Installation

```bash
git clone https://github.com/vardkhachatryan000/react-tv-app.git
cd react-tv-app
npm install
npm run dev
