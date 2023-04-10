const operationBtn = document.querySelectorAll('.operation');
const numberBtn = document.querySelectorAll('.number');
const result = document.querySelector('h1');
const span = document.querySelector('span');

let operation = undefined;
let valoranterior = 0;
let valoractual = 0;

operationBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        switch(btn.textContent){
            case '←':
                if(span.textContent.length === 1){
                    span.textContent = '0';
                }else{
                    span.textContent = span.textContent.slice(0, -1);   
                }
                break;

            case 'C':
                span.textContent = '0';
                result.textContent = '0';
                operation = undefined;
                valoractual = 0;
                break;

            case 'ON':
                span.textContent = '0';
                result.textContent = '0';
                span.style.opacity = '1';
                result.style.opacity = '1';
                operation = undefined;
                valoractual = 0;
                break;

            case 'OFF':
                span.style.opacity = '0';
                result.style.opacity = '0';
                break;

            case ' = ':
                valoractual = eval(span.textContent);
                result.textContent = valoractual;
                span.textContent = '0';
                break;  

            case '+':
                if(result.textContent === '0'){
                    span.textContent += ' + ';
                }else{                    
                    span.textContent = `${result.textContent} + `;
                }
                break;

            case '-':
                if(result.textContent === '0'){
                    span.textContent += ' - ';
                }else{                    
                    span.textContent = `${result.textContent} - `;
                }
                break;

            case 'x':
                if(result.textContent === '0'){
                    span.textContent += ' * ';
                }else{                    
                    span.textContent = `${result.textContent} * `;
                }
                break;

            case '/':
                if(result.textContent === '0'){
                    span.textContent += ' / ';
                }else{                    
                    span.textContent = `${result.textContent} / `;
                }
                break;
        }
    })
})

numberBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.textContent === '.' && span.textContent.includes('.')){
            return;
        }

        if(span.textContent === '0'){
            span.textContent = btn.textContent;
        }else{
            span.textContent += btn.textContent;
        }
    })
})


