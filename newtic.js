let cont=document.getElementById('ticcont');
let elems=document.getElementsByClassName('elems');
let empt=9;
let li=[];
let glo;
let gamecompleted=document.createElement('div');
gamecompleted.classList.add('gamecompleted');

gamecompleted.classList.add('hide');
let newgame=document.createElement('button');
newgame.textContent="New Game";
newgame.addEventListener('click',function(e){
    e.preventDefault();
    location.reload(true);
})

document.getElementById('cont').appendChild(gamecompleted);
for(let i=0;i<9;i++) li.push(' ');
let same=function(li){
    let emp=0;
    for(let i=0;i<9;i++){
        if(li[i]==' ') emp++;
    }
    for(let i=0;i<9;i+=3){
        let last=li[i];
        if(last==' ') continue;
        let j;
        for( j=0;j<3;j++){
            if(last!=li[i+j]) break;

        }
        if(j==3){
            if(last=='X'){
                return -emp-1;
            }
            return emp+1;
        }
    }
    for(let i=0;i<3;i++){
        let last=li[i];
        if(last==' ') continue;
        let j;
        for(j=i;j<9;j+=3){
            if(last!=li[j]) break;
        }
        if(j>=9){
            if(last=='X'){
                return -emp-1;
            }
            return emp+1;
        }
    }
    if(li[0]!=' '){
        let i;
        for(i=0;i<9;i+=4){
            if(li[0]!=li[i]) break;
        }
        if(i>=9){
            if(li[0]=='X'){
                return -emp-1;
            }
            return emp+1;
        }
    }
    if(li[2]!=' '){
        let i;
        for(i=2;i<8;i+=2){
            if(li[2]!=li[i]) break;
        }
        if(i>=8){
            if(li[2]=='X'){
                return -emp-1;
            }
            return emp+1;
        }
    }
    if(emp==0) return 0;
    return 11;
}
let sol=function(li,turn){
    let empties=same(li);
    let check=11;
    if(empties==0) return 0;
    else if(empties!=11) return empties;
    if(turn=='c') check=-11;
    for(let i=0;i<9;i++){
        if(li[i]==' '){
            if(turn=='c'){
                li[i]='O';
                let store=sol(li,'p');
                if(store>=check){
                    check=store;
                    glo=i;
                }
                li[i]=' ';
            }
            else{
                li[i]='X';
                let store=sol(li,'c');
                if(store<=check){
                    check=store;  
                }
                li[i]=' ';
            }
        }
    }
    return check;
}
  
for(let i=0;i<9;i++){
    let divele=document.createElement('div');
    divele.classList.add('elems');
    let rw=Math.floor(i/3);
    let cw=i%3;
    if(rw==0) divele.style.borderTopWidth='0px';
    if(rw==2) divele.style.borderBottomWidth='0px';
    if(cw==0) divele.style.borderLeftWidth='0px';
    if(cw==2) divele.style.borderRightWidth='0px';
    divele.addEventListener('click',function(){
        if(!divele.textContent){
            if(document.getElementsByClassName('hide').length==1){
                empt--;
                divele.textContent='X';
                li[i]='X';
                let t=same(li);
                if((-empt-1)==t){
                    let tt=document.getElementsByClassName('gamecompleted')[0];
                    tt.classList.remove('hide');
                    tt.textContent="You Have Won  ";
                    tt.appendChild(newgame);
                }
                if(empt!=0){
                    sol(li,'c');
                    empt--;
                    elems[glo].textContent='O';
                    li[glo]='O';
                    let t=same(li);
                    if((empt+1)==t){
                        let tt=document.getElementsByClassName('gamecompleted')[0];
                        tt.classList.remove('hide');
                        tt.textContent="You Have Lost   ";
                        tt.appendChild(newgame);

                    }
                }
                if(empt==0){
                    let tt=document.getElementsByClassName('gamecompleted')[0];
                        tt.classList.remove('hide');
                        tt.textContent="Draw   ";
                        tt.appendChild(newgame);

                }
            }
        }
    })
    cont.appendChild(divele);
}












// let cont=document.getElementById('ticcont');
// for(let i=0;i<9;i++){
//     let divele=document.createElement('div');
//     divele.classList.add('elems');
//     let rw=Math.floor(i/3);
//     let cw=i%3;
//     if(rw==0) divele.style.borderTopWidth='0px';
//     if(rw==2) divele.style.borderBottomWidth='0px';
//     if(cw==0) divele.style.borderLeftWidth='0px';
//     if(cw==2) divele.style.borderRightWidth='0px';
//     divele.addEventListener('click',function(){
//         if(!divele.textContent){
//             divele.textContent='X';
//         }
//     })
//     cont.appendChild(divele);
// }