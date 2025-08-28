# Rectangle Mouse-Tracking Animation

This project demonstrates a smooth rectangle animation using GSAP where a rectangle follows the mouse cursor horizontally across the screen.

## 🚀 Features

- Centered Rectangle: A styled rectangle placed in the middle of the viewport.

- Mouse Tracking:

  - Base Version → The rectangle moves horizontally according to cursor position.

  - Extended Version → The rectangle follows both X and Y axes with a 3D tilt effect.

- Smooth Animation: Powered by GSAP’s tweening and easing (Power3).

- Responsive Range Mapping: Uses gsap.utils.mapRange() to constrain movement within screen boundaries.

---  

## 🛠️ Tech Stack

- HTML5 for structure

- CSS3 for styling (shadows, rounded corners, layout)

- JavaScript (ES6) for interactivity

- GSAP 3 for animation

---

### 📂 Project Structure

- index.html      # Main HTML structure
- style.css       # Styling for the rectangle and layout
- script.js       # Animation logic with GSAP

---

## ⚡ How It Works

### 🔹 Base Version (Horizontal Only)

- The rectangle is centered using transform: translate(-50%, -50%).

- On every mousemove:

- The cursor’s clientX is mapped into a valid range using gsap.utils.mapRange().

- GSAP animates the rectangle’s left property, making it smoothly follow the cursor horizontally.

### 🔹 Extended Version (2D + 3D Tilt)

- In addition to horizontal movement:

- The rectangle also follows the Y-axis (top property).

- A 3D rotation is applied based on cursor offset:

- Tilt left/right when the mouse moves along X.

- Tilt up/down when the mouse moves along Y.

---

## 🎯 Usage

- Open index.html in a browser.

- Move your mouse across the screen:

- Base Version → The rectangle glides left and right.

- Extended Version → The rectangle smoothly follows your mouse in both directions and rotates slightly in 3D, giving a parallax effect.
