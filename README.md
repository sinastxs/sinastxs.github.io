# DealList public website

Static GitHub Pages site at https://deallist.ca/. Keep CNAME, app-ads.txt, verification files and the contact page intact.

The homepage introduces the iOS experience. The interactive demo uses only fictional, locally defined examples and does not contact production APIs, generate AI responses, collect user input or persist shopping lists. Search supports eggs, milk and chicken; exact aliases avoid matching processed foods. All demo prices are CAD. Quantity references are illustrative, not official statistical observations.

The edited app illustrations under assets/demo use fictional retailers and generic product imagery. They are labelled as demonstrations; source/month labels inside the reference screenshot are retained from the original app capture. These assets are website illustrations, not unmodified App Store screenshots. Original assets and old recordings are retained in the repository, but are not embedded on the homepage.

The old Android store call-to-action was removed from the homepage. This presentation change does not change product availability or third-party content permissions. Partnership inquiries should accurately describe actual distribution and data use.

No build step or package installation is required. Serve this directory with a static server for local preview. index.html loads demo.js and demo-core.mjs as browser modules. Publication follows this repository's existing GitHub Pages deployment on main.
