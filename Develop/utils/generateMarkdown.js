const fs = require("fs");

// Returns a license based on which is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](${renderLicenseLink(license)})`
  }
};

// Function to return license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://lbesson.mit-license.org/`
  }

  if (license === "GPLv3") {
      RETURN `http://perso.crans.org/besson/LICENSE.html`
  }

  if (license === "Apache") {
    return `https://www.apache.org/licenses/LICENSE-2.0.txt`
  }
};

// Function that returns the "License" section of the README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## License
    This project is licensed under the ${license} License - Click the button for more information.`
  }
};

// Function to generate the README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.licenses)}

  ## Table of Contents

  [Description](#description)

  [Installation](#installation)

  [Usage](#usage)

  [Questions](#questions)

  [Credits](#credits)

  [License](#license)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Questions
  Have questions? Contact me at:
  Email: ${data.email}
  Github: https://github.com/${data.github}

  ## Credits
  ${data.name}

  ${renderLicenseSection(data.licenses)}
`;
}

module.exports = generateMarkdown;
