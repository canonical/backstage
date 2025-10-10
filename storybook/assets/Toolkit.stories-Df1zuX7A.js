import{j as o}from"./iframe-DEJbD2oy.js";import{c as e}from"./plugin-DvxrtPTu.js";import{S as l}from"./Grid-DO7F6b3H.js";import{C as m}from"./ComponentAccordion-6U0LkJkT.js";import{w as a}from"./appWrappers-Ctq9hYpP.js";import{T as i}from"./TemplateBackstageLogoIcon-Ctie8FOe.js";import{I as s}from"./InfoCard-DpFXWLt7.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-Kk1tbgfC.js";import"./componentData-DQOWaVke.js";import"./useAnalytics-D3GACT4p.js";import"./useApp-X1yq691v.js";import"./useRouteRef-D_Id2D0J.js";import"./index-CODaiViJ.js";import"./DialogTitle-Bzrucudc.js";import"./Modal-DbsR11Ts.js";import"./Portal-BNcbVIFw.js";import"./Backdrop-CwowCUDa.js";import"./Button-c7tQp0m9.js";import"./useObservable-Dyzi6Leh.js";import"./useIsomorphicLayoutEffect-Dt4gSchW.js";import"./ExpandMore-C2FNbPlx.js";import"./AccordionDetails-B2fj-Vyu.js";import"./index-DnL3XN75.js";import"./Collapse-3QWn7GeL.js";import"./useAsync-nf_MJHBK.js";import"./useMountedState-bnMhxuuW.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./CardContent-DvLHyCfC.js";import"./ErrorBoundary-BzMlKn52.js";import"./ErrorPanel-DN8ONteE.js";import"./WarningPanel-HXLfvIGh.js";import"./MarkdownContent-C88Q8vyb.js";import"./CodeSnippet-rGysQYeG.js";import"./Box-CEQYom6P.js";import"./styled-C1nvoQOK.js";import"./CopyTextButton-DCqjj6yN.js";import"./useCopyToClipboard-BNNb4ytt.js";import"./Tooltip-BI5UYAzR.js";import"./Popper-BMjLlwdF.js";import"./List-DKGVLh3A.js";import"./ListContext-XM-uFlGW.js";import"./ListItem-D0VRuO7C.js";import"./ListItemText-C-jh_lXe.js";import"./LinkButton-DqUfsKlD.js";import"./Link-_DkU0OxE.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-DRuH6Oix.js";import"./Divider-D1VqbXY-.js";import"./CardActions-rtuz2JsC.js";import"./BottomLink-Bu1U71Hp.js";import"./ArrowForward-BkEmHAuN.js";const co={title:"Plugins/Home/Components/Toolkit",decorators:[n=>a(o.jsx(n,{}))]},r=()=>o.jsx(l,{item:!0,xs:12,md:6,children:o.jsx(e,{tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})})})}),t=()=>{const n=p=>o.jsx(m,{expanded:!0,...p});return o.jsx(s,{title:"Toolkit",noPadding:!0,children:o.jsxs(l,{item:!0,children:[o.jsx(e,{title:"Tools 1",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:n}),o.jsx(e,{title:"Tools 2",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m}),o.jsx(e,{title:"Tools 3",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"InAccordion"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <Grid item xs={12} md={6}>
      <HomePageToolkit tools={Array(8).fill({
      url: '#',
      label: 'link',
      icon: <TemplateBackstageLogoIcon />
    })} />
    </Grid>;
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const ExpandedComponentAccordion = (props: any) => <ComponentAccordion expanded {...props} />;
  return <InfoCard title="Toolkit" noPadding>
      <Grid item>
        <HomePageToolkit title="Tools 1" tools={Array(8).fill({
        url: '#',
        label: 'link',
        icon: <TemplateBackstageLogoIcon />
      })} Renderer={ExpandedComponentAccordion} />
        <HomePageToolkit title="Tools 2" tools={Array(8).fill({
        url: '#',
        label: 'link',
        icon: <TemplateBackstageLogoIcon />
      })} Renderer={ComponentAccordion} />
        <HomePageToolkit title="Tools 3" tools={Array(8).fill({
        url: '#',
        label: 'link',
        icon: <TemplateBackstageLogoIcon />
      })} Renderer={ComponentAccordion} />
      </Grid>
    </InfoCard>;
}`,...t.parameters?.docs?.source}}};const uo=["Default","InAccordion"];export{r as Default,t as InAccordion,uo as __namedExportsOrder,co as default};
