
import React, { Component } from 'react';
import './App.css';

class App extends Component {
 
  handleClick = (parId,butId,resId) => {
   var parString = document.getElementById(parId).innerHTML;
   var parTitle = document.getElementById(parId).title;
   fetch('https://api.crossref.org/works?sort=score&order=desc&rows=20&query.bibliographic='+parString)
   .then(res => res.json())
      .then( (result) => {
        if(result.message.items.find(ele => ele.title[0].toLowerCase() === parTitle.toLowerCase()) !== undefined) {
          var resultantContent = result.message.items.find(ele => ele.title[0].toLowerCase() === parTitle.toLowerCase()).DOI;
          document.getElementById(resId).innerHTML = parString + '  DOI:'+resultantContent;
        } else {
          document.getElementById(resId).innerHTML = parString + '  DOI: No Respective title is found ';
        }
        document.getElementById(butId).setAttribute("disabled",true);
      })
    }


render() {	
  return (	
  <div className="main">
  <div className="flex">
    <div className="para" id="par1" title="Standard normal variate transformation and de-trending of near-infrared diffuse reflectance spectra">
      Barnes RJ, Dhanoa MS, Lister SJ (1989) Standard normal variate transformation and de-trending of near-infrared diffuse reflectance spectra. Appl Spectrosc 43(5):777
    </div>
    <button id="bId1" onClick={() => this.handleClick("par1","bId1","resId1")}>CrossRef Check</button>
  </div>
  <div id="resId1" className="para"></div>
  <div className="flex">
    <div className="para" id="par2" title="Prediction of water-holding capacity and composition of porcine meat by comparative spectroscopy">
      Brùndum J, Munck L, Henckel P, Karlsson A, Tornberg E, Engelsen SB (2000) Prediction of water-holding capacity and composition of porcine meat by comparative spectroscopy. Meat Sci 55(2):185
    </div>
    <button id="bId2" onClick={() => this.handleClick("par2","bId2","resId2")}>CrossRef Check</button>
  </div>
  <div id="resId2" className="para"></div>
  <div className="flex">
    <div className="para" id="par3" title="FT-NIR spectroscopy and wood identification.">
      Brunner M, Eugster R, Trenka E, Bergamin-Strotz L (1996) FT-NIR spectroscopy and wood identification. Holzforschung 50(2):134
    </div>
    <button id="bId3" onClick={() => this.handleClick("par3","bId3","resId3")}>CrossRef Check</button>
  </div>
  <div id="resId3" className="para"></div>
  <div className="flex">
    <div className="para" id="par4" title="Wood species identification by near-infrared spectroscopy.">
      Lazarescu C, Hart F, Pirouz Z, Panagiotidis K, Mansfield SD, Barrett JD,
      Avramidis S (2017) Wood species identification by near-infrared spectroscopy. International Wood
      Products Journal 8(1):32–35
    </div>
    <button id="bId4" onClick={() => this.handleClick("par4","bId4","resId4")}>CrossRef Check</button>
  </div>
  <div id="resId4" className="para"></div>
  <div className="flex">
    <div className="para" id="par5" title="Rapid spectroscopic separation of three Canadian softwoods">
      Dawson-Andoh B, Adedipe OE (2012) Rapid spectroscopic separation of three Canadian softwoods. Wood Sci Technol 46(6):1202
    </div>
    <button id="bId5" onClick={() => this.handleClick("par5","bId5","resId5")}>CrossRef Check</button>
  </div>
  <div id="resId5" className="para"></div>
  <div className="flex">
    <div className="para" id="par6" title="Feasibility of near-infrared spectroscopy for online multiple trait assessment of sawn lumber">
      Fujimoto T, Kurata Y, Matsumoto K, Tsuchikawa S (2010) Feasibility of near-infrared spectroscopy for online multiple trait assessment of sawn lumber. J Wood Sci 56(6):459
    </div>
    <button id="bId6" onClick={() => this.handleClick("par6","bId6","resId6")}>CrossRef Check</button>
  </div>
  <div id="resId6" className="para"></div>
  <div className="flex">
    <div className="para" id="par7" title="Nondestructive estimation of wood chemical composition of sections of radial wood strips by diffuse reflectance near infrared spectroscopy.">
      Jones PD, Schimleck LR, Peter GF, Daniels RF III (2006) Nondestructive estimation of wood chemical composition of sections of radial wood strips by diffuse reflectance near infrared spectroscopy. Wood Sci Technol 40(8):720
    </div>
    <button id="bId7" onClick={() => this.handleClick("par7","bId7","resId7")}>CrossRef Check</button>
  </div>
  <div id="resId7" className="para"></div>
  <div className="flex">
    <div className="para" id="par8" title="Wood species identification by near-infrared spectroscopy.">
      Lazarescu C, Hart F, Pirouz Z, Panagiotidis K, Mansfield SD, Barrett JD, Avramidis S (2017) Wood species identification by near-infrared spectroscopy. International Wood Products Journal 8(1):35
    </div>
    <button id="bId8" onClick={() => this.handleClick("par8","bId8","resId8")}>CrossRef Check</button>
    </div>
    <div id="resId8" className="para"></div>
  <div className="flex">
    <div className="para" id="par9" title="Near infrared spectroscopic investigation of the thermal degradation of wood">
      Mehrotra R, Singh P, Kandpal H (2010) Near infrared spectroscopic investigation of the thermal degradation of wood. Thermochim Acta 507–508:65
    </div>
    <button id="bId9" onClick={() => this.handleClick("par9","bId9","resId9")}>CrossRef Check</button>
  </div>
  <div id="resId9" className="para"></div>
  <div className="flex">
    <div className="para" id="par10" title="Nondestructive measurement of fruit and vegetable quality by means of NIR spectroscopy: a review">
      Nicolaï BM, Beullens K, Bobelyn E, Peirs A, Saeys W, I.Theron K, Lammertyn J (2007) Nondestructive measurement of fruit and vegetable quality by means of NIR spectroscopy: a review. Postharvest biol technol 46(2):118
    </div>
    <button id="bId10" onClick={() => this.handleClick("par10","bId10","resId10")}>CrossRef Check</button>
  </div>
  <div id="resId10" className="para"></div>
</div>
  )
}
}

export default App;
