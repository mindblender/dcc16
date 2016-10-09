import React, { Component } from "react";
import {Image, Text} from 'spectacle';
import preloader from "spectacle/lib/utils/preloader";

const images = {
  labs: require("../../assets/images/lab-head-only.png")
};
preloader(images);

class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Image src={images.labs.replace("/", "")} margin="-50px 0px 0px 1050px" height="200px"/>
      </div>
    );
  }
}

export default Footer;
