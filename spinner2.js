const elements = ['|   ','/    ','-    ','\\   ', '|   ' ];
let i = 100;

elements.forEach(function(element){
  setTimeout(() => {
    process.stdout.write(`\r${element}`);
  }, i);
  i = i + 200;
});
