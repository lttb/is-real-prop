import 'react-dom'
import isReactProp from '../'

// thanks styled-components for these tests!

describe('isReactProp', () => {
  it('should allow all the reactProps', () => {
    expect(isReactProp('children')).toEqual(true)
    expect(isReactProp('dangerouslySetInnerHTML')).toEqual(true)
    expect(isReactProp('key')).toEqual(true)
    expect(isReactProp('ref')).toEqual(true)
    expect(isReactProp('autoFocus')).toEqual(true)
    expect(isReactProp('defaultValue')).toEqual(true)
    expect(isReactProp('valueLink')).toEqual(true)
    expect(isReactProp('defaultChecked')).toEqual(true)
    expect(isReactProp('checkedLink')).toEqual(true)
    expect(isReactProp('innerHTML')).toEqual(true)
    expect(isReactProp('suppressContentEditableWarning')).toEqual(true)
    expect(isReactProp('onFocusIn')).toEqual(true)
    expect(isReactProp('onFocusOut')).toEqual(true)
    expect(isReactProp('className')).toEqual(true)
  })
  it('should allow all the html props', () => {
    expect(isReactProp('accept')).toEqual(true)
    expect(isReactProp('acceptCharset')).toEqual(true)
    expect(isReactProp('accessKey')).toEqual(true)
    expect(isReactProp('action')).toEqual(true)
    expect(isReactProp('allowFullScreen')).toEqual(true)
    expect(isReactProp('allowTransparency')).toEqual(true)
    expect(isReactProp('alt')).toEqual(true)
    expect(isReactProp('async')).toEqual(true)
    expect(isReactProp('autoComplete')).toEqual(true)
    expect(isReactProp('autoPlay')).toEqual(true)
    expect(isReactProp('capture')).toEqual(true)
    expect(isReactProp('cellPadding')).toEqual(true)
    expect(isReactProp('cellSpacing')).toEqual(true)
    expect(isReactProp('charSet')).toEqual(true)
    expect(isReactProp('challenge')).toEqual(true)
    expect(isReactProp('checked')).toEqual(true)
    expect(isReactProp('cite')).toEqual(true)
    expect(isReactProp('classID')).toEqual(true)
    expect(isReactProp('className')).toEqual(true)
    expect(isReactProp('cols')).toEqual(true)
    expect(isReactProp('colSpan')).toEqual(true)
    expect(isReactProp('content')).toEqual(true)
    expect(isReactProp('contentEditable')).toEqual(true)
    expect(isReactProp('contextMenu')).toEqual(true)
    expect(isReactProp('controls')).toEqual(true)
    expect(isReactProp('coords')).toEqual(true)
    expect(isReactProp('crossOrigin')).toEqual(true)
    expect(isReactProp('data')).toEqual(true)
    expect(isReactProp('dateTime')).toEqual(true)
    expect(isReactProp('default')).toEqual(true)
    expect(isReactProp('defer')).toEqual(true)
    expect(isReactProp('dir')).toEqual(true)
    expect(isReactProp('disabled')).toEqual(true)
    expect(isReactProp('download')).toEqual(true)
    expect(isReactProp('draggable')).toEqual(true)
    expect(isReactProp('encType')).toEqual(true)
    expect(isReactProp('form')).toEqual(true)
    expect(isReactProp('formAction')).toEqual(true)
    expect(isReactProp('formEncType')).toEqual(true)
    expect(isReactProp('formMethod')).toEqual(true)
    expect(isReactProp('formNoValidate')).toEqual(true)
    expect(isReactProp('formTarget')).toEqual(true)
    expect(isReactProp('frameBorder')).toEqual(true)
    expect(isReactProp('headers')).toEqual(true)
    expect(isReactProp('height')).toEqual(true)
    expect(isReactProp('hidden')).toEqual(true)
    expect(isReactProp('high')).toEqual(true)
    expect(isReactProp('href')).toEqual(true)
    expect(isReactProp('hrefLang')).toEqual(true)
    expect(isReactProp('htmlFor')).toEqual(true)
    expect(isReactProp('httpEquiv')).toEqual(true)
    expect(isReactProp('icon')).toEqual(true)
    expect(isReactProp('id')).toEqual(true)
    expect(isReactProp('inputMode')).toEqual(true)
    expect(isReactProp('integrity')).toEqual(true)
    expect(isReactProp('is')).toEqual(true)
    expect(isReactProp('keyParams')).toEqual(true)
    expect(isReactProp('keyType')).toEqual(true)
    expect(isReactProp('kind')).toEqual(true)
    expect(isReactProp('label')).toEqual(true)
    expect(isReactProp('lang')).toEqual(true)
    expect(isReactProp('list')).toEqual(true)
    expect(isReactProp('loop')).toEqual(true)
    expect(isReactProp('low')).toEqual(true)
    expect(isReactProp('manifest')).toEqual(true)
    expect(isReactProp('marginHeight')).toEqual(true)
    expect(isReactProp('marginWidth')).toEqual(true)
    expect(isReactProp('max')).toEqual(true)
    expect(isReactProp('maxLength')).toEqual(true)
    expect(isReactProp('media')).toEqual(true)
    expect(isReactProp('mediaGroup')).toEqual(true)
    expect(isReactProp('method')).toEqual(true)
    expect(isReactProp('min')).toEqual(true)
    expect(isReactProp('minLength')).toEqual(true)
    expect(isReactProp('multiple')).toEqual(true)
    expect(isReactProp('muted')).toEqual(true)
    expect(isReactProp('name')).toEqual(true)
    expect(isReactProp('nonce')).toEqual(true)
    expect(isReactProp('noValidate')).toEqual(true)
    expect(isReactProp('open')).toEqual(true)
    expect(isReactProp('optimum')).toEqual(true)
    expect(isReactProp('pattern')).toEqual(true)
    expect(isReactProp('placeholder')).toEqual(true)
    expect(isReactProp('poster')).toEqual(true)
    expect(isReactProp('preload')).toEqual(true)
    expect(isReactProp('profile')).toEqual(true)
    expect(isReactProp('radioGroup')).toEqual(true)
    expect(isReactProp('readOnly')).toEqual(true)
    expect(isReactProp('referrerPolicy')).toEqual(true)
    expect(isReactProp('rel')).toEqual(true)
    expect(isReactProp('required')).toEqual(true)
    expect(isReactProp('reversed')).toEqual(true)
    expect(isReactProp('role')).toEqual(true)
    expect(isReactProp('rows')).toEqual(true)
    expect(isReactProp('rowSpan')).toEqual(true)
    expect(isReactProp('sandbox')).toEqual(true)
    expect(isReactProp('scope')).toEqual(true)
    expect(isReactProp('scoped')).toEqual(true)
    expect(isReactProp('scrolling')).toEqual(true)
    expect(isReactProp('seamless')).toEqual(true)
    expect(isReactProp('selected')).toEqual(true)
    expect(isReactProp('shape')).toEqual(true)
    expect(isReactProp('size')).toEqual(true)
    expect(isReactProp('sizes')).toEqual(true)
    expect(isReactProp('span')).toEqual(true)
    expect(isReactProp('spellCheck')).toEqual(true)
    expect(isReactProp('src')).toEqual(true)
    expect(isReactProp('srcDoc')).toEqual(true)
    expect(isReactProp('srcLang')).toEqual(true)
    expect(isReactProp('srcSet')).toEqual(true)
    expect(isReactProp('start')).toEqual(true)
    expect(isReactProp('step')).toEqual(true)
    expect(isReactProp('style')).toEqual(true)
    expect(isReactProp('summary')).toEqual(true)
    expect(isReactProp('tabIndex')).toEqual(true)
    expect(isReactProp('target')).toEqual(true)
    expect(isReactProp('title')).toEqual(true)
    expect(isReactProp('type')).toEqual(true)
    expect(isReactProp('useMap')).toEqual(true)
    expect(isReactProp('value')).toEqual(true)
    expect(isReactProp('width')).toEqual(true)
    expect(isReactProp('wmode')).toEqual(true)
    expect(isReactProp('wrap')).toEqual(true)
    expect(isReactProp('about')).toEqual(true)
    expect(isReactProp('datatype')).toEqual(true)
    expect(isReactProp('inlist')).toEqual(true)
    expect(isReactProp('prefix')).toEqual(true)
    expect(isReactProp('property')).toEqual(true)
    expect(isReactProp('resource')).toEqual(true)
    expect(isReactProp('typeof')).toEqual(true)
    expect(isReactProp('vocab')).toEqual(true)
    expect(isReactProp('autoCapitalize')).toEqual(true)
    expect(isReactProp('autoCorrect')).toEqual(true)
    expect(isReactProp('autoSave')).toEqual(true)
    expect(isReactProp('color')).toEqual(true)
    expect(isReactProp('itemProp')).toEqual(true)
    expect(isReactProp('itemScope')).toEqual(true)
    expect(isReactProp('itemType')).toEqual(true)
    expect(isReactProp('itemID')).toEqual(true)
    expect(isReactProp('itemRef')).toEqual(true)
    expect(isReactProp('results')).toEqual(true)
    expect(isReactProp('security')).toEqual(true)
    expect(isReactProp('unselectable')).toEqual(true)
  })
  it('should handle all the SVG props', () => {
    expect(isReactProp('accentHeight')).toEqual(true)
    expect(isReactProp('accumulate')).toEqual(true)
    expect(isReactProp('additive')).toEqual(true)
    expect(isReactProp('alignmentBaseline')).toEqual(true)
    expect(isReactProp('allowReorder')).toEqual(true)
    expect(isReactProp('alphabetic')).toEqual(true)
    expect(isReactProp('amplitude')).toEqual(true)
    expect(isReactProp('arabicForm')).toEqual(true)
    expect(isReactProp('ascent')).toEqual(true)
    expect(isReactProp('attributeName')).toEqual(true)
    expect(isReactProp('attributeType')).toEqual(true)
    expect(isReactProp('autoReverse')).toEqual(true)
    expect(isReactProp('azimuth')).toEqual(true)
    expect(isReactProp('baseFrequency')).toEqual(true)
    expect(isReactProp('baseProfile')).toEqual(true)
    expect(isReactProp('baselineShift')).toEqual(true)
    expect(isReactProp('bbox')).toEqual(true)
    expect(isReactProp('begin')).toEqual(true)
    expect(isReactProp('bias')).toEqual(true)
    expect(isReactProp('by')).toEqual(true)
    expect(isReactProp('calcMode')).toEqual(true)
    expect(isReactProp('capHeight')).toEqual(true)
    expect(isReactProp('clip')).toEqual(true)
    expect(isReactProp('clipPath')).toEqual(true)
    expect(isReactProp('clipRule')).toEqual(true)
    expect(isReactProp('clipPathUnits')).toEqual(true)
    expect(isReactProp('colorInterpolation')).toEqual(true)
    expect(isReactProp('colorInterpolationFilters')).toEqual(true)
    expect(isReactProp('colorProfile')).toEqual(true)
    expect(isReactProp('colorRendering')).toEqual(true)
    expect(isReactProp('contentScriptType')).toEqual(true)
    expect(isReactProp('contentStyleType')).toEqual(true)
    expect(isReactProp('cursor')).toEqual(true)
    expect(isReactProp('cx')).toEqual(true)
    expect(isReactProp('cy')).toEqual(true)
    expect(isReactProp('d')).toEqual(true)
    expect(isReactProp('decelerate')).toEqual(true)
    expect(isReactProp('descent')).toEqual(true)
    expect(isReactProp('diffuseConstant')).toEqual(true)
    expect(isReactProp('direction')).toEqual(true)
    expect(isReactProp('display')).toEqual(true)
    expect(isReactProp('divisor')).toEqual(true)
    expect(isReactProp('dominantBaseline')).toEqual(true)
    expect(isReactProp('dur')).toEqual(true)
    expect(isReactProp('dx')).toEqual(true)
    expect(isReactProp('dy')).toEqual(true)
    expect(isReactProp('edgeMode')).toEqual(true)
    expect(isReactProp('elevation')).toEqual(true)
    expect(isReactProp('enableBackground')).toEqual(true)
    expect(isReactProp('end')).toEqual(true)
    expect(isReactProp('exponent')).toEqual(true)
    expect(isReactProp('externalResourcesRequired')).toEqual(true)
    expect(isReactProp('fill')).toEqual(true)
    expect(isReactProp('fillOpacity')).toEqual(true)
    expect(isReactProp('fillRule')).toEqual(true)
    expect(isReactProp('filter')).toEqual(true)
    expect(isReactProp('filterRes')).toEqual(true)
    expect(isReactProp('filterUnits')).toEqual(true)
    expect(isReactProp('floodColor')).toEqual(true)
    expect(isReactProp('floodOpacity')).toEqual(true)
    expect(isReactProp('focusable')).toEqual(true)
    expect(isReactProp('fontFamily')).toEqual(true)
    expect(isReactProp('fontSize')).toEqual(true)
    expect(isReactProp('fontSizeAdjust')).toEqual(true)
    expect(isReactProp('fontStretch')).toEqual(true)
    expect(isReactProp('fontStyle')).toEqual(true)
    expect(isReactProp('fontVariant')).toEqual(true)
    expect(isReactProp('fontWeight')).toEqual(true)
    expect(isReactProp('format')).toEqual(true)
    expect(isReactProp('from')).toEqual(true)
    expect(isReactProp('fx')).toEqual(true)
    expect(isReactProp('fy')).toEqual(true)
    expect(isReactProp('g1')).toEqual(true)
    expect(isReactProp('g2')).toEqual(true)
    expect(isReactProp('glyphName')).toEqual(true)
    expect(isReactProp('glyphOrientationHorizontal')).toEqual(true)
    expect(isReactProp('glyphOrientationVertical')).toEqual(true)
    expect(isReactProp('glyphRef')).toEqual(true)
    expect(isReactProp('gradientTransform')).toEqual(true)
    expect(isReactProp('gradientUnits')).toEqual(true)
    expect(isReactProp('hanging')).toEqual(true)
    expect(isReactProp('horizAdvX')).toEqual(true)
    expect(isReactProp('horizOriginX')).toEqual(true)
    expect(isReactProp('ideographic')).toEqual(true)
    expect(isReactProp('imageRendering')).toEqual(true)
    expect(isReactProp('in')).toEqual(true)
    expect(isReactProp('in2')).toEqual(true)
    expect(isReactProp('intercept')).toEqual(true)
    expect(isReactProp('k')).toEqual(true)
    expect(isReactProp('k1')).toEqual(true)
    expect(isReactProp('k2')).toEqual(true)
    expect(isReactProp('k3')).toEqual(true)
    expect(isReactProp('k4')).toEqual(true)
    expect(isReactProp('kernelMatrix')).toEqual(true)
    expect(isReactProp('kernelUnitLength')).toEqual(true)
    expect(isReactProp('kerning')).toEqual(true)
    expect(isReactProp('keyPoints')).toEqual(true)
    expect(isReactProp('keySplines')).toEqual(true)
    expect(isReactProp('keyTimes')).toEqual(true)
    expect(isReactProp('lengthAdjust')).toEqual(true)
    expect(isReactProp('letterSpacing')).toEqual(true)
    expect(isReactProp('lightingColor')).toEqual(true)
    expect(isReactProp('limitingConeAngle')).toEqual(true)
    expect(isReactProp('local')).toEqual(true)
    expect(isReactProp('markerEnd')).toEqual(true)
    expect(isReactProp('markerMid')).toEqual(true)
    expect(isReactProp('markerStart')).toEqual(true)
    expect(isReactProp('markerHeight')).toEqual(true)
    expect(isReactProp('markerUnits')).toEqual(true)
    expect(isReactProp('markerWidth')).toEqual(true)
    expect(isReactProp('mask')).toEqual(true)
    expect(isReactProp('maskContentUnits')).toEqual(true)
    expect(isReactProp('maskUnits')).toEqual(true)
    expect(isReactProp('mathematical')).toEqual(true)
    expect(isReactProp('mode')).toEqual(true)
    expect(isReactProp('numOctaves')).toEqual(true)
    expect(isReactProp('offset')).toEqual(true)
    expect(isReactProp('opacity')).toEqual(true)
    expect(isReactProp('operator')).toEqual(true)
    expect(isReactProp('order')).toEqual(true)
    expect(isReactProp('orient')).toEqual(true)
    expect(isReactProp('orientation')).toEqual(true)
    expect(isReactProp('origin')).toEqual(true)
    expect(isReactProp('overflow')).toEqual(true)
    expect(isReactProp('overlinePosition')).toEqual(true)
    expect(isReactProp('overlineThickness')).toEqual(true)
    expect(isReactProp('paintOrder')).toEqual(true)
    expect(isReactProp('panose1')).toEqual(true)
    expect(isReactProp('pathLength')).toEqual(true)
    expect(isReactProp('patternContentUnits')).toEqual(true)
    expect(isReactProp('patternTransform')).toEqual(true)
    expect(isReactProp('patternUnits')).toEqual(true)
    expect(isReactProp('pointerEvents')).toEqual(true)
    expect(isReactProp('points')).toEqual(true)
    expect(isReactProp('pointsAtX')).toEqual(true)
    expect(isReactProp('pointsAtY')).toEqual(true)
    expect(isReactProp('pointsAtZ')).toEqual(true)
    expect(isReactProp('preserveAlpha')).toEqual(true)
    expect(isReactProp('preserveAspectRatio')).toEqual(true)
    expect(isReactProp('primitiveUnits')).toEqual(true)
    expect(isReactProp('r')).toEqual(true)
    expect(isReactProp('radius')).toEqual(true)
    expect(isReactProp('refX')).toEqual(true)
    expect(isReactProp('refY')).toEqual(true)
    expect(isReactProp('renderingIntent')).toEqual(true)
    expect(isReactProp('repeatCount')).toEqual(true)
    expect(isReactProp('repeatDur')).toEqual(true)
    expect(isReactProp('requiredExtensions')).toEqual(true)
    expect(isReactProp('requiredFeatures')).toEqual(true)
    expect(isReactProp('restart')).toEqual(true)
    expect(isReactProp('result')).toEqual(true)
    expect(isReactProp('rotate')).toEqual(true)
    expect(isReactProp('rx')).toEqual(true)
    expect(isReactProp('ry')).toEqual(true)
    expect(isReactProp('scale')).toEqual(true)
    expect(isReactProp('seed')).toEqual(true)
    expect(isReactProp('shapeRendering')).toEqual(true)
    expect(isReactProp('slope')).toEqual(true)
    expect(isReactProp('spacing')).toEqual(true)
    expect(isReactProp('specularConstant')).toEqual(true)
    expect(isReactProp('specularExponent')).toEqual(true)
    expect(isReactProp('speed')).toEqual(true)
    expect(isReactProp('spreadMethod')).toEqual(true)
    expect(isReactProp('startOffset')).toEqual(true)
    expect(isReactProp('stdDeviation')).toEqual(true)
    expect(isReactProp('stemh')).toEqual(true)
    expect(isReactProp('stemv')).toEqual(true)
    expect(isReactProp('stitchTiles')).toEqual(true)
    expect(isReactProp('stopColor')).toEqual(true)
    expect(isReactProp('stopOpacity')).toEqual(true)
    expect(isReactProp('strikethroughPosition')).toEqual(true)
    expect(isReactProp('strikethroughThickness')).toEqual(true)
    expect(isReactProp('string')).toEqual(true)
    expect(isReactProp('stroke')).toEqual(true)
    expect(isReactProp('strokeDasharray')).toEqual(true)
    expect(isReactProp('strokeDashoffset')).toEqual(true)
    expect(isReactProp('strokeLinecap')).toEqual(true)
    expect(isReactProp('strokeLinejoin')).toEqual(true)
    expect(isReactProp('strokeMiterlimit')).toEqual(true)
    expect(isReactProp('strokeOpacity')).toEqual(true)
    expect(isReactProp('strokeWidth')).toEqual(true)
    expect(isReactProp('surfaceScale')).toEqual(true)
    expect(isReactProp('systemLanguage')).toEqual(true)
    expect(isReactProp('tableValues')).toEqual(true)
    expect(isReactProp('targetX')).toEqual(true)
    expect(isReactProp('targetY')).toEqual(true)
    expect(isReactProp('textAnchor')).toEqual(true)
    expect(isReactProp('textDecoration')).toEqual(true)
    expect(isReactProp('textRendering')).toEqual(true)
    expect(isReactProp('textLength')).toEqual(true)
    expect(isReactProp('to')).toEqual(true)
    expect(isReactProp('transform')).toEqual(true)
    expect(isReactProp('u1')).toEqual(true)
    expect(isReactProp('u2')).toEqual(true)
    expect(isReactProp('underlinePosition')).toEqual(true)
    expect(isReactProp('underlineThickness')).toEqual(true)
    expect(isReactProp('unicode')).toEqual(true)
    expect(isReactProp('unicodeBidi')).toEqual(true)
    expect(isReactProp('unicodeRange')).toEqual(true)
    expect(isReactProp('unitsPerEm')).toEqual(true)
    expect(isReactProp('vAlphabetic')).toEqual(true)
    expect(isReactProp('vHanging')).toEqual(true)
    expect(isReactProp('vIdeographic')).toEqual(true)
    expect(isReactProp('vMathematical')).toEqual(true)
    expect(isReactProp('values')).toEqual(true)
    expect(isReactProp('vectorEffect')).toEqual(true)
    expect(isReactProp('version')).toEqual(true)
    expect(isReactProp('vertAdvY')).toEqual(true)
    expect(isReactProp('vertOriginX')).toEqual(true)
    expect(isReactProp('vertOriginY')).toEqual(true)
    expect(isReactProp('viewBox')).toEqual(true)
    expect(isReactProp('viewTarget')).toEqual(true)
    expect(isReactProp('visibility')).toEqual(true)
    expect(isReactProp('widths')).toEqual(true)
    expect(isReactProp('wordSpacing')).toEqual(true)
    expect(isReactProp('writingMode')).toEqual(true)
    expect(isReactProp('x')).toEqual(true)
    expect(isReactProp('xHeight')).toEqual(true)
    expect(isReactProp('x1')).toEqual(true)
    expect(isReactProp('x2')).toEqual(true)
    expect(isReactProp('xChannelSelector')).toEqual(true)
    expect(isReactProp('xlinkActuate')).toEqual(true)
    expect(isReactProp('xlinkArcrole')).toEqual(true)
    expect(isReactProp('xlinkHref')).toEqual(true)
    expect(isReactProp('xlinkRole')).toEqual(true)
    expect(isReactProp('xlinkShow')).toEqual(true)
    expect(isReactProp('xlinkTitle')).toEqual(true)
    expect(isReactProp('xlinkType')).toEqual(true)
    expect(isReactProp('xmlBase')).toEqual(true)
    expect(isReactProp('xmlns')).toEqual(true)
    expect(isReactProp('xmlnsXlink')).toEqual(true)
    expect(isReactProp('xmlLang')).toEqual(true)
    expect(isReactProp('xmlSpace')).toEqual(true)
    expect(isReactProp('y')).toEqual(true)
    expect(isReactProp('y1')).toEqual(true)
    expect(isReactProp('y2')).toEqual(true)
    expect(isReactProp('yChannelSelector')).toEqual(true)
    expect(isReactProp('z')).toEqual(true)
    expect(isReactProp('zoomAndPan')).toEqual(true)
  })
  it('should handle aria and data attributes', () => {
    expect(isReactProp('data-xyz')).toEqual(true)
    expect(isReactProp('data-omg-this-works')).toEqual(true)
    expect(isReactProp('aria-label')).toEqual(true)
    expect(isReactProp('aria-labelled-by')).toEqual(true)
  })
  it('should handle uppercase aria and data attributes', () => {
    expect(isReactProp('DATA-XYZ')).toEqual(true)
    expect(isReactProp('DATA-OMG-THIS-WORKS')).toEqual(true)
    expect(isReactProp('ARIA-LABEL')).toEqual(true)
    expect(isReactProp('ARIA-LABELLED-BY')).toEqual(true)
  })
  it('should allow all the event handlers', () => {
    expect(isReactProp('onCopy')).toEqual(true)
    expect(isReactProp('onCopyCapture')).toEqual(true)
    expect(isReactProp('onCut')).toEqual(true)
    expect(isReactProp('onCutCapture')).toEqual(true)
    expect(isReactProp('onPaste')).toEqual(true)
    expect(isReactProp('onPasteCapture')).toEqual(true)
    expect(isReactProp('onCompositionEnd')).toEqual(true)
    expect(isReactProp('onCompositionEndCapture')).toEqual(true)
    expect(isReactProp('onCompositionStart')).toEqual(true)
    expect(isReactProp('onCompositionStartCapture')).toEqual(true)
    expect(isReactProp('onCompositionUpdate')).toEqual(true)
    expect(isReactProp('onCompositionUpdateCapture')).toEqual(true)
    expect(isReactProp('onKeyDown')).toEqual(true)
    expect(isReactProp('onKeyDownCapture')).toEqual(true)
    expect(isReactProp('onKeyPress')).toEqual(true)
    expect(isReactProp('onKeyPressCapture')).toEqual(true)
    expect(isReactProp('onKeyUp')).toEqual(true)
    expect(isReactProp('onKeyUpCapture')).toEqual(true)
    expect(isReactProp('onFocus')).toEqual(true)
    expect(isReactProp('onFocusCapture')).toEqual(true)
    expect(isReactProp('onBlur')).toEqual(true)
    expect(isReactProp('onBlurCapture')).toEqual(true)
    expect(isReactProp('onChange')).toEqual(true)
    expect(isReactProp('onChangeCapture')).toEqual(true)
    expect(isReactProp('onInput')).toEqual(true)
    expect(isReactProp('onInputCapture')).toEqual(true)
    expect(isReactProp('onSubmit')).toEqual(true)
    expect(isReactProp('onSubmitCapture')).toEqual(true)
    expect(isReactProp('onClick')).toEqual(true)
    expect(isReactProp('onClickCapture')).toEqual(true)
    expect(isReactProp('onContextMenu')).toEqual(true)
    expect(isReactProp('onContextMenuCapture')).toEqual(true)
    expect(isReactProp('onDoubleClick')).toEqual(true)
    expect(isReactProp('onDoubleClickCapture')).toEqual(true)
    expect(isReactProp('onDrag')).toEqual(true)
    expect(isReactProp('onDragCapture')).toEqual(true)
    expect(isReactProp('onDragEnd')).toEqual(true)
    expect(isReactProp('onDragEndCapture')).toEqual(true)
    expect(isReactProp('onDragEnter')).toEqual(true)
    expect(isReactProp('onDragEnterCapture')).toEqual(true)
    expect(isReactProp('onDragExit')).toEqual(true)
    expect(isReactProp('onDragExitCapture')).toEqual(true)
    expect(isReactProp('onDragLeave')).toEqual(true)
    expect(isReactProp('onDragLeaveCapture')).toEqual(true)
    expect(isReactProp('onDragOver')).toEqual(true)
    expect(isReactProp('onDragOverCapture')).toEqual(true)
    expect(isReactProp('onDragStart')).toEqual(true)
    expect(isReactProp('onDragStartCapture')).toEqual(true)
    expect(isReactProp('onDrop')).toEqual(true)
    expect(isReactProp('onDropCapture')).toEqual(true)
    expect(isReactProp('onMouseDown')).toEqual(true)
    expect(isReactProp('onMouseDownCapture')).toEqual(true)
    expect(isReactProp('onMouseEnter')).toEqual(true)
    expect(isReactProp('onMouseEnterCapture')).toEqual(true)
    expect(isReactProp('onMouseLeave')).toEqual(true)
    expect(isReactProp('onMouseLeaveCapture')).toEqual(true)
    expect(isReactProp('onMouseMove')).toEqual(true)
    expect(isReactProp('onMouseMoveCapture')).toEqual(true)
    expect(isReactProp('onMouseOut')).toEqual(true)
    expect(isReactProp('onMouseOutCapture')).toEqual(true)
    expect(isReactProp('onMouseOver')).toEqual(true)
    expect(isReactProp('onMouseOverCapture')).toEqual(true)
    expect(isReactProp('onMouseUp')).toEqual(true)
    expect(isReactProp('onMouseUpCapture')).toEqual(true)
    expect(isReactProp('onSelect')).toEqual(true)
    expect(isReactProp('onSelectCapture')).toEqual(true)
    expect(isReactProp('onTouchCancel')).toEqual(true)
    expect(isReactProp('onTouchCancelCapture')).toEqual(true)
    expect(isReactProp('onTouchEnd')).toEqual(true)
    expect(isReactProp('onTouchEndCapture')).toEqual(true)
    expect(isReactProp('onTouchMove')).toEqual(true)
    expect(isReactProp('onTouchMoveCapture')).toEqual(true)
    expect(isReactProp('onTouchStart')).toEqual(true)
    expect(isReactProp('onTouchStartCapture')).toEqual(true)
    expect(isReactProp('onScroll')).toEqual(true)
    expect(isReactProp('onScrollCapture')).toEqual(true)
    expect(isReactProp('onWheel')).toEqual(true)
    expect(isReactProp('onWheelCapture')).toEqual(true)
    expect(isReactProp('onAbort')).toEqual(true)
    expect(isReactProp('onAbortCapture')).toEqual(true)
    expect(isReactProp('onCanPlay')).toEqual(true)
    expect(isReactProp('onCanPlayCapture')).toEqual(true)
    expect(isReactProp('onCanPlayThrough')).toEqual(true)
    expect(isReactProp('onCanPlayThroughCapture')).toEqual(true)
    expect(isReactProp('onDurationChange')).toEqual(true)
    expect(isReactProp('onDurationChangeCapture')).toEqual(true)
    expect(isReactProp('onEmptied')).toEqual(true)
    expect(isReactProp('onEmptiedCapture')).toEqual(true)
    expect(isReactProp('onEncrypted')).toEqual(true)
    expect(isReactProp('onEncryptedCapture')).toEqual(true)
    expect(isReactProp('onEnded')).toEqual(true)
    expect(isReactProp('onEndedCapture')).toEqual(true)
    expect(isReactProp('onError')).toEqual(true)
    expect(isReactProp('onErrorCapture')).toEqual(true)
    expect(isReactProp('onLoadedData')).toEqual(true)
    expect(isReactProp('onLoadedDataCapture')).toEqual(true)
    expect(isReactProp('onLoadedMetadata')).toEqual(true)
    expect(isReactProp('onLoadedMetadataCapture')).toEqual(true)
    expect(isReactProp('onLoadStart')).toEqual(true)
    expect(isReactProp('onLoadStartCapture')).toEqual(true)
    expect(isReactProp('onPause')).toEqual(true)
    expect(isReactProp('onPauseCapture')).toEqual(true)
    expect(isReactProp('onPlay')).toEqual(true)
    expect(isReactProp('onPlayCapture')).toEqual(true)
    expect(isReactProp('onPlaying')).toEqual(true)
    expect(isReactProp('onPlayingCapture')).toEqual(true)
    expect(isReactProp('onProgress')).toEqual(true)
    expect(isReactProp('onProgressCapture')).toEqual(true)
    expect(isReactProp('onRateChange')).toEqual(true)
    expect(isReactProp('onRateChangeCapture')).toEqual(true)
    expect(isReactProp('onSeeked')).toEqual(true)
    expect(isReactProp('onSeekedCapture')).toEqual(true)
    expect(isReactProp('onSeeking')).toEqual(true)
    expect(isReactProp('onSeekingCapture')).toEqual(true)
    expect(isReactProp('onStalled')).toEqual(true)
    expect(isReactProp('onStalledCapture')).toEqual(true)
    expect(isReactProp('onSuspend')).toEqual(true)
    expect(isReactProp('onSuspendCapture')).toEqual(true)
    expect(isReactProp('onTimeUpdate')).toEqual(true)
    expect(isReactProp('onTimeUpdateCapture')).toEqual(true)
    expect(isReactProp('onVolumeChange')).toEqual(true)
    expect(isReactProp('onVolumeChangeCapture')).toEqual(true)
    expect(isReactProp('onWaiting')).toEqual(true)
    expect(isReactProp('onWaitingCapture')).toEqual(true)
    expect(isReactProp('onLoad')).toEqual(true)
    expect(isReactProp('onLoadCapture')).toEqual(true)
    expect(isReactProp('onAnimationStart')).toEqual(true)
    expect(isReactProp('onAnimationStartCapture')).toEqual(true)
    expect(isReactProp('onAnimationEnd')).toEqual(true)
    expect(isReactProp('onAnimationEndCapture')).toEqual(true)
    expect(isReactProp('onAnimationIteration')).toEqual(true)
    expect(isReactProp('onAnimationIterationCapture')).toEqual(true)
    expect(isReactProp('onTransitionEnd')).toEqual(true)
    expect(isReactProp('onTransitionEndCapture')).toEqual(true)
  })
})
