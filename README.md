## John Smilga React Projects Solution

### Introduction

This repository contains all [**15 projects that John Smilga introduced in his video on FreeCodeCamp.org**](https://www.youtube.com/watch?v=a_7Z7C_JCyo&ab_channel=freeCodeCamp.org). These projects help you develop basic and intermediate knowledge of React, hooks, and routing. They also help you understand the logic behind some common components such as sliders, active tabs, carts, and routing.

### Overview

- [Project List](#project-list)
- [What I Learned](#what-i-learned)
- [Interesting Discoveries](#interesting-discoveries)
- [Challenges Faced](#challenges-faced)
- [How to Run Projects Locally](#how-to-run-projects-locally)
- [Project Highlight](#project-highlight)
- [Acknowledgments](#acknowledgments)

### Project List

- [Birthday Reminder](https://birthday-reminder-singh.netlify.app/)
- [Tours](https://tours-singh.netlify.app)
- [Reviews](https://reviews-singh.netlify.app/)
- [Accordion](https://accordion-singh.netlify.app/)
- [Menu](https://menu-singh.netlify.app/)
- [Tabs](https://tabs-singh.netlify.app/)
- [Slider](https://slider-singh.netlify.app/)
- [Lorem Ipsum Generator](https://dummy-text-generator-singh.netlify.app/)
- [Color Generator](https://color-generator-singh.netlify.app/)
- [Grocery Bud (Todo List)](https://grocery-bud-singh.netlify.app/)
- [Navbar](https://navbar1-singh.netlify.app/)
- [Sidebar & Modal](https://sidebar-modal-singh.netlify.app/)
- [Stripe Menu](https://stripe-submenu-singh.netlify.app/)
- [Shopping Cart](https://cart-singh.netlify.app/)
- [Siplore](https://siplore.netlify.app/)

### What I Learned

- As I embarked on the journey of building these 15 projects, I initially thought they were easy and somewhat trivial, mostly due to the simplicity of the initial projects meant for beginners. However, as I tackled more projects, I started discovering new techniques and more efficient ways to achieve the same results.

Throughout this journey, I learned about various topics such as

- Filtering,
- Extracting unique values from the Menu Project,
- Fetching data from URLs,
- Advanced usage of `useState` with function updates,
- Utilizing spread and ternary operators,
- Conditional rendering,
- Diving deeper into `useRef` (even for tasks like calculating the submenu's current position in the Navbar and Stripe Menu projects), etc.

While these learnings might seem basic, the highlights were certainly in my grasp of `useContext`, `useReducer`, `React Router`, and the optimization of rendering elements through effective component structure. Additionally, for the first time, I dabbled in `TypeScript` for the **Siplore** project, further expanding my skill set.

This journey not only granted me knowledge but also helped boost my confidence in building projects independently, debunking many self-doubts along the way.
Exploring [Axios](https://axios-http.com/) for API data retrieval was a pleasant surprise, as its simplicity outperformed even the built-in `fetch` API. In summary, this experience significantly expanded my understanding and self-assuredness for future projects.

### Interesting Discoveries

The most fascinating and unexpected insights emerged from projects like Menu, Shopping Cart, Siplore, Slider, and Stripe Menu. These included:

- Extracting unique values from data or arrays using ES6.
- Employing the `reduce` method to calculate total quantities and amounts.
- Implementing dynamic routing and router usage.
- Crafting smooth sliding animations for carousels and sliders.
- Crafting dynamic submenu content upon hover, leveraging concepts like `useRef` and `useContext`.

### Challenges Faced

- A notable challenge presented itself during the "Siplore" project. The API response provided instructions in string format, while I aimed to structure it into a point-by-point manner.
- My solution involved splitting the API response string into an array of points using periods as separators, then trimming each point to eliminate leading or trailing spaces. Empty elements resulting from splitting were subsequently filtered out. The code example is provided below:

```js
const Points = strInstructions.split(".").map((point) => point.trim());
const newInstruction = Points.filter((point) => point !== "");
```

## How to Run Projects Locally

All projects in this repository are built using React and Vite, with some projects incorporating TypeScript. Follow the steps below to run any project locally on your machine:

1. **Prerequisites:**

   - [Node.js](https://nodejs.org/) installed on your machine.
   - A code editor of your choice (e.g., Visual Studio Code).

2. **Clone the Repository:**

   Open a terminal and navigate to the directory where you want to store the projects. Then, clone this repository using the following command:

   ```
   git clone https://github.com/your-username/John-Smilga-React-Solutions.git
   ```

3. **Navigate to Project Directory:**

   Change into the directory of the specific project you want to run. For example, to run the Siplore" project, use:

   ```
   cd Siplore
   ```

4. **Install Dependencies:**

   Run the following command to install the project's dependencies:

   ```
   npm install
   ```

5. **Run the Project:**

   Start the development server using the command:

   ```
   npm run dev
   ```

   This will build the project and open it in your default web browser. Any changes you make to the code will automatically trigger a hot-reload.

6. **Access the Project:**

   Once the development server is up and running, you can access the project by visiting `http://localhost:3000` in your web browser.

7. **Stopping the Server:**

   To stop the development server, return to the terminal and press `Ctrl + C`.

8. **Repeat for Other Projects:**

   If you want to run a different project, navigate to its directory and repeat steps 4 to 7.

---

### Project Highlight

1. Siplore
   - Siplore is a website where users can search for cocktails and learn more details about each one. It draws its data from TheCocktailDB API.
   - The website comprises four pages: Home, About, Single Cocktail, and a not-found page.
   - Siplore features multiple themes for users to choose from.

Technologies and libraries used:

- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [Daisy UI](https://daisyui.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/en/main)

Key Features:

- Dynamic routes for each cocktail
- Multiple color themes

Mock ups:

<div align="center">
<img src="https://lh3.googleusercontent.com/pw/AIL4fc9d6W9xLvFeOzzOP5t_eqTMWLYydDyoj7XVlN4x74rTDWWY9iUEDokPP5VqpObqcQvVVVuXyfMyt2kR8sqN1J5qLMFm_a1SGtrXZqxQTIb-wkCQelKztfoE3O1SEhPxdfSxN4chRTPXeJ0q1QgpN-BH=w700-h525-s-no?authuser=0" alt="Mobile Mockup" />
</div>

<div align="center">
<img src="https://lh3.googleusercontent.com/pw/AIL4fc-ygwHfTAqxqI64493iXPIKsTzcPl8njU5XEDtRaMh1F3MaE_upRrmlJoKrL9hXyo_nFdtFUjbSvGWqPn5SbaeRN6dJSJTx8jcFYhXcvwatPfWBuj78szfl-nQoBm6fM0wVO0jtfn_gmaK0tzkgSz_r=w700-h525-s-no?authuser=0" alt="Desktop Mockup" />
</div>

### Acknowledgments

Special thanks to John Smiga for creating this tutorial series, which has been immensely beneficial to me.

### Contact Information

- Twitter - [SameerJS6](https://twitter.com/Sameerjs6)
