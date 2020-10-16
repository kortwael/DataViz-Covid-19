import React from 'react';
import ensi from './ensi.png'
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
function FooterComp() {
    return (
        <Footer
        columns={[
          
           { 
           
           openExternal: true,
           icon: (
            <img style={{width:90, marginRight :'15%'}} src={ensi} />
          ),
        },
        ]}
        bottom="Made by KORT Wael , JOHMANI Alaeddine , DERBALI Med Dhia"
      />
    );
}

export default FooterComp;