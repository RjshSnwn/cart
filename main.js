// main.js

function expandBox(boxId) {
    // Hide all expanded content
    var expandedContents = document.querySelectorAll('.expandedContent');
    expandedContents.forEach(function (content) {
      content.style.display = 'none';
    });
  
    // Show the selected box's expanded content
    var selectedContent = document.getElementById(boxId);
    if (selectedContent) {
      selectedContent.style.display = 'block';
    }
  }
  