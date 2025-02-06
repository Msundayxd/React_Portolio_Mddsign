import React, { useState } from 'react';
import PfpIcon from "./assets/images/other/pfp_small.png"

function AboutSmall () {

    return (
        <div className='Abt-small-bg'>
            <div className='Margin-control'></div>
            <section>
            <div className='Abt-small-content'>
                <img src={require("./assets/images/other/About_small_side.png")} />
                <img src={PfpIcon} />
                <div className="Abt-small-txt">
                    <h1> MEET THE DESIGNER </h1>
                    <p> I’m a <b>design graduate</b> (with a newfound passion for coding) looking to continue learning through <b> new job oportunities </b>. 
                    Hard work, empathy and a strong will are abilities I consider to be essential, which I try to reflect in all projects. </p>
                    <div className="Abt-small-sub">
                        <h4 className='h4-underline'> +1 YEAR EXPERIENCE </h4>
                        <h4 className='h4-underline'> 20+ COMPLETED PROJECTS </h4>
                    </div>
                    <button className="Button-default"> LEARN MORE <span class="material-icons-round md-bttn"> read_more </span> </button>
                </div>
                <img src={require("./assets/images/other/About_small_side.png")} />
            </div>
            </section>
            <div className='Margin-control'></div>
        </div>
    );
}

export default AboutSmall;