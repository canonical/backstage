import{j as t,T as a,c,C as g,m as l}from"./iframe-DEJbD2oy.js";import{b as i,r as d}from"./plugin-DvxrtPTu.js";import{S as s}from"./Grid-DO7F6b3H.js";import{w as u}from"./appWrappers-Ctq9hYpP.js";import{T as f}from"./TemplateBackstageLogo-D099Za__.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-Kk1tbgfC.js";import"./componentData-DQOWaVke.js";import"./useAnalytics-D3GACT4p.js";import"./useApp-X1yq691v.js";import"./useRouteRef-D_Id2D0J.js";import"./index-CODaiViJ.js";import"./InfoCard-DpFXWLt7.js";import"./CardContent-DvLHyCfC.js";import"./ErrorBoundary-BzMlKn52.js";import"./ErrorPanel-DN8ONteE.js";import"./WarningPanel-HXLfvIGh.js";import"./ExpandMore-C2FNbPlx.js";import"./AccordionDetails-B2fj-Vyu.js";import"./index-DnL3XN75.js";import"./Collapse-3QWn7GeL.js";import"./MarkdownContent-C88Q8vyb.js";import"./CodeSnippet-rGysQYeG.js";import"./Box-CEQYom6P.js";import"./styled-C1nvoQOK.js";import"./CopyTextButton-DCqjj6yN.js";import"./useCopyToClipboard-BNNb4ytt.js";import"./useMountedState-bnMhxuuW.js";import"./Tooltip-BI5UYAzR.js";import"./Popper-BMjLlwdF.js";import"./Portal-BNcbVIFw.js";import"./List-DKGVLh3A.js";import"./ListContext-XM-uFlGW.js";import"./ListItem-D0VRuO7C.js";import"./ListItemText-C-jh_lXe.js";import"./LinkButton-DqUfsKlD.js";import"./Button-c7tQp0m9.js";import"./Link-_DkU0OxE.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-DRuH6Oix.js";import"./Divider-D1VqbXY-.js";import"./CardActions-rtuz2JsC.js";import"./BottomLink-Bu1U71Hp.js";import"./ArrowForward-BkEmHAuN.js";import"./DialogTitle-Bzrucudc.js";import"./Modal-DbsR11Ts.js";import"./Backdrop-CwowCUDa.js";import"./useObservable-Dyzi6Leh.js";import"./useIsomorphicLayoutEffect-Dt4gSchW.js";import"./useAsync-nf_MJHBK.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";const yo={title:"Plugins/Home/Components/CompanyLogo",decorators:[o=>u(t.jsx(a,{apis:[[c,new g({app:{title:"My App"}})]],children:t.jsx(o,{})}),{mountedRoutes:{"/hello-company-logo":d}})]},n=l(o=>({container:{margin:o.spacing(5,0)},svg:{width:"auto",height:100},path:{fill:"#7df3e1"}})),r=()=>{const{container:o}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o})})},e=()=>{const{container:o,svg:m,path:p}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o,logo:t.jsx(f,{classes:{svg:m,path:p}})})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};e.__docgenInfo={description:"",methods:[],displayName:"CustomLogo"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    container
  } = useLogoStyles();
  return <Grid container justifyContent="center" spacing={6}>
      <HomePageCompanyLogo className={container} />
    </Grid>;
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const {
    container,
    svg,
    path
  } = useLogoStyles();
  return <Grid container justifyContent="center" spacing={6}>
      <HomePageCompanyLogo className={container} logo={<TemplateBackstageLogo classes={{
      svg,
      path
    }} />} />
    </Grid>;
}`,...e.parameters?.docs?.source}}};const Co=["Default","CustomLogo"];export{e as CustomLogo,r as Default,Co as __namedExportsOrder,yo as default};
