// need to set up message form
import React from 'react'
import ReactDOM from 'react';

alert("Welcome to my website profile!");

function enlargeLink(link) {
    link.style.fontSize = "20px";
  }
  
  function shrinkLink(link) {
    link.style.fontSize = "16px";
  }

  // select the element
const header = document.querySelector('#link');

// change the text
header.textContent = 'Welcome to my Website!';
