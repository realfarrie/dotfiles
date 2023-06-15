"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[9540],{2179:(e,n,a)=>{a.r(n),a.d(n,{AlbumPrerelease:()=>ee});var i=a(3802),t=a(63082),l=a(79475),d=a(59496);const r=3e5,s=36e5;var o=a(72071);const m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"preReleaseMutationPayload"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PreReleasePayload"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"preRelease"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PreRelease"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"preSaved"}}]}}]}}]}}]},u={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"AlbumPrereleasePreSavedState"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"lookup"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uris"},value:{kind:"ListValue",values:[{kind:"Variable",name:{kind:"Name",value:"uri"}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PreReleaseResponseWrapper"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PreRelease"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"preSaved"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NotFound"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}}]}}]}}]}}]}}]}}]},k={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"PreSaveAlbumPrerelease"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"preSavePreReleaseToLibrary"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"preReleaseMutationPayload"}}]}}]}},...m.definitions]},c={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"RemovePreSaveAlbumPrerelease"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"removePreReleaseFromLibrary"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"preReleaseMutationPayload"}}]}}]}},...m.definitions]},v=e=>{const{data:n,invalidate:a,loading:i}=(t={uri:e},l={staleTime:r,cacheTime:s},(0,o.a)(u,t,l));var t,l;return{isPreSaved:(0,d.useMemo)((()=>{if(!n)return!1;for(const a of n.lookup)if("PreReleaseResponseWrapper"===a.__typename&&"PreRelease"===a.data.__typename&&a.data.uri===e)return a.data.preSaved;return!1}),[n,e]),isLoading:i,invalidate:a}};var p=a(9102),S=a(41921),N=a(50100),y=a(29251);const b=(e,n)=>{const{request:a}=(0,d.useContext)(S.Ax);return(0,p.useMutation)((async n=>{const i=n?k:c,t=await(0,N.J)(a,i,{uri:e}),l=t?.data;if(l)return function(e){let n;if("preSavePreReleaseToLibrary"in e&&"PreReleasePayload"===e.preSavePreReleaseToLibrary.__typename)n=e.preSavePreReleaseToLibrary.preRelease;else{if(!("removePreReleaseFromLibrary"in e)||"PreReleasePayload"!==e.removePreReleaseFromLibrary.__typename)return;n=e.removePreReleaseFromLibrary.preRelease}switch(n.__typename){case"PreRelease":return n.preSaved;case"NotFound":return!1;case"GenericError":return;default:return void(0,y._)(n)}}(l)}),{onSuccess:e=>{"boolean"==typeof e&&n(e)}})};var g=a(4637);const F=({uri:e})=>{const{isPreSaved:n,isLoading:a,addPresave:r,removePresave:s}=(e=>{const{isPreSaved:n,invalidate:a,isLoading:i}=v(e),{mutate:t,isLoading:l}=b(e,a);return{isPreSaved:n,isLoading:i||l,addPresave:(0,d.useCallback)((()=>t(!0)),[t]),removePresave:(0,d.useCallback)((()=>t(!1)),[t])}})(e);return n?(0,g.jsx)(t.P,{disabled:a,onClick:s,children:i.ag.get("web-player.album-prerelease.presaved")}):(0,g.jsx)(l.D,{disabled:a,onClick:r,children:i.ag.get("web-player.album-prerelease.presave")})};var f=a(75112);const P=({prerelease:e,backgroundColor:n})=>{let a=!1;if(e.releaseDate){a=Date.now()>new Date(e.releaseDate).getTime()}return(0,g.jsx)(f.o,{backgroundColor:n,children:(0,g.jsx)(f.F,{children:a?null:(0,g.jsx)(F,{uri:e.uri})})})};var D=a(56162),h=a(48811),R=a(84875),x=a.n(R);const _="J9GZWbcqWAQBbj0mGgBp",C="HBgE42egR1M0MoBZt7MA",T="g0_tYvLXcZhPQLQuecrg",j=({value:e,label:n,hasDivider:a=!1})=>(0,g.jsxs)("div",{className:C,children:[(0,g.jsx)(D.D,{variant:"canon",className:x()({[T]:a}),children:e}),(0,g.jsx)(D.D,{variant:"finale",semanticColor:"textSubdued",children:n})]});var A=a(7176);const w=1e3,L=60*w,I=60*L,M=24*I;const V={days:0,hours:0,minutes:0,seconds:0};function W(e){const n=function(e){return e.getTime()-(new Date).getTime()}(e);return n>0?function(e){const n=Math.abs(e);return{days:Math.floor(n/M),hours:Math.floor(n%M/I),minutes:Math.floor(n%I/L),seconds:Math.floor(n%L/w)}}(n):V}const B=({targetDate:e,className:n})=>{const{days:a,hours:t,minutes:l,seconds:r}=(e=>{const[n,a]=(0,d.useState)((()=>W(e)));return(0,A.Y)((n=>{const i=W(e);a(i),i===V&&n()}),1e3),n})(e);return(0,g.jsxs)("div",{className:x()(_,n),children:[(0,g.jsx)(j,{value:a,label:i.ag.get("web-player.album-prerelease.days",a),hasDivider:!0}),(0,g.jsx)(j,{value:t,label:i.ag.get("web-player.album-prerelease.hours",t),hasDivider:!0}),(0,g.jsx)(j,{value:l,label:i.ag.get("web-player.album-prerelease.minutes",l),hasDivider:!0}),(0,g.jsx)(j,{value:r,label:i.ag.get("web-player.album-prerelease.seconds",r)})]})};var O=a(69383),Q=a(16743),q=a(73997);const E="xjbmV4vvBCu7c5U6nAgL",G=({prerelease:e,backgroundColor:n})=>{const{content:a,releaseDate:i}=e,t=a,l=(0,d.useMemo)((()=>i?new Date(i):void 0),[i]);return(0,g.jsxs)(O.gF,{backgroundColor:n,children:[(0,g.jsx)(Q.W,{children:t.name?(0,g.jsx)(q.i,{text:t.name}):null}),(0,g.jsx)(O.Oz,{images:t.coverArt.sources,name:t.name??"",placeholderType:"album"}),(0,g.jsxs)(O.sP,{children:[(0,g.jsx)(D.D,{variant:"mestoBold",children:(0,h.R)(t.type)}),(0,g.jsx)(O.xd,{children:t.name}),(0,g.jsx)(O.QS,{creators:t.artists,releaseDate:i}),l?(0,g.jsx)(B,{targetDate:l,className:E}):null]})]})};var J=a(7656),Y=a(33209);const Z={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"albumPreRelease"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"lookup"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uris"},value:{kind:"ListValue",values:[{kind:"Variable",name:{kind:"Name",value:"uri"}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PreReleaseResponseWrapper"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"albumPreReleaseData"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NotFound"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"albumPreReleaseData"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PreRelease"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"preReleaseContent"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"artists"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"albumPreReleaseArtistItem"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"extractedColors"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorRaw"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hex"}},{kind:"Field",name:{kind:"Name",value:"isFallback"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"tracks"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}}]}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"uri"}}]}},{kind:"Field",name:{kind:"Name",value:"releaseDate"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isoString"}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"albumPreReleaseArtistItem"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ArtistResponseWrapper"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Artist"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"visuals"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"avatarImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"height"}},{kind:"Field",name:{kind:"Name",value:"width"}}]}}]}}]}}]}}]}}]}}]},H=(e,n)=>(0,o.a)(Z,e,n),z=(e,n=H)=>{const{data:a,loading:i,error:t}=n({uri:e},{staleTime:r,cacheTime:s});return{loading:i,error:!!t,prerelease:(0,d.useMemo)((()=>{if(!a)return null;for(const n of a.lookup)if("PreReleaseResponseWrapper"===n.__typename&&"PreRelease"===n.data.__typename&&n.data.uri===e)return U(n.data);return null}),[a,e])}};function U(e){const n=e.preReleaseContent;let a;return n&&(a={artists:X(n.artists.items),name:n.name??void 0,uri:n.uri,coverArt:{extractedColors:n.coverArt?.extractedColors?.colorRaw,sources:n.coverArt?.sources??[]},type:n.type,tracks:n.tracks}),{uri:e.uri,releaseDate:e.releaseDate?.isoString,content:a}}function X(e){const n=[];for(const a of e)if("Artist"===a.data.__typename)n.push({name:a.data.profile.name,id:a.data.id,uri:a.data.uri,images:a.data.visuals.avatarImage?.sources??[]});return n}var $=a(35725);const K="H2kQJCtEGTjIDaPPniwb",ee=e=>{const{uri:n}=e,{prerelease:a,loading:t,error:l}=z(n),d=(e=>{let n;return e?.content?.coverArt.extractedColors&&(n=e.content.coverArt.extractedColors.isFallback?void 0:e.content.coverArt.extractedColors.hex),(0,$.Y)(n),n})(a);return t||l||!a?(0,g.jsx)(Y.h,{hasError:!!l,errorMessage:i.ag.get("error.not_found.title.album")}):(0,g.jsxs)("section",{className:K,children:[(0,g.jsx)(J.$,{children:i.ag.get("album.page-title",a.content?.name??"")}),(0,g.jsx)(G,{prerelease:a,backgroundColor:d}),(0,g.jsx)(P,{prerelease:a,backgroundColor:d})]})}}}]);
//# sourceMappingURL=xpui-routes-album-prerelease.js.map