let n=5;
for(let i=1;i<=n;++i){
    let bag="";
    for(let j=1;j<=n;++j){
        if(j<=i){
         bag=bag+"*"+""
        }
    }
    console.log(bag)
}