for(var i=1;i<=5;i++){
    setTimeout(function(){
        console.log(i);
    },1000)
}






const person={
    name:"kavi",
    age:21,
    getAge(){
     console.log(this.age);
   const getName=()=>{
      console.log(this.name);
   }
     getName();

    }
}
person.getAge();







var jonas={
    firstname:'Nathis',
    lastname:'S',
    age:20,
    dpt:'CT',
    marks:{
        math:23,
        phy:34,
        che:54
    },
    skills:['Java','HTML','CSS'],
    license:true,
    summary:function(){
        return `Your name is ${this.firstname+" "+this.lastname} and your age is ${this.age}. So you are ${this.license? 'a' :'not'} eligible for driving`;
    }
}

const{ firstname,lastname,age,dpt, marks:{math,phy,che},license,skills,summary}=jonas;
console.log(summary.bind(jonas)());







// we can use object attributes without calling the function by declaring the attribute outside the function using prototype

const convertKelvin=function(){
    const measurement={
        type:'temp',
        value:Number(prompt(`Enter the celcius value`))
    }
    const kelvin=measurement['value']+273;
    return kelvin;
}
convertKelvin.prototype.unit="celcius";
console.log(convertKelvin.prototype.unit);
