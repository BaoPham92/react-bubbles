import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../components/utils/axiosWithAuth'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    // ! LOG PROPS
    console.log('BUBBLE PAGE', props)

    axiosWithAuth().get('/api/colors')
    .then(res => res && setColorList(res.data))
    .catch(err => console.log(err))
  }, [])

  // ! LOG COLOR LIST DATA
  // console.log(colorList)

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
