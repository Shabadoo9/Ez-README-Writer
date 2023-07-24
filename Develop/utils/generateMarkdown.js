// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  } else {
    return ''; // Return an empty string for other licenses or if no license is provided
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'ISC') {
    return 'https://opensource.org/licenses/ISC';
  } else {
    return ''; // Return an empty string for other licenses or if no license is provided
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  if (badge && link) {
    return `## License\n\n${badge}\n\nThis project is licensed under the [${license}](${link}) license.`;
  } else {
    return ''; // Return an empty string for other licenses or if no license is provided
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);

  return `${licenseSection}`;
}

module.exports = generateMarkdown;
