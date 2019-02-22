
//Variables ("now in getFormData()");
//const S = document.getElementById("stockprice");
//const SP = document.getElementById("strikeprice");

//const B = document.getElementById("expirationdate");
//const V = document.getElementById("vix");
//const RF = document.getElementById("RFR");
//("clickme");

//N(d1)
    //const Nd1 =bring in normal distribution function
    function normalcdf(d1) {   //HASTINGS.  MAX ERROR = .000001
        var T =1/(1+.2316419*Math.abs(d1));
        var D=.3989423*Math.exp((-d1)*d1/2);
        var Prob=D*T*(.3193815+T*(-.3565638+T*(1.781478+T*(-1.821256+T*1.330274))));
        if (d1>0) {
            Prob=1-Prob;
        }
        return Prob;
    }   


function submission() {

 
    //Variables need to get dates to be value;
    
    const date2str = document.getElementById("currDate").innerText;
    const date1str = document.getElementById("expirationdate").value;
    const S = document.getElementById("stockprice");
    const SP = document.getElementById("strikeprice");
    const V = document.getElementById("vix");
    const RF = document.getElementById("RFR");

    
   //Variables for d1 d2 nd1 nd2 nd-1 nd-2;
   
   //Variable for t;
   const datems = Date.parse(date1str);
   const date1 = new Date(datems);
   const date2 = new Date(date2str);
   const timeDiff = Math.abs(date2.getTime() - date1.getTime());
   const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))
   const t = Math.abs(diffDays / 365); 

   //Variable for LN(S/SP)
   const L =Math.log((parseInt(S.value) / parseInt(SP.value)));
   const LN =Math.abs(L)

  //Variable for (rf + σ2/2)t
   const VP =(parseInt(V.value) / 100);
   const VIX =Math.abs(VP)
   
   const R =(parseInt(RF.value) / 100);
   const RFR =Math.abs(R)

   const RFV =(RFR+((Math.pow(VIX, 2)/2)))*t;

   const RT =(VIX*Math.pow(t,.5));

    //D1
    const d1 =(LN + RFV)/RT;
   
    //D2
    const d2 =(d1-RT);

    const Prob = normalcdf(d1);
    
    
    //Exponents
    const Exp1 =Math.exp(-RFR*t);
    const Exp2 =(SP.value*Exp1)
    //0 is dividend yeild
    const Exp3 =Math.exp(0*t);
    const Exp4 =(S.value*Exp3)

var input1 = document.getElementById("call");
var input2 = document.getElementById("put");


input1.value = d2;
input2.value = d2;



return false;


};



