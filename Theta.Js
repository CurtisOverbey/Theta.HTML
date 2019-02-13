
//Variables ("now in getFormData()");
//const S = document.getElementById("stockprice");
//const SP = document.getElementById("strikeprice");

//const B = document.getElementById("expirationdate");
//const V = document.getElementById("vix");
//const RF = document.getElementById("RFR");
//("clickme");



function submission() {

 
    //Variables need to get dates to be value;
    
    //const date2 = document.getElementById("date").val();
    //const date1 = document.getElementById("expirationdate").val();
    const S = document.getElementById("stockprice");
    const SP = document.getElementById("strikeprice");
    const V = document.getElementById("vix");
    const RF = document.getElementById("RFR");

    
   //Variables for d1 d2 nd1 nd2 nd-1 nd-2;
   
   //Variable for t;
   const date1 = new Date("7/13/2010");
   const date2 = new Date("12/15/2010");
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

    //N(d1)
    const Nd1 = Math.abs(d1);
      
var input1 = document.getElementById("call");
var input2 = document.getElementById("put");


input1.value = Nd1;
input2.value = Nd1;





};



