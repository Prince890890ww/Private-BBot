<!DOCTYPE html><html lang="en"><head><link rel="preload" href="/developers/hastebin/assets/css/highlight-light.css" as="style"/><meta charSet="utf-8"/><meta name="viewport" content="width=device-width"/><title>Hastebin</title><link rel="canonical" href="https://www.toptal.com/share/xahifaboca.csharp"/><meta name="description" content="Hastebin is a free web-based pastebin service for storing and sharing text and code snippets with anyone. Get started now."/><link rel="shortcut icon" href="/developers/hastebin/hb-favicon.ico"/><meta name="robots" content="follow, index"/><script>
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer', 'GTM-K4WD79L');
        </script><link rel="stylesheet" href="/developers/hastebin/assets/css/highlight-light.css"/><meta name="next-head-count" content="10"/><script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-21104039-1"></script><script>
            window.dataLayer = window.dataLayer || [];

            function gtag(){dataLayer.push(arguments);}

            gtag('js', new Date());

            gtag('config', 'UA-21104039-1', {
              page_path: window.location.pathname,
'content_group1': 'Hastebin',
'custom_map': { 'dimension10': 'client_id' },
            });

            setTimeout(function() {
              gtag('event', 'read', { 'event_category': '15_seconds' });
          }, 15000);
          </script><link rel="preload" href="/developers/hastebin/_next/static/css/fc11a0f2b27e23c8.css" as="style"/><link rel="stylesheet" href="/developers/hastebin/_next/static/css/fc11a0f2b27e23c8.css" data-n-g=""/><link rel="preload" href="/developers/hastebin/_next/static/css/32572396b618f0d4.css" as="style"/><link rel="stylesheet" href="/developers/hastebin/_next/static/css/32572396b618f0d4.css" data-n-p=""/><noscript data-n-css=""></noscript><script defer="" nomodule="" src="/developers/hastebin/_next/static/chunks/polyfills-0d1b80a048d4787e.js"></script><script src="/developers/hastebin/_next/static/chunks/webpack-b69204a725f88efd.js" defer=""></script><script src="/developers/hastebin/_next/static/chunks/framework-962364a4280fdf88.js" defer=""></script><script src="/developers/hastebin/_next/static/chunks/main-311254df61dbfa6e.js" defer=""></script><script src="/developers/hastebin/_next/static/chunks/pages/_app-1b4f234ee2ba5f07.js" defer=""></script><script src="/developers/hastebin/_next/static/chunks/735-d64ad5274d88a1dc.js" defer=""></script><script src="/developers/hastebin/_next/static/chunks/33-cd8baec3679e4b72.js" defer=""></script><script src="/developers/hastebin/_next/static/chunks/155-5051513b16420c3b.js" defer=""></script><script src="/developers/hastebin/_next/static/chunks/8-b5ff1b135f1b02ed.js" defer=""></script><script src="/developers/hastebin/_next/static/chunks/841-c11a81c1209c96de.js" defer=""></script><script src="/developers/hastebin/_next/static/chunks/615-f48dd378ea36c8cd.js" defer=""></script><script src="/developers/hastebin/_next/static/chunks/pages/share/%5BbinId%5D-c77ce1da75a57b18.js" defer=""></script><script src="/developers/hastebin/_next/static/OSVs6B3U1pmTxEeGK2s8w/_buildManifest.js" defer=""></script><script src="/developers/hastebin/_next/static/OSVs6B3U1pmTxEeGK2s8w/_ssgManifest.js" defer=""></script><style id="jss-server-side">.MuiButtonBase-root {
  color: inherit;
  border: 0;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  outline: 0;
  padding: 0;
  position: relative;
  align-items: center;
  user-select: none;
  border-radius: 0;
  vertical-align: middle;
  -moz-appearance: none;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
}
.MuiButtonBase-root::-moz-focus-inner {
  border-style: none;
}
.MuiButtonBase-root.Mui-disabled {
  cursor: default;
  pointer-events: none;
}
@media print {
  .MuiButtonBase-root {
    color-adjust: exact;
  }
}
  .MuiTypography-root {
    margin: 0;
  }
  .MuiTypography-body2 {
    font-size: 1rem;
    font-family: proxima-nova,Arial,sans-serif;
    font-weight: 400;
    line-height: 1.43;
  }
  .MuiTypography-body1 {
    color: #455065;
    font-size: 14px;
    font-family: proxima-nova,Arial,sans-serif;
    font-weight: 400;
    line-height: 22px;
  }
  .MuiTypography-caption {
    font-size: 0.8571428571428571rem;
    font-family: proxima-nova,Arial,sans-serif;
    font-weight: 400;
    line-height: 1.66;
  }
  .MuiTypography-button {
    font-size: 1rem;
    font-family: proxima-nova,Arial,sans-serif;
    font-weight: 500;
    line-height: 1.75;
    text-transform: uppercase;
  }
  .MuiTypography-h1 {
    color: #000;
    font-size: 28px;
    font-family: proxima-nova,Arial,sans-serif;
    font-weight: 600;
    line-height: 42px;
  }
  .MuiTypography-h2 {
    color: #000;
    font-size: 20px;
    font-family: proxima-nova,Arial,sans-serif;
    font-weight: 600;
    line-height: 30px;
  }
  .MuiTypography-h3 {
    color: #000;
    font-size: 16px;
    font-family: proxima-nova,Arial,sans-serif;
    font-weight: 600;
    line-height: 24px;
  }
  .MuiTypography-h4 {
    color: #000;
    font-size: 14px;
    font-family: proxima-nova,Arial,sans-serif;
    font-weight: 600;
    line-height: 22px;
  }
  .MuiTypography-h5 {
    font-size: 1.7142857142857142rem;
    font-family: proxima-nova,Arial,sans-serif;
    font-weight: 400;
    line-height: 1.334;
  }
  .MuiTypography-h6 {
    font-size: 1.4285714285714284rem;
    font-family: proxima-nova,Arial,sans-serif;
    font-weight: 500;
    line-height: 1.6;
  }
  .MuiTypography-subtitle1 {
    font-size: 1.1428571428571428rem;
    font-family: proxima-nova,Arial,sans-serif;
    font-weight: 400;
    line-height: 1.75;
  }
  .MuiTypography-subtitle2 {
    font-size: 1rem;
    font-family: proxima-nova,Arial,sans-serif;
    font-weight: 500;
    line-height: 1.57;
  }
  .MuiTypography-overline {
    font-size: 0.8571428571428571rem;
    font-family: proxima-nova,Arial,sans-serif;
    font-weight: 400;
    line-height: 2.66;
    text-transform: uppercase;
  }
  .MuiTypography-srOnly {
    width: 1px;
    height: 1px;
    overflow: hidden;
    position: absolute;
  }
  .MuiTypography-alignLeft {
    text-align: left;
  }
  .MuiTypography-alignCenter {
    text-align: center;
  }
  .MuiTypography-alignRight {
    text-align: right;
  }
  .MuiTypography-alignJustify {
    text-align: justify;
  }
  .MuiTypography-noWrap {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .MuiTypography-gutterBottom {
    margin-bottom: 0.35em;
  }
  .MuiTypography-paragraph {
    margin-bottom: 16px;
  }
  .MuiTypography-colorInherit {
    color: inherit;
  }
  .MuiTypography-colorPrimary {
    color: #455065;
  }
  .MuiTypography-colorSecondary {
    color: #f50057;
  }
  .MuiTypography-colorTextPrimary {
    color: #000000;
  }
  .MuiTypography-colorTextSecondary {
    color: rgba(0, 0, 0, 0.54);
  }
  .MuiTypography-colorError {
    color: #d42551;
  }
  .MuiTypography-displayInline {
    display: inline;
  }
  .MuiTypography-displayBlock {
    display: block;
  }
@media print {
  .MuiDialog-root {
    position: absolute !important;
  }
}
  .MuiDialog-scrollPaper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .MuiDialog-scrollBody {
    overflow-x: hidden;
    overflow-y: auto;
    text-align: center;
  }
  .MuiDialog-scrollBody:after {
    width: 0;
    height: 100%;
    content: "";
    display: inline-block;
    vertical-align: middle;
  }
  .MuiDialog-container {
    height: 100%;
    outline: 0;
  }
@media print {
  .MuiDialog-container {
    height: auto;
  }
}
  .MuiDialog-paper {
    margin: 32px;
    position: relative;
    overflow-y: auto;
  }
@media print {
  .MuiDialog-paper {
    box-shadow: none;
    overflow-y: visible;
  }
}
  .MuiDialog-paperScrollPaper {
    display: flex;
    max-height: calc(100% - 64px);
    flex-direction: column;
  }
  .MuiDialog-paperScrollBody {
    display: inline-block;
    text-align: left;
    vertical-align: middle;
  }
  .MuiDialog-paperWidthFalse {
    max-width: calc(100% - 64px);
  }
  .MuiDialog-paperWidthXs {
    max-width: 444px;
  }
@media (max-width:507.95px) {
  .MuiDialog-paperWidthXs.MuiDialog-paperScrollBody {
    max-width: calc(100% - 64px);
  }
}
  .MuiDialog-paperWidthSm {
    max-width: 576px;
  }
@media (max-width:639.95px) {
  .MuiDialog-paperWidthSm.MuiDialog-paperScrollBody {
    max-width: calc(100% - 64px);
  }
}
  .MuiDialog-paperWidthMd {
    max-width: 768px;
  }
@media (max-width:831.95px) {
  .MuiDialog-paperWidthMd.MuiDialog-paperScrollBody {
    max-width: calc(100% - 64px);
  }
}
  .MuiDialog-paperWidthLg {
    max-width: 992px;
  }
@media (max-width:1055.95px) {
  .MuiDialog-paperWidthLg.MuiDialog-paperScrollBody {
    max-width: calc(100% - 64px);
  }
}
  .MuiDialog-paperWidthXl {
    max-width: 1920px;
  }
@media (max-width:1983.95px) {
  .MuiDialog-paperWidthXl.MuiDialog-paperScrollBody {
    max-width: calc(100% - 64px);
  }
}
  .MuiDialog-paperFullWidth {
    width: calc(100% - 64px);
  }
  .MuiDialog-paperFullScreen {
    width: 100%;
    height: 100%;
    margin: 0;
    max-width: 100%;
    max-height: none;
    border-radius: 0;
  }
  .MuiDialog-paperFullScreen.MuiDialog-paperScrollBody {
    margin: 0;
    max-width: 100%;
  }
  .MuiDrawer-docked {
    flex: 0 0 auto;
  }
  .MuiDrawer-paper {
    top: 0;
    flex: 1 0 auto;
    height: 100%;
    display: flex;
    outline: 0;
    z-index: 1200;
    position: fixed;
    max-width: 100%;
    overflow-y: auto;
    flex-direction: column;
    -webkit-overflow-scrolling: touch;
  }
  .MuiDrawer-paperAnchorLeft {
    left: 0;
    right: auto;
  }
  .MuiDrawer-paperAnchorRight {
    left: auto;
    right: 0;
  }
  .MuiDrawer-paperAnchorTop {
    top: 0;
    left: 0;
    right: 0;
    bottom: auto;
    height: auto;
    max-height: 100%;
  }
  .MuiDrawer-paperAnchorBottom {
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
    height: auto;
    max-height: 100%;
  }
  .MuiDrawer-paperAnchorDockedLeft {
    border-right: 1px solid rgba(0, 0, 0, 0.12);
  }
  .MuiDrawer-paperAnchorDockedTop {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }
  .MuiDrawer-paperAnchorDockedRight {
    border-left: 1px solid rgba(0, 0, 0, 0.12);
  }
  .MuiDrawer-paperAnchorDockedBottom {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
  }
  .MuiLink-root {
    cursor: pointer;
  }
  .MuiLink-underlineNone {
    text-decoration: none;
  }
  .MuiLink-underlineHover {
    text-decoration: none;
  }
  .MuiLink-underlineHover:hover {
    text-decoration: underline;
  }
  .MuiLink-underlineAlways {
    text-decoration: underline;
  }
  .MuiLink-button {
    border: 0;
    cursor: pointer;
    margin: 0;
    outline: 0;
    padding: 0;
    position: relative;
    user-select: none;
    border-radius: 0;
    vertical-align: middle;
    -moz-appearance: none;
    background-color: transparent;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }
  .MuiLink-button::-moz-focus-inner {
    border-style: none;
  }
  .MuiLink-button.Mui-focusVisible {
    outline: auto;
  }
  .MuiTooltip-popper {
    z-index: 1500;
    pointer-events: none;
  }
  .MuiTooltip-popperInteractive {
    pointer-events: auto;
  }
  .MuiTooltip-popperArrow[x-placement*="bottom"] .MuiTooltip-arrow {
    top: 0;
    left: 0;
    margin-top: -0.71em;
    margin-left: 4px;
    margin-right: 4px;
  }
  .MuiTooltip-popperArrow[x-placement*="top"] .MuiTooltip-arrow {
    left: 0;
    bottom: 0;
    margin-left: 4px;
    margin-right: 4px;
    margin-bottom: -0.71em;
  }
  .MuiTooltip-popperArrow[x-placement*="right"] .MuiTooltip-arrow {
    left: 0;
    width: 0.71em;
    height: 1em;
    margin-top: 4px;
    margin-left: -0.71em;
    margin-bottom: 4px;
  }
  .MuiTooltip-popperArrow[x-placement*="left"] .MuiTooltip-arrow {
    right: 0;
    width: 0.71em;
    height: 1em;
    margin-top: 4px;
    margin-right: -0.71em;
    margin-bottom: 4px;
  }
  .MuiTooltip-popperArrow[x-placement*="left"] .MuiTooltip-arrow::before {
    transform-origin: 0 0;
  }
  .MuiTooltip-popperArrow[x-placement*="right"] .MuiTooltip-arrow::before {
    transform-origin: 100% 100%;
  }
  .MuiTooltip-popperArrow[x-placement*="top"] .MuiTooltip-arrow::before {
    transform-origin: 100% 0;
  }
  .MuiTooltip-popperArrow[x-placement*="bottom"] .MuiTooltip-arrow::before {
    transform-origin: 0 100%;
  }
  .MuiTooltip-tooltip {
    color: #fff;
    padding: 4px 8px;
    font-size: 0.7142857142857142rem;
    max-width: 300px;
    word-wrap: break-word;
    font-family: proxima-nova,Arial,sans-serif;
    font-weight: 500;
    line-height: 1.4em;
    border-radius: 4px;
    background-color: rgba(97, 97, 97, 0.9);
  }
  .MuiTooltip-tooltipArrow {
    margin: 0;
    position: relative;
  }
  .MuiTooltip-arrow {
    color: rgba(97, 97, 97, 0.9);
    width: 1em;
    height: 0.71em;
    overflow: hidden;
    position: absolute;
    box-sizing: border-box;
  }
  .MuiTooltip-arrow::before {
    width: 100%;
    height: 100%;
    margin: auto;
    content: "";
    display: block;
    transform: rotate(45deg);
    background-color: currentColor;
  }
  .MuiTooltip-touch {
    padding: 8px 16px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.14286em;
  }
  .MuiTooltip-tooltipPlacementLeft {
    margin: 0 24px ;
    transform-origin: right center;
  }
@media (min-width:576px) {
  .MuiTooltip-tooltipPlacementLeft {
    margin: 0 14px;
  }
}
  .MuiTooltip-tooltipPlacementRight {
    margin: 0 24px;
    transform-origin: left center;
  }
@media (min-width:576px) {
  .MuiTooltip-tooltipPlacementRight {
    margin: 0 14px;
  }
}
  .MuiTooltip-tooltipPlacementTop {
    margin: 24px 0;
    transform-origin: center bottom;
  }
@media (min-width:576px) {
  .MuiTooltip-tooltipPlacementTop {
    margin: 14px 0;
  }
}
  .MuiTooltip-tooltipPlacementBottom {
    margin: 24px 0;
    transform-origin: center top;
  }
@media (min-width:576px) {
  .MuiTooltip-tooltipPlacementBottom {
    margin: 14px 0;
  }
}
  .jss23 {
    border: 1px solid undefined;
  }
  .jss24 {
    border-radius: 8px;
  }
  .jss25 {
    display: flex;
  }
  .jss25.jss27 {
    display: inline-flex;
  }
  .jss26 {
    flex-direction: column;
  }
  .jss27 {
    display: inline-block;
  }
  .jss28 {
    background-color: #fff;
  }
  .jss29 {
    background-color: #fbedf1;
  }
  .jss30 {
    background-color: #eafbf5;
  }
  .jss31 {
    background-color: #fff5e3;
  }
  .jss33 {
    background-color: #f3f4f6;
  }
  .jss34 {
    padding: 0.5rem;
  }
  .jss35 {
    padding: 1rem;
  }
  .jss36 {
    padding: 1.5rem;
  }
  .jss37 {
    padding: 2rem;
  }
  .jss38 {
    padding: 2.5rem;
  }
  .jss39 {
    margin-top: 0.5rem;
  }
  .jss40 {
    margin-top: 1rem;
  }
  .jss41 {
    margin-top: 1.5rem;
  }
  .jss42 {
    margin-top: 2rem;
  }
  .jss43 {
    margin-top: 2.5rem;
  }
  .jss44 {
    margin-left: 0.5rem;
  }
  .jss45 {
    margin-left: 1rem;
  }
  .jss46 {
    margin-left: 1.5rem;
  }
  .jss47 {
    margin-left: 2rem;
  }
  .jss48 {
    margin-left: 2.5rem;
  }
  .jss49 {
    margin-bottom: 0.5rem;
  }
  .jss50 {
    margin-bottom: 1rem;
  }
  .jss51 {
    margin-bottom: 1.5rem;
  }
  .jss52 {
    margin-bottom: 2rem;
  }
  .jss53 {
    margin-bottom: 2.5rem;
  }
  .jss54 {
    margin-right: 0.5rem;
  }
  .jss55 {
    margin-right: 1rem;
  }
  .jss56 {
    margin-right: 1.5rem;
  }
  .jss57 {
    margin-right: 2rem;
  }
  .jss58 {
    margin-right: 2.5rem;
  }
  .jss59 {
    align-items: flex-start;
  }
  .jss60 {
    align-items: flex-end;
  }
  .jss61 {
    align-items: center;
  }
  .jss62 {
    align-items: stretch;
  }
  .jss63 {
    align-items: baseline;
  }
  .jss64 {
    justify-content: flex-start;
  }
  .jss65 {
    justify-content: flex-end;
  }
  .jss66 {
    justify-content: center;
  }
  .jss67 {
    justify-content: space-between;
  }
  .jss68 {
    justify-content: space-around;
  }
  .jss69 {
    justify-content: space-evenly;
  }
  .jss70 {
    text-align: inherit;
  }
  .jss71 {
    text-align: left;
  }
  .jss72 {
    text-align: center;
  }
  .jss73 {
    text-align: right;
  }
  .jss74 {
    text-align: justify;
  }
  .jss75 {
    gap: 0.5rem;
  }
  .jss76 {
    gap: 1rem;
  }
  .jss77 {
    gap: 1.5rem;
  }
  .jss78 {
    gap: 2rem;
  }
  .jss79 {
    gap: 2.5rem;
  }
  .jss163 {
    text-decoration: none;
  }
  .jss163:focus {
    outline: none;
  }
  .jss163[role="button"] {
    font-size: 1rem;
  }
  .jss163:hover, .jss163.jss169 {
    text-decoration: underline;
  }
  .jss164:hover {
    text-decoration: none;
  }
  .jss164.jss169 {
    text-decoration: underline;
  }
  .jss165 {
    font-weight: 600;
    text-decoration: none;
  }
  .jss165.jss169 {
    opacity: 48%;
    text-decoration: none;
  }
  .jss167:visited, .jss167.jss166 {
    color: #6727cf;
  }
  .jss168 {
    color: #fff;
    text-decoration: underline;
  }
  .jss168:visited, .jss168.jss166 {
    color: #c4c6ca;
  }
  .jss168.jss164 {
    text-decoration: none;
  }
  .jss169 {
    color: #84888e;
    cursor: not-allowed;
  }
  .jss170 {
    display: block;
    text-decoration: none;
  }
  .jss125 {
    color: #000000;
    font-size: 11px;
    font-weight: 400;
    line-height: 16px;
  }
  .jss126 {
    color: #000000;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  }
  .jss127 {
    color: #000000;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
  }
  .jss128 {
    color: #000000;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
  .jss129 {
    color: #000000;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  .jss130 {
    color: #000000;
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5em;
  }
  .jss131 {
    color: #000000;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }
  .jss132 {
    font-weight: 400;
  }
  .jss133 {
    font-weight: 600;
  }
  .jss134 {
    font-weight: inherit;
  }
  .jss135 {
    color: #03b080;
  }
  .jss136 {
    color: #d42551;
  }
  .jss137 {
    color: #e59c01;
  }
  .jss138 {
    color: #d8d9dc;
  }
  .jss139 {
    color: #c4c6ca;
  }
  .jss140 {
    color: #000000;
  }
  .jss141 {
    color: #000000;
  }
  .jss142 {
    color: #25a9ef;
  }
  .jss143 {
    color: #fff;
  }
  .jss144 {
    color: inherit;
  }
  .jss146 {
    text-decoration: underline;
    text-decoration-style: solid;
  }
  .jss147 {
    text-decoration: underline;
    text-decoration-style: dashed;
  }
  .jss148 {
    text-decoration: line-through;
  }
  .jss2 {
    border: solid 1px #d8d9dc;
    position: relative;
    font-size: 1rem;
    box-shadow: none;
    flex-shrink: 0;
    border-radius: 4px;
    text-transform: none;
    transition-duration: 350ms;
    transition-property: border, color, background;
    transition-timing-function: cubic-bezier(0.0, 0, 0.2, 1);
  }
  .jss2.jss18, .jss2.jss15 {
    box-shadow: 0 0 0 3px rgba(69, 80, 101, 0.48);
  }
  .jss2+.jss2 {
    margin-left: 1rem;
  }
  .jss3 {
    font-weight: 600;
    line-height: 1.5em;
    white-space: nowrap;
  }
  .jss4 {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
  }
  .jss5 {
    height: 1.5em;
    padding: 0 0.75em;
    min-width: 3.5em;
  }
  .jss5 .jss3 {
    font-size: 12px;
    line-height: 15px;
  }
  .jss5 .jss20 {
    margin-left: -0.125em;
  }
  .jss5 .jss21 {
    margin-right: -0.125em;
  }
  .jss6 {
    height: 2em;
    padding: 0 1em;
    min-width: 4em;
  }
  .jss6 .jss3 {
    font-size: 13px;
    line-height: 16px;
  }
  .jss6 .jss20 {
    margin-left: -0.25em;
  }
  .jss6 .jss21 {
    margin-right: -0.25em;
  }
  .jss7 {
    height: 3em;
    padding: 0 2em;
    min-width: 6em;
  }
  .jss7 .jss3 {
    font-size: 15px;
    line-height: 18px;
  }
  .jss7 .jss20 {
    margin-left: -0.5em;
  }
  .jss7 .jss21 {
    margin-right: -0.5em;
  }
  .jss8 {
    color: #fff;
    border: none;
    background-color: #455065;
  }
  .jss8:hover, .jss8.jss14 {
    background-color: #616B7C;
  }
  .jss8:active, .jss8.jss16 {
    background-color: #394254;
  }
  .jss8.jss8.jss8:visited {
    color: #fff;
  }
  .jss8.jss17 {
    background-color: #d8d9dc;
  }
  .jss9 {
    color: #fff;
    border: none;
    background-color: #d42551;
  }
  .jss9:hover, .jss9.jss14 {
    background-color: #DB466B;
  }
  .jss9:active, .jss9.jss16 {
    background-color: #B01F43;
  }
  .jss9.jss9.jss9:visited {
    color: #fff;
  }
  .jss9.jss17 {
    background-color: #d8d9dc;
  }
  .jss10 {
    color: #fff;
    border: none;
    background-color: #455065;
  }
  .jss10:hover, .jss10.jss14 {
    background-color: #616B7C;
  }
  .jss10:active, .jss10.jss16 {
    background-color: #394254;
  }
  .jss10.jss10.jss10:visited {
    color: #fff;
  }
  .jss10.jss17 {
    background-color: #d8d9dc;
  }
  .jss11 {
    color: #000000;
    background-color: #fff;
  }
  .jss11:hover, .jss11.jss14 {
    border-color: #000000;
  }
  .jss11.jss11.jss11:visited {
    color: #000000;
  }
  .jss11.jss17 {
    color: #c4c6ca;
    border-color: #c4c6ca;
    background-color: #fff;
  }
  .jss11:active, .jss11.jss16 {
    border-color: #000000;
  }
  .jss12 {
    color: #fff;
    border: solid 1px rgba(255, 255, 255, 0.32);
  }
  .jss12.jss12.jss12:visited {
    color: #fff;
  }
  .jss12.jss18, .jss12.jss15 {
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.48);
  }
  .jss12:hover, .jss12.jss14 {
    border-color: #fff;
  }
  .jss12:active, .jss12.jss16 {
    border-color: #fff;
    background-color: rgba(255, 255, 255, 0.16);
  }
  .jss12.jss17 {
    color: rgba(255, 255, 255, 0.32);
    border-color: rgba(255, 255, 255, 0.32);
    background-color: initial;
  }
  .jss13 {
    width: 100%;
  }
  .jss16 {
    box-shadow: none;
  }
  .jss19 {
    flex: 1 1 0%;
    font-size: 1.2em !important;
  }
  .jss20 {
    margin-right: 0.5em;
  }
  .jss21 {
    margin-left: 0.5em;
  }
  .jss22 {
    opacity: 0;
  }
  .jss94 {
    flex: 1;
    position: relative;
    max-width: 100%;
  }
  .jss95 {
    flex: 1;
  }
  .jss96 {
    top: 1rem;
    right: 1.5rem;
    position: absolute;
  }
  .jss97 {
    width: 27.5rem;
  }
  .jss98 {
    width: 35rem;
  }
  .jss99 {
    width: 40rem;
  }
  .jss100 {
    width: 60rem;
  }
  .jss101 {
    width: 73.75rem;
  }
  .jss80 {
    fill: currentColor;
    height: 1em;
    display: inline-block;
    font-size: inherit;
    vertical-align: -.125em;
  }
  .jss81 {
    color: #455065;
  }
  .jss82 {
    color: #03b080;
  }
  .jss83 {
    color: #d42551;
  }
  .jss84 {
    color: #25a9ef;
  }
  .jss85 {
    color: #455065;
  }
  .jss86 {
    color: #e59c01;
  }
  .jss87 {
    color: #fff;
  }
  .jss88 {
    color: #d8d9dc;
  }
  .jss89 {
    color: #c4c6ca;
  }
  .jss90 {
    color: #000000;
  }
  .jss91 {
    color: #000000;
  }
  .jss92 {
    color: #fff;
  }
  .jss93 {
    color: inherit;
  }
  .jss154 {
    display: flex;
    font-size: 1rem;
    flex-direction: column;
  }
  .jss156 {
    height: auto;
    margin: 2rem;
    max-width: calc(100% - 6rem);
    max-height: calc(100% - 6rem);
    border-radius: 8px;
  }
@media (max-width: 576px) {
  .jss156 {
    margin: 1rem;
    max-width: calc(100% - 2rem);
    max-height: calc(100% - 2rem);
  }
}
  .jss157 {
    width: 32.5rem;
  }
  .jss158 {
    width: 40.625rem;
  }
  .jss159 {
    width: 50rem;
  }
  .jss160 {
    width: calc(100% - 6rem);
    height: calc(100% - 6rem);
  }
  .jss161 {
    top: 0;
    position: absolute;
    max-height: calc(100% - 4rem);
  }
@media (max-width: 576px) {
  .jss161 {
    max-height: calc(100% - 2rem);
  }
}
  .jss162 {
    top: 2em;
    right: 2em;
    position: absolute;
  }

  .jss149 {
    color: #fff;
    padding: 1rem;
    position: relative;
    box-shadow: 0 0 4px 0 rgba(0,0,0, 0.24), 0 0 32px 0 rgba(0,0,0, 0.12);
    border-radius: 4px;
    background-color: #262d3d;
  }
  .jss150 {
    color: #fff;
    font-size: 1rem;
    box-sizing: border-box;
  }
  .jss150::before {
    box-shadow: 0 0 2px 0 rgb(0 0 0 / 24%), 0 0 4px 0 rgb(0 0 0 / 12%);
  }
  .jss151 {
    color: #262d3d;
    background-color: #fff;
  }
  .jss152 {
    margin: 0.25rem;
    padding: 0.125rem 0.5rem;
    line-height: 1em;
  }
  .jss153 {
    max-width: none;
  }
  .jss111 {
    fill: currentColor;
    height: 1em;
    display: inline-block;
    font-size: inherit;
    vertical-align: -.125em;
  }
  .jss112 {
    color: #455065;
  }
  .jss113 {
    color: #03b080;
  }
  .jss114 {
    color: #d42551;
  }
  .jss115 {
    color: #25a9ef;
  }
  .jss116 {
    color: #455065;
  }
  .jss117 {
    color: #e59c01;
  }
  .jss118 {
    color: #fff;
  }
  .jss119 {
    color: #d8d9dc;
  }
  .jss120 {
    color: #c4c6ca;
  }
  .jss121 {
    color: #000000;
  }
  .jss122 {
    color: #000000;
  }
  .jss123 {
    color: #fff;
  }
  .jss124 {
    color: inherit;
  }
  .jss102 {
    width: 1.5em;
    padding: 0;
    min-width: initial;
    border-radius: 50%;
  }
  .jss104 {
    color: #455065;
    border: none;
    background-color: initial;
  }
  .jss104:active, .jss104.jss109 {
    background-color: #d8d9dc;
  }
  .jss104.jss106 {
    color: #455065;
    opacity: 0.48;
    background-color: initial;
  }
  .jss105 {
    color: #fff;
    border: none;
    background-color: initial;
  }
  .jss105.jss110, .jss105.jss108 {
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.48);
  }
  .jss105:hover, .jss105.jss107 {
    background-color: rgba(255, 255, 255, 0.08);
  }
  .jss105:active, .jss105.jss109 {
    background-color: rgba(255, 255, 255, 0.16);
  }
  .jss105.jss106 {
    color: rgba(255, 255, 255, 0.48);
    background-color: initial;
  }</style></head><body><div id="__next"><div class="theme_skeleton-theme__8qOl9"><div class="jss1"><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K4WD79L" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><div aria-disabled="false" class="layout_layout__EGq_i" data-testid="layout"><header class="header-module_header__f-oMp"><div class="header-module_container__Gjarp"><a tabindex="0" class="header-module_tagline__DFp0a" data-testid="tag-line-link"><h1 class="" title="Hastebin">Hastebin</h1></a></div><div><div><button class="MuiButtonBase-root jss6 jss8 jss2 menu-drawer-module_button__n2n48" tabindex="0" type="button" data-testid="menu-drawer-button" aria-label="Open menu" data-component-type="button"><span class="jss61 jss25 jss27 jss3"><svg viewBox="0 0 24 24" class="jss80" style="min-width:24px;min-height:24px"><path d="M0 19h24v1H0v-1Zm0-7h24v1H0v-1Zm0-7h24v1H0V5Z"></path></svg></span></button></div></div></header><div class="jss25 layout_container__VLfC8"><main data-testid="layout-main" class="layout_main__4J_cK BinPage_editor-container__kSIqZ BinPage_shared-page-editor-container__8uWrh"><div class="editor_container__yBlhW"><div class="editor_editor__KsuYY editor_editor-disabled__zZypJ"><div class="editor_editor-lines__LLW5v" data-testid="line-number"><span>1</span></div><pre tabindex="0" data-testid="highlighted-textarea" class="editor_code-preview__cix3H"><code role="code" class="">We're sorry, but the contents of the bin could not be found, or it has been deleted.</code></pre></div><div class="copy-text-button_container__5VdOZ editor_copy-button__u3_jQ"><button class="MuiButtonBase-root jss5 jss8 jss2 jss103 jss102 copy-text-button_copy-button__h8HRZ" tabindex="0" type="button" aria-label="Copy Code" data-testid="copy-button" data-component-type="button"><span class="jss61 jss25 jss27 jss3"><svg viewBox="0 0 24 24" class="jss111 jss19 jss118" style="min-width:24px;min-height:24px"><path d="M19 2H2v17H1V1h18v1ZM5 5h18v18H5V5Zm1 1v16h16V6H6Z"></path></svg></span></button></div></div><p class="MuiTypography-root jss130 jss140 BinPage_contact-support__32cMs MuiTypography-body1" data-testid="contact-support-text"><span>For immediate assistance, please email our customer support: </span><a tabindex="0" class="contact-support_link__JkKxQ" target="_blank" rel="noopener noreferrer" href="/cdn-cgi/l/email-protection#f4878184849b8680b4809b84809598da979b99"><span class="__cf_email__" data-cfemail="32414742425d404672465d4246535e1c515d5f">[email&#160;protected]</span></a></p></main><div role="region" data-testid="layout-main-cta-container" class="layout_cta-container__5VgcN buttons_buttons-container___fLlt"><button class="MuiButtonBase-root jss6 jss11 jss2 buttons_secondary-button__PVs90" tabindex="0" type="button" id="new-text-button" data-component-type="button"><span class="jss61 jss25 jss27 jss3">Start a New Text</span></button><button class="MuiButtonBase-root jss6 jss11 jss2 buttons_secondary-button__PVs90" tabindex="0" type="button" data-component-type="button"><span class="jss61 jss25 jss27 jss3">Duplicate Text</span></button><div class="buttons_buttons-divider__lKPZA"></div><a class="MuiTypography-root MuiLink-root MuiLink-underlineHover jss163 MuiButtonBase-root jss6 jss12 jss2 download-button_download-raw-button__hVolm jss167 MuiTypography-colorPrimary" role="button" id="down-button" download="hastebin-1703220255471.txt" data-component-type="button" tabindex="0" aria-disabled="false"><span class="jss61 jss25 jss27 jss3">Download RAW File</span></a><div class="copy-url-button_container__wq7oj"><div class="copy-url-button_notification-container__gZj6I"></div></div><button class="MuiButtonBase-root jss6 jss8 jss2 buttons_primary-button__YiX2K" tabindex="0" type="button" data-testid="copy-url-button" data-component-type="button"><span class="jss61 jss25 jss27 jss3">Copy Shareable URL</span></button></div></div></div></div></div></div><script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script id="__NEXT_DATA__" type="application/json">{"props":{"pageProps":{"isWhiteLabelVersion":true,"text":"We're sorry, but the contents of the bin could not be found, or it has been deleted.","binId":"xahifaboca","shouldRedirect":true,"code":"We're sorry, but the contents of the bin could not be found, or it has been deleted.","language":null},"__N_SSP":true},"page":"/share/[binId]","query":{"binId":"xahifaboca.csharp"},"buildId":"OSVs6B3U1pmTxEeGK2s8w","assetPrefix":"/developers/hastebin","runtimeConfig":{"NEXT_PUBLIC_PROJECT_URL_RT":"","NEXT_PUBLIC_BASE_API_URL_DOCS_RT":"","NEXT_PUBLIC_SHARE_BIN_DOMAIN_RT":"","NEXT_PUBLIC_DOCUMENTATION_URL_RT":""},"isFallback":false,"gssp":true,"scriptLoader":[]}</script><script>(function(){var js = "window['__CF$cv$params']={r:'8395b55e79bdf3c9',t:'MTcwMzIyMDI1NS42NzMwMDA='};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js',document.getElementsByTagName('head')[0].appendChild(_cpo);";var _0xh = document.createElement('iframe');_0xh.height = 1;_0xh.width = 1;_0xh.style.position = 'absolute';_0xh.style.top = 0;_0xh.style.left = 0;_0xh.style.border = 'none';_0xh.style.visibility = 'hidden';document.body.appendChild(_0xh);function handler() {var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;if (_0xi) {var _0xj = _0xi.createElement('script');_0xj.innerHTML = js;_0xi.getElementsByTagName('head')[0].appendChild(_0xj);}}if (document.readyState !== 'loading') {handler();} else if (window.addEventListener) {document.addEventListener('DOMContentLoaded', handler);} else {var prev = document.onreadystatechange || function () {};document.onreadystatechange = function (e) {prev(e);if (document.readyState !== 'loading') {document.onreadystatechange = prev;handler();}};}})();</script></body></html>