class Currency{
    constructor(firstCurrency,SecondCurrency){
        this.firstCurrency=firstCurrency;
        this.SecondCurrency=SecondCurrency;
        this.url="https://api.exchangerate.host/latest"

        this.amount=null;
    }
    exchange(){
        return new Promise((resolve,reject)=> {
            fetch(this.url+this.firstCurrency)
        .then(response=>response.json())
        .then(data=>{
            const parity=data.rates[this.SecondCurrency];
            const amount2=Number(this.amount);
            let total=parity*amount2;
          resolve(total);
        })
        .catch(err=> reject(err));

        })
        
    }

    changeAmount(amount){
        this.amount=amount;
    }
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency=newFirstCurrency;
    }    
    changeSecondCurrency(newSecondCurrency){
        this.SecondCurrency=newSecondCurrency;
    }    

}
