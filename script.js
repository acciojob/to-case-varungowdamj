function toCase(text) {
  // If the text is empty, return '-'
  if (text.length === 0) {
    return '-';
  }
  
  // Convert the text to lowercase and uppercase
  const lowerCaseText = text.toLowerCase();
  const upperCaseText = text.toUpperCase();
  
  // Concatenate the lowercase and uppercase texts with '-' in between
  return `${lowerCaseText}-${upperCaseText}`;
}

// Example usage (the code below is for demonstration and testing)
// You can use the prompt and alert functions for actual use
console.log(toCase('Mthatha'));       // Output: 'mthatha-MTHATHA'
console.log(toCase('HelloWorld'));    // Output: 'helloworld-HELLOWORLD'
console.log(toCase('OpenAI'));        // Output: 'openai-OPENAI'
console.log(toCase(''));              // Output: '-'

// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));