"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[7288],{61831:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(59496),s=a(56162),n=a(3802),i=a(63120),o=a(31899),c=a(75252),l=a(97009),d=a(27532);const m="MUiWCNTfb6FcSwVPvQ1V",h="UAk3bMhekwJTV_wIyfsT",g="X9w6LPfKsZHMCs38sVIQ",u="NXn5KjeUOjLGlAfS1Gao",p="N0wgFMDDvCiby4QB5kLJ",f="nloNe2BLRHjz9dxlwfLU",x="JzXND83mXvcEuntCNR34",y="GR08E4L_rOGljyQQX30R";var j=a(4637);const v=(0,r.memo)((e=>{const{concert:t,isVirtual:a,onClick:r}=e,{venue:v,location:w}=t,N=t.artists[0],b=(0,l.CH)(t.startDate.localDate);return(0,j.jsxs)(i.Link,{to:`/concert/${t.id}`,className:m,onClick:r,children:[N.imageUri&&(0,j.jsx)(o.Z,{children:(0,j.jsx)("div",{role:"img",className:y,style:{backgroundImage:`linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(6, 6, 6, 0.6) 60%, rgba(0, 0, 0, 0.7) 100%), url(${N.imageUri})`}})}),(0,j.jsx)("time",{className:h,dateTime:t.startDate.localDate,children:(0,j.jsx)(s.D,{as:"h5",variant:"mestoBold",children:(0,l.jx)(b)})}),(0,j.jsxs)("div",{className:g,dir:"auto",children:[(0,j.jsxs)(s.D,{as:"h2",className:x,variant:"mesto",children:[(0,c.FO)(b)," • ",(0,l.hK)(b)]}),(0,j.jsx)(s.D,{as:"h2",variant:"cello",weight:"bold",className:u,children:(0,d.ij)(t)}),(0,j.jsx)("div",{className:p,children:(0,j.jsx)(s.D,{as:"h2",className:f,variant:"mesto","data-testid":"location-name",children:a?v:[v,w].join(n.ag.getSeparator())})})]})]})}))},63714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>We});var r=a(9102),s=a(61740),n=a(89605),i=a(3802),o=a(33209),c=a(25899),l=a(82710);const d=e=>{const[t,{username:a,concertUri:r}]=e.queryKey;return(async(e,t)=>{const a=await(0,l.checkConcertInCollection)(c.b.getInstance(),e,t);return a.body?.found[0]})(a,r)};var m=a(82108),h=a(59496),g=a(56162),u=a(67526),p=a(10198),f=a(2419),x=a(91703),y=a(69383),j=a(16743),v=a(73997),w=a(35725),N=a(96170),b=a(84875),k=a.n(b),C=a(63082),_=a(37433),D=a(8138),I=a(36844),S=a(66476),P=a(1996),U=a(98340),A=a(45118),L=a(91834),T=a(40778),K=a(4637);const M=h.memo((function({uri:e}){const{spec:t}=(0,A.T)(e);return(0,K.jsx)(U.ZP,{value:"concert",children:(0,K.jsxs)(P.v,{children:[(0,K.jsx)(L.q,{children:(0,K.jsx)(T.Jx,{spec:t,uri:e,displayText:i.ag.get("context-menu.copy-concert-link")})}),(0,K.jsx)(T.h$,{spec:t,uri:e})]})})}));var F=a(63120),$=a(31354),E=a(9312),V=a(13554);const H="Qy5TW6J4tm8_aomy4Shi",z=(0,h.memo)((e=>{const{spec:t,logger:a}=(0,N.fU)($.w,{}),r=(0,V.a4)(e.followers,((e,r)=>{a.logInteraction(t.planMemberFactory({uri:e,identifier:r}).hitUiNavigate({destination:e}))}));return(0,K.jsxs)("div",{className:H,children:[(0,K.jsx)(E.D,{followers:e.followers,spec:t}),(0,K.jsx)(g.D,{as:"p",variant:"mesto",children:r})]})}));var O=a(41836),Q=a(3289),R=a(59200),W=a(52210),Y=a(95663),Z=a(51783),q=a(66721);const X="rvw6x7R5AiAT48dSkFl9",J="JRuVlk6wpKk6ok7zuW6l",G="YpfopxY2udneDY34uzRN",B="KI_0F1jtTR5tWgl7gZ1E",ee="gKtc3TdowDTXBaVESi1D",te="V8TIr8yJq4tYZfPEzm12",ae="VvL91cIRcCi1hJh0K845",re="vKcnOO1GNYoLKHg4T4lK",se="LdW0YNvo_Y77hgqhL4zY",ne="cTkykhjfHxkEGKbxSxXw",ie="XgeTnLs82tTjczDR6oKn",oe="P3fE7wn6Tqnibn3gljKV",ce="A8LG_5Dvp7IiXDtdR571",le="OVY7plwgy_AKAzhgoCAF",de="O0PSSw8ttrMn9lzq_L16",me="D_ffrfn62aOgZKOFfZVr",he="OH4mOZCual2ejIodzIkL",ge="se_ixDV6hBf7lve861oU",ue="YDAJHPP5lDmg71SdvJZC",pe="lKQxSRsi8KcoYx5D7mjh",fe="LUMel_X4gQK0J1i6X0sC",xe="s1jEHgfOLzeY3WugmaoT",ye=(0,h.memo)((e=>{const{concertUri:t,position:a,ticketer:r,spec:s}=e,n=(0,N.$P)(),i=(0,Y.o)(),o=(0,h.useMemo)((()=>s.ticketProviderCellFactory({identifier:r.partnerDisplayName,position:a,uri:r.url})),[s,r.partnerDisplayName,a,r.url]),c=(0,N.Wi)(o);return(0,K.jsxs)(F.default,{to:r.url,className:ie,onClick:()=>{const e=o.hitNavigateToExternalUri({destination:r.url});n.logInteraction(e),i({targetUri:t,intent:"find-concert",type:"click"})},ref:c,children:[(0,K.jsx)("div",{className:oe,children:(0,K.jsx)(q.Ee,{loading:"eager",srcSet:r.imageURL,src:r.imageURL,height:"100%",width:"100%",children:(0,K.jsx)(W.i,{className:ce,iconSize:24})})}),(0,K.jsxs)("div",{className:de,children:[(0,K.jsx)(g.D.span,{children:r.partnerDisplayName}),(0,K.jsx)(Z.h,{className:le,iconSize:24})]})]},r.url)}));var je=a(97009);const ve=(0,h.memo)((e=>{const{concert:t,onClick:a}=e,{category:r,venue:s,location:n,lat:i,lon:o}=t;if("ONLINE"===r)return(0,K.jsx)(g.D,{as:"h3",variant:"canon",children:s});const c=new URL("https://maps.google.com/");return c.searchParams.set("q",`${s},${n}`),c.searchParams.set("ll",`${i},${o}`),(0,K.jsx)(F.default,{to:c.href,target:"_blank",onClick:()=>a(c.href),children:(0,K.jsxs)(g.D,{as:"h3",variant:"canon",children:[s,", ",n]})})})),we=(0,h.memo)((e=>{const{concert:t,ticketAvailabilityTranslated:a,entitySpec:r,isConcertSaved:s,isAnonymous:n,onInterestedClick:o,followers:d}=e,m=(0,h.useMemo)((()=>r.ticketProviderListFactory()),[r]),u=(0,N.$P)(),p=(0,N.Wi)(m),f=(0,h.useMemo)((()=>r.interestedButtonFactory()),[r]),x=(0,N.Wi)(f),y=(0,je.CH)(t.date),j=`spotify:concert:${t.id}`,[v,w]=(0,h.useState)(s),b=(0,I.W6)(O.tp);if(0===t.ticketers.length)return null;if((0,je.OF)(t.date))return(0,K.jsxs)("div",{className:se,children:[(0,K.jsx)(g.D,{as:"h3",variant:"canon",children:i.ag.get("concert_event_ended")}),(0,K.jsx)(g.D,{variant:"ballad",children:(0,K.jsx)(F.default,{to:"spotify:concerts",children:i.ag.get("concert_past_message")})})]});return(0,K.jsxs)("div",{className:se,ref:p,children:[(0,K.jsx)(g.D,{as:"h3",variant:"canon",children:(0,K.jsx)(ve,{concert:t,onClick:e=>{const t=r.venueMapLinkFactory().hitNavigateToExternalUri({destination:e});u.logInteraction(t)}})}),(0,K.jsxs)(g.D,{as:"h3",variant:"mesto",className:ue,children:[(0,je.xE)(y)," • ",(0,je.hK)(y)]}),(0,K.jsx)(g.D,{as:"h3",className:re,variant:"mesto",children:(P=t.ticketers,0===P.length?null:1===P.length?i.ag.get("concert.header.tickets_from_1",P[0].partnerDisplayName):2===P.length?i.ag.get("concert.header.tickets_from_2",P[0].partnerDisplayName,P[1].partnerDisplayName):3===P.length?i.ag.get("concert.header.tickets_from_3",P[0].partnerDisplayName,P[1].partnerDisplayName,P[2].partnerDisplayName):i.ag.get("concert.header.tickets_from_4",P[0].partnerDisplayName,P[1].partnerDisplayName,P[2].partnerDisplayName,P.length-3))}),d&&d.length>0&&(0,K.jsx)(N.Nh,{spec:r,children:(0,K.jsx)(z,{followers:d})}),a&&(0,K.jsx)(g.D,{as:"h3",className:re,variant:"mesto",children:a}),(0,K.jsxs)("div",{className:J,children:[!n&&b&&(0,K.jsx)(Q._,{label:i.ag.get("concerts_interested_tooltip"),placement:"top-end",children:(0,K.jsx)(C.P,{buttonSize:"sm",iconLeading:v?_.N:D.S,className:k()(fe,{[X]:v}),onClick:()=>{const e=f.hitUiElementToggle();u.logInteraction(e),v?((0,l.unsaveConcert)(c.b.getInstance(),t.id),o(!0,i.ag.get("concerts_removed-from-your-saved-events")),u.logInteraction(f.hitRemoveInterest())):((0,l.saveConcert)(c.b.getInstance(),t.id),o(!0,i.ag.get("concerts_added-to-your-saved-events")),u.logInteraction(f.hitAddInterest())),w(!v)},ref:x,children:i.ag.get("concerts_interested")})}),(0,K.jsx)(R.yj,{menu:(0,K.jsx)(M,{uri:j}),onShow:()=>{const e=r.contextMenuButtonFactory().hitUiReveal();u.logInteraction(e)},children:(0,K.jsx)(S.z,{size:32})})]}),(0,K.jsx)(g.D.h3,{variant:"canon",children:i.ag.get("concert.header.available_tickets_from")}),(0,K.jsx)("div",{className:ne,children:t.ticketers.map(((e,t)=>(0,K.jsx)(ye,{concertUri:j,ticketer:e,position:t,spec:m},t)))})]});var P}));var Ne=a(28604),be=a(48203),ke=a(43438),Ce=a(31899);const _e="bnxKFmECExdcmyBXx9f_",De="UrPgHWUndGwAWPfONuwd",Ie="pF2W693VDIpPdVTVCsDg",Se="YGVuy3Qzaam0CJPc_s4K",Pe="r5Kj2xQVLHK0hf_J00US",Ue="qCN2f5PHVrzAPLvQ0lNc",Ae=(0,h.memo)((e=>{const{entity:t,headliner:a,onClick:r}=e,{imageUri:s,name:n,uri:o}=t;return(0,K.jsxs)(F.Link,{to:o,className:_e,onClick:r,children:[s?(0,K.jsx)(Ce.Z,{children:(0,K.jsx)("div",{"data-testid":"image-container",className:Ue,style:{backgroundImage:`linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.5) 50.52%, rgba(18, 18, 18, 0.7) 100%), url(${s})`}})}):null,(0,K.jsxs)("div",{className:De,children:[a&&(0,K.jsx)("div",{className:Se,children:(0,K.jsx)(g.D,{as:"h4",variant:"mestoBold",className:Pe,weight:"bold",children:i.ag.get("concert.label.headliner")})}),(0,K.jsx)(g.D,{as:"h2",variant:"alto",className:Ie,children:n})]})]})})),Le=Ae,Te=(0,h.memo)((e=>{const{artist:t,albums:a,position:r,lineupArtistsSpec:s}=e,n=(0,h.useMemo)((()=>s.artistRowFactory({position:r,uri:t.uri})),[s,r,t.uri]),o=(0,N.$P)(),c=0===r,l=`${(0,ke.GJ)(t.id)}:discography`;return(0,K.jsx)(U.ZP,{value:"headered-grid",index:r,children:(0,K.jsx)(N.Nh,{spec:n||null,children:(0,K.jsx)(be.P,{title:c?i.ag.get("concert_lineup"):"",total:a.length+2,seeAllUri:l,seeAllLabel:i.ag.get("artist-page.show-discography"),onClickShelfSeeAll:()=>{const e=n.seeDiscographyLinkFactory().hitUiNavigate({destination:l});o.logInteraction(e)},children:[(0,K.jsx)(Le,{entity:t,headliner:c,onClick:()=>{const e=n.artistCardFactory().hitUiNavigate({destination:t.uri});o.logInteraction(e)}},`ConcertArtistCard-${t.id}`),null,...a.map(((e,a)=>(0,K.jsx)(Ne.r,{index:a,artists:[{uri:t.uri,name:t.name}],images:[{url:e.imageUri,width:100,height:100}],name:e.name,uri:e.uri,sharingInfo:null},e.uri)))]})})},t.uri)})),Ke=(0,h.memo)((e=>{const{albums:t,artists:a,entitySpec:r}=e,s=(0,h.useMemo)((()=>r.lineupArtistsFactory()),[r]),n=(0,N.Wi)(s),i=(0,h.useMemo)((()=>{const e={};return t.forEach((t=>{const a=t.artistName;e[a]?e[a].push(t):e[a]=[t]})),e}),[t]);return(0,K.jsx)("div",{className:me,ref:n,"data-testid":"concert-lineup",children:a.map(((e,t)=>(0,K.jsx)(Te,{artist:e,albums:i[e.name]||[],position:t,lineupArtistsSpec:s},e.uri)))})})),Me="y4xsX4QR_wfM40vOhsQ4",Fe="TPdGbM0PhSqxmhkxP9n2",$e="y33j8HV43EGq3BPkZrLA",Ee=(0,h.memo)((e=>(0,K.jsxs)(F.Link,{to:"spotify:concerts",className:Me,onClick:e.onClick,children:[(0,K.jsx)(Ce.Z,{children:(0,K.jsx)("div",{className:$e,style:{backgroundImage:"linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.5) 50.52%, rgba(18, 18, 18, 0.7) 100%), url(https://concerts.spotifycdn.com/ConcertHubCard.png)"}})}),(0,K.jsx)("div",{className:Fe,children:(0,K.jsx)(g.D,{as:"h2",variant:"canon",children:i.ag.get("concerts_browse_more")})})]})));var Ve=a(61831);const He=(0,h.memo)((e=>{const t=(0,h.useMemo)((()=>e.entitySpec.recommendedConcertsFactory()),[e.entitySpec]),a=(0,N.$P)(),r=(0,N.Wi)(t),s=e.upcomingConcerts;if(!s||s.length<1)return null;const n=s.map(((e,r)=>{const s=`spotify:concert:${e.concert.id}`;return(0,K.jsx)(Ve.Z,{concert:e.concert,onClick:()=>{const e=t.concertCardFactory({position:r,uri:s}).hitUiNavigate({destination:s});a.logInteraction(e)}},e.concert.id)}));return(0,K.jsx)("div",{className:ge,ref:r,"data-testid":"concert-recommendations",children:(0,K.jsx)(U.ZP,{value:"headered-grid",children:(0,K.jsxs)(be.P,{title:i.ag.get("concerts_more_events"),total:s.length+1,className:pe,showSeeAll:!0,seeAllUri:"spotify:concerts",seeAllLabel:i.ag.get("view.see-all"),children:[(0,K.jsx)(Ee,{onClick:()=>{const e=t.browseCardFactory().hitUiNavigate({destination:"spotify:concerts"});a.logInteraction(e)}}),n]})})})}));var ze=a(27532);const Oe=(0,h.memo)((e=>{const{data:t,isAnonymous:a,isConcertSaved:r,followers:s}=e,{artists:n,albums:i,upcomingConcerts:o}=t,c=t.concert.concert,[l,d]=(0,h.useState)(!1),[m,b]=(0,h.useState)(""),{spec:k}=(0,N.fU)(p.q,{data:{identifier:c.id,uri:`spotify:concert:${c.id}`}});return(0,w.Y)(t.color),(0,K.jsxs)("section",{className:te,children:[(0,K.jsx)(x.$,{children:(0,ze.Yl)(c)}),(0,K.jsxs)(y.gF,{backgroundImages:[{url:t.headerImageUri,width:100,height:100}],backgroundColor:t.color,children:[(0,K.jsxs)(y.sP,{children:[(0,K.jsx)(y.T0,{children:(0,K.jsx)("div",{className:G,children:(0,K.jsx)(g.D,{as:"h3",variant:"canon",className:B,children:(0,je.jx)((0,je.CH)(c.date))})})}),(0,K.jsx)(y.xd,{children:(0,ze.Yl)(c)})]}),(0,K.jsx)(j.W,{children:(0,K.jsx)("div",{className:he,children:(0,K.jsx)(v.i,{text:(0,ze.Yl)(c)})})})]}),(0,K.jsxs)("div",{className:ee,children:[(0,K.jsx)(f.I,{backgroundColor:t.color}),(0,K.jsxs)("div",{className:ae,children:[(0,K.jsx)(we,{onInterestedClick:(e,t)=>{d(e),b(t),setTimeout((()=>d(!1)),1e4)},concert:c,ticketAvailabilityTranslated:t.ticketAvailabilityTranslated,entitySpec:k,isAnonymous:a,isConcertSaved:r,followers:s}),(0,K.jsx)(Ke,{artists:n,albums:i,entitySpec:k}),(0,K.jsx)(He,{upcomingConcerts:o,entitySpec:k})]})]}),l&&(0,K.jsx)(u.A9,{colorSet:"invertedLight",className:xe,children:m})]})}));var Qe=a(66734);const Re=async e=>{const[t,a]=e.queryKey;return(await(0,l.getConcert)(c.b.getInstance(),a)).body},We=()=>{const{concertId:e=""}=(0,n.UO)(),{data:t,isLoading:a}=(0,r.useQuery)(["concert",e],Re,{staleTime:6e5}),c=(e=>{const t=["concertInCollection",e];return(0,r.useQuery)(t,d,{keepPreviousData:!1,retry:!1})})({username:(0,s.v9)(m.n5),concertUri:`spotify:concert:${e}`}),l=c?.data||!1,{isAnonymous:h}=(0,s.v9)(m.Gg),g=t?.artists.map((e=>e.uri));var u;u={artists:g},(0,r.useQuery)(["family-duo-concert-followers-aa-test",u],Qe.g,{enabled:(0,I.W6)(O.hj)});const{data:p,isLoading:f}=(e=>(0,r.useQuery)(["family-duo-concert-followers",e],Qe.g,{enabled:(0,I.W6)(O.YC),retry:!1}))({artists:g});return a||f?(0,K.jsx)(o.h,{hasError:!1,errorMessage:""}):t?(0,K.jsx)(Oe,{data:t,isAnonymous:h,isConcertSaved:l,followers:p?.followers}):(0,K.jsx)(o.h,{hasError:!0,errorMessage:i.ag.get("concert.error.concert_not_found_title")})}},66734:(e,t,a)=>{a.d(t,{g:()=>i,P:()=>n});var r=a(25899),s=a(27555);const n=async e=>{const[t,{geonameId:a}]=e.queryKey,n=await((e,t)=>e.build().withMethod("GET").withHost(s.gH).withPath("/concerts/").withEndpointIdentifier("/cooper/concerts").withQueryParameters({...t&&{geonameId:t}}).withoutMarket().send())(r.b.getInstance(),a);return n.body},i=async e=>{const[t,{artists:a}]=e.queryKey,n=await((e,t)=>e.build().withMethod("POST").withHost(s.gH).withPath("/followers/").withEndpointIdentifier("/cooper/followers").withHeaders([{key:"content-type",value:"application/json"},{key:"accept",value:"application/json"}]).withBody(JSON.stringify({artists:t})).withoutMarket().send())(r.b.getInstance(),a);return n.body}},9312:(e,t,a)=>{a.d(t,{D:()=>d});var r=a(59496),s=a(96170);const n="g4AhdK8faqTe7v8VqC3x";var i=a(4637);const o=(0,r.memo)((({alt:e})=>(0,i.jsxs)("svg",{height:8,width:8,"aria-hidden":"true",viewBox:"-8 -8 32 32",className:n,children:[(0,i.jsx)("title",{children:e}),(0,i.jsx)("path",{d:"M6.233.371a4.388 4.388 0 0 1 5.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 0 0 .201 1.13l2.209 1.275a4.75 4.75 0 0 1 2.375 4.114V16H.382v-1.143a4.75 4.75 0 0 1 2.375-4.113l2.209-1.275a.75.75 0 0 0 .201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 0 1 .904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 0 0-2.13.937 2.85 2.85 0 0 0-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 0 1-.603 3.39l-2.209 1.275A3.25 3.25 0 0 0 1.902 14.5h12.196a3.25 3.25 0 0 0-1.605-2.457l-2.209-1.275a2.25 2.25 0 0 1-.603-3.39l.127-.153.002-.001c.612-.73.997-1.52 1.052-2.442.032-.54-.067-1.097-.144-1.323a2.85 2.85 0 0 0-.588-1.022A2.888 2.888 0 0 0 8 1.5z"})]}))),c="WCQhjx2ZwtN1mwka_4wj",l=e=>{const t=(0,s.$P)(),a=`spotify:user:${e.follower.username}`;return(0,r.useEffect)((()=>{t.logImpression(e.spec.planMemberFactory({identifier:e.follower.memberId,uri:a}).impression())})),e.follower.profileImageUrl?(0,i.jsx)("img",{src:e.follower.profileImageUrl,alt:e.follower.displayName??e.follower.username},`follower-${e.follower.displayName??e.follower.username}`):(0,i.jsx)(o,{alt:e.follower.displayName},`follower-${e.follower.displayName}`)},d=(0,r.memo)((e=>(0,i.jsx)("div",{className:c,children:e.followers.map(((t,a)=>(0,i.jsx)(l,{follower:t,spec:e.spec},`follower-${a}`)))})))},13554:(e,t,a)=>{a.d(t,{FV:()=>i,a4:()=>o,ij:()=>n});var r=a(3802),s=a(4637);const n=e=>{if((e=>!!e.title&&(e.festival||!e.artists.length))(e))return e.title;const t=(e=>e.artists.map((e=>e.name)))(e);return 1===t.length?r.ag.get("concert.header.upcoming_concert_title_1",...t):2===t.length?r.ag.get("concert.header.upcoming_concert_title_2",...t):3===t.length?r.ag.get("concert.header.upcoming_concert_title_3",...t):4===t.length?r.ag.get("concert.header.upcoming_concert_title_4",...t):t.length>4?r.ag.get("concert.header.upcoming_concert_title_more",...t):""},i=e=>1===e.length?r.ag.get("web-player.family-duo-concerts-shelf.X-follows",e[0].displayName??e[0].username):r.ag.get("web-player.family-duo-concerts-shelf.X-of-your-family-follow",e.length),o=(e,t)=>{const a=e.map(((e,a)=>{const r=`spotify:user:${e.username}`;return(0,s.jsx)("a",{onClick:()=>t(r,e.memberId),href:r,children:e.displayName??e.username},`follower-name-${a}`)}));return 1===e.length?r.ag.get("web-player.family-duo-concerts-shelf.X-follows",a[0]):2===e.length?r.ag.get("web-player.family-duo-concerts-shelf.2-follow",...a):3===e.length?r.ag.get("web-player.family-duo-concerts-shelf.3-follow",...a):4===e.length?r.ag.get("web-player.family-duo-concerts-shelf.4-follow",...a):r.ag.get("web-player.family-duo-concerts-shelf.5-follow",...a)}}}]);
//# sourceMappingURL=xpui-routes-concert.js.map