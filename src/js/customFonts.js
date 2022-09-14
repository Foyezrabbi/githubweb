const wingdingsCharMap = {
    "0": "📁︎",
    "1": "📂︎",
    "2": "📄︎",
    "3": "🗏︎",
    "4": "🗐︎",
    "5": "🗄︎",
    "6": "⌛︎",
    "7": "🖮︎",
    "8": "🖰︎",
    "9": "🖲︎",
    "!": "✏︎",
    "\"": "✂︎",
    "#": "✁︎",
    "$": "👓︎",
    "%": "🕭︎",
    "&": "🕮︎",
    "'": "🕯︎",
    "(": "🕿︎",
    ")": "✆︎",
    "*": "🖂︎",
    "+": "🖃︎",
    ",": "📪︎",
    "-": "📫︎",
    ".": "📬︎",
    "/": "📭︎",
    ":": "🖳︎",
    ";": "🖴︎",
    "<": "🖫︎",
    "=": "🖬︎",
    ">": "✇︎",
    "?": "✍︎",
    "A": "✌︎",
    "B": "👌︎",
    "C": "👍︎",
    "D": "👎︎",
    "E": "☜︎",
    "F": "☞︎",
    "G": "☝︎",
    "H": "☟︎",
    "I": "✋︎",
    "J": "☺︎",
    "K": "😐︎",
    "L": "☹︎",
    "M": "💣︎",
    "N": "☠︎",
    "O": "⚐︎",
    "P": "🏱︎",
    "Q": "✈︎",
    "R": "☼︎",
    "S": "💧︎",
    "T": "❄︎",
    "U": "🕆︎",
    "V": "✞︎",
    "W": "🕈︎",
    "X": "✠︎",
    "Y": "✡︎",
    "Z": "☪︎",
    "[": "☯︎",
    "\\": "ॐ︎",
    "]": "☸︎",
    "^": "♈︎",
    "_": "♉︎",
    "`": "♊︎",
    "a": "♋︎",
    "b": "♌︎",
    "c": "♍︎",
    "d": "♎︎",
    "e": "♏︎",
    "f": "♐︎",
    "g": "♑︎",
    "h": "♒︎",
    "i": "♓︎",
    "j": "🙰",
    "k": "🙵",
    "l": "●︎",
    "m": "❍︎",
    "n": "■︎",
    "o": "□︎",
    "p": "◻︎",
    "q": "❑︎",
    "r": "❒︎",
    "s": "⬧︎",
    "t": "⧫︎",
    "u": "◆︎",
    "v": "❖︎",
    "w": "⬥︎",
    "x": "⌧︎",
    "y": "⍓︎",
    "z": "⌘︎",
    "{": "❀︎",
    "|": "✿︎",
    "}": "❝︎",
    "~": "❞︎",
    "": "▯︎",
    "€": "⓪︎",
    "": "①︎",
    "‚": "②︎",
    "ƒ": "③︎",
    "„": "④︎",
    "…": "⑤︎",
    "†": "⑥︎",
    "‡": "⑦︎",
    "ˆ": "⑧︎",
    "‰": "⑨︎",
    "Š": "⑩︎",
    "‹": "⓿︎",
    "Œ": "❶︎",
    "": "❷︎",
    "Ž": "❸︎",
    "": "❹︎",
    "": "❺︎",
    "‘": "❻︎",
    "’": "❼︎",
    "“": "❽︎",
    "”": "❾︎",
    "•": "❿︎",
    "–": "◻︎",
    "—": "◻︎",
    "˜": "◻︎",
    "™": "◻︎",
    "š": "◻︎",
    "›": "◻︎",
    "œ": "◻︎",
    "": "◻︎",
    "ž": "·︎",
    "Ÿ": "•︎",
    "¡": "○︎",
    "¢": "⭕︎",
    "£": "◻︎",
    "¤": "◉︎",
    "¥": "◎︎",
    "¦": "◻︎",
    "§": "▪︎",
    "¨": "◻︎",
    "©": "◻︎",
    "ª": "✦︎",
    "«": "★︎",
    "¬": "✶︎",
    "®": "✹︎",
    "¯": "✵︎",
    "°": "◻︎",
    "±": "⌖︎",
    "²": "⟡︎",
    "³": "⌑︎",
    "´": "◻︎",
    "µ": "✪︎",
    "¶": "✰︎",
    "·": "🕐︎",
    "¸": "🕑︎",
    "¹": "🕒︎",
    "º": "🕓︎",
    "»": "🕔︎",
    "¼": "🕕︎",
    "½": "🕖︎",
    "¾": "🕗︎",
    "¿": "🕘︎",
    "À": "🕙︎",
    "Á": "🕚︎",
    "Â": "🕛︎",
    "Ã": "◻︎",
    "Ä": "◻︎",
    "Å": "◻︎",
    "Æ": "◻︎",
    "Ç": "◻︎",
    "È": "◻︎",
    "É": "◻︎",
    "Ê": "◻︎",
    "Ë": "◻︎",
    "Ì": "◻︎",
    "Í": "◻︎",
    "Î": "◻︎",
    "Ï": "◻︎",
    "Ð": "◻︎",
    "Ñ": "◻︎",
    "Ò": "◻︎",
    "Ó": "◻︎",
    "Ô": "◻︎",
    "Õ": "⌫︎",
    "Ö": "⌦︎",
    "×": "◻︎",
    "Ø": "➢︎",
    "Ù": "◻︎",
    "Ú": "◻︎",
    "Û": "◻︎",
    "Ü": "➲︎",
    "Ý": "◻︎",
    "Þ": "◻︎",
    "ß": "◻︎",
    "à": "◻︎",
    "á": "◻︎",
    "â": "◻︎",
    "ã": "◻︎",
    "ä": "◻︎",
    "å": "◻︎",
    "æ": "◻︎",
    "ç": "◻︎",
    "è": "➔︎",
    "é": "◻︎",
    "ê": "◻︎",
    "ë": "◻︎",
    "ì": "◻︎",
    "í": "◻︎",
    "î": "◻︎",
    "ï": "⇦︎",
    "ð": "⇨︎",
    "ñ": "⇧︎",
    "ò": "⇩︎",
    "ó": "⬄︎",
    "ô": "⇳︎",
    "õ": "⬀︎",
    "ö": "⬁︎",
    "÷": "⬃︎",
    "ø": "⬂︎",
    "ù": "▭︎",
    "ú": "▫︎",
    "û": "✗︎",
    "ü": "✓︎",
    "ý": "☒︎",
    "þ": "☑︎",
    "ÿ": "◻︎"
};

function wingdings(text) {
    return text.split("").map(function (a) {
        return wingdingsCharMap[a] ? wingdingsCharMap[a] : a
    }).join("");
}

const vaporwaveCharMap = {
    " ": "　",
    "`": "`",
    "1": "１",
    "2": "２",
    "3": "３",
    "4": "４",
    "5": "５",
    "6": "６",
    "7": "７",
    "8": "８",
    "9": "９",
    "0": "０",
    "-": "－",
    "=": "＝",
    "~": "~",
    "!": "！",
    "@": "＠",
    "#": "＃",
    "$": "＄",
    "%": "％",
    "^": "^",
    "&": "＆",
    "*": "＊",
    "(": "（",
    ")": "）",
    "_": "_",
    "+": "＋",
    "q": "ｑ",
    "w": "ｗ",
    "e": "ｅ",
    "r": "ｒ",
    "t": "ｔ",
    "y": "ｙ",
    "u": "ｕ",
    "i": "ｉ",
    "o": "ｏ",
    "p": "ｐ",
    "[": "[",
    "]": "]",
    "\\": "\\",
    "Q": "Ｑ",
    "W": "Ｗ",
    "E": "Ｅ",
    "R": "Ｒ",
    "T": "Ｔ",
    "Y": "Ｙ",
    "U": "Ｕ",
    "I": "Ｉ",
    "O": "Ｏ",
    "P": "Ｐ",
    "{": "{",
    "}": "}",
    "|": "|",
    "a": "ａ",
    "s": "ｓ",
    "d": "ｄ",
    "f": "ｆ",
    "g": "ｇ",
    "h": "ｈ",
    "j": "ｊ",
    "k": "ｋ",
    "l": "ｌ",
    ";": "；",
    "'": "＇",
    "A": "Ａ",
    "S": "Ｓ",
    "D": "Ｄ",
    "F": "Ｆ",
    "G": "Ｇ",
    "H": "Ｈ",
    "J": "Ｊ",
    "K": "Ｋ",
    "L": "Ｌ",
    ":": "：",
    "\"": "\"",
    "z": "ｚ",
    "x": "ｘ",
    "c": "ｃ",
    "v": "ｖ",
    "b": "ｂ",
    "n": "ｎ",
    "m": "ｍ",
    ",": "，",
    ".": "．",
    "/": "／",
    "Z": "Ｚ",
    "X": "Ｘ",
    "C": "Ｃ",
    "V": "Ｖ",
    "B": "Ｂ",
    "N": "Ｎ",
    "M": "Ｍ",
    "<": "<",
    ">": ">",
    "?": "？"
};

function vaporwaveText(text) {
    var numSpaces = text.split(" ").length;
    text = applyCharMap(vaporwaveCharMap, text);
    var asianChars = getAsianChars(Math.max(3, numSpaces));
    if (numSpaces > 6) asianChars = asianChars.split("").map(c => c + ["", "　"][Math.round(Math.random() * 0.6)]).join("");
    var outputs = [];
    outputs.push(text + "　" + asianChars);
    outputs.push(text.replace(/　/g, "░").replace(/ａｅ/, "æ").replace(/Ａ/g, "Λ").replace(/Ｅ/g, function () {
        return Math.random() > 0.5 ? "Ξ" : "Σ";
    }).replace(/Ｏ/g, "♢") + "　（" + asianChars + "）");
    outputs.push("【﻿" + text + "】");
    return outputs;
}

function getAsianChars(n) {
    if (!n) n = 1;
    var chars = "リサフランク現代のコンピュ竹内 まりや若者が履く流行のスニーカー真夜中のドアホットドッグマスターストライカーソニーブギ新しい日の誕生ライフ - ヒスイ蒸気波 無線゠ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺ・ーヽヾヿぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖ゙゚゛゜ゝゞゟ亜哀挨愛曖悪握圧扱宛嵐安案暗以衣位囲医依委威為畏胃尉異移萎偉椅彙意違維慰遺緯域育壱逸茨芋引印因咽姻員院淫陰飲隠韻右宇羽雨唄鬱畝浦運雲永泳英映栄営詠影鋭衛易疫益液駅悦越謁閲円延沿炎怨宴媛援園煙猿遠鉛塩演縁艶汚王凹央応往押旺欧殴桜翁奥横岡屋億憶臆虞乙俺卸音恩温穏下化火加可仮何花佳価果河苛科";
    var str = "";
    for (var i = 0; i < n; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}


const flourishArray = ["★·.·´¯`·.·★ [[text]] ★·.·´¯`·.·★", "▁ ▂ ▄ ▅ ▆ ▇ █ [[text]] █ ▇ ▆ ▅ ▄ ▂ ▁", "°°°·.°·..·°¯°·._.· [[text]] ·._.·°¯°·.·° .·°°°", "¸,ø¤º°`°º¤ø,¸¸,ø¤º° [[text]] °º¤ø,¸¸,ø¤º°`°º¤ø,¸", "ıllıllı [[text]] ıllıllı", "•?((¯°·._.• [[text]] •._.·°¯))؟•", "▌│█║▌║▌║ [[text]] ║▌║▌║█│▌", "×º°”˜`”°º× [[text]] ×º°”˜`”°º×", "•]••´º´•» [[text]] «•´º´••[•", "*•.¸♡ [[text]] ♡¸.•*", "╰☆☆ [[text]] ☆☆╮", ".•°¤*(¯`★´¯)*¤° [[text]] °¤*(¯´★`¯)*¤°•.", "(¯´•._.• [[text]] •._.•´¯)", "¸„.-•~¹°”ˆ˜¨ [[text]] ¨˜ˆ”°¹~•-.„¸", "░▒▓█ [[text]] █▓▒░", "░▒▓█►─═  [[text]] ═─◄█▓▒░", "★彡 [[text]] 彡★", "•´¯`•. [[text]] .•´¯`•", "§.•´¨'°÷•..× [[text]] ×,.•´¨'°÷•..§", "•°¯`•• [[text]] ••´¯°•", "(¯`*•.¸,¤°´✿.｡.:* [[text]] *.:｡.✿`°¤,¸.•*´¯)", "|!¤*'~``~'*¤!| [[text]] |!¤*'~``~'*¤!|", "•._.••´¯``•.¸¸.•` [[text]] `•.¸¸.•´´¯`••._.•", "¸„.-•~¹°”ˆ˜¨ [[text]] ¨˜ˆ”°¹~•-.„¸", "(¯´•._.• [[text]] •._.•´¯)", "••¤(`×[¤ [[text]] ¤]×´)¤••", "•´¯`•» [[text]] «•´¯`•", " .o0×X×0o. [[text]] .o0×X×0o.", "¤¸¸.•´¯`•¸¸.•..>> [[text]] <<..•.¸¸•´¯`•.¸¸¤", "—(••÷[ [[text]] ]÷••)—", "¸,ø¤º°`°º¤ø,¸ [[text]] ¸,ø¤º°`°º¤ø,¸", "`•.¸¸.•´´¯`••._.• [[text]] •._.••`¯´´•.¸¸.•`", ",-*' ^ '~*-.,_,.-*~ [[text]] ~*-.,_,.-*~' ^ '*-,", "`•.,¸¸,.•´¯ [[text]] ¯`•.,¸¸,.•´", "↤↤↤↤↤ [[text]] ↦↦↦↦↦", "➶➶➶➶➶ [[text]] ➷➷➷➷➷", "↫↫↫↫↫ [[text]] ↬↬↬↬↬", "·.¸¸.·♩♪♫ [[text]] ♫♪♩·.¸¸.·", "【｡_｡】 [[text]] 【｡_｡】", "]|I{•------» [[text]] «------•}I|[", "▀▄▀▄▀▄ [[text]] ▄▀▄▀▄▀", "(-_-) [[text]] (-_-)", "•´¯`•. [[text]] .•´¯`•", "-漫~*'¨¯¨'*·舞~ [[text]] ~舞*'¨¯¨'*·~漫-", "๑۞๑,¸¸,ø¤º°`°๑۩ [[text]] ๑۩ ,¸¸,ø¤º°`°๑۞๑", ".•°¤*(¯`★´¯)*¤° [[text]] °¤*(¯´★`¯)*¤°•.", "••.•´¯`•.•• [[text]] ••.•´¯`•.••", "¤¸¸.•´¯`•¸¸.•..>> [[text]] <<..•.¸¸•´¯`•.¸¸¤", "◦•●◉✿ [[text]] ✿◉●•◦", "╚»★«╝ [[text]] ╚»★«╝", "-·=»‡«=·- [[text]] -·=»‡«=·-", "∙∙·▫▫ᵒᴼᵒ▫ₒₒ▫ᵒᴼᵒ▫ₒₒ▫ᵒᴼᵒ [[text]] ᵒᴼᵒ▫ₒₒ▫ᵒᴼᵒ▫ₒₒ▫ᵒᴼᵒ▫▫·∙∙", "¸¸♬·¯·♩¸¸♪·¯·♫¸¸ [[text]] ¸¸♫·¯·♪¸¸♩·¯·♬¸¸", "ஜ۩۞۩ஜ [[text]] ஜ۩۞۩ஜ", "¤ (¯´☆✭.¸_)¤ [[text]] ¤(_¸.✭☆´¯) ¤", "(¯`·.¸¸.·´¯`·.¸¸.-> [[text]] <-.¸¸.·´¯`·.¸¸.·´¯)", "✿.｡.:* ☆:**:. [[text]] .:**:.☆*.:｡.✿", ".•♫•♬• [[text]] •♬•♫•.", "ღ(¯`◕‿◕´¯) ♫ ♪ ♫ [[text]] ♫ ♪ ♫ (¯`◕‿◕´¯)ღ", "«-(¯`v´¯)-« [[text]] »-(¯`v´¯)-»"];

function wrapInFlourish(text) {
    return flourishArray[Math.floor(Math.random() * flourishArray.length)].replace("[[text]]", text);
}

function wrapInSymbols(text, number) {
    return randomSymbols(number) + "  " + text + "  " + randomSymbols(number)
}



function firework(text) {
    return text.split("").join("҉") + "҉";
}




function weirdBox(text) {
    return text.replace(/([^\s])/g, "[̲̅$1]");
}




function littleSparkles(text) {
    return "˜”*°•.˜”*°• " + text + " •°*”˜.•°*”˜";
}




function kirbyHug(text) {
    return "(っ◔◡◔)っ ♥ " + text + " ♥"
}




function dottyJoiner(text) {
    return "░" + text.split("").join("░") + "░";
}




function wavyJoiner(text) {
    return "≋" + text.split("").join("≋") + "≋";
}




function diametricAngleFrame(text) {
    return text.replace(/([^\s])/g, "『$1』");
}




function thickBlockFramed(text) {
    return text.replace(/([^\s])/g, "【$1】");
}

function applyCharMap(map, text) {
    let out = "";
    for (let c of text.split("")) {
        if (map[c] !== undefined) out += map[c];
        else if (map[c.toLowerCase()] !== undefined) out += map[c.toLowerCase()];
        else out += c;
    }
    return out;
}


//    == ==== == = = = = == = ==  = = = = = Cute Text =++ =+ = == + == === =+ =+ ==+= =+ === +

function cuteText(text) {
    if(text.trim() === "") return "";
    qi = -1;
    var bounds = boundingString(Math.floor(Math.random()*2)+1);
    return bounds + "  🎀  " + text.split(/([!?.]+)/gi).map(cuteSentence).join("") + "  🎀  " + esrever.reverse(bounds);
  }
  function cuteSentence(sentence) {
    return sentence.split(/([\s,]+)/gi).map(cuteWord).join("");
  }
  function cuteWord(word) {
    //remember to handle exclamations, empty strings, commas etc. etc.!!
    if(word === "" || /[[!?.\s,]+]/gi.test(word)) return word;
    //TODO: random turn o's into flowers, turn quotes into unicode and ! and ?
    word = roundReplace(word);
    word = punctReplace(word);
    word = emojiReplace(word);
    return scriptify(word);
  }
  var qi = -1;
  var qa = ["❝","❞"];
  function quotes() {
    qi++;
    if(qi === 2) qi = 0;
    return qa[qi];
  }
  function punctReplace(word) {
    return word.split("")
      .map(function(a) {
        if(a === "!") return randomElement(["❣","❢"]);
        else if(a === "?") return randomElement(["¿","?"]);
        else if(a === "\"") return quotes();
        else return a;
      }).join("");
  }
  function emojiReplace(word) {
    return word
    .replace(":)", randomElement(emoji[":)"]))
    .replace("(:", randomElement(emoji[":)"]))
    .replace("^^", randomElement(emoji["^^"]))
    .replace(":P", randomElement(emoji[":p"]))
    .replace(":p", randomElement(emoji[":p"]))
    .replace(":D", randomElement(emoji[":D"]))
    .replace("<3", randomElement(emoji["<3"]))
    .replace("(y)", randomElement(emoji["(y)"]))
    .replace("(Y)", randomElement(emoji["(y)"]));
  }
  function roundReplace(text) {
    return text.split("").map(function(a) { if(a.toLowerCase() === "o" || a === "0") { return randomElement(round); } else { return a; } }).join("");
  }
  var emoji = {
    ":)" : ["٩(˘◡˘)۶","(•◡•)","(ɔ◔‿◔)ɔ","❀◕‿◕❀","(｡◕‿◕｡)","●‿●","◕‿◕","😍","ツ","(✿ヘᴥヘ)","🌘‿🌘","(づ｡◕‿‿◕｡)づ","(/◔◡◔)/","s(^‿^)-b","(人◕‿◕)","(✿╹◡╹)","◔◡◔"],
    "^^" : ["(^▽^)","(✿^▽^)","ᵔ⌣ᵔ","ᵔᴥᵔ","(≧◡≦)","^ㅅ^","^ㅂ^","(⌒‿⌒)","◠◡◠","⁀‿⁀",""],
    ":p" : [":Þ",""],
    ":D" : ["(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧","(✿◕ᗜ◕)━♫.*･｡ﾟ","ᕕ(ᐛ)ᕗ"],
    "<3" : ["♡","❤","♥","❥","💘","💙","💗","💖","💕","💓","💞","💝","💟"],
    "(y)" : ["👍","👌"],
  };
  var round = ["❁","🌺","❀","💮","🏵","🌸","☯","😍","♡","🍩","🍬","💙","🌞","💍","🍪","❤","💗","🍑","💞"];
  var food = ["🍬","🍭","🍒","🍎","🍉","🍇","🍓","🍌","🍑","🍰","🎂","🍩","🍪","🍧","🍦","🍫","🍡"];
  var flowers = ["✿","⚘","❦","❧","✾","❁","❀","💐","🌸","💮","🏵","🌹","🌺","🌻","🌷","☘","🌱","🌲","🌳","🌴","🌿","🍂"];
  var twinkles = ["⚛","🌌","🌠","*",":","｡","･ﾟ","✧","✮","★","✩","⋆",".","°","`","✴","｡","✴","⋆","✳","✶","✷","❈"];
  var animals = ["🐯","🐎","🐖","🐷","🐏","🐑","🐐","🐫","🐘","🐭","🐁","🐀","🐹","🐰","🐇","🐿","🐻","🐨","🐼","🐾","🐔","🐓","🐣","🐤","🐥","🐦","🐧","🕊","🐸","🐢","🐳","🐋","🐬","🐟","🐠","🐡","🐙","🐚","🐌","🐞"];
  var plants = ["✿","⚘","❦","❧","✾","❁","❀","💐","🌸","💮","🏵","🌹","🌺","🌻","🌷","☘","🌱","🌲","🌳","🌴","🌿","🍂"];
  var misc = ["🌌","🌠","🎉","🎊","🎈","💌","🎎","🎁","🎀","🕯","🔮","🛀","🎖","🏆","🏅","👑","💍","👶","👼","👸","👯","👒","👻"];
  var music = ["♫","♬","♪","♩","°","｡","✧","🎻","🎺","🎸","🎷","📯"];
  var flourish = ["•?((¯°·._.• ","ıllıllı ","¸,ø¤º°`°º¤ø,¸¸,ø¤º° ","°°°·.°·..·°¯°·._.· ","•´¯`•. ","×º°”˜`”°º× ","•]••´º´•» ","]|I{•------» ","§.•´¨'°÷•..× ","•°¯`•• ","(¯`·.¸¸.·´¯`·.¸¸.-> ","*´¯`*.¸¸.*´¯`* ","(¯`·.¸¸.-> °º ","°·.¸.·°¯°·.¸.·°¯°·.¸.-> ","•._.••´¯``•.¸¸.•` ","¸„.-•~¹°”ˆ˜¨ ","(¯´•._.• ","••¤(`×","•´¯`•» ","`•.,¸¸,.•´¯ ","¸,ø¤º°`°º¤ø,¸ ",".o0×X×0o. ",",-*'^'~*-.,_,.-*~ ","`•.¸¸.•´´¯`••._.• ","—(••÷","¤¸¸.•´¯`•¸¸.•..>> ","••.•´¯`•.•• ",".•°¤*(¯`★´¯)*¤° ","๑۞๑,¸¸,ø¤º°`°๑۩ ","-漫~*'¨¯¨'*·舞~ ","★·.·´¯`·.·★ ","▁ ▂ ▄ ▅ ▆ ▇ █ ","▀▄▀▄▀▄ ","▌│█║▌║▌║ "];
  function boundingString(n) {
    return randomElement([foodString,twinkleString,animalString,flourishString])(n);
  }
  function foodString(n) {
    return new Array(n+1).join('0').split('').map(function(a){ return randomElement(food); }).join(' ⋆ ');
  }
  function twinkleString(n) {
    return new Array(n+1).join('0').split('').map(function(){ return randomElement(twinkles); }).join("");
  }
  function animalString(n) {
    return new Array(n+1).join('0').split('').map(function(a){ return randomElement(animals); }).join(' ⋆ ');
  }
  function flourishString(n) {
    return randomElement(flourish);
  }
  function scriptify(text) {
    var map = {"0":"𝟢","1":"𝟣","2":"𝟤","3":"𝟥","4":"𝟦","5":"𝟧","6":"𝟨","7":"𝟩","8":"𝟪","9":"𝟫","a":"𝒶","b":"𝒷","c":"𝒸","d":"𝒹","e":"𝑒","f":"𝒻","g":"𝑔","h":"𝒽","i":"𝒾","j":"𝒿","k":"𝓀","l":"𝓁","m":"𝓂","n":"𝓃","o":"𝑜","p":"𝓅","q":"𝓆","r":"𝓇","s":"𝓈","t":"𝓉","u":"𝓊","v":"𝓋","w":"𝓌","x":"𝓍","y":"𝓎","z":"𝓏","A":"𝒜","B":"𝐵","C":"𝒞","D":"𝒟","E":"𝐸","F":"𝐹","G":"𝒢","H":"𝐻","I":"𝐼","J":"𝒥","K":"𝒦","L":"𝐿","M":"𝑀","N":"𝒩","O":"𝒪","P":"𝒫","Q":"𝒬","R":"𝑅","S":"𝒮","T":"𝒯","U":"𝒰","V":"𝒱","W":"𝒲","X":"𝒳","Y":"𝒴","Z":"𝒵"};
    var charArray = text.split("");
    for(var i = 0; i < charArray.length; i++) {
      if( map[charArray[i].toLowerCase()] ) {
        charArray[i] = map[charArray[i]];
      }
    }
    text = charArray.join("");
    return text;
  }
  function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  function randomElement(a) {
    return a[Math.floor(Math.random()*a.length)];
  }
  //https://github.com/mathiasbynens/esrever
  !function(e){var o="object"==typeof exports&&exports,r="object"==typeof module&&module&&module.exports==o&&module,n="object"==typeof global&&global;(n.global===n||n.window===n)&&(e=n);var t=/(<%= allExceptCombiningMarks %>)(<%= combiningMarks %>+)/g,i=/([\uD800-\uDBFF])([\uDC00-\uDFFF])/g,f=function(e){e=e.replace(t,function(e,o,r){return f(r)+o}).replace(i,"$2$1");for(var o="",r=e.length;r--;)o+=e.charAt(r);return o},l={version:"<%= version %>",reverse:f};if("function"==typeof define&&"object"==typeof define.amd&&define.amd)define(function(){return l});else if(o&&!o.nodeType)if(r)r.exports=l;else for(var a in l)l.hasOwnProperty(a)&&(o[a]=l[a]);else e.esrever=l}(this);


//    == ==== == = = = = == = ==  = = = = = Crazy Text =++ =+ = == + == === =+ =+ ==+= =+ === +

function fullCrazy(text) {
    if(text.trim() === "") return "";
    return randomSymbols(2) +"  "+ crazifyText(text) +"  "+ randomSymbols(2)
  }
  function crazifyText(text) {
    text = text.split("");
    for(var i = 0; i < text.length; i++) { text[i] =  crazifyCharacter(text[i]); }
    return text.join("");
  }
  function crazifyCharacter(c) {
    c = c.toLowerCase();
    var map = {"&":"⅋","%":["⅍","℀","℁","℆","℅"],"0":["０","Ѳ","ʘ"],"1":["➀","❶","１"],"2":["２","❷","➁"],"3":["３","❸","➂"],"4":["４","❹","➃"],"5":["❺","➄","５"],"6":["６","❻","➅"],"7":["７","❼","➆"],"8":["８","➇","❽"],"9":["➈","❾","９"],"<":["≼","≺","≪","☾","≾","⋜","⋞","⋐","⊂","⊏","⊑","《","＜","❮","❰","⫷"],">":"☽≫≻≽≿⋝⋟⋑⊃⊐⊒⫸》＞❯❱","[":"【〖〘〚［","]":"】〗〙〛］","*":"✨✩✪✫✬✭✮✯✰✦✱✲✳✴✵✶✷֍֎✸✹✺✻✼✽✾✿❀❁❂❃❄★☆＊","a":["Ⓐ","ⓐ","α","Ａ","ａ","ᗩ","卂","Δ","ค","α","ά","Ã","𝔞","𝓪","𝒶","𝓐","𝐀","𝐚","𝔸","𝕒","ᵃ"],"b":["Ⓑ","ⓑ","в","Ｂ","乃","ｂ","ᗷ","β","๒","в","в","β","𝔟","𝓫","𝒷","𝓑","𝐁","𝐛","𝔹","𝕓","ᵇ"],"c":["Ⓒ","ⓒ","匚","¢","Ｃ","ｃ","ᑕ","Ć","ς","c","ς","Č","℃","𝔠","𝓬","𝒸","𝓒","𝐂","𝐜","ℂ","𝕔","ᶜ"],"d":["Ⓓ","ⓓ","∂","Ｄ","ｄ","ᗪ","Đ","๔","∂","đ","Ď","𝔡","𝓭","𝒹","𝓓","𝐃","ᗪ","𝐝","𝔻","𝕕","ᵈ"],"e":["Ⓔ","乇","ⓔ","є","Ｅ","ｅ","ᗴ","€","є","ε","έ","Ẹ","𝔢","𝒆","𝑒","𝓔","𝐄","𝐞","𝔼","𝕖","ᵉ"],"f":["Ⓕ","ⓕ","ƒ","Ｆ","ｆ","千","ᖴ","ℱ","Ŧ","ғ","ғ","Ƒ","𝔣","𝒇","𝒻","𝓕","𝐅","𝐟","𝔽","𝕗","ᶠ"],"g":["Ⓖ","ⓖ","ق","g","Ｇ","ｇ","Ǥ","Ꮆ","ﻮ","g","ģ","Ğ","𝔤","𝓰","𝑔","𝓖","𝐆","𝐠","𝔾","𝕘","ᵍ","Ꮆ"],"h":["Ⓗ","卄","ⓗ","н","Ｈ","ｈ","ᕼ","Ħ","ђ","н","ħ","Ĥ","𝔥","𝓱","𝒽","𝓗","𝐇","𝐡","ℍ","𝕙","ʰ"],"i":["Ⓘ","ⓘ","ι","Ｉ","ｉ","Ꭵ","丨","Ɨ","เ","ι","ί","Į","𝔦","𝓲","𝒾","𝓘","𝐈","𝐢","𝕀","𝕚","ᶤ"],"j":["Ⓙ","ⓙ","נ","Ｊ","ڶ","ｊ","ᒎ","Ĵ","ן","נ","ј","Ĵ","𝔧","𝓳","𝒿","𝓙","𝐉","𝐣","𝕁","𝕛","ʲ"],"k":["Ⓚ","ⓚ","к","Ｋ","ｋ","ᛕ","Ҝ","к","к","ķ","Ќ","𝔨","𝓴","𝓀","𝓚","𝐊","𝐤","𝕂","𝕜","ᵏ","Ҝ"],"l":["Ⓛ","ⓛ","ℓ","ㄥ","Ｌ","ｌ","ᒪ","Ł","l","ℓ","Ļ","Ĺ","𝔩","𝓵","𝓁","𝓛","𝐋","𝐥","𝕃","𝕝","ˡ"],"m":["Ⓜ","ⓜ","м","Ｍ","ｍ","ᗰ","Μ","๓","м","м","ϻ","𝔪","𝓶","𝓂","𝓜","𝐌","𝐦","𝕄","𝕞","ᵐ","爪"],"n":["Ⓝ","几","ⓝ","η","Ｎ","ｎ","ᑎ","Ň","ภ","η","ή","Ň","𝔫","𝓷","𝓃","𝓝","𝐍","𝐧","ℕ","𝕟","ᶰ"],"o":["Ⓞ","ㄖ","ⓞ","σ","Ｏ","ｏ","ᗝ","Ø","๏","σ","ό","Ỗ","𝔬","𝓸","𝑜","𝓞","𝐎","𝐨","𝕆","𝕠","ᵒ"],"p":["Ⓟ","ⓟ","ρ","Ｐ","ｐ","卩","ᑭ","Ƥ","ק","ρ","ρ","Ƥ","𝔭","𝓹","𝓅","𝓟","𝐏","𝐩","ℙ","𝕡","ᵖ"],"q":["Ⓠ","ⓠ","q","Ｑ","ｑ","Ɋ","Ω","ợ","q","q","Ǫ","𝔮","𝓺","𝓆","𝓠","𝐐","𝐪","ℚ","𝕢","ᵠ"],"r":["Ⓡ","ⓡ","я","尺","Ｒ","ｒ","ᖇ","Ř","г","я","ŕ","Ř","𝔯","𝓻","𝓇","𝓡","𝐑","𝐫","ℝ","𝕣","ʳ"],"s":["Ⓢ","ⓢ","ѕ","Ｓ","丂","ｓ","ᔕ","Ş","ร","s","ş","Ŝ","𝔰","𝓼","𝓈","𝓢","𝐒","𝐬","𝕊","𝕤","ˢ"],"t":["Ⓣ","ⓣ","т","Ｔ","ｔ","丅","Ŧ","t","т","ţ","Ť","𝔱","𝓽","𝓉","𝓣","𝐓","𝐭","𝕋","𝕥","ᵗ"],"u":["Ⓤ","ⓤ","υ","Ｕ","ｕ","ᑌ","Ữ","ย","υ","ù","Ǘ","𝔲","𝓾","𝓊","𝓤","𝐔","𝐮","𝕌","𝕦","ᵘ"],"v":["Ⓥ","ⓥ","ν","Ｖ","ｖ","ᐯ","V","ש","v","ν","Ѷ","𝔳","𝓿","𝓋","𝓥","𝐕","𝐯","𝕍","𝕧","ᵛ"],"w":["Ⓦ","ⓦ","ω","Ｗ","ｗ","ᗯ","Ŵ","ฬ","ω","ώ","Ŵ","𝔴","𝔀","𝓌","𝓦","𝐖","𝐰","𝕎","𝕨","ʷ","山"],"x":["Ⓧ","ⓧ","χ","Ｘ","乂","ｘ","᙭","Ж","א","x","x","Ж","𝔵","𝔁","𝓍","𝓧","𝐗","𝐱","𝕏","𝕩","ˣ"],"y":["Ⓨ","ㄚ","ⓨ","у","Ｙ","ｙ","Ƴ","¥","ץ","ү","ч","Ў","𝔶","𝔂","𝓎","𝓨","𝐘","𝐲","𝕐","𝕪","ʸ"],"z":["Ⓩ","ⓩ","z","乙","Ｚ","ｚ","Ƶ","Ž","z","z","ž","Ż","𝔷","𝔃","𝓏","𝓩","𝐙","𝐳","ℤ","𝕫","ᶻ"]};
    if(map[c]) { return randomElement(map[c]); }
    else { return c; }
  }
  function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)]
  }
  function randomSymbols(n) {
    var symbols = ["🐙","🐉","🐊","🐒","🐝","🐜","🐚","🐲","🐳","🐸","👑","👹","👺","👤","💲","💣","💙","💚","💛","💜","💝","💗","💘","💞","💔","💥","🐯","🐼","🐻","🐺","👌","🐍","🐧","🐟","🐠","🐨","🎯","🏆","🎁","🎀","🎉","🎈","🍮","🍭","🍬","🍫","🍪","🍧","🌷","🍓","😺","😾","✎","😎","😝","😂","😈","😡","😲","😳","🍔","🍟","🍩","🎃","🎄","🎅","🐣","🐤","👍","👊","👻","👽","👮","💎","💋","👣","💀","💢","🔥","♔","♕","♖","♗","♘","♙","♚","♛","♜","♝","♞","♟","♠","♡","♢","♣","♤","♥","♦","♧","♨","♩","♪","♬","★","☆","☺","☹","☯","☮","☢","☠","☟","☞","☝","☜","✌","✋","✊","⛵","ൠ","✌","ඏ"];
    var s = [];
    for(var i = 0; i < n; i++) s.push( randomElement(symbols) );
    return s.join("");
  }
  function randInt(min, max) {
    return min + Math.floor(Math.random()*(max-min+1));
}
function strikeThrough(text) {
    return text.split("").join("̶")+"̶"; 
  }
  function tildeStrikeThrough(text) {
    return text.split("").join("̴")+"̴";
  }
  function underline(text) {
    return text.split("").join("̲")+"̲";
  }
  function doubleUnderline(text) {
    return text.split("").join("̳")+"̳";
  }
  function slashThrough(text) {
    return text.split("").join("̷")+"̷";
  }
  function stinky(text) {
    return text.split("").join("̾")+"̾"
  }
  function heartsBetween(text) {
    return text.split("").join("♥");
  }
  function arrowBelow(text) {
    return text.split("").join("͎")+"͎";
  }
  function crossAboveBelow(text) {
    return text.split("").join("͓̽")+"͓̽";
  }