import{j as t,m as d,I as u,b as h,T as g}from"./iframe-DEJbD2oy.js";import{r as x}from"./plugin-CpdsZp22.js";import{S as m,u as n,a as S}from"./useSearchModal-DUkNSxgD.js";import{B as c}from"./Button-c7tQp0m9.js";import{a as f,b as M,c as j}from"./DialogTitle-Bzrucudc.js";import{B as C}from"./Box-CEQYom6P.js";import{S as r}from"./Grid-DO7F6b3H.js";import{S as y}from"./SearchType-CWHeYMrn.js";import{L as I}from"./List-DKGVLh3A.js";import{H as R}from"./DefaultResultListItem-CmS9kQFU.js";import{s as B,M as D}from"./api-DgebkQIS.js";import{S as T}from"./SearchContext-Wu2wzbBF.js";import{w as k}from"./appWrappers-Ctq9hYpP.js";import{SearchBar as v}from"./SearchBar-BNyLqYbh.js";import{a as b}from"./SearchResult-BYmt_ClF.js";import"./preload-helper-D9Z9MdNV.js";import"./index-PMSSAbdc.js";import"./Plugin-Kk1tbgfC.js";import"./componentData-DQOWaVke.js";import"./useAnalytics-D3GACT4p.js";import"./useApp-X1yq691v.js";import"./useRouteRef-D_Id2D0J.js";import"./index-CODaiViJ.js";import"./ArrowForward-BkEmHAuN.js";import"./translation-DRv4HF7P.js";import"./Page-CUXFQiyG.js";import"./useMediaQuery-DscSzKtb.js";import"./Divider-D1VqbXY-.js";import"./ArrowBackIos-Ca8fdH3_.js";import"./ArrowForwardIos-DBqqZ5xu.js";import"./translation-CDznkhDL.js";import"./Modal-DbsR11Ts.js";import"./Portal-BNcbVIFw.js";import"./Backdrop-CwowCUDa.js";import"./styled-C1nvoQOK.js";import"./ExpandMore-C2FNbPlx.js";import"./useAsync-nf_MJHBK.js";import"./useMountedState-bnMhxuuW.js";import"./AccordionDetails-B2fj-Vyu.js";import"./index-DnL3XN75.js";import"./Collapse-3QWn7GeL.js";import"./ListItem-D0VRuO7C.js";import"./ListContext-XM-uFlGW.js";import"./ListItemIcon-UaSCtvmP.js";import"./ListItemText-C-jh_lXe.js";import"./Tabs-D3pNHVGt.js";import"./KeyboardArrowRight-Cqv6ByQr.js";import"./FormLabel-LuBhA8t-.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-Bsm2g822.js";import"./InputLabel-BPeGcJgf.js";import"./Select-CeV6ppDX.js";import"./Popover-IJb73_9I.js";import"./MenuItem-fQtqrmwg.js";import"./Checkbox-BVCvLdrh.js";import"./SwitchBase-DIL4QKya.js";import"./Chip-ic_VqdlJ.js";import"./Link-_DkU0OxE.js";import"./lodash-CwBbdt2Q.js";import"./useObservable-Dyzi6Leh.js";import"./useIsomorphicLayoutEffect-Dt4gSchW.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./Search-CWQQsM9r.js";import"./useDebounce-DZJNJWOG.js";import"./InputAdornment-IlRqUbKw.js";import"./TextField-CEpFJXMo.js";import"./useElementFilter-DsoWJEtT.js";import"./EmptyState-IDWImiPu.js";import"./Progress-BLjYVlch.js";import"./LinearProgress-BBwuIHdm.js";import"./ResponseErrorPanel-YlHD14rZ.js";import"./ErrorPanel-DN8ONteE.js";import"./WarningPanel-HXLfvIGh.js";import"./MarkdownContent-C88Q8vyb.js";import"./CodeSnippet-rGysQYeG.js";import"./CopyTextButton-DCqjj6yN.js";import"./useCopyToClipboard-BNNb4ytt.js";import"./Tooltip-BI5UYAzR.js";import"./Popper-BMjLlwdF.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},ao={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>k(t.jsx(g,{apis:[[B,new D(G)]],children:t.jsx(T,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":x}})]},s=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=d(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),i=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(f,{children:t.jsxs(C,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(u,{"aria-label":"close",onClick:e,children:t.jsx(h,{})})]})}),t.jsx(M,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(y.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(I,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(R,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(j,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(S,{})})})})]})})]})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const {
    state,
    toggleModal
  } = useSearchModal();
  return <>
      <Button variant="contained" color="primary" onClick={toggleModal}>
        Toggle Search Modal
      </Button>
      <SearchModal {...state} toggleModal={toggleModal} />
    </>;
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const classes = useStyles();
  const {
    state,
    toggleModal
  } = useSearchModal();
  return <>
      <Button variant="contained" color="primary" onClick={toggleModal}>
        Toggle Custom Search Modal
      </Button>
      <SearchModal {...state} toggleModal={toggleModal}>
        {() => <>
            <DialogTitle>
              <Box className={classes.titleContainer}>
                <SearchBar className={classes.input} />

                <IconButton aria-label="close" onClick={toggleModal}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </DialogTitle>
            <DialogContent>
              <Grid container direction="column">
                <Grid item>
                  <SearchType.Tabs defaultValue="" types={[{
                value: 'custom-result-item',
                name: 'Custom Item'
              }, {
                value: 'no-custom-result-item',
                name: 'No Custom Item'
              }]} />
                </Grid>
                <Grid item>
                  <SearchResult>
                    {({
                  results
                }) => <List>
                        {results.map(({
                    document
                  }) => <div role="button" tabIndex={0} key={\`\${document.location}-btn\`} onClick={toggleModal} onKeyPress={toggleModal}>
                            <DefaultResultListItem key={document.location} result={document} />
                          </div>)}
                      </List>}
                  </SearchResult>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions className={classes.dialogActionsContainer}>
              <Grid container direction="row">
                <Grid item xs={12}>
                  <SearchResultPager />
                </Grid>
              </Grid>
            </DialogActions>
          </>}
      </SearchModal>
    </>;
}`,...i.parameters?.docs?.source}}};const lo=["Default","CustomModal"];export{i as CustomModal,s as Default,lo as __namedExportsOrder,ao as default};
