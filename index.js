    // Qus-1
let str="hello";
let rev="";
for(let ch of str){
    rev=ch+rev
}
console.log(rev);

    // Qus-2

        let num=[12, 45, 7, 89, 23]
        let max=num[0]
        for(let nums of num){
            if(nums>max){
                max=nums
            }
        }
        console.log(max);


//Qus-3

        let num=[12, 45, 7, 89, 23]
        let min=num[0]
        for(let nums of num){
            if(nums<min){
                min=nums
            }
        }
        console.log(min);

// Qus-4   Count Vowels in a String

        let s="javascript"
        let count=0
        for(let ch of s){
            if("aeiouAEIOU".includes(ch)){
                count+=1
            }
        }
        console.log(count);


//Qus -5       count even number only

        let arr=[1,2,4,5,7,9,8]
        let count=0
        for(let num of arr){
            if(num%2==0){
                count+=1
            }
        }
        console.log(count);

//Qus-6 

        let nums=[1,2,3,4,5,6,7,8,9]
        let count=0
        for(let num of nums){
            if(num%2!==0){
                count+=1
            }
        }
        console.log(count);

//Qus-7  Find the Frequency of Each Element
        let nums=[1, 2, 2, 3, 1, 2]
        let freq={}
        for(let num of nums){
            if (freq[num]){
                freq[num]++;
            }else{
                freq[num]=1;
            }
        }
        console.log(freq);

//Qus-8  Sum of All Numbers

let n= [10, 20, 30, 40]
let sum=0
for(let num of n){
    sum+=num
}
console.log(sum);

//Qus-9

//Double every number using map()

        let nums=[1, 2, 3, 4, 5]
        let res=nums.map((num)=>num*2)
        console.log(res);

    // Qus-10
    // Convert names to uppercase using map()

let names= ["soni", "shalu", "amita"]
let upper=names.map((name)=>name.toLocaleUpperCase())
console.log(upper);

    // Get only even numbers using filter()

let nums= [1, 2, 3, 4, 5, 6, 7, 8]
let even=nums.filter((num)=> (num%2===0) )
console.log(even);