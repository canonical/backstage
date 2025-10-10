import{j as e}from"./iframe-DEJbD2oy.js";import{H as o}from"./Header-zQHtsfgX.js";import{P as p}from"./Page-CrAJirop.js";import{H as r}from"./HeaderLabel-DSSzr-wZ.js";import"./preload-helper-D9Z9MdNV.js";import"./Helmet-C_Ztm_oC.js";import"./Box-CEQYom6P.js";import"./styled-C1nvoQOK.js";import"./Grid-DO7F6b3H.js";import"./Breadcrumbs-De91WPgr.js";import"./index-DnL3XN75.js";import"./Popover-IJb73_9I.js";import"./Modal-DbsR11Ts.js";import"./Portal-BNcbVIFw.js";import"./List-DKGVLh3A.js";import"./ListContext-XM-uFlGW.js";import"./ListItem-D0VRuO7C.js";import"./Link-_DkU0OxE.js";import"./lodash-CwBbdt2Q.js";import"./index-CODaiViJ.js";import"./useAnalytics-D3GACT4p.js";import"./useApp-X1yq691v.js";import"./Page-CUXFQiyG.js";import"./useMediaQuery-DscSzKtb.js";import"./Tooltip-BI5UYAzR.js";import"./Popper-BMjLlwdF.js";const N={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}}},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
  type: string;
  title: string;
  subtitle: string;
}) => {
  const {
    type
  } = args;
  return <Page themeId={type}>
      <Header {...args}>{labels}</Header>
    </Page>;
}`,...t.parameters?.docs?.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,N as default};
