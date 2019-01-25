const DemoModule = function(elem) {
  elem.addEventListener('click', () => {alert('I am a demo');});
  elem.style.border = "1px solid red";
};

export default DemoModule;