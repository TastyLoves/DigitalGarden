const notes = {
  "2024-06-13": {
    "Repository Garden": ["file3.md", "file4.md"]
  },
  "20240620": ["file5.md", "file6.md"],
  "20240621": ["file7.md", "file8.md"],
  "Untitled": ["file9.md", "file10.md"],
  "Mainpage": ["file11.md", "file12.md"]
};

document.addEventListener("DOMContentLoaded", function() {
  const categoryDropdown = document.getElementById("category-dropdown");

  for (let category in notes) {
    let option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryDropdown.appendChild(option);
  }
});

function populateSubcategories() {
  const categoryDropdown = document.getElementById("category-dropdown");
  const subcategoryDropdown = document.getElementById("subcategory-dropdown");
  subcategoryDropdown.innerHTML = '<option value="">Select a subcategory</option>';

  const selectedCategory = categoryDropdown.value;
  const subcategories = notes[selectedCategory];

  if (typeof subcategories === 'object') {
    for (let subcategory in subcategories) {
      let option = document.createElement("option");
      option.value = subcategory;
      option.textContent = subcategory;
      subcategoryDropdown.appendChild(option);
    }
  } else {
    populateFiles();
  }
}

function populateFiles() {
  const categoryDropdown = document.getElementById("category-dropdown");
  const subcategoryDropdown = document.getElementById("subcategory-dropdown");
  const filesDropdown = document.getElementById("files-dropdown");
  filesDropdown.innerHTML = '<option value="">Select a file</option>';

  const selectedCategory = categoryDropdown.value;
  const selectedSubcategory = subcategoryDropdown.value;
  let files;

  if (selectedSubcategory) {
    files = notes[selectedCategory][selectedSubcategory];
  } else {
    files = notes[selectedCategory];
  }

  files.forEach(file => {
    let option = document.createElement("option");
    option.value = file;
    option.textContent = file;
    filesDropdown.appendChild(option);
  });
}
