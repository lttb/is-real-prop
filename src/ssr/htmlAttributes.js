// thanks react-html-attributes for this list

export default {
  '*': new Set([
    'about',
    'acceptCharset',
    'accessKey',
    'allowFullScreen',
    'allowTransparency',
    'autoComplete',
    'autoFocus',
    'autoPlay',
    'capture',
    'cellPadding',
    'cellSpacing',
    'charSet',
    'classID',
    'className',
    'colSpan',
    'contentEditable',
    'contextMenu',
    'crossOrigin',
    'dangerouslySetInnerHTML',
    'datatype',
    'dateTime',
    'dir',
    'draggable',
    'encType',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'frameBorder',
    'hidden',
    'hrefLang',
    'htmlFor',
    'httpEquiv',
    'id',
    'inlist',
    'inputMode',
    'is',
    'itemID',
    'itemProp',
    'itemRef',
    'itemScope',
    'itemType',
    'keyParams',
    'keyType',
    'lang',
    'marginHeight',
    'marginWidth',
    'maxLength',
    'mediaGroup',
    'minLength',
    'noValidate',
    'prefix',
    'property',
    'radioGroup',
    'readOnly',
    'resource',
    'role',
    'rowSpan',
    'scoped',
    'seamless',
    'security',
    'spellCheck',
    'srcDoc',
    'srcLang',
    'srcSet',
    'style',
    'suppressContentEditableWarning',
    'tabIndex',
    'title',
    'typeof',
    'unselectable',
    'useMap',
    'vocab',
    'wmode',
  ]),
  a: new Set(['coords', 'download', 'href', 'name', 'rel', 'shape', 'target', 'type', 'referrerPolicy']),
  abbr: new Set(['title']),
  applet: new Set(['alt', 'height', 'name', 'width']),
  area: new Set(['alt', 'coords', 'download', 'href', 'rel', 'shape', 'target', 'type', 'referrerPolicy']),
  audio: new Set(['controls', 'loop', 'muted', 'preload', 'src']),
  base: new Set(['href', 'target']),
  basefont: new Set(['size']),
  bdo: new Set(['dir']),
  blockquote: new Set(['cite']),
  button: new Set(['disabled', 'form', 'name', 'type', 'value']),
  canvas: new Set(['height', 'width']),
  col: new Set(['span', 'width']),
  colgroup: new Set(['span', 'width']),
  data: new Set(['value']),
  del: new Set(['cite']),
  details: new Set(['open']),
  dfn: new Set(['title']),
  dialog: new Set(['open']),
  embed: new Set(['height', 'src', 'type', 'width']),
  fieldset: new Set(['disabled', 'form', 'name']),
  font: new Set(['size']),
  form: new Set(['accept', 'action', 'method', 'name', 'target']),
  frame: new Set(['name', 'scrolling', 'src']),
  frameset: new Set(['cols', 'rows']),
  head: new Set(['profile']),
  hr: new Set(['size', 'width']),
  html: new Set(['manifest']),
  iframe: new Set(['height', 'name', 'sandbox', 'scrolling', 'src', 'width', 'referrerPolicy']),
  img: new Set(['alt', 'height', 'name', 'sizes', 'src', 'width', 'referrerPolicy']),
  input: new Set([
    'accept',
    'alt',
    'autoCapitalize',
    'autoCorrect',
    'autoSave',
    'checked',
    'defaultChecked',
    'defaultValue',
    'disabled',
    'form',
    'height',
    'list',
    'max',
    'min',
    'multiple',
    'name',
    'onChange',
    'pattern',
    'placeholder',
    'required',
    'results',
    'size',
    'src',
    'step',
    'title',
    'type',
    'value',
    'width',
  ]),
  ins: new Set(['cite']),
  keygen: new Set(['challenge', 'disabled', 'form', 'name']),
  label: new Set(['form']),
  li: new Set(['type', 'value']),
  link: new Set([
    'color',
    'href',
    'integrity',
    'media',
    'nonce',
    'rel',
    'scope',
    'sizes',
    'target',
    'title',
    'type',
    'referrerPolicy'
  ]),
  map: new Set(['name']),
  menu: new Set(['label', 'type']),
  menuitem: new Set(['checked', 'default', 'disabled', 'icon', 'label', 'title', 'type']),
  meta: new Set(['content', 'name', 'referrerPolicy']),
  meter: new Set(['high', 'low', 'max', 'min', 'optimum', 'value']),
  object: new Set(['data', 'form', 'height', 'name', 'type', 'width']),
  ol: new Set(['reversed', 'start', 'type']),
  optgroup: new Set(['disabled', 'label']),
  option: new Set(['disabled', 'label', 'selected', 'value']),
  output: new Set(['form', 'name']),
  param: new Set(['name', 'type', 'value']),
  pre: new Set(['width']),
  progress: new Set(['max', 'value']),
  q: new Set(['cite']),
  script: new Set(['async', 'defer', 'integrity', 'nonce', 'src', 'type']),
  select: new Set([
    'defaultValue',
    'disabled',
    'form',
    'multiple',
    'name',
    'onChange',
    'required',
    'size',
    'value',
  ]),
  slot: new Set(['name']),
  source: new Set(['media', 'sizes', 'src', 'type']),
  style: new Set(['media', 'nonce', 'title', 'type']),
  table: new Set(['summary', 'width']),
  td: new Set(['headers', 'height', 'scope', 'width']),
  textarea: new Set([
    'autoCapitalize',
    'autoCorrect',
    'cols',
    'defaultValue',
    'disabled',
    'form',
    'name',
    'onChange',
    'placeholder',
    'required',
    'rows',
    'value',
    'wrap',
  ]),
  th: new Set(['headers', 'height', 'scope', 'width']),
  track: new Set(['default', 'kind', 'label', 'src']),
  ul: new Set(['type']),
  video: new Set(['controls', 'height', 'loop', 'muted', 'poster', 'preload', 'src', 'width']),
  svg: new Set([
    'accentHeight',
    'accumulate',
    'additive',
    'alignmentBaseline',
    'allowReorder',
    'alphabetic',
    'amplitude',
    'arabicForm',
    'ascent',
    'attributeName',
    'attributeType',
    'autoReverse',
    'azimuth',
    'baseFrequency',
    'baseProfile',
    'baselineShift',
    'bbox',
    'begin',
    'bias',
    'by',
    'calcMode',
    'capHeight',
    'clip',
    'clipPath',
    'clipPathUnits',
    'clipRule',
    'color',
    'colorInterpolation',
    'colorInterpolationFilters',
    'colorProfile',
    'colorRendering',
    'contentScriptType',
    'contentStyleType',
    'cursor',
    'cx',
    'cy',
    'd',
    'decelerate',
    'descent',
    'diffuseConstant',
    'direction',
    'display',
    'divisor',
    'dominantBaseline',
    'dur',
    'dx',
    'dy',
    'edgeMode',
    'elevation',
    'enableBackground',
    'end',
    'exponent',
    'externalResourcesRequired',
    'fill',
    'fillOpacity',
    'fillRule',
    'filter',
    'filterRes',
    'filterUnits',
    'floodColor',
    'floodOpacity',
    'focusable',
    'fontFamily',
    'fontSize',
    'fontSizeAdjust',
    'fontStretch',
    'fontStyle',
    'fontVariant',
    'fontWeight',
    'format',
    'from',
    'fx',
    'fy',
    'g1',
    'g2',
    'glyphName',
    'glyphOrientationHorizontal',
    'glyphOrientationVertical',
    'glyphRef',
    'gradientTransform',
    'gradientUnits',
    'hanging',
    'height',
    'horizAdvX',
    'horizOriginX',
    'ideographic',
    'imageRendering',
    'in',
    'in2',
    'intercept',
    'k',
    'k1',
    'k2',
    'k3',
    'k4',
    'kernelMatrix',
    'kernelUnitLength',
    'kerning',
    'keyPoints',
    'keySplines',
    'keyTimes',
    'lengthAdjust',
    'letterSpacing',
    'lightingColor',
    'limitingConeAngle',
    'local',
    'markerEnd',
    'markerHeight',
    'markerMid',
    'markerStart',
    'markerUnits',
    'markerWidth',
    'mask',
    'maskContentUnits',
    'maskUnits',
    'mathematical',
    'mode',
    'numOctaves',
    'offset',
    'opacity',
    'operator',
    'order',
    'orient',
    'orientation',
    'origin',
    'overflow',
    'overlinePosition',
    'overlineThickness',
    'paintOrder',
    'panose1',
    'pathLength',
    'patternContentUnits',
    'patternTransform',
    'patternUnits',
    'pointerEvents',
    'points',
    'pointsAtX',
    'pointsAtY',
    'pointsAtZ',
    'preserveAlpha',
    'preserveAspectRatio',
    'primitiveUnits',
    'r',
    'radius',
    'refX',
    'refY',
    'renderingIntent',
    'repeatCount',
    'repeatDur',
    'requiredExtensions',
    'requiredFeatures',
    'restart',
    'result',
    'rotate',
    'rx',
    'ry',
    'scale',
    'seed',
    'shapeRendering',
    'slope',
    'spacing',
    'specularConstant',
    'specularExponent',
    'speed',
    'spreadMethod',
    'startOffset',
    'stdDeviation',
    'stemh',
    'stemv',
    'stitchTiles',
    'stopColor',
    'stopOpacity',
    'strikethroughPosition',
    'strikethroughThickness',
    'string',
    'stroke',
    'strokeDasharray',
    'strokeDashoffset',
    'strokeLinecap',
    'strokeLinejoin',
    'strokeMiterlimit',
    'strokeOpacity',
    'strokeWidth',
    'surfaceScale',
    'systemLanguage',
    'tableValues',
    'targetX',
    'targetY',
    'textAnchor',
    'textDecoration',
    'textLength',
    'textRendering',
    'to',
    'transform',
    'u1',
    'u2',
    'underlinePosition',
    'underlineThickness',
    'unicode',
    'unicodeBidi',
    'unicodeRange',
    'unitsPerEm',
    'vAlphabetic',
    'vHanging',
    'vIdeographic',
    'vMathematical',
    'values',
    'vectorEffect',
    'version',
    'vertAdvY',
    'vertOriginX',
    'vertOriginY',
    'viewBox',
    'viewTarget',
    'visibility',
    'width',
    'widths',
    'wordSpacing',
    'writingMode',
    'x',
    'x1',
    'x2',
    'xChannelSelector',
    'xHeight',
    'xlinkActuate',
    'xlinkArcrole',
    'xlinkHref',
    'xlinkRole',
    'xlinkShow',
    'xlinkTitle',
    'xlinkType',
    'xmlBase',
    'xmlns',
    'xmlnsXlink',
    'xmlLang',
    'xmlSpace',
    'y',
    'y1',
    'y2',
    'yChannelSelector',
    'z',
    'zoomAndPan',
  ]),
}
