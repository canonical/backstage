import{j as t,T as i,c as m,C as a}from"./iframe-DEJbD2oy.js";import{w as n}from"./appWrappers-Ctq9hYpP.js";import{s as p,H as s}from"./plugin-CpdsZp22.js";import{c as d}from"./api-xui6xQ9x.js";import{c}from"./catalogApiMock-BijQsOPA.js";import{M as g}from"./MockStarredEntitiesApi-bLh9JYZw.js";import{s as l}from"./api-DgebkQIS.js";import{C as h}from"./CustomHomepageGrid-BSLqhIHW.js";import{H as f,a as u}from"./plugin-DvxrtPTu.js";import{e as y}from"./routes-Dzzsfdzs.js";import{s as w}from"./StarredEntitiesApi-CIgjJGbQ.js";import"./preload-helper-D9Z9MdNV.js";import"./useObservable-Dyzi6Leh.js";import"./useIsomorphicLayoutEffect-Dt4gSchW.js";import"./useAnalytics-D3GACT4p.js";import"./useAsync-nf_MJHBK.js";import"./useMountedState-bnMhxuuW.js";import"./componentData-DQOWaVke.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./index-CODaiViJ.js";import"./useApp-X1yq691v.js";import"./index-PMSSAbdc.js";import"./Plugin-Kk1tbgfC.js";import"./useRouteRef-D_Id2D0J.js";import"./ref-C0VTUPuL.js";import"./lodash-CwBbdt2Q.js";import"./get-D-T4AGr2.js";import"./_baseSlice-DkFNCYmM.js";import"./_arrayReduce-BTs_qt-z.js";import"./toNumber-DwNnq1eP.js";import"./Add-CNu1ZjAG.js";import"./Grid-DO7F6b3H.js";import"./Box-CEQYom6P.js";import"./styled-C1nvoQOK.js";import"./TextField-CEpFJXMo.js";import"./Select-CeV6ppDX.js";import"./index-DnL3XN75.js";import"./Popover-IJb73_9I.js";import"./Modal-DbsR11Ts.js";import"./Portal-BNcbVIFw.js";import"./List-DKGVLh3A.js";import"./ListContext-XM-uFlGW.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-Bsm2g822.js";import"./FormLabel-LuBhA8t-.js";import"./InputLabel-BPeGcJgf.js";import"./ListItem-D0VRuO7C.js";import"./ListItemIcon-UaSCtvmP.js";import"./ListItemText-C-jh_lXe.js";import"./Remove-DuPIE7Od.js";import"./useCopyToClipboard-BNNb4ytt.js";import"./Button-c7tQp0m9.js";import"./Divider-D1VqbXY-.js";import"./FormControlLabel-CoJtZsE1.js";import"./Checkbox-BVCvLdrh.js";import"./SwitchBase-DIL4QKya.js";import"./RadioGroup-8fLPz9sx.js";import"./MenuItem-fQtqrmwg.js";import"./translation-BJcApdQ6.js";import"./DialogTitle-Bzrucudc.js";import"./Backdrop-CwowCUDa.js";import"./Tooltip-BI5UYAzR.js";import"./Popper-BMjLlwdF.js";import"./createStyles-Bp4GwXob.js";import"./createStyles-yD3y8ldD.js";import"./ListItemAvatar-CziBX-A-.js";import"./Edit-BL2wszQ4.js";import"./Cancel-DPzqeszg.js";import"./Progress-BLjYVlch.js";import"./LinearProgress-BBwuIHdm.js";import"./ContentHeader-MPbkPo9F.js";import"./Helmet-C_Ztm_oC.js";import"./ErrorBoundary-BzMlKn52.js";import"./ErrorPanel-DN8ONteE.js";import"./WarningPanel-HXLfvIGh.js";import"./ExpandMore-C2FNbPlx.js";import"./AccordionDetails-B2fj-Vyu.js";import"./Collapse-3QWn7GeL.js";import"./MarkdownContent-C88Q8vyb.js";import"./CodeSnippet-rGysQYeG.js";import"./CopyTextButton-DCqjj6yN.js";import"./LinkButton-DqUfsKlD.js";import"./Link-_DkU0OxE.js";import"./useElementFilter-DsoWJEtT.js";import"./InfoCard-DpFXWLt7.js";import"./CardContent-DvLHyCfC.js";import"./CardHeader-DRuH6Oix.js";import"./CardActions-rtuz2JsC.js";import"./BottomLink-Bu1U71Hp.js";import"./ArrowForward-BkEmHAuN.js";const x=[{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity",title:"Mock Starred Entity!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-2",title:"Mock Starred Entity 2!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-3",title:"Mock Starred Entity 3!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-4",title:"Mock Starred Entity 4!"}}],k=c({entities:x}),o=new g;o.toggleStarred("component:default/example-starred-entity");o.toggleStarred("component:default/example-starred-entity-2");o.toggleStarred("component:default/example-starred-entity-3");o.toggleStarred("component:default/example-starred-entity-4");const me={title:"Plugins/Home/Templates",decorators:[r=>n(t.jsx(t.Fragment,{children:t.jsx(i,{apis:[[d,k],[w,o],[l,{query:()=>Promise.resolve({results:[]})}],[m,new a({backend:{baseUrl:"https://localhost:7007"}})]],children:t.jsx(r,{})})}),{mountedRoutes:{"/hello-company":p.routes.root,"/catalog/:namespace/:kind/:name":y}})]},e=()=>{const r=[{component:"HomePageSearchBar",x:0,y:0,width:12,height:5},{component:"HomePageRandomJoke",x:0,y:2,width:6,height:16},{component:"HomePageStarredEntities",x:6,y:2,width:6,height:12}];return t.jsxs(h,{config:r,rowHeight:10,children:["// Insert the allowed widgets inside the grid. User can add, organize and // remove the widgets as they want.",t.jsx(s,{}),t.jsx(f,{}),t.jsx(u,{})]})};e.__docgenInfo={description:"",methods:[],displayName:"CustomizableTemplate"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  // This is the default configuration that is shown to the user
  // when first arriving to the homepage.
  const defaultConfig = [{
    component: 'HomePageSearchBar',
    x: 0,
    y: 0,
    width: 12,
    height: 5
  }, {
    component: 'HomePageRandomJoke',
    x: 0,
    y: 2,
    width: 6,
    height: 16
  }, {
    component: 'HomePageStarredEntities',
    x: 6,
    y: 2,
    width: 6,
    height: 12
  }];
  return <CustomHomepageGrid config={defaultConfig} rowHeight={10}>
      // Insert the allowed widgets inside the grid. User can add, organize and
      // remove the widgets as they want.
      <HomePageSearchBar />
      <HomePageRandomJoke />
      <HomePageStarredEntities />
    </CustomHomepageGrid>;
}`,...e.parameters?.docs?.source}}};const ae=["CustomizableTemplate"];export{e as CustomizableTemplate,ae as __namedExportsOrder,me as default};
