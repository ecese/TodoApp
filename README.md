# Mobile Programming – Lab 7
## React Native Lab 2: Interactive Todo List App

Student Name: Ece Sevval Mulhan  
Student ID: 210408025 

---

## Project Description

This project is an interactive Todo List application developed using React Native and Expo.  
The purpose of this lab is to practice fundamental React Native concepts such as state management,
user input handling, component-based architecture, and rendering dynamic lists efficiently.

---

## Technologies Used

- React Native
- Expo
- JavaScript (ES6+)
- react-native-safe-area-context

---

## Project Structure

TodoApp/
├── components/
│   └── TodoItem.js
├── App.js
├── package.json
├── README.md
└── assets/

---

## How to Run the Application

1. Clone the repository:
git clone https://github.com/ecese/TodoApp.git

2. Navigate into the project directory:
cd TodoApp

3. Install dependencies:
npm install

4. Start the Expo development server:
npx expo start

5. Run the app on your device:
- Scan the QR code using Expo Go on your mobile device
- Or press "i" for iOS simulator / "a" for Android emulator

---

## Features

- Add new tasks using a controlled TextInput
- Display tasks dynamically using FlatList
- Delete tasks by tapping on a task
- Keyboard dismisses automatically after adding a task
- Keyboard-aware layout using KeyboardAvoidingView
- Clean and responsive user interface

---

## Testing Notes

- If the input field is empty, no task will be added
- A placeholder message is shown when there are no tasks
- Tapping on a task removes it from the list
- The keyboard does not cover the input field

---

## Git & Commits

Each major part of the lab was committed separately with clear and descriptive commit messages,
as required in the assignment instructions.

---

## Notes

This project was developed as part of the Mobile Programming course – Lab 7 assignment.
