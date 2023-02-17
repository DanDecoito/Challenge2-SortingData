import data from '../data/data.json' assert { type: "json" };



let injectSite = document.getElementById('injectSite');
let numDiplay = document.getElementById('numDiplay');
let prevButton = document.getElementById('prevButton');
let nextButton = document.getElementById('nextButton');
let sortDisplay = document.getElementById('sortDisplay');
let nameData;


prevButton.style.display = 'none';

let pageNum = 0;
let searchNum;
let searchNum2;
let lastPageNum;
const arr = data.People



function CreateElements(start, end, array){
    // create variable that has array stored into it
    const peoples = array;
   // clear current inject site, so no overlap
    injectSite.innerHTML = '';
    // for loop, which takes two inputs, and 
    for (let i = start; i < end; i++) {

        let div = document.createElement('div');

        div.className = 'row CreatedRows'
        
        let div1 = document.createElement('div');
        div1.className = 'col-1 createdDivs'
        let p = document.createElement('p')
        p.textContent = peoples[i].Id
        p.className = 'createdInfoText'

        let div2 = document.createElement('div');
        div2.className = 'col-2 createdDivs'
        let p2 = document.createElement('p')
        p2.textContent = peoples[i].FirstName
        p2.className = 'createdInfoText'

        let div3 = document.createElement('div');
        div3.className = 'col-2 createdDivs'
        let p3 = document.createElement('p')
        p3.textContent = peoples[i].LastName
        p3.className = 'createdInfoText'

        let div4 = document.createElement('div');
        div4.className = 'col-1 createdDivs'
        let p4 = document.createElement('p')
        p4.textContent = peoples[i].Age
        p4.className = 'createdInfoText'
        
        let div5 = document.createElement('div')
        div5.className = 'col-2 createdDivs'
        let p5 = document.createElement('p')
        p5.textContent = peoples[i].Email
        p5.className = 'createdInfoText'

        let div6 = document.createElement('div')
        div6.className = 'col-2 createdDivs'
        let p6 = document.createElement('p')
        p6.textContent = peoples[i].Height
        p6.className = 'createdInfoText'

        
        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        div.appendChild(div6)
        div.appendChild(div4);
        div.appendChild(div5);
        
        div1.appendChild(p);
        div2.appendChild(p2);
        div3.appendChild(p3);
        div4.appendChild(p4);
        div5.appendChild(p5);
        div6.appendChild(p6)
            
        injectSite.appendChild(div);
    }
    
    
}



// console.log(data.People)


numDiplay.addEventListener('click', () => {
    CreateElements(0, numDiplay.value, arr)
    pageNum = 0;
    nextButton.style.display = 'block';
    prevButton.style.display = 'none'
})


nextButton.addEventListener('click', () => {
    pageNum++;
    prevButton.style.display = 'block';
    let num = parseInt(numDiplay.value);
    searchNum = num * pageNum
    searchNum2 = searchNum + num


    console.log(pageNum)
    if(pageNum === 9)
    {
        nextButton.style.display = 'none';
    }
    if(pageNum === 3 && numDiplay.value === 20 )
    {
        nextButton.style.display = 'none';
    }
    if(pageNum === 3 && numDiplay.value === 30 )
    {
        nextButton.style.display = 'none';
    }
    if(pageNum === 3 && numDiplay.value === 30 )
    {
        nextButton.style.display = 'none';
    }
    if(pageNum === 2 && numDiplay.value === 40 )
    {
        nextButton.style.display = 'none';
    }
    if(numDiplay.value === '50' )
    {
        nextButton.style.display = 'none';
    }





    if (searchNum2 > data.People.length) 
    {   
        nextButton.style.display = 'none';
        let newNum = pageNum * numDiplay.value
        searchNum2 = data.People.length
        
        CreateElements(newNum, searchNum2, arr)
        console.log(`${pageNum}: ${searchNum}, ${searchNum2}`)
        console.log(newNum)
    }
    else
    {
     CreateElements(searchNum, searchNum2, arr)  
     console.log(`${pageNum}: ${searchNum}, ${searchNum2}`) 
    }

    

})


prevButton.addEventListener('click', () => {
    pageNum--;
    let num = parseInt(numDiplay.value);
    let num2 = (num + num);
    nextButton.style.display = 'block';
    if(pageNum === 0)
    {
        prevButton.style.display = 'none';
    }
        CreateElements(0, numDiplay.value, arr)
   

        searchNum = num * pageNum
        searchNum2 = searchNum + num



    if (searchNum2 > data.People.length) 
    {
        CreateElements(searchNum, data.People.length, arr)
        console.log(`${pageNum}: ${searchNum}, ${searchNum2}`)
        nextButton.style.display = 'none';
    }
    else
    {
     CreateElements(searchNum, searchNum2, arr)  
     console.log(`${pageNum}: ${searchNum}, ${searchNum2}`) 
    }
    
    
    
})


function SortChoice(choice){
    switch (choice) {
        case 'age':     
        return arr.sort((a, b) => parseInt(a.Age) - parseInt(b.Age))
            break;
        case 'fName':
            return arr.sort((a, b) => {
                return a.FirstName[0].localeCompare(b.FirstName[0]);
            })
            break;
        case 'lName':
        return arr.sort((a, b) => {
            return a.LastName[0].localeCompare(b.LastName[0]);
        })
            break;
        case 'height':
            return arr.sort((a, b) => parseInt(a.Height.substring(0,2)) - parseInt(b.Height.substring(0,2)))
            break;
        case 'email':
            return arr.sort((a, b) => {

                return a.Email[0].localeCompare(b.Email[0]);
            })   
            break;
        case 'id':
            return arr.sort((a, b) => parseInt(a.Id) - parseInt(b.Id))
            break;
        default:
            return arr.sort((a, b) => parseInt(a.Id) - parseInt(b.Id))
            break;
    }
}





sortDisplay.addEventListener('click', () => {

CreateElements(0, 10, SortChoice(sortDisplay.value));
})

CreateElements(0, 10, SortChoice('id'));

