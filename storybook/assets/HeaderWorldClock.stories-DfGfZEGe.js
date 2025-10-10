import{j as t}from"./iframe-DEJbD2oy.js";import{HeaderWorldClock as m}from"./index--CCwTBMC.js";import{H as a}from"./Header-zQHtsfgX.js";import{w as l}from"./appWrappers-Ctq9hYpP.js";import"./preload-helper-D9Z9MdNV.js";import"./HeaderLabel-DSSzr-wZ.js";import"./Grid-DO7F6b3H.js";import"./Link-_DkU0OxE.js";import"./lodash-CwBbdt2Q.js";import"./index-CODaiViJ.js";import"./useAnalytics-D3GACT4p.js";import"./useApp-X1yq691v.js";import"./Helmet-C_Ztm_oC.js";import"./Box-CEQYom6P.js";import"./styled-C1nvoQOK.js";import"./Breadcrumbs-De91WPgr.js";import"./index-DnL3XN75.js";import"./Popover-IJb73_9I.js";import"./Modal-DbsR11Ts.js";import"./Portal-BNcbVIFw.js";import"./List-DKGVLh3A.js";import"./ListContext-XM-uFlGW.js";import"./ListItem-D0VRuO7C.js";import"./Page-CUXFQiyG.js";import"./useMediaQuery-DscSzKtb.js";import"./Tooltip-BI5UYAzR.js";import"./Popper-BMjLlwdF.js";import"./useObservable-Dyzi6Leh.js";import"./useIsomorphicLayoutEffect-Dt4gSchW.js";import"./useAsync-nf_MJHBK.js";import"./useMountedState-bnMhxuuW.js";import"./componentData-DQOWaVke.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";const z={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const clockConfigs: ClockConfig[] = [{
    label: 'NYC',
    timeZone: 'America/New_York'
  }, {
    label: 'UTC',
    timeZone: 'UTC'
  }, {
    label: 'STO',
    timeZone: 'Europe/Stockholm'
  }, {
    label: 'TYO',
    timeZone: 'Asia/Tokyo'
  }];
  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };
  return <Header title="Header World Clock" pageTitleOverride="Home">
      <HeaderWorldClock clockConfigs={clockConfigs} customTimeFormat={timeFormat} />
    </Header>;
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const clockConfigs: ClockConfig[] = [{
    label: 'NYC',
    timeZone: 'America/New_York'
  }, {
    label: 'UTC',
    timeZone: 'UTC'
  }, {
    label: 'STO',
    timeZone: 'Europe/Stockholm'
  }, {
    label: 'TYO',
    timeZone: 'Asia/Tokyo'
  }];
  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  };
  return <Header title="24hr Header World Clock" pageTitleOverride="Home">
      <HeaderWorldClock clockConfigs={clockConfigs} customTimeFormat={timeFormat} />
    </Header>;
}`,...r.parameters?.docs?.source}}};const B=["Default","TwentyFourHourClocks"];export{e as Default,r as TwentyFourHourClocks,B as __namedExportsOrder,z as default};
