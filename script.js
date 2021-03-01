const firstName = document.getElementById("firstname");  // element with id firstname
const startingBid = document.getElementById("startingbid"); // element with id startingbid
const education = document.getElementById("education"); // element with id education
const networth = document.getElementById("networth"); // element with id education
const skills = document.getElementsByName("skills"); // HTMLCollection (like an array of elements, but not an actual array)
const age = document.getElementsByName("age");
const gossip=document.getElementsByClassName("gossip");
const abilitiesEls = document.getElementsByClassName("abilities");
const button = document.getElementById("submit");
const love_letter = document.getElementById("love_letter");

var checkedAbilities = [], checkedGossips = [];

const calculate = () => {
    let name = firstName.value; // name of the groom/bride
    let price = Number(startingBid.value); // turns your starting bid string into number
    let letter = love_letter.value;
    if (name != "") { 
       
        price = getNewPrice(Math.round(getNewPrice(getNewPrice(price, education),networth)+skills),age);
        console.log(skills);

        for(var i=0; i<abilitiesEls.length;i++){
            if(abilitiesEls[i].checked === true){
                checkedAbilities.push(parseFloat(abilitiesEls[i].value)); 
    
            }
        }
    
        for(var i =0; i< checkedAbilities.length;i++){
            skills += checkedAbilities[i];
        }

        for(var i=0; i<gossip.length;i++){
            if(gossipsEls[i].checked === true){
                checkedGossips.push(parseFloat(gossipsEls[i].value)); 
    
            }
        }
    
        for(var i =0; i< checkedGossips.length;i++){
            if(checkedGossips[i]%1==0 || checkedGossips[i]==0){
                result = result + checkedGossips[i];
    
            } else result *= checkedGossips[i];
        }
       
        
    

        
        // FINISH THE CODE !!!!!!!!!!!!!!!!
        let person = {
            fullName: name,
            finalPrice: price,
            loveLetter: letter
        }
        document.getElementById("result").innerHTML = `The price for ${person.fullName} is ${person.finalPrice}. Your love letter is ${person.loveLetter}`;
    }
    else {
        alert("Name and starting bid cannot be empty");
    }
}



const getNewPrice = (price, criteria) => {
    return price * Number(criteria.value);
}


/* if you will set an attribute class="skills" for each input checkbox and use this selector 
--> document.getElementsByClassName("skills"), it will return you HTMLCollection that you can pass to this function as an argument*/
const getCheckboxValuesForLoop = (html_collection, price) => { // Check this one, it should work for values with coefficients and with integers
	for (let i=0; i < html_collection.length; i++) {  
		if (html_collection[i].checked && Number.isInteger(Number(html_collection[i].value))) {
			price = price + Number(html_collection[i].value)
		}
		else if (html_collection[i].checked && !Number.isInteger(html_collection[i].value)) {
			price = price * Number(html_collection[i].value)
		}
	}
	return price;
}

/* if you will set an attribute class="skills" for each input checkbox and use this selector 
--> document.getElementsByClassName("skills"), it will return you HTMLCollection that you can pass to this function as an argument*/
const getCheckboxValuesFilterReduce = (html_collection, price) => { // create a function that accepts your HTMLCollection of elements and the current price
    let list = Array.from(html_collection).filter(filteration) // this method turn your HTMLCollection into array
    let result = list.reduce(reducer, price)
    return result;
}

const reducer = (accumulator, item) => {
    return accumulator + Number(item.value);
}
const filteration = (item) => {
    return item.checked;
}

/* if you will set an attribute name="age" for each input radio and use this selector 
--> document.getElementsByName("age"), it will return you NodeList that you can pass to this function as an argument*/
const getRadioValue = (node_list, price) => {  
    node_list.forEach(item => {
        if (item.checked) {
            price = price * Number(item.value)
        }
    })
    return price;
}

button.addEventListener("click", calculate)


