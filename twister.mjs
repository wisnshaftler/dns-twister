
class twister {
    qwerty = {
        '1': '2q', '2': '3wq1', '3': '4ew2', '4': '5re3', '5': '6tr4', '6': '7yt5', '7': '8uy6', '8': '9iu7', '9': '0oi8', '0': 'po9',
        'q': '12wa', 'w': '3esaq2', 'e': '4rdsw3', 'r': '5tfde4', 't': '6ygfr5', 'y': '7uhgt6', 'u': '8ijhy7', 'i': '9okju8', 'o': '0plki9', 'p': 'lo0',
        'a': 'qwsz', 's': 'edxzaw', 'd': 'rfcxse', 'f': 'tgvcdr', 'g': 'yhbvft', 'h': 'ujnbgy', 'j': 'ikmnhu', 'k': 'olmji', 'l': 'kop',
        'z': 'asx', 'x': 'zsdc', 'c': 'xdfv', 'v': 'cfgb', 'b': 'vghn', 'n': 'bhjm', 'm': 'njk'
    };

    glyphs = {
        '0': ['o'],
        '1': ['l', 'i'],
        '2': ['ƻ'],
        '3': ['8'],
        '5': ['ƽ'],
        '6': ['9'],
        '8': ['3'],
        '9': ['6'],
        'a': ['à', 'á', 'à', 'â', 'ã', 'ä', 'å', 'ɑ', 'ạ', 'ǎ', 'ă', 'ȧ', 'ą', 'ə'],
        'b': ['d', 'lb', 'ʙ', 'ɓ', 'ḃ', 'ḅ', 'ḇ', 'ƅ'],
        'c': ['e', 'ƈ', 'ċ', 'ć', 'ç', 'č', 'ĉ', 'ᴄ'],
        'd': ['b', 'cl', 'dl', 'ɗ', 'đ', 'ď', 'ɖ', 'ḑ', 'ḋ', 'ḍ', 'ḏ', 'ḓ'],
        'e': ['c', 'é', 'è', 'ê', 'ë', 'ē', 'ĕ', 'ě', 'ė', 'ẹ', 'ę', 'ȩ', 'ɇ', 'ḛ'],
        'f': ['ƒ', 'ḟ'],
        'g': ['q', 'ɢ', 'ɡ', 'ġ', 'ğ', 'ǵ', 'ģ', 'ĝ', 'ǧ', 'ǥ'],
        'h': ['lh', 'ĥ', 'ȟ', 'ħ', 'ɦ', 'ḧ', 'ḩ', 'ⱨ', 'ḣ', 'ḥ', 'ḫ', 'ẖ'],
        'i': ['1', 'l', 'í', 'ì', 'ï', 'ı', 'ɩ', 'ǐ', 'ĭ', 'ỉ', 'ị', 'ɨ', 'ȋ', 'ī', 'ɪ'],
        'j': ['ʝ', 'ǰ', 'ɉ', 'ĵ'],
        'k': ['lk', 'ik', 'lc', 'ḳ', 'ḵ', 'ⱪ', 'ķ', 'ᴋ'],
        'l': ['1', 'i', 'ɫ', 'ł'],
        'm': ['n', 'nn', 'rn', 'rr', 'ṁ', 'ṃ', 'ᴍ', 'ɱ', 'ḿ'],
        'n': ['m', 'r', 'ń', 'ṅ', 'ṇ', 'ṉ', 'ñ', 'ņ', 'ǹ', 'ň', 'ꞑ'],
        'o': ['0', 'ȯ', 'ọ', 'ỏ', 'ơ', 'ó', 'ö', 'ᴏ'],
        'p': ['ƿ', 'ƥ', 'ṕ', 'ṗ'],
        'q': ['g', 'ʠ'],
        'r': ['ʀ', 'ɼ', 'ɽ', 'ŕ', 'ŗ', 'ř', 'ɍ', 'ɾ', 'ȓ', 'ȑ', 'ṙ', 'ṛ', 'ṟ'],
        's': ['ʂ', 'ś', 'ṣ', 'ṡ', 'ș', 'ŝ', 'š', 'ꜱ'],
        't': ['ţ', 'ŧ', 'ṫ', 'ṭ', 'ț', 'ƫ'],
        'u': ['ᴜ', 'ǔ', 'ŭ', 'ü', 'ʉ', 'ù', 'ú', 'û', 'ũ', 'ū', 'ų', 'ư', 'ů', 'ű', 'ȕ', 'ȗ', 'ụ'],
        'v': ['ṿ', 'ⱱ', 'ᶌ', 'ṽ', 'ⱴ', 'ᴠ'],
        'w': ['vv', 'ŵ', 'ẁ', 'ẃ', 'ẅ', 'ⱳ', 'ẇ', 'ẉ', 'ẘ', 'ᴡ'],
        'x': ['ẋ', 'ẍ'],
        'y': ['ʏ', 'ý', 'ÿ', 'ŷ', 'ƴ', 'ȳ', 'ɏ', 'ỿ', 'ẏ', 'ỵ'],
        'z': ['ʐ', 'ż', 'ź', 'ᴢ', 'ƶ', 'ẓ', 'ẕ', 'ⱬ']
    }

    twisted = [];
    fullDomain;
    topLevel;
    domainName;
    domainNameArray;
    domainNameLenght;

    domainInitiate (domain) {
        this.fullDomain = String(domain).toLowerCase();
        this.topLevel = this.fullDomain.split(".")[this.fullDomain.split(".").length -1];
        this.domainName = this.fullDomain.split(".").slice(0, -1).join(".");
        this.domainNameArray = this.domainName.split("");
        this.domainNameLenght = this.domainNameArray.length;

        return ( 
            { fullDomain: this.fullDomain, topLevel: this.topLevel, domainName: this.domainName, domainNameArray: this.domainNameArray,
            domainNameLenght: this.domainNameLenght
            } 
        );
    }

    //normal qwerty typo
    qwertyTypo (domain) {
        this.domainInitiate(domain);

        for(let i =0; i < this.domainNameLenght; i++) {
            const letter = this.domainNameArray[i];
        
            let tempDomain = "";
            const similarLetters = this.qwerty[letter]?.split("");
            if(!similarLetters) {
                continue;
            }
        
            for(let j = 0; j < similarLetters.length; j ++) {
                const similarLetter = similarLetters[j];
        
                tempDomain += this.domainNameArray.slice(0, i).join("") + similarLetter + this.domainNameArray.slice(i+1, this.domainNameLenght).join("");
                tempDomain += "." + this.topLevel;
        
                if( this.twisted.includes(tempDomain) == false) {
                    this.twisted.push(tempDomain);
                }
                
                tempDomain = "";
            }
        }
    }

    //basic long press typo
    longPressTypo(domain) {
        this.domainInitiate(domain);

        for(let i =0; i < this.domainNameLenght; i++) {
            const letter = this.domainNameArray[i];

            let tempDomain = "";
            const similarLetters = this.glyphs[letter];
            if(!similarLetters) {
                continue;
            }

            for (let j = 0; j < similarLetters.length; j++) {
                const similarLetter = similarLetters[j];

                tempDomain += this.domainNameArray.slice(0, i).join("") + similarLetter + this.domainNameArray.slice(i + 1, this.domainNameLenght).join("");
                tempDomain += "." + this.topLevel;

                if( this.twisted.includes(tempDomain) == false) {
                    this.twisted.push(tempDomain);
                }
                tempDomain = "";
            }
        }
    }

    //createBasicTwists
    basicTwists(domain) {
        this.qwertyTypo(domain);
        this.longPressTypo(domain);

        return this.twisted;
    }

    //long twist
    longTwist(domain) {
        this.qwertyTypo(domain);
        this.longPressTypo(domain);

        let startupDomains = Array.from(this.twisted);

        for(let i = 0; i < startupDomains.length; i++) {
            
            const choosenDomain = startupDomains[i];
            this.qwertyTypo(choosenDomain);
            this.longPressTypo(choosenDomain); 
        }

        let finalDomains = [];
        for(let i =0; i < this.twisted.length; i++) {
            const temp = {
                domain: this.twisted[i]
            }
            finalDomains.push(temp);
        }
        return finalDomains;
    }

    clearTwisted() {
        this.twisted = [];
    }
}

export default twister = new twister();
//console.log(twist.longTwist("google.com"));