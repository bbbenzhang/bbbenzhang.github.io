function shuffle(array)
{
    for (let i = array.length - 1; i > 0; i--) 
    {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function sleep(ms) 
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

function toChineseNumber(n) {
    if (!Number.isInteger(n) && n < 0) {
      throw Error('请输入自然数');
    }
  
    const digits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    const positions = ['', '十', '百', '千', '万', '十万', '百万', '千万', '亿', '十亿', '百亿', '千亿'];
    const charArray = String(n).split('');
    let result = '';
    let prevIsZero = false;

    for (let i = 0; i < charArray.length; i++) {
      const ch = charArray[i];
      if (ch !== '0' && !prevIsZero) {
        result += digits[parseInt(ch)] + positions[charArray.length - i - 1];
      } else if (ch === '0') {
        prevIsZero = true;
      } else if (ch !== '0' && prevIsZero) {
        result += '零' + digits[parseInt(ch)] + positions[charArray.length - i - 1];
      }
    }

    if (n < 100) {
      result = result.replace('一十', '十');
    }
    return result;
  }

var running = false;
var names;

let button = document.getElementById("butt");
let textbox = document.getElementById("textbox");
let nametext = document.getElementById("name");
let numbertext = document.getElementById("number");

button.addEventListener("click", async (event)=>{
    if (running == false) 
    {
        names = textbox.value.split(",");
        let interval = Math.round(Number(document.getElementById("interval").value));
        let repeat = Math.round(Number(document.getElementById("repeat").value));
        
        if (names.length > 0 && interval && repeat) 
        {
            running = true;
            button.innerText="STOP";
            let i = 0;
            while (running && i < repeat){
                shuffle(names);
                let j = 1;
                for (const s of names)
                {
                    if (!running) break;
                    if (s == "") continue;
                    nametext.innerText = s;
                    numbertext.innerText = toChineseNumber(j);
                    await sleep(interval * 1000);
                    j += 1;
                }
                i += 1;
            }
            running = false;
            button.innerText = "START";
            nametext.innerText = "";
            numbertext.innerText = "";
        }
        
    }
    else 
    {
        running = false;
        button.innerText="START";
        nametext.innerText = "";
        numbertext.innerText = "";
    }
});


