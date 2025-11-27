// task 1 onload
function pageLoaded() {
    console.log("Сторінка повністю завантажена (task 1)");
    alert("Лабораторна робота №7: Сторінка завантажена!");
}

// task 2
function headerClick(element) {
    element.style.color = element.style.color === 'red' ? 'inherit' : 'red';
    element.innerText += " (змінено)";
    alert("Спрацювала подія onclick на заголовку! (task 2)");
}

//  task 3
function runTask3(formId, outputId) {
    const form = document.getElementById(formId);
    const output = document.getElementById(outputId);
    
    if (!form) {
        alert("Форму не знайдено!");
        return;
    }

    let result = "Елементи поточної форми:\n";
    
    for (let i = 0; i < form.elements.length; i++) {
        let el = form.elements[i];
        
        result += `${i + 1}. Tag: ${el.tagName}, Type: ${el.type}, Name: ${el.name || 'noname'}, Value: ${el.value}\n`;
    }
    output.value = result;
}

//  task 5
function runTask5(inputId, outputId) {
    const text = document.getElementById(inputId).value;
    const output = document.getElementById(outputId);
    let result = "";

    // 5.1 
    const words = text.match(/[a-zA-Zа-яА-Яїієґ'ІЇЄҐ]+/g); 
    const wordCount = words ? words.length : 0;
    result += `5.1 Кількість слів: ${wordCount}\n`;

    // 5.3
    const digits = text.match(/\d/g);
    result += `5.3 Цифри: ${digits ? digits.join(', ') : 'немає'}\n`;

    // 5.4
    const integers = text.match(/-?\d+/g);
    result += `5.4 Цілі числа: ${integers ? integers.join(', ') : 'немає'}\n`;

    // 5.2.6
    const specificWords = text.match(/\bп[а-яієїґ']{0,}я\b/gi);
    result += `5.2.6 Слова (п...я): ${specificWords ? specificWords.join(', ') : 'немає'}\n`;

    output.value = result;
}

//  task 6
function runTask6(outputId) {
    
    const arr = [12, -5, 34, -100, -2, 0, 8, -50, 5]; 
    let maxNegative = -Infinity;
    let maxNegativeIndex = -1;
    let found = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            if (arr[i] > maxNegative) {
                maxNegative = arr[i];
                maxNegativeIndex = i;
                found = true;
            }
        }
    }

    const output = document.getElementById(outputId);
    let msg = `Вхідний масив: [${arr.join(', ')}]\n\n`;
    
    if (found) {
        msg += `Максимальний від'ємний елемент: ${maxNegative}\nЙого індекс: ${maxNegativeIndex}`;
    } else {
        msg += "У масиві немає від'ємних чисел.";
    }
    output.value = msg;
}