import React from "react";
import {RecoilRoot} from "recoil";

export const wrapPageElement = ({element, props}) => (
    <RecoilRoot {...props}>{element}</RecoilRoot>
)
