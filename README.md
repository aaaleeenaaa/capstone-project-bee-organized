<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>
Bee organized
</h1>
<h3 align="center">📍 Bee Organized </h3>
<h3 align="center">🚀 Developed with the software and tools below:</h3>
<p align="center">

<img src="https://img.shields.io/badge/JSON-000000.svg?style=for-the-badge&logo=JSON&logoColor=white" alt="JSON" />
<img src="https://img.shields.io/badge/styledcomponents-DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white" alt="styledcomponents" />
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=for-the-badge&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style=for-the-badge&logo=Markdown&logoColor=white" alt="Markdown" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/SVG-FFB13B.svg?style=for-the-badge&logo=SVG&logoColor=black" alt="SVG" />
</p>
</div>

---

## 📚 Table of Contents

- [📚 Table of Contents](#-table-of-contents)
- [📍Overview](#-introdcution)
- [🔮 Features](#-features)
- [⚙️ Project Structure](#project-structure)
- [🧩 Modules](#modules)
- [🏎💨 Getting Started](#-getting-started)
- [🗺 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [🪪 License](#-license)
- [📫 Contact](#-contact)
- [🙏 Acknowledgments](#-acknowledgments)

---

## 📍Overview

The Capstone project "Bee organized" is a powerful tool that helps beekeepers manage their colonies and locations. It provides a variety of features, such as the ability to view, edit and delete locations and colonies, add general notes, create a to-do list, upload and manage images of bee colonies and view weather information. The user-friendly interface and intuitive design enable beekeepers to quickly and easily manage their colonies and locations, saving them time and effort. The project is an invaluable tool for beekeepers, providing a comprehensive solution for organizing their work.

---

## 🔮 Feautres

### Distinctive Features

1. **User-Centered Design:** The project makes use of user-centered design elements such as components that are designed with user preferences in mind, as well as a navigation bar that is fixed to the bottom of the page and responds to user clicks. Additionally, the project uses React, styled components, and hooks to create a seamless user experience.
2. **Styling:** The project makes use of styled components to create a consistent style for the entire project. These styles are defined in the styles.js script, and can be customized with props. The project also makes use of flexbox properties and shadow and text shadow effects for a subtle 3D effect.
3. **Data Storage:** The project uses the useLocalStorageState hook to store data in the browser, such as locations, colonies, todos, and dates for next colony checks. This allows users to access their data even when they are offline.
4. **Weather Data:** The project includes a weather page that fetches weather data from an external API and displays the minimum and maximum temperatures and the probability of rain for the next seven days. This is an important feature for beekeepers as some work is better not executed when too hot or cold or when it is raining.
5. **Image Upload:** The project includes an image upload form that allows users to upload images of bee colonies, which are stored in local storage.
6. **Colony Questions:** The project includes a form that captures information about colonies. It uses useLocalStorageState to save data, including a last and next colony check date, as well as questions about several other important aspects.
7. **Global Styling:** The project includes a global style for use with styled-components, setting a variety of colors as variables, as well as box-sizing and a font-family for the body.

---

<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-github-open.svg" width="80" />

## ⚙️ Project Structure

```bash
repo
├── README.md
├── components
│   ├── Card.js
│   ├── ColonyQuestions.js
│   ├── Form.js
│   ├── GeneralNotes.js
│   ├── ImageUpload.js
│   ├── Layout
│   │   ├── Header.js
│   │   ├── Layout.js
│   │   └── Navbar.js
│   ├── LocationList.js
│   ├── StyledButtons.js
│   ├── StyledCardElement.js
│   ├── StyledEditModal.js
│   ├── StyledFormElements.js
│   ├── StyledLinks.js
│   ├── StyledList.js
│   ├── StyledSections.js
│   └── ToDoList.js
├── jest.config.js
├── jest.setup.js
├── jsconfig.json
├── next.config.js
├── package-lock.json
├── package.json
├── pages
│   ├── _app.js
│   ├── _document.js
│   ├── addlocation.js
│   ├── addtodo.js
│   ├── api
│   │   └── weather.js
│   ├── colonydetail
│   │   └── [id].js
│   ├── index.js
│   ├── locationdetail
│   │   ├── [id].js
│   │   └── addcolony
│   │       └── [id].js
│   ├── overview.js
│   ├── todolist.js
│   └── weather.js
├── public
│   ├── Bee-icon.svg
│   └── favicon.ico
└── styles.js

9 directories, 39 files
```

---

<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-src-open.svg" width="80" />

## 💻 Modules

<details closed><summary>Addcolony</summary>

| File    | Summary                                                                                                                                                                                                                                                                                                     | Module                                 |
| :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------- |
| [id].js | This code script is an React component for adding a colony to a location. It imports Form and Router components and defines a handleSubmit function to rename the data and add the colony to the location. The Form component is then rendered with onSubmit and label props, as well as a locationId prop. | pages/locationdetail/addcolony/[id].js |

</details>

<details closed><summary>Api</summary>

| File       | Summary                                                                                                                                                                                                                                                                                | Module               |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------- |
| weather.js | This code script is responsible for fetching data from a weather API using the given location, and responding with either the data or an error message. It uses an async function (fetcher) to handle the fetch request, and handles errors by throwing an error with additional info. | pages/api/weather.js |

</details>

<details closed><summary>Colonydetail</summary>

| File    | Summary                                                                                                                                                                                                                                                                                                             | Module                     |
| :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------- |
| [id].js | This code script renders a page with information about a specific colony and allows for the upload of an image. It imports components for displaying the colony's details, creating a link to go back, and uploading an image. The page will display the colony's name, as well as questions related to the colony. | pages/colonydetail/[id].js |

</details>

<details closed><summary>Components</summary>

| File                  | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Module                           |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------- |
| StyledList.js         | This script imports the styled-components library and creates a StyledList component with a flexbox display, column orientation, centered alignment, and no padding.                                                                                                                                                                                                                                                                                                                                          | components/StyledList.js         |
| LocationList.js       | This code script allows users to view, edit, and delete locations. It imports components such as StyledSection, StyledFormContainer, and StyledLabel to create a StyledEditModal which contains a form to edit the location. The form is submitted and locations are updated accordingly. The FaRegEdit and TiDeleteOutline icons are used for the edit and delete buttons.                                                                                                                                   | components/LocationList.js       |
| GeneralNotes.js       | This code script imports two components,'StyledLabel' and'StyledTextArea', and uses a'useLocalStorageState' hook to save data in the browser. It renders a label and text area for users to enter general notes about a location or colony, and sets the notes in the local storage when they are entered.                                                                                                                                                                                                    | components/GeneralNotes.js       |
| ToDoList.js           | This code script creates a ToDo list with elements that have a checkbox for completion and a delete button. Each element is styled with text-decoration that changes based on completion status, and the list is created with a StyledList component.                                                                                                                                                                                                                                                         | components/ToDoList.js           |
| StyledCardElement.js  | This code script creates a card element with configurable width, display, flex direction, and padding, as well as a consistent margin, text alignment, and border radius. It also applies a box shadow for a subtle 3D effect.                                                                                                                                                                                                                                                                                | components/StyledCardElement.js  |
| StyledEditModal.js    | This code script imports the styled-components and react-modal libraries to create a StyledEditModal component with absolute positioning, centered dimensions, white background, padding, rounded corners, and a box shadow.                                                                                                                                                                                                                                                                                  | components/StyledEditModal.js    |
| ImageUpload.js        | This code script creates an image upload form that allows users to upload images, which are stored in local storage and associated with the currentColony. It also includes a delete button to remove the uploaded images.                                                                                                                                                                                                                                                                                    | components/ImageUpload.js        |
| StyledLinks.js        | This code script imports two components from'styled-components' and'next', and defines two styled link components that can be used in other components. One link has a fixed position and the other has a customizable margin. Hovering on the link will change the color and font-weight of the link.                                                                                                                                                                                                        | components/StyledLinks.js        |
| ColonyQuestions.js    | This code script defines a form that captures information about a current colony. It uses'useLocalStorageState' to save data, including a last and next colony check date, as well as questions about the colony's presence of stifte, königin, farbe der königin, bruträhmchen, drohnenrahmen, weisel, honigräume, aktueller honigraum, ameisensäure, and gefüttert. The script renders a GeneralNotes component as well as several StyledFormElements to allow users to input answers and view the results. | components/ColonyQuestions.js    |
| StyledSections.js     | This code script imports styled components and creates two styled sections with various flex properties to define the display, positioning, and alignment.                                                                                                                                                                                                                                                                                                                                                    | components/StyledSections.js     |
| Form.js               | This code script creates a form with an input field, label, and submit button, which utilizes React, various styled form elements, and an onSubmit callback. It also handles form submission and collects data from the form.                                                                                                                                                                                                                                                                                 | components/Form.js               |
| Card.js               | This code script imports a StyledCardElement component and returns a Card component which renders the text passed into it.                                                                                                                                                                                                                                                                                                                                                                                    | components/Card.js               |
| StyledButtons.js      | This code script defines three styled components: a SubmitButton, an EditDeleteButton, and a SearchButton. Each of these components has its own styling and can be customized with props.                                                                                                                                                                                                                                                                                                                     | components/StyledButtons.js      |
| StyledFormElements.js | This code script defines a set of styled components, such as labels, input fields, textareas, form containers, legends, and fieldsets, that allow users to customize various features such as font weight, margins, alignment, and padding.                                                                                                                                                                                                                                                                   | components/StyledFormElements.js |

</details>

<details closed><summary>Layout</summary>

| File      | Summary                                                                                                                                                                                                                                                                                                                                 | Module                      |
| :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------- |
| Layout.js | This code script imports the Header, styled components, Head, and NavBar components to create a Layout component that renders a Header, StyledMain, and NavBar.                                                                                                                                                                         | components/Layout/Layout.js |
| Navbar.js | This code script creates a navigation bar with four sections, each allowing access to a different page. It uses react-icons for visual icons, styled-components for styling, and use-local-storage-state for page tracking. The navigation bar is fixed to the bottom of the page and responds to user clicks, setting the active page. | components/Layout/Navbar.js |
| Header.js | This code script creates a header element that is positioned at the top of the page, with a bold font and a yellow background, and contains a Bee icon and text. It also applies styling to the logo image and the header element using Flexbox properties and shadow and text shadow effects.                                          | components/Layout/Header.js |

</details>

<details closed><summary>Locationdetail</summary>

| File    | Summary                                                                                                                                                                                                                                                                                                                                                                                                        | Module                       |
| :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------- |
| [id].js | This code script is for the LocationDetailsPage component, which allows the user to view, edit, and delete colonies in a given location. It imports components for creating links, sections, forms, and modals and uses the useRouter and useLocalStorageState hooks to store data. It handles the selection of colonies, form input, and submission of edited colonies, and sets up the deletion of colonies. | pages/locationdetail/[id].js |

</details>

<details closed><summary>Pages</summary>

| File           | Summary                                                                                                                                                                                                                                                                                                                                                                                                                    | Module               |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------- |
| addlocation.js | This code creates a React component which renders a form that enables the user to add a new location and redirects them to the homepage after submission. The data is renamed and passed through a function to the onAddLocation prop which handles the addition of the location.                                                                                                                                          | pages/addlocation.js |
| \_app.js       | This code script imports various components and uses the "useLocalStorageState" hook to store locations, colonies, todos, and nextColonyChecks. The script also defines a handleAddLocation, handleAddColony, and handleAddTodo function to add entries to the corresponding local storage states. Finally, the script renders a Layout component and a GlobalStyle component, and passes props to the provided Component. | pages/\_app.js       |
| todolist.js    | This code script is for a ToDoList page that allows users to view and manage their ToDo list, as well as delete upcoming colony checks from a list that is sorted by date. It includes components such as ToDoList, StyledLink, StyledSection, StyledRowSection, StyledEditDeleteButton, and TiDeleteOutline.                                                                                                              | pages/todolist.js    |
| addtodo.js     | This code script imports React, Form, and useRouter components to create a page that allows a user to add a new ToDo. The page includes a Form component that, upon submission, calls the onAddTodo function and redirects the user to the ToDoList page.                                                                                                                                                                  | pages/addtodo.js     |
| weather.js     | This code script provides a weather page for a given location. It fetches weather data from an API and displays the minimum and maximum temperatures and the probability of rain for the next seven days. It also provides an input box to enter a new location to view its weather.                                                                                                                                       | pages/weather.js     |
| index.js       | This code script renders a page with a list of locations and a link to add a new location. It imports the LocationList and StyledLink components and passes the'locations' and'setLocations' props to the LocationList component.                                                                                                                                                                                          | pages/index.js       |
| \_document.js  | This code script imports components from the "next/document" library and creates a custom document class to handle server-side styling. It uses a ServerStyleSheet to collect styles from the App component, then renders the HTML page with Head, Main and NextScript components.                                                                                                                                         | pages/\_document.js  |
| overview.js    | This code script displays a list of locations, each containing a list of colonies associated to it. It uses styled components to create the view for the page, which includes a styled link, section, card element, location and colony. The page renders with the locations and colonies, and clicking on one will take the user to the associated detail page.                                                           | pages/overview.js    |

</details>

<details closed><summary>Public</summary>

| File         | Summary                                                                                                                                                              | Module              |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------ |
| Bee-icon.svg | This code script creates an SVG (Scalable Vector Graphics) image of a bee, defined by a path of coordinates and styles, designed to be displayed in a 32x32 viewbox. | public/Bee-icon.svg |
| favicon.ico  | This code script attempts to decode a file that is either non-text or encoded in a format other than UTF-8, but is unable to do so.                                  | public/favicon.ico  |

</details>

<details closed><summary>Root</summary>

| File      | Summary                                                                                                                                                              | Module    |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- |
| styles.js | This script creates a global style for use with styled-components, setting a variety of colors as variables. It also sets box-sizing and a font-family for the body. | styles.js |

</details>

<hr />

## 🚀 Getting Started

### ✅ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:

> `[📌  INSERT-PROJECT-PREREQUISITES]`

### 💻 Installation

1. Clone the capstone-project-bee-organized repository:

```sh
git clone https://github.com/aaaleeenaaa/capstone-project-bee-organized
```

2. Change to the project directory:

```sh
cd capstone-project-bee-organized
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Using capstone-project-bee-organized

```sh
node app.js
```

### 🧪 Running Tests

```sh
#run tests
```

<hr />

## 🛠 Future Development

- [ ] [📌 implement the usage of a database]
- [ ] [📌 implement a user log-in]

---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:

1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).

```sh
git checkout -b new-feature-branch
```

4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.

```sh
git commit -m 'Implemented new feature.'
```

6. Push your changes to your forked repository on GitHub using the following command

```sh
git push origin new-feature-branch
```

7. Create a pull request to the original repository.
   Open a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
   The project maintainers will review your changes and provide feedback or merge them into the main branch.

---
