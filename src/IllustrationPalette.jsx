export function IllustrationPalette() {
  return <svg className="illustration-palette" width="0" height="0" aria-hidden="true" focusable="false">
    <defs>
      <filter id="verde-logo-green" colorInterpolationFilters="sRGB"><feFlood floodColor="#033625" /><feComposite in2="SourceAlpha" operator="in" /></filter>
      <filter id="verde-logo-cream" colorInterpolationFilters="sRGB"><feFlood floodColor="#E2DEC5" /><feComposite in2="SourceAlpha" operator="in" /></filter>
      <filter id="verde-illustration-palette" colorInterpolationFilters="sRGB">
        <feColorMatrix type="saturate" values="0" result="luminance" />
        <feComponentTransfer in="luminance" result="normalized">
          <feFuncR type="linear" slope="1.470588" intercept="-0.294118" />
          <feFuncG type="linear" slope="1.470588" intercept="-0.294118" />
          <feFuncB type="linear" slope="1.470588" intercept="-0.294118" />
        </feComponentTransfer>
        <feComponentTransfer in="normalized">
          <feFuncR type="table" tableValues="0.0117647 0.8862745" />
          <feFuncG type="table" tableValues="0.2117647 0.8705882" />
          <feFuncB type="table" tableValues="0.1450980 0.7725490" />
          <feFuncA type="identity" />
        </feComponentTransfer>
      </filter>
    </defs>
  </svg>;
}
